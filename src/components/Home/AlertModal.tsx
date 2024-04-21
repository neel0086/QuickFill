import React, { useState } from "react";
import { Link } from "react-router-dom";

interface AlertProps {
  alertMessage: string;
  handleCloseAlert: () => void;
  handleUpdateBtnClick: () => void;
}

const AlertModal: React.FC<AlertProps> = ({
  alertMessage,
  handleCloseAlert,
  handleUpdateBtnClick,
}) => {
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
    </div>
  );
};

export default AlertModal;
