"use strict";

const fetchData = require("./fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => {
    const {
      info: { count },
    } = data;
    console.log(count);
    getAPIs(data.results);
    //console.log(getAPIs(data.results)); array of promises
    return Promise.all(getAPIs(data.results));
  })
  .then((data) => {
    getCharacterNames(data);
    console.log(getCharacterNames(data));
    //console.log(getLocationAPI(data)); array of promises
    return Promise.all(getLocationAPI(data));
  })
  .then((data) => {
    getDimension(data);
    console.log(getDimension(data));
  })
  .catch((error) => console.log(error));

function getAPIs(array) {
  const charactersAPI = array.map((character) =>
    fetchData(`${API}${character.id}`)
  );
  return charactersAPI;
}

function getCharacterNames(data) {
  const name = data.map(({ name }) => name);
  return name;
}

function getLocationAPI(data) {
  const locationAPI = data.map(({ origin }) => {
    if (origin.url !== "") {
      return fetchData(origin.url);
    } else {
      return "";
    }
  });
  return locationAPI;
}

function getDimension(data) {
  const dimension = data.map(({ dimension }) => {
    if (dimension !== undefined) {
      return dimension;
    } else {
      return "";
    }
  });
  return dimension;
}

/* ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith", "Abadango Cluster Princess", 
"Abradolf Lincler", "Adjudicator Rick", "Agency Director", "Alan Rails", "Albert Einstein", "Alexander", "Alien Googah", 
"Alien Morty", "Alien Rick", "Amish Cyborg", "Annie", "Antenna Morty", "Antenna Rick", "Ants in my Eyes Johnson"]

["Dimension C-137", "Dimension C-137", "Replacement Dimension", "Replacement Dimension", "Replacement Dimension", 
"unknown", "Replacement Dimension", "", "Replacement Dimension", "", "Dimension C-137", "Dimension C-137", "", "", "", "", 
"Dimension C-137", "", "", ""] */
