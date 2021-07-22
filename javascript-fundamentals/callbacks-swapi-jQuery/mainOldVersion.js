const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/";
const options = { crossDomain: true };

const onPeopleResponse = function (person) {
  const results = person.results;

  results.map(({ name, films }) => {
    console.log(
      `Hola, yo soy ${name} y he actuado ${filmSigularOrPlural(films)}:`
    );
    films.map((filmUrl) => {
      $.get(filmUrl, options, onFilmUrlResponse);
    });
    function onFilmUrlResponse(film) {
      return console.log(film.title);
    }
  });
};

function filmSigularOrPlural(films) {
  return films.length === 1
    ? "en la siguiente película"
    : "en las siguientes películas";
}

function getAllCharacters() {
  const url = `${API_URL}${PEOPLE_URL}`;
  $.get(url, options, onPeopleResponse);
}

getAllCharacters();
