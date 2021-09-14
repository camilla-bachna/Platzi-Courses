import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/static/user-icon.png";
import "../assets/styles/layout/_header.scss";

const Header = () => (
  <header className="header">
    <h1 className="header__title">Paraíso del pádel</h1>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-list--item">
          <img
            src={userIcon}
            alt="user icon"
            className="header__nav-list--icon"
          />
          <span className="header__nav-list--greeting">Hola username</span>
        </li>
        <li className="header__nav-list--item">
          <Link to="/">Cerrar sesión</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
