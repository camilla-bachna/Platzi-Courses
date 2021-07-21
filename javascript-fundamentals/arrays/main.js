"use strict";

const erick = {
  name: "Erick",
  height: 1.8,
  numberOfBooks: 111,
};

const ana = {
  name: "Ana",
  height: 1.56,
  numberOfBooks: 78,
};

const christian = {
  name: "Christian",
  height: 1.71,
  numberOfBooks: 132,
};

const persons = [erick, ana, christian];

//filter
const isTall = ({ height }) => height > 1.65;

const tallPeople = persons.filter(isTall);

console.log(tallPeople); //[ { name: 'Erick', height: 1.8 }, { name: 'Christian', height: 1.71 } ]

//map
/* const transformHeightToCm = (person) => {
  return {
    ...person,
    height: person.height * 100,
  };
}; */

//better
const transformHeightToCm = (person) => ({
  ...person,
  height: person.height * 100,
});

const personsCms = persons.map(transformHeightToCm);

console.log(personsCms);

/* [
  { name: 'Erick', height: 180 },
  { name: 'Ana', height: 156 },
  { name: 'Christian', height: 171 }
] */

console.log(persons); //the original array stays the same

/* [
  { name: 'Erick', height: 1.8 },
  { name: 'Ana', height: 1.56 },
  { name: 'Christian', height: 1.71 }
] */

//reduce
const reducer = (acum, { numberOfBooks }) => acum + numberOfBooks; //2 parameter, the accumulator and each element

const totalOfBooks = persons.reduce(reducer, 0); //a function and the inicial value of accumulator (acum = 0)

console.log(`En total todos tienen ${totalOfBooks} libros.`); //En total todos tienen 321 libros.
