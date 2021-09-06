import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../assets/styles/components/Header.scss";
import logoPlatziVideo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = () => (
  <header className="header">
    {/* the logo will always lead to the root of the project */}
    <Link to="/" rel="canonical">
      <img className="header__img" src={logoPlatziVideo} alt="Platzi Video" />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        <li>
          <HashLink to="#footer">Terminos de uso y ayuda</HashLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
