const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";
const options = { crossDomain: true };

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

//Async-await
async function getCharacters() {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const promises = ids.map((id) => getACharacter(id));
  try {
    const persons = await Promise.all(promises); //await stops the execution of programme until all promises are resolved
    console.log(persons);
    getNames(persons);
    getFilmUrl(persons);
  } catch (id) {
    onError(id);
  }
}

getCharacters();

function getNames(persons) {
  persons.map(({ name }) => {
    console.log(`Hola soy ${name}`);
  });
}

function getFilmUrl(persons) {
  persons.map(({ films }) => {
    console.log(filmSigularOrPlural(films));
    console.log(films);
    films.map((filmUrl) => {
      console.log(filmUrl);
      /*     return new Promise((resolve, reject) => {
        $.get(filmUrl, options, function (data) {
          resolve(data);
        }).fail(() => reject(console.log("Error")));
      }); */
    });
  });
}

function filmSigularOrPlural(films) {
  return films.length === 1
    ? "He actuado en una película"
    : "He actuado en películas";
}
