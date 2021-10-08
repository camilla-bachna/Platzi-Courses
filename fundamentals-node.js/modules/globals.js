//should not be in any production code but useful to see whats behind it

//console.log(global);
console.log(setInterval); //[Function: setInterval]

let i = 0;

let interval = setInterval(function () {
  console.log("Hola");
  if (i === 3) {
    clearInterval(interval);
  }
  i++;
}, 1000);

/* Hola
Hola
Hola
Hola */

setImmediate(function () {
  console.log("Hola");
});

//require();

//console.log(process);

//console.log(__dirname); //platzi-courses/fundamentals-node.js/modules

//console.log(__filename); //platzi-courses/fundamentals-node.js/modules/globals.js

//we can even create global variables (but if not necessary do not create them)
globalThis.myVariable = "theValue";

console.log(myVariable); //do not even have to put global.myVariable
