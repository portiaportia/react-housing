import "../styles/dialog.css";
import React, { useState } from "react";

const DeleteDialog = (props) => {
  const [result, setResult] = useState("");

  const deleteHousePlan = async (event) => {
    const response = await fetch(
      `http://localhost:3002/api/houses/${props._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("House Plan Successfully deleted");
      props.hideHousePlan();
    } else {
      console.log("Error deleting house", response);
      setResult(response.message);
    }

    props.closeDialog();
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick={deleteHousePlan}>Yes</button>
              <button onClick={props.closeDialog}>No</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
