import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./popup.css";
import Home from "../components/Home/Home";
import Support from "../components/Support/Support";
import Navbar from "../components/Navbar/Navbar";
import Help from "../components/Help/Help";
import { db } from "../firebase.js";
import Upi from "../components/Payment/Upi";

const Popup: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [email, setEmail] = useState("");
  chrome.identity.getProfileUserInfo(
    //@ts-ignore
    { accountStatus: "ANY" },
    function (userInfo) {
      setEmail(userInfo.email);
    }
  );
  useEffect(() => {
    // Function to fetch user email and save to Firestore
    const fetchAndSaveEmail = async () => {
      try {
        // Fetch user email using Chrome identity API
        if (email && email.length > 4) {
          // Check if email already exists in Firestore
          const querySnapshot = await db.users
            .where("email", "==", email)
            .get();
          if (querySnapshot.empty) {
            // Email doesn't exist, so add it to Firestore
            await db.users.add({
              email: email,
              createdAt: db.getCurrentTimestamp(),
            });
          }
        }
      } catch (error) {
        console.error("Error fetching or saving email:", error);
      }
    };

    // Call the function to fetch and save email
    fetchAndSaveEmail();
  }, [email]); // Run once on component mount

  return (
    <Router>
      <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/help" element={<Help />} />
        <Route path="/upi" element={<Upi />} />
      </Routes>
    </Router>
  );
};

export default Popup;
