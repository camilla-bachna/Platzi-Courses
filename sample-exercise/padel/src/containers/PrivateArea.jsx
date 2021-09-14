import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateArea = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    return Swal.fire({
      icon: "success",
      title: "Inicio de sesión exitoso",
      timer: 1500,
    });
  };
  return (
    <main>
      <p>Por favor, continua en la pista. Jugarás con player.</p>
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
      <Link to="/">Volver</Link>
    </main>
  );
};

export default PrivateArea;
