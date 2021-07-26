"use strict";

/* The following programme contains source code to print the names and films of Star Wars characters in the console 
using the Star Wars API https://swapi.dev/. */

import "regenerator-runtime/runtime";
import getACharacter from "./getACharacter";
import getCharacterInfo from "./getCharacterInfo";

getCharacters();

/*
 * make the call to multiple promises: build with the array of ids an array of Promises (promisesCharacters) and 
   pass it as a parameter to Promise.all().
 * await stops the execution of the programme until all promises are resolved => 
   to control order in which characters are printed
 * catch() in case an error occurs
 */
async function getCharacters() {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(`Enter async function getCharacters`);
  const promisesCharacters = ids.map((id) => getACharacter(id));
  try {
    const characters = await Promise.all(promisesCharacters);
    getCharacterInfo(characters);
    console.log(`Finish async function getCharacters`);
  } catch (id) {
    onError(id);
  }
}

/*
 * to print message in console in case an error occurs
 * @param id: each id of array ids
 */
function onError(id) {
  console.log(`Sucediá un error al obtener el personaje ${id}`);
}
