import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveTab, activeTab }) => {
  const [isClicked, setIsClicked] = useState("home");

  const handleClick = (val) => {
    setIsClicked(val);
  };

  return (
    <div className="flex justify-between headerrow text-2lg">
      <div className="flex items-center">
        <img src="display_icon.png" alt="logo" className="logo" />
      </div>
      <div className="w-full">
        <ul className="flex justify-center gap-6">
          <li>
            <Link to={"/"}>
              <p
                className={`py-2 px-3 rounded cursor-pointer ${
                  isClicked == "home" ? "bg-blue-700" : ""
                }`}
                onClick={() => handleClick("home")}
              >
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/support"}>
              <p
                className={`py-2 px-3 rounded cursor-pointer ${
                  isClicked == "support" ? "bg-blue-700" : ""
                }`}
                onClick={() => handleClick("support")}
              >
                Support
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/help"}>
              <p
                className={`py-2 px-3 rounded cursor-pointer ${
                  isClicked == "help" ? "bg-blue-700" : ""
                }`}
                onClick={() => handleClick("help")}
              >
                Help
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
