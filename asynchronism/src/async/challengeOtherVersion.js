"use strict";

const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

const asyncFunction = async () => {
  try {
    let response1, response2;
    const [data, character, origin] = await Promise.all([
      (response1 = await fetchData(API).then((response) => response)),
      (response2 = await fetchData(API + response1.results[0].id).then(
        (response) => response
      )),
      fetchData(response2.origin.url).then((response) => response),
    ]);
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
asyncFunction(API);
console.log("After");

/* Before
After
671
async-await1: 1.112ms
Rick Sanchez
async-await2: 0.058ms
Dimension C-137
async-await3: 0.101ms */
