//const process = require("process"); we do not have to import it

process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

process.on("exit", () => {
  console.log("El proceso acabó"); //Gets executed when node stops the eventloop and closes its main process
  setTimeout(() => {
    console.log("Esto no se va a ver nunca");
  }, 0);
});

setTimeout(() => {
  console.log("Esto si se va a ver");
}, 0);

process.on("uncaughtException", (err, origin) => {
  console.error("Se nos ha olividado capturar un error");
  console.error(err);
});

functionDoesNotExist();
console.log("Esto si el error no se recoje, no sale");

//process.on("unhandledRejection");
