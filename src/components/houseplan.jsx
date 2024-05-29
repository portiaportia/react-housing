import "../styles/houseplan.css";

const HousePlan = (housePlan) => {
  //const imageSrc = `https://portiaportia.github.io/json/images/house-plans/${housePlan.main_image}`;
  const imageSrc = `http://localhost:3001/${housePlan.main_image}`;
  //localhost:3001/
  //const imageSrc = `https://housing-backend-oubs.onrender.com/${housePlan.main_image}`;
  return (
    <div>
      <section className="house-plan columns">
        <section className="feature-image">
          <img src={imageSrc} alt={housePlan.name} />
        </section>
        <section className="info">
          <h3>{housePlan.name}</h3>

          <p>Size: {housePlan.size}</p>
          <p>Bedrooms: {housePlan.bedrooms}</p>
          <p>Bathrooms: {housePlan.bathrooms}</p>
        </section>
      </section>
    </div>
  );
};

export default HousePlan;
