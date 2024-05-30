import "../styles/houseplan.css";
import React, { useState } from "react";
import EditDialog from "./edit-dialog";

const HousePlan = (props) => {
  const [showEDialog, setShowEDialog] = useState(false);
  const [showDDialog, setShowDDialog] = useState(false);
  const [housePlan, setHousePlan] = useState(props);

  const imageSrc = `https://portiaportia.github.io/json/images/house-plans/${housePlan.main_image}`;
  //const imageSrc = `http://localhost:3001/${housePlan.main_image}`;
  //localhost:3001/
  //const imageSrc = `https://housing-backend-oubs.onrender.com/${housePlan.main_image}`;

  const showEditDialog = () => {
    setShowEDialog(true);
  };

  const hideEDialog = () => {
    setShowEDialog(false);
  };

  const editHousePlan = (housePlan) => {
    setHousePlan(housePlan);
  };

  const showDeleteDialog = () => {
    setShowDDialog(true);
  }

  const hideDDialog = () => {
    setShowDDialog(false);
  };

  return (
    <div>
      {showEDialog ? (
        <EditDialog
          hideEDialog={hideEDialog}
          editHousePlan={editHousePlan}
          _id={housePlan._id}
          name={housePlan.name}
          size={housePlan.size}
          main_image={housePlan.main_image}
          bedrooms={housePlan.bedrooms}
          bathrooms={housePlan.bathrooms}
          features={housePlan.features}
        />
      ) : (
        ""
      )}
      <section className="house-plan columns">
        <section className="feature-image">
          <img src={imageSrc} alt={housePlan.name} />
        </section>
        <section className="info">
          <header class="columns">
            <h3>{housePlan.name}</h3>
            <section id="change-buttons">
              <a href="#" onClick={showEditDialog}>&#9998;</a>
              <a href="#" onClick={showDeleteDialog}>&#x2715;</a>
            </section>
          </header>
          

          <p>Size: {housePlan.size}</p>
          <p>Bedrooms: {housePlan.bedrooms}</p>
          <p>Bathrooms: {housePlan.bathrooms}</p>
      </section>
    </section>
    </div>
  );
};

export default HousePlan;
