"use strict";

//
const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do Something Async"), 3000)
      : reject(new Error("Test Error"));
  });
};

//wait till promise is resolved, until the promise is fulfilled
const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log("Before 1");
doSomething();
console.log("After 1");

/* Before 1
After 1
Do Something Async (prints this minimum 3 seconds later) */

const anotherFunction = async () => {
  try {
    //here could be added how many times I need to call the promise, in this case I only need to call it one time
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
};

console.log("Before 2");
anotherFunction();
console.log("After 2");

/* Before 1
After 1
Before 2
After 2
Do Something Async (after 3 seconds both appear together)
Do Something Async */
