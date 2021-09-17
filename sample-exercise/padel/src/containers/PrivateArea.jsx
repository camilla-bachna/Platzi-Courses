import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setResults } from "../actions";
import Swal from "sweetalert2";

const PrivateArea = ({ player, courts, setResults, history }) => {
  const randomIndex = Math.floor(Math.random() * player.length);
  const randomPlayer = player[randomIndex];

  const courtsArray = Object.keys(courts);
  const randomIndexCourt = Math.floor(Math.random() * courtsArray.length);
  const randomKey = courtsArray[randomIndexCourt];
  const randomCourtsValue = courts[randomKey];

  const [option, setOption] = useState("select");
  const handleSelect = ({ target }) => {
    setOption(target.value);
    setResults(option);
  };

  let translation;
  option === "won" ? (translation = "Ganado") : (translation = "Perdio");

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push("/");

    if (option === "select") {
      return Swal.fire({
        icon: "error",
        title: "Por favor, inténtelo de nuevo",
        timer: 1500,
      });
    } else {
      return Swal.fire({
        icon: "success",
        title: "El resultado se ha guardado con exito",
        text: `Has elegido: ${translation}`,
        timer: 1500,
      });
    }
  };
  return (
    <main>
      <p>{`Por favor, continua en la pista ${randomCourtsValue}. Jugarás con ${randomPlayer.name}.`}</p>
      <form onSubmit={handleSubmit}>
        <select
          name="result"
          id="result"
          value={option}
          className="profile__select"
          onChange={handleSelect}
        >
          <option value="select">Elija</option>
          <option value="won">Ganado</option>
          <option value="lost">Perdido</option>
        </select>
        <button type="submit">Continuar</button>
      </form>
      <Link to="/">Regresa</Link>
    </main>
  );
};

const mapsStateToProps = (state) => {
  return { player: state.player, courts: state.courts };
};

const mapsDispatchToProps = { setResults };

export default connect(mapsStateToProps, mapsDispatchToProps)(PrivateArea);
