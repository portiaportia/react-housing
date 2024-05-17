import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/nav.css";

const Layout = () => {
  return (
    <>
      <Header />
      <nav id="main-nav">
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
    </>
  );
};

export default Layout;
