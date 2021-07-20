// Operador de reposo
const obj = {
  name: "Oscar",
  age: 32,
  country: "Mexico",
};

// para seperar los elementos
let { name, ...all } = obj;
console.log(name, all); //Oscar { age: 32, country: 'Mexico' }

let { country, ...all } = obj;
console.log(all); //{ name: 'Oscar', age: 32 }

//propiedades de propagación
const person = { name: "Oscar", age: 32 };
const personCountry = { ...person, country: "Mexico" };
console.log(personCountry); //{ name: 'Oscar', age: 32, country: 'Mexico' }

// Promise.finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello World") : reject(new Error("Test error"));
  });
};

helloWorld()
  .then((response) => console.log(response)) //Hello World
  .catch((error) => console.log(console.error))
  .finally(() => console.log("Finalizo")); //Finalizo

//with a setTimeout
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test error")); //3000 miliseconds
  });
};

helloWorld()
  .then((response) => console.log(response)) //Hello World
  .catch((error) => console.log(console.error))
  .finally(() => console.log("Finalizo")); //Finalizo

//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/; //4 values, 2 elements
const match = regexData.exec("2018-11-30"); //exec => execute
const year = match[1]; //first group
const month = match[2];
const day = match[3];

//console.log(match);
/*[
    '2020-11-30',
    '2020',
    '11',
    '30',
    index: 0,
    input: '2020-11-30',
    groups: undefined
] */
console.log(year, month, day); //2018 11 30
