import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginRequest } from "../actions";
import Swal from "sweetalert2";

const Login = (props) => {
  const [form, setValues] = useState({ pin: "", name: "", gender: "" });

  const handleInput = ({ target }) => {
    setValues({ ...form, [target.name]: target.value });
  };

  const nameRegex = /^[a-zA-Z0-9]{1,20}$/;
  const pinRegex = /^[0-9]{1,500}$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    props.loginRequest(form);
    props.history.push("/privateArea");

    if (!nameRegex.test(form.name)) {
      return Swal.fire({
        icon: "error",
        title: "Name inválido",
        text:
          "Debes ingresar un nombre con:<br><br>" +
          "- caracteres y/o<br>" +
          "- números<br>",
      });
    }

    if (!pinRegex.test(form.pin)) {
      return Swal.fire({
        icon: "error",
        title: "Contraseña inválida",
        html: "Debes ingresar una pin con:<br><br>" + "- solo números<br>",
      });
    }

    return Swal.fire({
      icon: "success",
      title: "Inicio de sesión exitoso",
      timer: 1500,
    });
  };

  return (
    <main className="main">
      <h2 className="main__title">Únete</h2>
      <form className="main__form" onSubmit={handleSubmit}>
        <input
          name="pin"
          className="main__form--input"
          type="text"
          placeholder="Pozo pin"
          onChange={handleInput}
          required
        />
        <input
          name="name"
          className="input"
          type="text"
          placeholder="Nombre"
          onChange={handleInput}
          required
        />
        <input
          name="gender"
          className="main__form--input"
          type="text"
          placeholder="Género"
          onChange={handleInput}
        />
        <button type="submit" className="main__button">
          Únete
        </button>
      </form>
      <Link to="/">Volver </Link>
    </main>
  );
};

const mapsDispatchToProps = { loginRequest };

export default connect(null, mapsDispatchToProps)(Login);
