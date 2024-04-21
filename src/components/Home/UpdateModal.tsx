import React, { useState } from "react";
import { Link } from "react-router-dom";

interface UpdateProps {
  keyValue: string;
  handleCloseAlert: () => void;
  handleUpdate: (newKey: string, newValue: string) => void;
}

const UpdateModal: React.FC<UpdateProps> = ({
  keyValue,
  handleCloseAlert,
  handleUpdate,
}) => {
  const [key, setKey] = useState(keyValue[0]);
  const [value, setValue] = useState(keyValue[1]);

  return (
    <div>
      <div id="customAlert" className="modal" style={{ display: "block" }}>
        <div className="modal-content flex flex-col gap-4 text-black">
          <input
            type="text"
            placeholder="KEY"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            autoComplete="off"
            className="min-w-full"
          />
          <input
            type="text"
            placeholder="VALUE"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="off"
            className="min-w-full"
          />
        </div>
        <div className="buttons">
          <button id="closeAlert" onClick={handleCloseAlert}>
            Close
          </button>
          <button id="updateBtn" onClick={() => handleUpdate(key, value)}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
