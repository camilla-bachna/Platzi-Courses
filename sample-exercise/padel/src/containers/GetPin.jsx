import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCourts, setPin } from "../actions";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const GetPin = (props) => {
  const [form, setValues] = useState({ court1: "", court2: "" });
  const [pin, setPin] = useState(0);

  const handlePin = () => setPin(uuidv4());
  console.log(setPin);
  props.setPin(pin);

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

  const pinMessage = pin !== 0;

  return (
    <main className="main">
      <button type="button" className="main__button" onClick={handlePin}>
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
          required
        />
        <button type="submit">Añade pistas</button>
      </form>
      {pinMessage ? (
        <>
          <p>El pin es: {pin}</p>
          <p>Por favor comparte con los otros jugadores</p>
        </>
      ) : (
        <p>Por favor, pulse el botón "Nuevo pozo" para obtener el pin</p>
      )}
      <Link to="/">Volver </Link>
    </main>
  );
};

const mapsDispatchToProps = { setCourts, setPin };

export default connect(null, mapsDispatchToProps)(GetPin);
