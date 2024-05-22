import React, { useState, useEffect } from "react";
import axios from "axios";
import HousePlan from "../components/houseplan";
import AddDialog from "../components/add-dialog";

const Home = () => {
  const [housePlans, setHousePlans] = useState([]);

  //useEffect “delays” a piece of code from running until that render is reflected on the screen.
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        // "https://portiaportia.github.io/json/house-plans.json"
        //"http://localhost:3001/api/houses/"
        "https://housing-backend-oubs.onrender.com/api/houses/"
      );
      setHousePlans(response.data);
    })();
  }, []);

  return (
    <div>
      <AddDialog />

      {housePlans.map((housePlan) => (
        <HousePlan
          key={housePlan.name}
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
