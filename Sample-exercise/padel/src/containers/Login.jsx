import React from "react";

const Login = () => {
  return (
    <main className="main">
      <h2 className="main__title">Únete</h2>
      <form className="main__form">
        <input
          name="pin"
          className="main__form--input"
          type="text"
          placeholder="Pozo pin"
        />
        <input name="name" className="input" type="text" placeholder="Nombre" />
        <input
          name="gender"
          className="main__form--input"
          type="text"
          placeholder="Género"
        />
        <button type="submit" className="main__button">
          Únete
        </button>
      </form>
    </main>
  );
};

export default Login;
