import React from "react";

const Login = () => {
  return (
    <section>
      <h2>Únete</h2>
      <form>
        <input
          name="pin"
          className="input"
          type="text"
          placeholder="Pozo pin"
        />
        <input name="name" className="input" type="text" placeholder="Nombre" />
        <input
          name="gender"
          className="input"
          type="text"
          placeholder="Género"
        />
        <button type="submit">Únete</button>
      </form>
    </section>
  );
};

export default Login;
