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

  const handleExportData = () => {
    chrome.storage.local.get("myData", (result) => {
      const data = result.myData;
      if (data) {
        const dataStr = JSON.stringify(data);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "myData.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    });
  };

  const handleImportData = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const importedData = JSON.parse(event.target.result as string);
      chrome.storage.local.set({ myData: importedData });
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex justify-between headerrow text-2lg">
      <div className="flex items-center">
        <img src="images/display_icon.png" alt="logo" className="logo" />
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
          <li>
            <p
              className={`py-2 px-3 rounded cursor-pointer ${
                isClicked == "help" ? "bg-blue-700" : ""
              }`}
              onClick={handleExportData}
            >
              Export
            </p>
          </li>
          <li>
            <label
              htmlFor="importFile"
              className="py-2 px-3 rounded cursor-pointer bg-blue-700 text-white"
            >
              Import
              <input
                id="importFile"
                type="file"
                accept=".json"
                style={{ display: "none" }}
                onChange={handleImportData}
              />
            </label>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
