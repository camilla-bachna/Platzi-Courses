import React, { useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";
import "../App.css";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const pokemonList = useSelector((state) => state.PokemonList);

  React.useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return (
        <section className={"section__list--wrapper"}>
          {pokemonList.data.map((pokemon) => {
            return (
              <div className={"section__list--item"}>
                <p>{pokemon.name}</p>
                <Link to={`/pokemon/${pokemon.name}`}>View</Link>
              </div>
            );
          })}
        </section>
      );
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <div>
      <div className={"search-wrapper"}>
        <p>Search:</p>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        {/* this is from react-router-dom package, navigate to whatever directories is here */}
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          Search
        </button>
      </div>
      {ShowData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
    </div>
  );
};

export default PokemonList;
