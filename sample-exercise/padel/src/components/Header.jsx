import React from "react";
import { connect } from "react-redux";
import { logoutRequest } from "../actions";
import userIcon from "../assets/static/user-icon.png";
import "../assets/styles/layout/_header.scss";

const Header = ({ user, logoutRequest }) => {
  const isLoggedIn = Object.keys(user).length > 0;
  const handleLogout = () => {
    logoutRequest({});
  };
  return (
    <header className="header">
      <h1 className="header__title">Paraíso del pádel</h1>
      {isLoggedIn ? (
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list--item">
              <img
                src={userIcon}
                alt="user icon"
                className="header__nav-list--icon"
              />
              <span className="header__nav-list--greeting">
                Hola {user.name}
              </span>
            </li>
            <li className="header__nav-list--item">
              <a href="/" onClick={handleLogout}>
                Cerrar sesión
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <div></div>
      )}
    </header>
  );
};

const mapStateTpProps = (state) => {
  return { user: state.user };
};

const mapsDispatchToProps = { logoutRequest };

export default connect(mapStateTpProps, mapsDispatchToProps)(Header);
