"use strict";

/*
 * to print name and filmtitle of Star Wars character in console
 * @param filmsOfCharacters: films in which Star Wars character appeared
 * @param name: name of Star Wars characters
 */
function getFilmTitle(filmsOfCharacters, name) {
  console.group(name);
  filmsOfCharacters.map(({ title }) => console.log(name, title));
  console.groupEnd();
}

module.exports = getFilmTitle;
