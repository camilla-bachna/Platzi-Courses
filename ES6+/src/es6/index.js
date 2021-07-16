"use strict";

//parámetros por defecto
//forma antigua
function newFunction(name, age, country) {
  var name = name || "Oscar";
  var age = age || 32;
  var country = country || "Mexico";
  console.log(name, age, country);
}

//es6
function newFunctionES6(name = "Oscar", age = 32, country = "Mexico") {
  console.log(name, age, country);
}

newFunctionES6(); // y si no paso ningún parámetro va a tomar los valores por defecto
newFunctionES6("Ricardo", 23, "Colombia"); //para pasar los elementos que necesito

//template literals
//forma antigua
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//es6
let epicPhraseES6 = `${hello} ${world}`;
console.log(epicPhraseES6);

//multilinea strings
//forma antigua
let lorem = "Lorem ipsum. qui consequatur commodi \n" + "otra frase epica.";

//es6
let loremES6 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(loremES6);

//desestructuración
let person = {
  name: "Oscar",
  age: 32,
  country: "Mexico",
};

//forma antigua
console.log(person.name, person.age, person.country);

//es6
let { name, age, country } = person;
console.log(name, age, country);

//spread operator
//en vez de
let education = [
  "David",
  "Oscar",
  "Julian",
  "Ricardo",
  "Valeria",
  "Yesica",
  "Camila",
];
//es6
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];
//asi puedo crear un nuevo array con David y los elementos unidos

console.log(education);

/* [
  'David',   'Oscar',
  'Julian',  'Ricardo',
  'Valeria', 'Yesica',
  'Camila'
] */

//let y const
//forma antigua
var hola = "hola"; //disponible de forma global

//es6
//con let solo esta disponible en el scope
//bloque:
{
  var globalVar = "Global Var";
}
{
  let globalLet = "Global Let";
  console.log(globalLet); //Global Let
}

console.log(globalVar); //Global Var
console.log(globalLet); //ReferenceError: globalLet is not defined

const a = "b";
a = "a";
console.log(a); //TypeError: Assignment to constant variable.

//forma antigua
let name = "Camilla";
let age = "33";

obj = { name: name, age: age };

//es6
objES6 = { name, age }; // de esta forma va a tomar el valor de los elementos
console.log(objES6); //{ name: 'Camilla', age: '33' } automaticamente ha creado la misma estructura

//arrow functions
const names = [
  { name: "Oscar", age: 32 },
  { name: "Camila", age: 33 },
  { name: "Ricardo", age: 35 },
  { name: "Guillermo", age: 35 },
];
//si quiero iterar por cada uno de los elementos useria map y paralo una funcion anónima
let listOfNames = names.map(function (item) {
  return item.name;
});
console.log(listOfNames); //[ 'Oscar', 'Camila', 'Ricardo', 'Guillermo' ]

let listOfNamesWithArrowFunction = names.map((item) => item.name);
console.log(listOfNamesWithArrowFunction);

/*  //otra forma
const listOfNames3 = (name, age, country) => {
  ...


//otra forma cunado solo estoy pasando 1 solo parámetro
const listOfNames4 = name =>{
  ...
}}

const square = num => num * num;
*/

//promesa

const helloPromise = () => {
  //asignamos una función (arrow function)
  return new Promise((resolve, reject) => {
    //retornamos una nueve promesa (es algo que va a pasar)
    if (true) {
      resolve("hey");
    } else {
      reject("ups");
    }
  });
};

//ejecutar la promesa
helloPromise()
  .then((response) => console.log(response)) //el valor then que permite obtener esta respuesta
  .then(() => console.log("Hola")) //podemos añadir más then
  .catch((error) => console.log(error)); //en caso de que fuera rechazado o hay un detalle por lo cual no cumpla esa promesa

/* hey
Hola */

class calculator {
  constructor() {
    this.valorA = 0;
    this.valorB = 0;
  }
  sum(valorA, valorB) {
    this.valorA = valorA;
    this.valorB = valorB;
    return this.valorA + this.valorB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2)); //4

//modules
/* import { hello } from "./module";
hello();

import myHello from "./module";
myHello(); */

const hello = require("./module");
console.log(hello());

//generators
function* helloWorld() {
  if (true) {
    yield "Hello, "; //yield guarda este estado de forma interna
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

/* Hello, 
World
undefined */
