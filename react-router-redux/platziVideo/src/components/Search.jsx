import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { setSearch } from "../actions";
import "../assets/styles/components/Search.scss";

const mainTitleText = "¿Qué quieres ver hoy?";
const mainInputPlaceholder = "Buscar...";

const Search = (props, { isHome }) => {
  const inputStyle = classNames("input", { isHome });
  const { setSearch } = props;

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <section className="main">
      <h2 className="main__title">{mainTitleText}</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder={mainInputPlaceholder}
        onChange={handleInput}
      />
    </section>
  );
};

const mapDispatchToProps = {
  setSearch,
};

export default connect(null, mapDispatchToProps)(Search);
