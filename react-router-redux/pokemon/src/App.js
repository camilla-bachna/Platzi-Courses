import React from "react";
import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Switch>
        <Route exact path={"/"} component={PokemonList} />
        {/* :pokemon is a variable, could be anything, e.g. /pokemon/test */}
        <Route exact path={"/pokemon/:pokemon"} component={Pokemon} />
        {/* if neither of the above math its going to redirect, e.g. http://localhost:3000/adg */}
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
