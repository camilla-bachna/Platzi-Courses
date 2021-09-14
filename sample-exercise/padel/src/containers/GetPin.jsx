import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCourts } from "../actions";
import Swal from "sweetalert2";

const GetPin = (props) => {
  const [form, setValues] = useState({ court1: "", court2: "" });

  const handleInput = ({ target }) =>
    setValues({ ...form, [target.name]: target.value });

  const handleSubmit = (event) => {
    event.preventDefault();

    props.setCourts(form);

    return Swal.fire({
      icon: "success",
      title: "Las pistas se han guardado con exito",
      timer: 1500,
    });
  };

  return (
    <main className="main">
      <button type="button" className="main__button">
        Nuevo pozo
      </button>
      <form className="main__form" onSubmit={handleSubmit}>
        <input
          name="court1"
          className="main__form--input"
          type="text"
          placeholder="Número de pista"
          onChange={handleInput}
          required
        />
        <input
          name="court2"
          className="main__form--input"
          type="text"
          placeholder="Número de pista"
          onChange={handleInput}
        />
        <button type="submit">Añade pistas</button>
      </form>
      <p>El pin es:</p>
      <Link to="/">Volver </Link>
    </main>
  );
};

const mapsDispatchToProps = { setCourts };

export default connect(null, mapsDispatchToProps)(GetPin);
