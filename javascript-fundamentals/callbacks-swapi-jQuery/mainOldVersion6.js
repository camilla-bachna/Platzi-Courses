"use strict";

/* The following programme contains source code to print the names and films of Star Wars characters in the console using the Star Wars API https://swapi.dev/. */

const apiUrl = "https://swapi.dev/api/";
const people = "people/:id/";
const options = { crossDomain: true };

getCharacters();

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

/*
 * declare promise
 * @param id: part of the urls, each id of array ids
 * jQuery $.get to make a request
 */
function getACharacter(id) {
  return new Promise((resolve, reject) => {
    const url = `${apiUrl}${people.replace(":id", id)}`;
    $.get(url, options, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

/*
 * to print message in console in case an error occurs
 * @param id: each id of array ids
 */
function onError(id) {
  console.log(`Sucediá un error al obtener el personaje ${id}`);
}

/*
 * to print name and films of Star Wars characters in console
 * @param characters: array of objects with info about Star Wars characters
 */
function getCharacterInfo(characters) {
  characters.map(({ name, films }) => {
    console.group(name);
    console.log(`Hola soy ${name}`);
    console.log(`${filmSigularOrPlural(films)} ${films}`);
    getFilmInfo(name, films);
    console.groupEnd();
  });
}

/*
 * to check if Star Wars character appeared in one or more films
 * @param films: array of films in which Star Wars character appeared
 */
function filmSigularOrPlural(films) {
  return films.length === 1
    ? "He actuado en la película"
    : "He actuado en las películas";
}

/*
 * build with the array of films an array of Promises (promisesFilms) and pass it as a parameter to Promise.all().
 * @param name: name of Star Wars characters
 * @param films: array of films in which Star Wars character appeared
 * await to control order in which filmtitles are printed
 */
async function getFilmInfo(name, films) {
  console.log(`Enter async function getFilmInfo`);
  const promisesFilms = films.map((filmUrl) => getAFilm(filmUrl));
  try {
    const filmsOfCharacters = await Promise.all(promisesFilms);
    getFilmTitle(filmsOfCharacters, name);
  } catch {
    console.log("Error films");
  }
  console.log(`Finish async function getFilmInfo`);
}

/*
 * declare promise
 * @param filmUrl: the url to request info of films
 * jQuery $.get to make a request
 */
function getAFilm(filmUrl) {
  return new Promise((resolve, reject) => {
    $.get(filmUrl, options, function (data) {
      resolve(data);
    }).fail(() => reject(console.log("Error")));
  });
}

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
