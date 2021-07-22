const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";
const options = { crossDomain: true };

function onFilmUrlResponse(film) {
  return console.log(film.title);
}

function filmSigularOrPlural(films) {
  return films.length === 1
    ? "en la siguiente película"
    : "en las siguientes películas";
}

function getACharacter(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, options, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucediá un error al obtener el personaje ${id}`);
}

//Promise all - multiple promises in parallel
const ids = [1, 2, 3, 4, 5, 6, 7];
const promises = ids.map((id) => getACharacter(id));
console.log(promises); //[Promise, Promise, Promise, Promise, Promise, Promise, Promise]

Promise.all(promises)
  .then((persons) => console.log(persons)) //[{…},{…},{…},{…},{…},{…},{...}]
  .catch(onError);
