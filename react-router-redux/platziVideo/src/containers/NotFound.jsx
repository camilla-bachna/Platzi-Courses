import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => (
  <section className="register">
    <section className="register__container">
      <h1>404</h1>
      <h2>No encontrado</h2>
      <Link to="/">Regresa al home</Link>
    </section>
  </section>
);

export default NotFound;
