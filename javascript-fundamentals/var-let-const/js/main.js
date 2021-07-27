/* var */
var camilla = {
  name: "Camilla",
  surname: "Maier",
  age: 26,
};

function isOfLegalAge({ age }) {
  if (age >= 18) {
    var message = "Es mayor de edad";
  } else {
    var message = "Es menor de edad";
    var message2 = "Esto es otro mensaje";
  }
  console.log(message);
  console.log(message2); //undefined
}

isOfLegalAge(camilla);

/* what JS is doing: 

function isOfLegalAge({ age }) {
    var message, message2
  if (age >= 18) {
    var message = "Es mayor de edad";
  } else {
    message = "Es menor de edad";
    message2 = "Esto es otro mensaje";
  }
  console.log(message);
  console.log(message2); //undefined
}

isOfLegalAge(camilla);
*/

/* let you can only access let within the scope {}, where it is declared, 
let reduces its scope to the code block, where it is used
for example { let message = "Es mayor de edad"; }
const camilla2 = {
  name: "Camilla",
  surname: "Maier",
  age: 26,
};

function isOfLegalAge2({ age }) {
  if (age >= 18) {
    let message = "Es mayor de edad";
  } else {
    let message = "Es menor de edad";
  }
  console.log(message); //Uncaught ReferenceError: message is not defined
}

isOfLegalAge2(camilla2);*/

const camilla2 = {
  name: "Camilla",
  surname: "Maier",
  age: 26,
};

function isOfLegalAge2({ age }) {
  let message;
  const legalAge = 18;
  if (age >= legalAge) {
    message = "Es mayor de edad";
  } else {
    message = "Es menor de edad";
  }
  console.log(message); //Es mayor de edad
}

isOfLegalAge2(camilla2);

/* const 
assignment to constant variable: we cannot reassign a const variable, cannot add afterwards legalAge = 21 
const numbers = [1, 2, 3 ,4, 5, 6, 7]
numbers = [1, 2] => reassign is not possible
but push is possible, we can change the array
numbers.push(8);
console.log(numbers) //[1, 2, 3 ,4, 5, 6, 7, 8]
*/

/* also be aware in a bucle for */
for (var i = 0; i < 10; i++) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

console.log(`Termnió el for, el valor de i es ${i}`); //Termnió el for, el valor de i es 10

for (let i = 0; i < 10; i++) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

console.log(`Termnió el for, el valor de i es ${i}`); //i is not defined
//you ca only use the let variable inside of the for

/* const > let > var => to avoid bugs */
