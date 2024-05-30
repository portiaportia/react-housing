import "../styles/dialog.css";
import React, { useState } from "react";

const DeleteDialog = (props) => {
    const [result, setResult] = useState("");
    
  const onDelete = async (event) => {
/*
    const response = await fetch(
      `http://localhost:3001/api/houses/${props._id}`,
      {
        method: "DELETE"
      }
    );

    if (response.status === 200) {
      setResult("House Successfully deleted");
      event.target.reset(); //reset your form fields

      props.deleteHousePlan(await response.json());
    } else {
      console.log("Error deleting house", response);
      setResult(response.message);
    }

    props.hideDDialog();
    */
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.hideDDialog}
          >
            &times;
          </span>
          <div>
            <h1>Hello Portia</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
