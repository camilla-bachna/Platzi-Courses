"use strict";

const fetchData = require("../utils/fetchData");
//convention write constants in uppercase
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (urlApi) => {
  try {
    const data = await fetchData(urlApi);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.time("async-await1");
    console.log(data.info.count);
    console.timeLog("async-await1");
    console.time("async-await2");
    console.log(character.name);
    console.timeLog("async-await2");
    console.time("async-await3");
    console.log(origin.dimension);
    console.timeLog("async-await3");
  } catch (error) {
    console.error(error);
  }
};

console.log("Before");
anotherFunction(API);
console.log("After");

/* Before
After
671
async-await1: 1.143ms
Rick Sanchez
async-await2: 0.071ms
Dimension C-137 
async-await3: 0.1ms */
