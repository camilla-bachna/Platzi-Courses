import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/layout/_landing.scss";

function Landing() {
  return (
    <main className="main">
      <h2 className="main__title">Bienvenido</h2>
      <Link to="/getPin">Nuevo pozo</Link>
      <Link to="/login">Únete a un pozo</Link>
    </main>
  );
}

export default Landing;
