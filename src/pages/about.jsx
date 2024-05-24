import { useState } from "react";
import "../styles/slideshow.css";

const About = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../images/slideshow", false, /\.(png|jpe?g|svg)$/)
  );

  const [index, setIndex] = useState(0);

  const slideForward = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  const slideBackward = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  return (
    <>
      <h1>About Us</h1>
      <div id="slideshow">
        <img src={images[index]} alt={images[index]} />
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
