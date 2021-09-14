import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => (
  <section className="notFound">
    <h1 className="notFound__title">404</h1>
    <h2 className="notFound__subtitle">No encontrado</h2>
    <Link to="/">Regresa al home</Link>
  </section>
);

export default NotFound;
