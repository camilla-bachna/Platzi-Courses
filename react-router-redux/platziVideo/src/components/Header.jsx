import React from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { logoutRequest } from "../actions";
import "../assets/styles/components/Header.scss";
import logoPlatziVideo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import gravatar from "../utils/gravatar";
import PropTypes from "prop-types";

const Header = ({ user }) => {
  /* we can use .length with an array, but here we have an object => like this we can check how many elements that object has
  in initialState.js we have  user: {}, */
  const hasUser = Object.keys(user).length > 0;
  /* This way I reset the status and there is no longer a user
  makes use of our action: payload here is an empty object */

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass =
    useLocation().pathname === "/register" ||
    useLocation().pathname === "/login"
      ? "greenHeader"
      : "";

  return (
    <header className={`header ${headerClass}`}>
      {/* the logo will always lead to the root of the project */}
      <Link to="/" rel="canonical">
        <img className="header__img" src={logoPlatziVideo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {/* if there is a user show avatar else show default icon */}
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {/* if there is a user show account and the name of user, else dont show anything */}
          {hasUser ? (
            <>
              <li>
                {/*  a triggers a full page refresh */}
                <a href="/">{`Bienvenido ${user.name}`}</a>
              </li>
              <li>
                <a href="#logout" onClick={handleLogout}>
                  Cerrar Sesión
                </a>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}

          <li>
            <HashLink to="#footer">Terminos de uso y ayuda</HashLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
};

/* is in charge to map our properties of the state */
const mapStateToProps = (state) => {
  return { user: state.user };
};

/* which takes care of all the actions that we have to trigger or that we are going to send to our document */
const mapDispatchToProps = { logoutRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
