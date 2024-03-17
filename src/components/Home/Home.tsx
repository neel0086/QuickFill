import React, { useState, useEffect } from "react";
import { SelectImage } from "../CustomIcon/CustomIcon";

const Home: React.FC = () => {
  const [data, setData] = useState<{ [key: string]: string }>({});
  const [inpKey, setInpKey] = useState("");
  const [inpVal, setInpVal] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    loadTableData();
  }, []);

  const loadTableData = () => {
    chrome.storage.local.get("myData", (result) => {
      const storedData = result.myData;
      if (storedData) {
        setData(storedData);
      }
    });
  };

  const handleAddBtnClick = () => {
    if (inpKey.trim().length === 0 || inpVal.trim().length === 0) {
      setAlertMessage("Please enter something in both fields");
      return;
    }

    const keyExists = Object.keys(data).some(
      (key) => key.toLowerCase() === inpKey.toLowerCase()
    );

    if (keyExists) {
      setAlertMessage(
        "Key already exists. Please enter a different key or update the existing key"
      );
      return;
    }

    const newData = { ...data, [inpKey.toLowerCase()]: inpVal };
    setData(newData);
    chrome.storage.local.set({ myData: newData }, () => {
      console.log("Data stored.");
    });
    setInpKey("");
    setInpVal("");
    setAlertMessage("");
  };

  const handleUpdateBtnClick = () => {
    const newData = { ...data, [inpKey.toLowerCase()]: inpVal };
    setData(newData);
    chrome.storage.local.set({ myData: newData }, () => {
      console.log("Data stored.");
    });
    setInpKey("");
    setInpVal("");
    setAlertMessage("");
    setAlertMessage("");
  };

  const handleCloseAlert = () => {
    setAlertMessage("");
  };

  return (
    <div>
      {alertMessage && (
        <div id="customAlert" className="modal" style={{ display: "block" }}>
          <div className="modal-content">
            <p id="alertMessage">{alertMessage}</p>
          </div>
          <div className="buttons">
            <button id="closeAlert" onClick={handleCloseAlert}>
              Close
            </button>
            <button id="updateBtn" onClick={handleUpdateBtnClick}>
              Update
            </button>
          </div>
        </div>
      )}

      <div className="inputrow">
        <input
          type="text"
          id="inp_key"
          placeholder="KEY"
          value={inpKey}
          onChange={(e) => setInpKey(e.target.value)}
          autoComplete="off"
        />
        <input
          type="text"
          id="inp_val"
          placeholder="VALUE"
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
          autoComplete="off"
        />
        <button className="addBtn" onClick={handleAddBtnClick}>
          Submit
        </button>
      </div>
      <div className="tablistcont">
        <p className="">Hint: Add more and more words for acurate results</p>
        <table id="tablist">
          <thead>
            <tr className="firstLine">
              <th className="header_key">
                KEY{" "}
                <span style={{ fontSize: "11px", fontWeight: "100" }}>
                  (might be name of form fields etc)
                </span>
              </th>
              <th className="header_val">
                VALUE{" "}
                <span style={{ fontSize: "11px", fontWeight: "100" }}>
                  (might be value correponding to that field)
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="tbody">
            {Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                <td className="table_key flex items-center gap-4">
                  <span>
                    {SelectImage(key) ? (
                      <img src={SelectImage(key)} alt="" className="w-6" />
                    ) : (
                      <img src="default.png" alt="" className="w-6" />
                    )}
                  </span>
                  {key}
                </td>
                <td className="table_val">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
