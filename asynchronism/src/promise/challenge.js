// transform fetch from callback/challenge.js en ES6
const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => {
    const {
      info: { count },
    } = data;
    console.log(count); //data.info.count 671
    //make a return with a new request
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    const { name } = data;
    console.log(name); //data.name Rick Sanchez
    //make a return with a new request
    return fetchData(data.origin.url);
  })
  .then((data) => {
    const { dimension } = data;
    console.log(dimension); //data.dimension Dimension C-137
  })
  .catch((error) => console.log(error));
