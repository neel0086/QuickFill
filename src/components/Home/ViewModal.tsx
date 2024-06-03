import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ViewProps {
  keyValue: Array<string>;
  handleCloseAlert: () => void;
}

const ViewModal: React.FC<ViewProps> = ({ keyValue, handleCloseAlert }) => {
  return (
    <div>
      <div id="customAlert" className="modal" style={{ display: "block" }}>
        <div className="modal-content">
          <p id="alertMessage">
            <b>KEY:</b> {keyValue[0]}
          </p>
          <p id="alertMessage overflow-auto	">
            <b>VALUE:</b> {keyValue[1]}
          </p>
        </div>
        <div className="buttons">
          <button id="closeAlert" onClick={handleCloseAlert}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
