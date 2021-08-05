"use strict";

const a = "Hola! ";

function global() {
  const b = "Qué ";

  function local() {
    const c = "tal?";
    return a + b + c; // as it is the inner function it has access to all const
  }

  return local; //the function global returns the function local
}
console.log(global()); //f local()

console.log(global()()); //Hola! Qué tal?

/* To avoid the double call => closure */

const addedFunctions = global();
console.log(addedFunctions()); //Hola! Qué tal?

/* a closure is a function that encapsulates a series of local variables and definitions 
that are only accessible if returned with the return operator => to have private variables 
was mainly used before the arrival of JS classes in ES6 */

const myCounter = (function () {
  let _counter = 0;

  function increase() {
    return _counter++;
  }

  function decrease() {
    return _counter--;
  }

  function value() {
    return _counter;
  }
  return {
    increase,
    decrease,
    value,
  };
})();

console.log(myCounter.value()); //0
console.log(myCounter.increase()); //0
console.log(myCounter.value()); //1
console.log(myCounter.increase()); //1
console.log(myCounter.increase()); //2
console.log(myCounter.value()); //3
console.log(myCounter.decrease()); //3
console.log(myCounter.value()); //2
