const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const options = { crossDomain: true }; //crossDomain => to external page
const onPeopleResponse = function (person) {
  console.log(`Hola yo soy ${person.name}`);
};

$.get(
  lukeUrl,
  options,
  onPeopleResponse //this function will only get executed if the request was successful
  /* console.log(arguments); //Arguments(3) [{…}, "success", {…}, callee: ƒ, Symbol(Symbol.iterator): ƒ] */
);
