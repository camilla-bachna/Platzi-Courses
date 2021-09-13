import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <main className="App">
      <h2>Bienvenido</h2>
      <Link to="/getPin">Nuevo pozo</Link>
      <Link to="/login">Únete a un pozo</Link>
    </main>
  );
}

export default Landing;
