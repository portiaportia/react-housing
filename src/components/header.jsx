import "../styles/header.css";
import keys from "../images/keys.jpg";

const Header = () => {
  return (
    <header id="main-header">
      <h1>Vacation Properties</h1>
      <img id="keys" src={keys} alt="Keys" />
    </header>
  );
};

export default Header;
