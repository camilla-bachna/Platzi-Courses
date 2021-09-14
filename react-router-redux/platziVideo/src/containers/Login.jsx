import React, { useState } from "react";
import { connect } from "react-redux";
import { loginRequest } from "../actions";
import { Link } from "react-router-dom";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import "../assets/styles/components/Login.scss";
import Swal from "sweetalert2";

const Login = (props) => {
  const [form, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  /* const handleInput = ({target}) => {
    setValues({
      ...form,
      [target.name]: target.value,
    });
  }; */

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{6,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(form);
    props.loginRequest(form);
    /* so that we can move the user to Home if login was successful */
    props.history.push("/");

    if (!emailRegex.test(form.email)) {
      return Swal.fire({
        icon: "error",
        title: "Email inválido",
        text: "Debes ingresar un email válido",
      });
    }

    if (!passwordRegex.test(form.password)) {
      return Swal.fire({
        icon: "error",
        title: "Contraseña inválida",
        html:
          "Debes ingresar una contraseña con:<br><br>" +
          "- 6 caracteres<br>" +
          "- Una minúsclia<br>" +
          "- Una mayúsclia<br>" +
          "- Un número<br>" +
          "- Un caracter especial<br>",
      });
    }

    return Swal.fire({
      icon: "success",
      title: "Inicio de sesión exitoso",
      timer: 1500,
    });
  };

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button" type="submit">
            Iniciar sesión
          </button>
          <div className="login__container--remember-me">
            <label htmlFor="cbox1">
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="Google icon" /> Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt="Twitter icon" /> Inicia sesión con
            Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
        </p>
      </section>
    </section>
  );
};
export default connect(null, mapDispatchToProps)(Login);
