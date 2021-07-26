"use strict";

/*
 * to check if Star Wars character appeared in one or more films
 * @param films: array of films in which Star Wars character appeared
 */
function filmSingularOrPlural(films) {
  return films.length === 1
    ? "He actuado en la película"
    : "He actuado en las películas";
}

module.exports = filmSingularOrPlural;
