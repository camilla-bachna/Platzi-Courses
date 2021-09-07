import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetPokemon } from "../actions/pokemonActions";
import _ from "lodash";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <section className={"section__pokemon--wrapper"}>
          <div className={"section__pokemon--item"}>
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
          </div>

          <div className={"section__pokemon--item"}>
            <h1>Stats</h1>
            {pokeData.stats.map((el) => {
              return (
                <p>
                  {el.stat.name} {el.base_stat}
                </p>
              );
            })}
          </div>

          <div className={"section__pokemon--item"}>
            <h1>Abilities</h1>
            {pokeData.abilities.map((el) => {
              return <p>{el.ability.name}</p>;
            })}
          </div>
        </section>
      );
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <div className={"pokemon-container"}>
      <h1>{pokemonName}</h1>
      {ShowData()}
    </div>
  );
};

export default Pokemon;
