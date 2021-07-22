const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";
const options = { crossDomain: true }; //crossDomain => to external page

//Promise
function getACharacter(id) {
  //returns a promise
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, options, function (data) {
      resolve(data); // resolve will not be called until this function gets executed, until get is successful
    }).fail(() => reject(id));
  });
}

function onError(id) {
  //error id from line 21
  console.log(`Sucediá un error al obtener el personaje ${id}`);
}

getACharacter(1)
  .then((person1) => {
    //data from line 19
    console.log(`El personaje 1 es ${person1.name}`); //El personaje 1 es Luke Skywalker
    return getACharacter(2);
  })
  .then((person2) => {
    console.log(`El personaje 2 es ${person2.name}`);
    return getACharacter(3);
  })
  .then((person3) => {
    console.log(`El personaje 3 es ${person3.name}`);
    return getACharacter(4);
  })
  .then((person4) => {
    console.log(`El personaje 4 es ${person4.name}`);
    return getACharacter(5);
  })
  .then((person5) => {
    console.log(`El personaje 5 es ${person5.name}`);
    return getACharacter(6);
  })
  .then((person6) => {
    console.log(`El personaje 6 es ${person6.name}`);
    return getACharacter(7);
  })
  .then((person7) => {
    console.log(`El personaje 7 es ${person7.name}`);
  })
  /*   .catch(function (id) {
    console.log(onError(id));
  }); 
  or better: */
  .catch(onError); // is the same for each of the characters
