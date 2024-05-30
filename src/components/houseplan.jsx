import "../styles/houseplan.css";
import React, { useCallback, useState } from "react";
import EditDialog from "./edit-dialog";

const HousePlan = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [housePlan, setHousePlan] = useState(props);

  //const imageSrc = `https://portiaportia.github.io/json/images/house-plans/${housePlan.main_image}`;
  const imageSrc = `http://localhost:3001/${housePlan.main_image}`;
  //localhost:3001/
  //const imageSrc = `https://housing-backend-oubs.onrender.com/${housePlan.main_image}`;

  const showEditDialog = () => {
    setShowDialog(true);
  };

  const hideDialog = () => {
    setShowDialog(false);
  };

  const editHousePlan = (housePlan) => {
    console.log("In edit");
    console.log(housePlan);
    setHousePlan(housePlan);
    console.log(housePlan.name);
  };

  return (
    <div>
      {showDialog ? (
        <EditDialog
          hideDialog={hideDialog}
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
          <h3>
            <a href="#" onClick={showEditDialog}>
              {housePlan.name}
            </a>
          </h3>

          <p>Size: {housePlan.size}</p>
          <p>Bedrooms: {housePlan.bedrooms}</p>
          <p>Bathrooms: {housePlan.bathrooms}</p>
        </section>
      </section>
    </div>
  );
};

export default HousePlan;
