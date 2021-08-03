"use strict";

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://swapi.dev/api/";
const people = "people/";
const allFilms = "films/";

const fetchData = (urlApi) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlApi, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error", urlApi));
      }
    };

    xhttp.send();
  });
};

const getCharactersAndFilms = async (urlApi) => {
  try {
    const character = await fetchData(`${urlApi}${people}`).then((response) =>
      response.results.map((character) => {
        return [character.name, character.films];
      })
    );
    const films = await fetchData(`${urlApi}${allFilms}`).then((response) =>
      response.results.map((films) => {
        return [films.url, films.title];
      })
    );
    let charactersAndFilms = character.flat(2);
    //console.log(charactersAndFilms);
    const filmUrlAndTitle = films.flat();
    //console.log(filmUrlAndTitle);

    let filmTitles;

    for (let i = 0; i < charactersAndFilms.length; i++) {
      filmTitles = charactersAndFilms[i];
      for (let j = 0; j < filmUrlAndTitle.length; j++) {
        if (charactersAndFilms[i] === filmUrlAndTitle[j]) {
          filmTitles = filmUrlAndTitle[j + 1];
        }
      }
      charactersAndFilms[i] = filmTitles;
    }
    console.log(charactersAndFilms);
    /* [
  'Luke Skywalker',
  'A New Hope',
  'The Empire Strikes Back',
  'Return of the Jedi',
  'Revenge of the Sith',
  'C-3PO',
  'A New Hope',
  'The Empire Strikes Back',
  'Return of the Jedi',
  'The Phantom Menace',
  'Attack of the Clones',
  'Revenge of the Sith',
  'R2-D2',
  'A New Hope',
  'The Empire Strikes Back',
  'Return of the Jedi',
  'The Phantom Menace',
  'Attack of the Clones',
  'Revenge of the Sith',
  'Darth Vader',
  'A New Hope',
  'The Empire Strikes Back',
  'Return of the Jedi',
  'Revenge of the Sith',
  'Leia Organa',
  'A New Hope',
  'The Empire Strikes Back',
  'Return of the Jedi',
  'Revenge of the Sith',
  'Owen Lars',
  'A New Hope',
  'Attack of the Clones',
  'Revenge of the Sith',
  'Beru Whitesun lars',
  'A New Hope',
  'Attack of the Clones',
  'Revenge of the Sith',
  'R5-D4',
  'A New Hope',
  'Biggs Darklighter',
  'A New Hope',
  'Obi-Wan Kenobi',
  'A New Hope',
  'The Empire Strikes Back',
  'Return of the Jedi',
  'The Phantom Menace',
  'Attack of the Clones',
  'Revenge of the Sith'
]
 */
  } catch (error) {
    console.error(error);
  }
};

getCharactersAndFilms(API);
