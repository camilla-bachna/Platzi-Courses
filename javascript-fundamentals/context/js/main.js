/* context */

/* bind */
const camilla = {
  name: "Camilla",
  surname: "Bachna",
};

const adriana = {
  name: "Adriana",
  surname: "Cortes",
};

function greet() {
  console.log(`Hola, mi nombre es ${this.name}.`); //here this refers to window
  //bind() changes this in a function
}

/* create 2 different functions */
const greetingsFromCamilla = greet.bind(camilla); //Hola, mi nombre es Camilla.
const greetingsFromAdriana = greet.bind(adriana); //Hola, mi nombre es Adriana.

setTimeout(greet.bind(camilla), 1000);

function greet2(greetings = "Hola") {
  //value by default
  console.log(`${greetings}, mi nombre es ${this.name}.`);
}

setTimeout(greet2.bind(camilla, "Hola che"), 1000);

/* call */

greet.call(camilla);
//Hola, mi nombre es Camilla  -  is executed immediately

greet.bind(camilla, "Hola che!!"); //1 parameter, who will be this, if you want to pass a 2 parameter just like bind
//does not produce any result, it does not execute it.

/* apply */
greet.apply(camilla, ["Hola che"]); // similar to call, but 2 parameter is an array
