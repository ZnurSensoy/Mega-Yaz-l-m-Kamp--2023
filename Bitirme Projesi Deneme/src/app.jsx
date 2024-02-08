import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import MegaPage from "./components/Pages/MegaPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import ContactPage from "./components/Pages/ContactPage";
import ProjectPages from "./components/Pages/ProjectPages";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mega" element={<MegaPage />} />
        <Route path="/projects" element={<ProjectPages />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;