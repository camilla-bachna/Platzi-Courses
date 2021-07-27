/* immutable data */

const camilla = {
  name: "Camilla",
  age: 28,
};

const birthday = (person) => person.age++;
/* each time we call birthday(camilla) in console, adds 1 year to age 28, 29, 30, 31 ...
the object itself gets changed => write camilla in console {name: "Camilla", age: 31}
we want to avoid that when we call a function this function changes things on the outside
 */

const birthdayUnchangeable = (person) => ({
  // we create a new object in the memory, we don`t modify the above object
  ...person,
  edad: person.age + 1,
}); //{name: "Camilla", age: 28, edad: 29}
//but if you write afterwards  camilla in console {name: "Camilla", age: 28}, hasn`t changed

const camilla29 = birthdayUnchangeable(camilla);
console.log(camilla29); //{name: "Camilla", age: 28, edad: 29}
