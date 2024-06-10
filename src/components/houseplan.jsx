import "../styles/houseplan.css";
import React, { useState } from "react";
import EditDialog from "./edit-dialog";
import DeleteDialog from "./delete-dialog";

const HousePlan = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showHousePlan, setShowHousePlan] = useState(true);
  const [housePlan, setHousePlan] = useState(props);

  //const imageSrc = `https://portiaportia.github.io/json/images/house-plans/${housePlan.main_image}`;
  const imageSrc = `http://localhost:3002/${housePlan.img}`;
  //localhost:3001/
  //const imageSrc = `https://housing-backend-oubs.onrender.com/${housePlan.main_image}`;

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const editHousePlan = (housePlan) => {
    setHousePlan(housePlan);
  };

  const hideHousePlan = (housePlan) => {
    setShowHousePlan(false);
  };

  return (
    <>
      {showHousePlan ? (
        <div>
          {showEditDialog ? (
            <EditDialog
              closeDialog={closeEditDialog}
              editHousePlan={editHousePlan}
              _id={housePlan._id}
              name={housePlan.name}
              size={housePlan.size}
              img={housePlan.img}
              bedrooms={housePlan.bedrooms}
              bathrooms={housePlan.bathrooms}
              features={housePlan.features}
            />
          ) : (
            ""
          )}

          {showDeleteDialog ? (
            <DeleteDialog
              closeDialog={closeDeleteDialog}
              hideHousePlan={hideHousePlan}
              _id={housePlan._id}
              name={housePlan.name}
            />
          ) : (
            ""
          )}
          <section className="house-plan columns">
            <section className="feature-image">
              <img src={imageSrc} alt={housePlan.name} />
            </section>
            <section className="info">
              <header className="columns">
                <h3>{housePlan.name}</h3>
                <section id="change-buttons">
                  <a href="#" onClick={openEditDialog}>
                    &#9998;
                  </a>
                  <a href="#" onClick={openDeleteDialog}>
                    &#x2715;
                  </a>
                </section>
              </header>

              <p>Size: {housePlan.size}</p>
              <p>Bedrooms: {housePlan.bedrooms}</p>
              <p>Bathrooms: {housePlan.bathrooms}</p>
            </section>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HousePlan;
