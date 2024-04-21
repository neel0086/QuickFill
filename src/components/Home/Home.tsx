import React, { useState, useEffect } from "react";
import { SelectImage, SelectSVG } from "../CustomIcon/CustomIcon";
import AlertModal from "./AlertModal";
import UpdateModal from "./UpdateModal";
import ViewModal from "./ViewModal";

const Home: React.FC = () => {
  const [data, setData] = useState<{ [key: string]: string }>({});
  const [inpKey, setInpKey] = useState("");
  const [inpVal, setInpVal] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [selectedKey, setSelectedKey] = useState("");
  const [view, setView] = useState(null);
  const [updateView, setUpdateView] = useState(null);

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

  const adjustBracketSpacing = () => {
    console.log(inpKey);

    if (inpKey.indexOf("(") !== -1 && inpKey.indexOf("(") !== 0) {
      setInpKey(inpKey.replace("(", " ("));
    }

    // Add space after closing parenthesis if not already there
    if (
      inpKey.lastIndexOf(")") !== -1 &&
      inpKey.lastIndexOf(")") !== inpKey.length - 1
    ) {
      setInpKey(inpKey.replace(")", ") "));
    }
    console.log(inpKey);
    setInpKey(inpKey);
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
    adjustBracketSpacing;
    const newData = { ...data, [inpKey]: inpVal };
    setData(newData);
    chrome.storage.local.set({ myData: newData }, () => {
      console.log("Data stored.");
    });
    setInpKey("");
    setInpVal("");
    setAlertMessage("");
  };

  const handleUpdateBtnClick = () => {
    adjustBracketSpacing;
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
    setView(null);
    setUpdateView(null);
  };

  const handleDeleteClick = (keyToDelete: any) => {
    const newData = { ...data };
    delete newData[keyToDelete];
    setData(newData);
    chrome.storage.local.set({ myData: newData }, () => {
      console.log("Key-value pair deleted.");
    });
  };

  const handleUpdate = (newKey: string, newValue: string) => {
    const newData = { ...data };
    delete newData[selectedKey];
    newData[newKey] = newValue;
    setData(newData);
    chrome.storage.local.set({ myData: newData }, () => {
      console.log("Key-value pair updated.");
    });
    setUpdateView(null);
  };

  return (
    <div>
      {alertMessage && (
        <AlertModal
          alertMessage={alertMessage}
          handleCloseAlert={handleCloseAlert}
          handleUpdateBtnClick={handleUpdateBtnClick}
        />
      )}

      {updateView && (
        <UpdateModal
          keyValue={updateView}
          handleCloseAlert={handleCloseAlert}
          handleUpdate={handleUpdate}
        />
      )}

      {view && (
        <ViewModal keyValue={view} handleCloseAlert={handleCloseAlert} />
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
              <th className="header_val" style={{ width: "15%" }}></th>
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
                <td className="table_val flex gap-2">
                  <img
                    src={SelectSVG("view")}
                    alt="Action"
                    className="w-6 cursor-pointer"
                    onClick={() => setView([key, value])}
                  />
                  <img
                    src={SelectSVG("update")}
                    alt="Action"
                    className="w-6 cursor-pointer"
                    onClick={() => {
                      setSelectedKey(key);
                      setUpdateView([key, value]);
                    }}
                  />

                  <img
                    src={SelectSVG("delete")}
                    alt="Action"
                    className="w-6 cursor-pointer"
                    onClick={() => handleDeleteClick(key)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
