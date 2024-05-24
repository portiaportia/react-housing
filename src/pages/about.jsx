import { useState } from "react";
import "../styles/slideshow.css";

const About = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../images/slideshow", false, /\.(png|jpe?g|svg)$/)
  );

  const [featuredImageIndex, setFeaturedImageIndex] = useState(0);

  const slideForward = () => {
    setFeaturedImageIndex(
      featuredImageIndex === images.length - 1 ? 0 : featuredImageIndex + 1
    );
  };

  const slideBackward = () => {
    setFeaturedImageIndex(
      featuredImageIndex === 0 ? images.length - 1 : featuredImageIndex - 1
    );
  };

  return (
    <>
      <h1>About Us</h1>
      <div id="slideshow">
        <img
          key={images[featuredImageIndex]}
          src={images[featuredImageIndex]}
          alt={images[featuredImageIndex]}
        />

        <p id="forward-arrow" onClick={slideForward}>
          &gt;
        </p>
        <p id="backward-arrow" onClick={slideBackward}>
          &lt;
        </p>
      </div>
    </>
  );
};

export default About;
