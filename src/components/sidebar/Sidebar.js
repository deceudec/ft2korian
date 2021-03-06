import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link">
          <img className="icon" src="../../img/iconeaccueil.png" alt="icone d'accueil"></img>
          <Link to="/">Accueil</Link>
        </div>
        <div className="sidebar__link">
          <img className="icon" src="../../img/iconedashboard.png" alt="icone de dashboard"></img>
          <Link to="dashboard">Dashboard</Link>
        </div>
        <div className="sidebar__link">
          <img className="icon" src="../../img/iconecompte.png" alt="icone de compte"></img>
          <a href="#">Mon compte</a>
        </div>
        <div className="sidebar__link">
          <img className="icon" src="../../img/iconeparamètres.png" alt="icone de paramètres"></img>
          <a href="#">Paramètres</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
