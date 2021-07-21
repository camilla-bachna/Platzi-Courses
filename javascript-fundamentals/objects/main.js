"use strict";

function Person(name, surname, height) {
  this.name = name;
  this.surname = surname;
  this.age = 20; // all are 20 years old
  this.height = height;
}

Person.prototype.greet = function () {
  console.log(`Hola, me llamo ${this.name} ${this.surname}.`);
};

Person.prototype.tallPerson = function () {
  if (this.height >= 1.7) {
    console.log(`Soy una persona alta.`);
  }
};

const sacha = new Person("Sacha", "Lifszyc", 1.8);
const erika = new Person("Erika", "Luna", 1.7);
const arturo = new Person("Arturo", "Martinez", 1.6);

console.log(sacha); //Person { name: 'Sacha', surname: 'Lifszyc', age: 20, height: 1.8 }
sacha.greet(); //Hola, me llamo Sacha Lifszyc.
sacha.tallPerson(); //Soy una persona alta.
