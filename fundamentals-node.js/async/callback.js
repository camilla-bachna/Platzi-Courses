function amSynchronous() {
  console.log("Hola, soy una funcion síncrona!");
}

console.log("Iniciando proceso...");
amSynchronous();
console.log("Terminando proceso...");

/* Iniciando proceso...
Hola, soy una funcion asíncrona!
Terminando proceso... */

function amAsynchronous(myCallback) {
  setTimeout(function () {
    console.log("Hola, siendo asíncrona!");
    myCallback();
  }, 1000);
}

console.log("Iniciando proceso...");
amAsynchronous(function () {
  console.log("El proceso ha sido terminado");
});
console.log("Terminando proceso...");

/* Iniciando proceso...
Terminando proceso...
Hola, siendo asíncrona!
El proceso ha sido terminado */

function hello(name, anotherCallback) {
  setTimeout(function () {
    console.log(`Hola ${name}`);
    anotherCallback(name);
  }, 1500);
}

function goodBye(name, oneMoreCallback) {
  setTimeout(function () {
    console.log(`Adios, ${name}`);
    oneMoreCallback();
  }, 1000);
}
console.log("Iniciando proceso...");
hello("Carlos", function (name) {
  goodBye(name, function () {
    console.log("El proceso ha sido terminado");
  });
});
console.log("Terminando proceso...");
/* Iniciando proceso...
Terminando proceso...
Hola Carlos
Adios, Carlos
El proceso ha sido terminado */

/* hello("Susanna", function () {});
goodBye("Susanna", function () {});
Iniciando proceso...
Hola, siendo asíncrona!
El proceso ha sido terminado
Hola Susanna
Adios, Susanna */
