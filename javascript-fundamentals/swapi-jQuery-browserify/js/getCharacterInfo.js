"use strict";

import getFilmInfo from "./getFilmInfo";
import filmSingularOrPlural from "./filmSingularOrPlural";

/*
 * to print name and films of Star Wars characters in console
 * @param characters: array of objects with info about Star Wars characters
 */
function getCharacterInfo(characters) {
  characters.map(({ name, films }) => {
    console.group(name);
    console.log(`Hola soy ${name}`);
    console.log(`${filmSingularOrPlural(films)} ${films}`);
    getFilmInfo(name, films);
    console.groupEnd();
  });
}
module.exports = getCharacterInfo;
