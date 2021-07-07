//Calcula e imprime las siguientes variables: nombre completo y dinero real
const name = "Ana";
const surname = "Fera";
const fullName = `${name} ${surname}`; // name + " " + surname

console.log(fullName);

let safedMoney = 500;
let debts = 1;
let total = safedMoney - debts;

console.log(total);

//funciónes
function sum(a, b) {
  //parameter
  return a + b;
}

sum();
console.log(sum(3, 4)); //arguments

// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
/* const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + "."); */

function fullName(name, lastname, nickname) {
  completeName = name + " " + lastname;
  return `Hola mi nombre es ${completeName} , pero prefiero que me digas ${nickname}`;
}
console.log(fullName("Juan David", "Castro Gallego", "juandc"));

//Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
/* const tipoDeSuscripcion = "basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "Free":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
} */

function typeOfSubscription(choice) {
  if (choice === "Free") {
    return console.log("Solo puedes tomar los cursos gratis");
  } else if (choice === "Basic") {
    return console.log(
      "Puedes tomar casi todos los cursos de Platzi durante un mes"
    );
  } else if (choice === "Expert") {
    return console.log(
      "Puedes tomar casi todos los cursos de Platzi durante un año"
    );
  } else if (choice === "Expert +") {
    return console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
  } else {
    return console.log("Suscribeté ahora");
  }
}

typeOfSubscription("Basic");

//other option
function typeOfSubscription(choice) {
  if (choice === "Free") {
    return console.log("Solo puedes tomar los cursos gratis");
  }

  if (choice === "Basic") {
    return console.log(
      "Puedes tomar casi todos los cursos de Platzi durante un mes"
    );
  }

  if (choice === "Expert") {
    return console.log(
      "Puedes tomar casi todos los cursos de Platzi durante un año"
    );
  }

  if (choice === "Expert +") {
    return console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
  }
}

typeOfSubscription("Expert");

//Bonus: Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (con arrays y un solo condicional)

let subscription = "Expert +";

const choices = ["Free", "Basic", "Expert", "Expert +"];

const answers = [
  "Solo puedes tomar los cursos gratis",
  "Puedes tomar casi todos los cursos de Platzi durante un mes",
  "Puedes tomar casi todos los cursos de Platzi durante un año",
  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
];

for (var i = 0; i < choices.length && i < answers.length; i++) {
  if (choices[i] === subscription) {
    console.log(answers[i]);
  }
}

//Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
/* for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
} */

var i = 0;

while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

/* for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
} */

var i = 10;

while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}

//Escribe un código que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar (con prompt).
let question = parseInt(prompt("¿Cuánto es 2 + 2?"));
//console.log(typeof question);

if (question === 4) {
  console.log("Enhorabuena, la respuesta es correcta");
} else {
  console.log("Inténtalo de nuevo");
  let question = parseInt(prompt("¿Cuánto es 2 + 2?"));
  if (question === 4) {
    console.log("Enhorabuena, la respuesta es correcta");
  } else {
    console.log("Inténtalo de nuevo");
  }
}

//using while and if so user can try as often as he wants
let question;
while (question !== 4) {
  question = parseInt(prompt("¿Cuánto es 2 + 2?"));
  console.log("Inténtalo de nuevo");
}
if (question === 4) {
  console.log("Enhorabuena, la respuesta es correcta");
}

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
const numbers = [10, 231, 42, 63];
const names = ["Javi", "Juan", "Maria", "MariCarmen"];
const fruits = ["Apple", "Banana", "Kiwi", "Lemon", "Strawberries"];

function printFirstElement(array) {
  firstElement = array[0];
  return `The first element is ${firstElement}`;
}

console.log(printFirstElement(names)); //Javi

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

const numbers = [10, 231, 42, 63];
const names = ["Javi", "Juan", "Maria", "MariCarmen"];
const fruits = ["Apple", "Banana", "Kiwi", "Lemon", "Strawberries"];

function printAllElements(array) {
  array.forEach(function (eachElement) {
    console.log(eachElement);
  });
}

printAllElements(fruits);

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

const user = { name: "Ana", age: 21, userName: "AnaB", gender: "female" };
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

function printObjectElements(object) {
  Object.values(object).forEach(function (eachElement) {
    console.log(eachElement);
  });
}

printObjectElements(car);
