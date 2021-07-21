"use strict";
//objects
const camilla = {
  name: "Camilla",
  surname: "Bachna",
  age: 33,
  weight: 68,
};

//soluction 1

let { name } = camilla;

function printNameInUppercase(name) {
  name = name.toUpperCase();
  console.log(name);
}
printNameInUppercase(name); //CAMILLA

//soluction 2

let { name, surname, age } = camilla;

function printNameInUppercase(person) {
  name = name.toUpperCase();
  console.log(name);
}
printNameInUppercase(camilla); //CAMILLA

//soluction 3

function printNameInUppercase({ name }) {
  console.log(name.toUpperCase());
}
printNameInUppercase(camilla); //CAMILLA
printNameInUppercase({ name: "Dario" }); //DARIO

//return
//objects
const camilla = {
  name: "Camilla",
  surname: "Bachna",
  age: 33,
};

let { name, surname, age } = camilla;

function isOlderThan18(person) {
  const legalAge = 18;
  return age >= legalAge;
}

function printIfOlderThan18(person) {
  if (isOlderThan18(person)) {
    console.log(`${name} is older than 18.`);
  } else {
    console.log(`${name} is younger than 18.`);
  }
}

printIfOlderThan18(camilla); //Camilla is older than 18.

//anonymous function
const isOlderThan18 = function (person) {
  const legalAge = 18;
  return age >= legalAge;
};

//arrow functions

let { name, surname, age } = camilla;
const legalAge = 18;

const isOlderThan18 = (person) => age >= legalAge;

//or like this
//const isOlderThan18 = ({age}) => age >= legalAge;

function printIfOlderThan18(person) {
  if (isOlderThan18(person)) {
    console.log(`${name} is older than 18.`);
  } else {
    console.log(`${name} is younger than 18.`);
  }
}

printIfOlderThan18(camilla); //Camilla is older than 18.

const permitAccess = (person) =>
  !isOlderThan18(person)
    ? console.log("You don`t have access")
    : console.log("You have access");

permitAccess(camilla);

//other solution
const isLessThan18 = (person) => !isOlderThan18(person);

const permitAccess = (person) =>
  isLessThan18(person)
    ? console.log("You don`t have access")
    : console.log("You have access");

permitAccess(camilla);

//while
let { name, weight } = camilla;
const kilos = 5;
const weightIncrease = 0.3;
const idealWeight = weight - kilos;
const looseWeight = (person) => (weight -= weightIncrease);
const gainWeight = (person) => (weight += weightIncrease);
const eatALot = () => Math.random() < 0.3;
const doSports = () => Math.random() < 0.4;
let days = 0;

while (weight > idealWeight) {
  if (eatALot()) {
    gainWeight(camilla);
  }
  if (doSports) {
    looseWeight(camilla);
  }
  days += 1;
}

console.log(`Pasaron ${days} dias hasta que ${name} adelgazó 3kg.`); //Pasaron 17 dias hasta que Camilla adelgazó 3kg.

//do while
let contador = 0;
const llueve = () => Math.random() < 0.25;
do {
  contador++;
} while (!llueve());

const frecuencia = contador === 1 ? "vez" : "veces";
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);
