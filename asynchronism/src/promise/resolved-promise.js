"use strict";

const fetch = require("node-fetch");

/* fetching data from a remote server is always going to be async, 
so we can queue up the promise, provide it with a callback to map it to JSON,
we can chain the promises together 
mapping to JSON is also a promise so we can return promise from the original then callback */
const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

promise
  .then((response) => response.json())
  /* actual user data as plain JS object */
  .then((user) => console.log("Hello"))
  .catch((err) => console.error(err));

console.log("Synchronous");

/* Synchronous
Hello */

/* By putting the code inside a resolved promise, we can be guaranteed 
that it will be executed after all the synchronous code in the current macro task has completed */

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);

const codeBlocker = () => {
  return Promise.resolve().then((v) => {
    let i = 0;
    while ((i = 0)) {
      i++;
    }
    return "billion loops done";
  });
};

console.log("Synchronous 1");
codeBlocker().then(log);
console.log("Synchronous 2");

/* Synchronous 1
Synchronous 2
billion loops done 
 Elapsed: 6 */
