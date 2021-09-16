import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="main">
    <h2 className="main__title">404</h2>
    <p>No encontrado</p>
    <Link to="/">Regresa</Link>
  </main>
);

export default NotFound;
