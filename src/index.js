import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoPage from "./pages/nopage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
