import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";

const PrivateArea = ({ player, courts }) => {
  const randomIndex = Math.floor(Math.random() * player.length);
  const randomPlayer = player[randomIndex];

  const courtsArray = Object.keys(courts);
  const randomIndexCourt = Math.floor(Math.random() * courtsArray.length);
  const randomKey = courtsArray[randomIndexCourt];
  const randomCourtsValue = courts[randomKey];
  console.log(randomCourtsValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    return Swal.fire({
      icon: "success",
      title: "El resultado se ha guardado con exito",
      timer: 1500,
    });
  };
  return (
    <main>
      <p>{`Por favor, continua en la pista ${randomCourtsValue}. Jugarás con ${randomPlayer.name}.`}</p>
      <form onSubmit={handleSubmit}>
        <select
          name="result"
          id="result"
          value="result"
          className="profile__select"
        >
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

export default connect(mapsStateToProps, null)(PrivateArea);
