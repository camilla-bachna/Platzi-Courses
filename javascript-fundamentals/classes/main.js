"use strict";

//class ES6
class Person {
  constructor(name, surname, height) {
    this.name = name;
    this.surname = surname;
    this.age = 20; // all are 20 years old
    this.height = height;
  }
  greet() {
    console.log(`Hola, me llamo ${this.name} ${this.surname}.`);
  }
  tallPerson() {
    if (this.height >= 1.7) {
      console.log(`Soy una persona alta.`);
    }
  }
}

//class inheritance

class Developer extends Person {
  constructor(name, surname, height) {
    super(name, surname, height);
  }
  greet() {
    console.log(
      `Hola me llamo ${this.name} ${this.surname} y soy desarrollador/a.`
    );
  }
}

//create new persons
const sacha = new Person("Sacha", "Lifszyc", 1.8);
const erika = new Person("Erika", "Luna", 1.7);
const arturo = new Person("Arturo", "Martinez", 1.6);
const camilla = new Developer("Camilla", "Maier", 1.87);

console.log(sacha); //Person { name: 'Sacha', surname: 'Lifszyc', age: 20, height: 1.8 }
sacha.greet(); //Hola, me llamo Sacha Lifszyc.
sacha.tallPerson(); //Soy una persona alta.

console.log(camilla); //Developer { name: 'Camilla', surname: 'Maier', age: 20, height: 1.87}
camilla.greet(); //Hola me llamo Camilla Maier y soy desarrollador/a.
camilla.tallPerson(); //Soy una persona alta.
