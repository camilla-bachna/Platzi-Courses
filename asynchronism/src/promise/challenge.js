// transform fetch from callback/challenge.js en ES6
const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => {
    const {
      info: { count },
    } = data;
    console.log(count); //671
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    const { name } = data;
    console.log(name); //Rick Sanchez
    return fetchData(data.origin.url);
  })
  .then((data) => {
    const { dimension } = data;
    console.log(dimension); //Dimension C-137
  })
  .catch((error) => console.log(error));
