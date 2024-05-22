import "../styles/dialog.css";
import React, { useEffect } from "react";

const EditDialog = () => {
  alert("here");
  useEffect(() => {
    document.getElementById("dialog-close").onclick = () => {
      document.getElementById("dialog").style.display = "none";
    };

    console.log("here");
    document.getElementById("edit-dialog").style.display = "block";
  });

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span id="dialog-close" className="w3-button w3-display-topright">
            &times;
          </span>
          <h3>Edit</h3>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;
