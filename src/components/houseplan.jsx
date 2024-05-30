import "../styles/houseplan.css";
import React, { useState } from "react";
import EditDialog from "./edit-dialog";

const HousePlan = (housePlan) => {
  const [showDialog, setShowDialog] = useState(false);

  const imageSrc = `https://portiaportia.github.io/json/images/house-plans/${housePlan.main_image}`;
  //const imageSrc = `http://localhost:3001/${housePlan.main_image}`;
  //localhost:3001/
  //const imageSrc = `https://housing-backend-oubs.onrender.com/${housePlan.main_image}`;
  
  const showEditDialog = () => {
    setShowDialog(true);
  }

  const hideDialog = () => {
    console.log("hide dialog");
    setShowDialog(false);
  }

  const editHousePlan = () => {
    console.log("hi");
  }
  
  return (
    <div>
      {showDialog ? <EditDialog  hideDialog={hideDialog} 
                                //editHousePlan={editHousePlan}
                                name={housePlan.name}
                                size={housePlan.size}
                                main_image={housePlan.main_image}
                                bedrooms={housePlan.bedrooms}
                                bathrooms={housePlan.bathrooms}
                                features={housePlan.features}/> : ""}
      <section className="house-plan columns">
        <section className="feature-image">
          <img src={imageSrc} alt={housePlan.name} />
        </section>
        <section className="info">
          <h3><a href="#" onClick={showEditDialog}>{housePlan.name}</a></h3>

          <p>Size: {housePlan.size}</p>
          <p>Bedrooms: {housePlan.bedrooms}</p>
          <p>Bathrooms: {housePlan.bathrooms}</p>
        </section>
      </section>
    </div>
  );
};

export default HousePlan;
