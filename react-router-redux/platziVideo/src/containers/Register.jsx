import React, { useState } from "react";
import { Link } from "react-router-dom";
/* 1. import module to connect component to store */
import { connect } from "react-redux";
/* 2. import actions to be executed in the store through this component */
import { registerRequest } from "../actions";
import "../assets/styles/components/Register.scss";
import Swal from "sweetalert2";

// 5. The component executes actions against the store, thus activating its props.
const Register = (props) => {
  /* form: in charge of saving the values that we are assigning to it,
  the form property represents the whole form, so I pass it an object with the initial value of each of its fields
  setValues: in charge of bringing each one of the values that we pass to our input */
  const [form, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  // I set the new state of the component according to the current values of each input, but keeping the previous ones (destructuring)
  const handleInput = (event) => {
    setValues({ ...form, [event.target.name]: event.target.value });
  };

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{6,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(form);

    // 6. trigger the action register the user in the store
    props.registerRequest(form);
    //redirect route
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
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleInput}
          />
          <input
            className="input"
            type="text"
            placeholder="Correo"
            name="email"
            onChange={handleInput}
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleInput}
          />
          <button className="button" type="submit">
            Registrarme
          </button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

// 4. Establish what actions this component will carry out in the store
const mapDispatchToProps = { registerRequest };

// 3. connect this component to store
export default connect(null, mapDispatchToProps)(Register);
