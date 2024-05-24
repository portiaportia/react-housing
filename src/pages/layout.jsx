import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/nav.css";
import "../styles/styles.css";

const Layout = () => {
  return (
    <div id="content">
      <Header />
      <nav id="main-nav">
        <div id="toggle">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
