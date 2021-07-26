"use strict";

import getACharacter from "./getACharacter";
import getCharacterInfo from "./getCharacterInfo";
import onError from "./onError";
/*
 * make the call to multiple promises: build with the array of ids an array of Promises (promisesCharacters) and pass it as a parameter to Promise.all().
 * await stops the execution of the programme until all promises are resolved => to control order in which characters are printed
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

module.exports = getCharacters;
