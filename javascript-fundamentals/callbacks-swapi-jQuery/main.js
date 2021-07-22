const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";
const options = { crossDomain: true }; //crossDomain => to external page

const onPeopleResponse = function (person) {
  console.log(`Hola, yo soy ${person.name}`);
  const films = person.films;
  filmSigularOrPlural(films);
  console.log(`He actuado ${filmSigularOrPlural(films)}:`);
  films.map((film) => console.log(film));
};

function filmSigularOrPlural(films) {
  return films.length === 1
    ? "el siguiente película"
    : "en las siguientes películas";
}

function getACharacter(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, options, onPeopleResponse);
}

for (let i = 1; i <= 10; i++) {
  getACharacter(i);
}
