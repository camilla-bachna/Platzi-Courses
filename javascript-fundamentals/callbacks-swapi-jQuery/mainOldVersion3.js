const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";
const options = { crossDomain: true };

function getACharacter(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, options, callback).fail(() => {
    console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`);
  });
}

//Callback hell
getACharacter(1, function (person) {
  console.log(`Hola, yo soy ${person.name}`);

  getACharacter(2, function (person) {
    console.log(`Hola, yo soy ${person.name}`);

    getACharacter(3, function (person) {
      console.log(`Hola, yo soy ${person.name}`);

      getACharacter(4, function (person) {
        console.log(`Hola, yo soy ${person.name}`);

        getACharacter(5, function (person) {
          console.log(`Hola, yo soy ${person.name}`);
        });
      });
    });
  });
});
