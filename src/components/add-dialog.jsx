import "../styles/dialog.css";
import React, { useEffect } from "react";

const AddDialog = () => {
  useEffect(() => {
    document.getElementById("dialog-close").onclick = () => {
      document.getElementById("dialog").style.display = "none";
    };

    document.getElementById("add-house").onclick = () => {
      document.getElementById("dialog").style.display = "block";
    };
  });

  return (
    <div id="dialog-section">
      <button id="add-house">+</button>
      <div id="dialog" className="w3-modal">
        <div className="w3-modal-content">
          <div className="w3-container">
            <span id="dialog-close" className="w3-button w3-display-topright">
              &times;
            </span>
            <h3>Hello</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDialog;
