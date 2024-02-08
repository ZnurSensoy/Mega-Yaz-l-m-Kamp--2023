import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left col-sm-4 mt-4">
        <div className="logo">
          <NavLink to="/" className="nav-a ">
            MEGA | GELİŞİM AKADEMİSİ
          </NavLink>
        </div>
      </div>
      <div className="navbar-center col-sm-4 mt-5">
        <ul className="nav-menu">
          <NavLink to="/" className="nav-a ">
            ANASAYFA
          </NavLink>
          <NavLink to="/mega" className="nav-a ">
            HAKKIMIZDA
          </NavLink>
          <NavLink to="/projects" className="nav-a ">
            PROJELER
          </NavLink>

          <NavLink to="/contact" className="nav-contact">
            İLETİŞİM
          </NavLink>
        </ul>
      </div>
      <div className="navbar-right col-sm-4 mt-5">
        <ul>
          <li>
            {" "}
            <a
              className="icons"
              href="https://www.instagram.com/MeramGelisim/?ysclid=lr6l456sd276073458"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            {" "}
            <a className="icons" href="https://www.facebook.com/MeramGelisim/">
              <i className="bi bi-facebook"></i>{" "}
            </a>
          </li>
          <li>
            {" "}
            <a
              className="icons"
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FMeramGelisim"
            >
              <i className="bi bi-twitter-x"></i>{" "}
            </a>
          </li>
          <li>
            {" "}
            <a
              className="icons"
              href="https://www.youtube.com/channel/UCTzwzDbnQjupoqdcLO7NIKA"
            >
              <i className="bi bi-youtube"></i>{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;