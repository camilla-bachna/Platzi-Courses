"use strict";

//class ES6
class Person {
  constructor(name, surname, height) {
    this.name = name;
    this.surname = surname;
    this.age = 20; // all are 20 years old
    this.height = height;
  }
  greet(fn) {
    const { name, surname } = this;
    /* const name = this.name;
    const surname = this.surname; */
    console.log(`Hola, me llamo ${name} ${surname}.`);
    if (fn) {
      fn(name, surname); //null is like false or if we don`t add the 3rd parameter it will be undefined and undefined is false or wirte false
    }
  }
  tallPerson() {
    const { height } = this;
    //const height = this.height;
    if (height >= 1.7) {
      console.log(`Soy una persona alta.`);
    }
  }
}

//class inheritance

class Developer extends Person {
  constructor(name, surname, height) {
    super(name, surname, height);
  }
  greet(fn) {
    const { name, surname } = this;
    console.log(`Hola me llamo ${name} ${surname} y soy desarrollador/a.`);
    if (fn) {
      fn(name, surname, true); //or write 1 or a string
    }
  }
}

//function as parameter
function respondGreeting(name, surname, isDev) {
  //isDev = boolean
  console.log(`Buen día ${name} ${surname}.`);
  if (isDev) {
    console.log(`Ah mirá, no sabía que eras desarrollador/a.`);
  }
}

//create new persons
const sacha = new Person("Sacha", "Lifszyc", 1.8);
const erika = new Person("Erika", "Luna", 1.7);
const arturo = new Developer("Arturo", "Martinez", 1.6);
const camilla = new Developer("Camilla", "Maier", 1.87);

console.log(sacha); //Person { name: 'Sacha', surname: 'Lifszyc', age: 20, height: 1.8 }
sacha.greet(respondGreeting); //Hola, me llamo Sacha Lifszyc. Buen día Sacha Lifszyc.
sacha.tallPerson(); //Soy una persona alta.

console.log(arturo); //Developer {name: "Arturo", surname: "Martinez", age: 20, height: 1.6}
arturo.greet(); //Hola me llamo Arturo Martinez y soy desarrollador/a.
arturo.tallPerson(); //-

console.log(camilla); //Developer { name: 'Camilla', surname: 'Maier', age: 20, height: 1.87}
camilla.greet(respondGreeting); //Hola me llamo Camilla Maier y soy desarrollador/a. Buen día Camilla Maier. Ah mirá, no sabía que eras desarrollador/a.
camilla.tallPerson(); //Soy una persona alta.
