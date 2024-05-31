import React, { useState, useEffect } from "react";
import axios from "axios";
import HousePlan from "../components/houseplan";
import AddDialog from "../components/add-dialog";
import "../styles/home.css";

const Home = () => {
  const [housePlans, setHousePlans] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  //useEffect “delays” a piece of code from running until that render is reflected on the screen.
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        // "https://portiaportia.github.io/json/house-plans.json"
        "http://localhost:3002/api/houses/"
        //"https://housing-backend-oubs.onrender.com/api/houses/"
      );
      setHousePlans(response.data);
    })();
  }, []);

  const addHousePlan = (housePlan) => {
    setHousePlans((housePlans) => [...housePlans, housePlan]);
  };

  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  return (
    <div id="home">
      <button id="add-house" onClick={openAddDialog}>
        +
      </button>
      {showAddDialog ? (
        <AddDialog addHousePlan={addHousePlan} closeDialog={closeAddDialog} />
      ) : (
        ""
      )}
      {housePlans.map((housePlan) => (
        <HousePlan
          key={housePlan.name}
          _id={housePlan._id}
          name={housePlan.name}
          size={housePlan.size}
          main_image={housePlan.main_image}
          bedrooms={housePlan.bedrooms}
          bathrooms={housePlan.bathrooms}
          features={housePlan.features}
        />
      ))}
    </div>
  );
};

export default Home;
