const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";
const options = { crossDomain: true }; //crossDomain => to external page

const onPeopleResponse = function (person) {
  console.log(`Hola, yo soy ${person.name}`);
  const films = person.films;
  console.log(`He actuado ${filmSigularOrPlural(films)}:`);
  films.map((filmUrl) => {
    $.get(filmUrl, options, onFilmUrlResponse);
  });
};

function onFilmUrlResponse(film) {
  return console.log(film.title);
}

function filmSigularOrPlural(films) {
  return films.length === 1
    ? "en la siguiente película"
    : "en las siguientes películas";
}

function getACharacter(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, options, onPeopleResponse);
}

for (let i = 1; i <= 10; i++) {
  getACharacter(i);
}
