"use strict";

import getAFilm from "./getAFilm";
import getFilmTitle from "./getFilmTitle";
/*
 * build with the array of films an array of Promises (promisesFilms) and pass it as a parameter to Promise.all().
 * @param name: name of Star Wars characters
 * @param films: array of films in which Star Wars character appeared
 */
function getFilmInfo(name, films) {
  console.log(`Enter function getFilmInfo`);
  const promisesFilms = films.map((filmUrl) => getAFilm(filmUrl));
  try {
    Promise.all(promisesFilms).then((filmsOfCharacters) =>
      getFilmTitle(filmsOfCharacters, name)
    );
  } catch {
    console.log("Error films");
  }
  console.log(`Finish function getFilmInfo`);
}

module.exports = getFilmInfo;
