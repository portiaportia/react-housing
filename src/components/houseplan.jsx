import "../styles/houseplan.css";
import EditDialog from "../components/add-dialog";
import React, { useState, useEffect } from "react";

const HousePlan = (housePlan) => {
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    console.log("hi");
    setShowDialog(true);
    console.log(showDialog);
  };

  //const imageSrc = `https://portiaportia.github.io/json/images/house-plans/${housePlan.main_image}`;
  //const imageSrc = `http://localhost:3001/${housePlan.main_image}`;
  //http://localhost:3001/
  const imageSrc = `https://housing-backend-oubs.onrender.com/${housePlan.main_image}`;
  return (
    <div>
      {showDialog && <EditDialog />}
      <section className="house-plan columns">
        <section className="feature-image">
          <img src={imageSrc} alt={housePlan.name} />
        </section>
        <section className="info">
          <h3 onClick={toggleDialog}>{housePlan.name}</h3>
          <p>Size: {housePlan.size}</p>
          <p>Bedrooms: {housePlan.bedrooms}</p>
          <p>Bathrooms: {housePlan.bathrooms}</p>
          <p>
            {housePlan.features.map((feature) => {
              return feature + ", ";
            })}
          </p>
        </section>
      </section>
    </div>
  );
};

export default HousePlan;
