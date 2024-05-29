import "../styles/dialog.css";
import React, { useState } from "react";

const AddDialog = ({ addHousePlan }) => {
  const showDialog = () => {
    document.getElementById("dialog").style.display = "block";
  };

  const hideDialog = () => {
    document.getElementById("dialog").style.display = "none";
    setInputs({});
  };

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const response = await fetch("http://localhost:3001/api/houses/", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      setResult("House Successfully Added");
      event.target.reset(); //reset your form fields
      addHousePlan(await response.json());
    } else {
      console.log("Error adding house", response);
      setResult(response.message);
    }

    hideDialog();
  };

  return (
    <div id="dialog-section">
      <button id="add-house" onClick={showDialog}>
        +
      </button>
      <div id="dialog" className="w3-modal">
        <div className="w3-modal-content">
          <div className="w3-container">
            <span
              id="dialog-close"
              className="w3-button w3-display-topright"
              onClick={hideDialog}
            >
              &times;
            </span>
            <form id="add-property-form" onSubmit={onSubmit}>
              <p>
                <label htmlFor="name ">Property Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="size">Size:</label>
                <input
                  type="number"
                  id="size"
                  name="size"
                  value={inputs.size || ""}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="bedrooms">Bedrooms:</label>
                <input
                  type="number"
                  id="bedrooms"
                  name="bedrooms"
                  value={inputs.bedrooms || ""}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="bathrooms">Bathrooms:</label>
                <input
                  type="number"
                  id="bathrooms"
                  name="bathrooms"
                  value={inputs.bathrooms || ""}
                  onChange={handleChange}
                  required
                />
              </p>

              <section className="columns">
                <p id="img-prev-section">
                  <img
                    id="img-prev"
                    src={
                      inputs.img != null ? URL.createObjectURL(inputs.img) : ""
                    }
                    alt=""
                  />
                </p>
                <p id="img-upload">
                  <label htmlFor="img">Upload Image:</label>
                  <input
                    type="file"
                    id="img"
                    name="img"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </p>
              </section>
              <p>
                <button type="submit">Submit</button>
              </p>
              <p>{result}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDialog;
