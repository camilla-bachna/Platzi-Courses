"use strict";

//old verson of prototypal inheritance
//inheritance function
function heredaDe(prototypeSon, prototypeFather) {
  let fn = function () {}; //fn or noop doesn`t do anything
  fn.prototype = prototypeFather.prototype;
  prototypeSon.prototype = new fn();
  prototypeSon.prototype.constructor = prototypeSon; // asign the construction function
}

//prototype
function Person(name, surname, height) {
  this.name = name;
  this.surname = surname;
  this.age = 20; // all are 20 years old
  this.height = height;
}

Person.prototype.greet = function () {
  console.log(`Hola, me llamo ${this.name} ${this.surname}.`);
};

//modify prototype
Person.prototype.tallPerson = function () {
  if (this.height >= 1.7) {
    console.log(`Soy una persona alta.`);
  }
};

//prototypal inheritance

function Developer(name, surname) {
  this.name = name;
  this.surname = surname;
}

heredaDe(Developer, Person);

Developer.prototype.greet = function () {
  console.log(
    `Hola me llamo ${this.name} ${this.surname} y soy desarrollador/a.`
  );
};

//create new persons
const sacha = new Person("Sacha", "Lifszyc", 1.8);
const erika = new Person("Erika", "Luna", 1.7);
const arturo = new Person("Arturo", "Martinez", 1.6);
const camilla = new Developer("Camilla", "Maier", 1.87);

console.log(sacha); //Person { name: 'Sacha', surname: 'Lifszyc', age: 20, height: 1.8 }
sacha.greet(); //Hola, me llamo Sacha Lifszyc.
sacha.tallPerson(); //Soy una persona alta.

console.log(camilla); //Developer { name: 'Camilla', surname: 'Maier' }
camilla.greet(); //Hola me llamo Camilla Maier y soy desarrollador/a.
