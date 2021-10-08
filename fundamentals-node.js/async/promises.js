function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola ${name}`);
      resolve(name);
    }, 1500);
  });
}

function talk(name) {
  //Syntax ES6
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla");
      //resolve(name);
      reject("Hay un error en talk");
    }, 1000);
  });
}

function goodBye(name) {
  //Syntax ES6
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Adios, ${name}`);
      resolve();
    }, 1000);
  });
}

//---
console.log("Iniciando el proceso...");

hello("Eduardo")
  /* .then((name) => {
    return goodBye(name);
  }) */
  //same but easier to read, automatically put parameter
  .then(talk)
  .then(talk)
  .then(talk)
  .then(goodBye)
  .then((name) => {
    console.log("Terminado el proceso");
  })
  //if any of the functions in the then chain above fail, will be send to catch (i can catch the reject)
  //avoid that this error generates bigger errors like send to data base
  .catch((error) => {
    console.error("Ha habido un error:");
    console.error(error);
  });

/* Iniciando el proceso...
Hola Eduardo
Bla bla bla bla
Ha habido un error:
Hay un error */
