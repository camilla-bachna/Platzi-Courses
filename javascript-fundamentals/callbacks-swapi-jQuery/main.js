"use strict";

const API = "https://swapi.dev/api/";
const people = "people/";
const allFilms = "films/";

async function getCharacters() {
  const url = `${API}${people}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

async function getMovies() {
  const url = `${API}${allFilms}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

async function getFilmInfoInParallel() {
  try {
    const allNames = await getCharacters();
    const names = allNames.map((character) => {
      return [character.name, character.films];
    });
    const allFilmInfo = await getMovies();
    const filmsTitles = allFilmInfo.map((films) => {
      return [films.title, films.url];
    });
    const allInfo = await Promise.all([names, filmsTitles].flat(2));
    console.log(allInfo);

    return allInfo;
  } catch (error) {
    console.log(error.message);
  }
}

getFilmInfoInParallel();
