"use strict";

//Basic
/* If we didn`t use the async keyword we could write instead return Promise.resolve(fruits[name]). 
The magic of async is that it takes the return value and automatically resolves it as a promise. 
Plus it sets up a context to use the await keyword to pause the execution of the function. */
const getFruit = async (name) => {
  const fruits = {
    pineapple: "pineapple",
    peach: "peach",
    strawberry: "strawberry",
  };
  return fruits[name];
};

getFruit("peach").then(console.log); //peach

//Async + await
/* we need to get multiple fruits and combine them together as a single value.
Instead of chaining together a bunch of then callbacks, we can just have a promise resolve to the value of a variable. */
const makeSmoothie = async () => {
  /* The await is like saying pause the execution of the function until the getFruit promise results to a value,
   at which point we can use it as the variable a */
  const a = await getFruit("pineapple");
  const b = await getFruit("strawberry");
  return [a, b];
};

makeSmoothie().then(console.log); //[ 'pineapple', 'strawberry' ]

/* one of the most annoying things with promises is that 
it is kind of difficult to share result values between multiple steps in the promise chain, but async-await solves this problem */

/* this is the code if we wrote it with regular promises => a lot more code and complexity */

const makeSmoothie2 = () => {
  let a;
  return getFruit("pineapple")
    .then((v) => {
      a = v;
      return getFruit("strawberry");
    })
    .then((v) => [v, a]); // NOT .then((v) => v + a); biggest mistake people make when using async await, that is failing to run the code concurrently
};

makeSmoothie2().then(console.log); //[ 'strawberry', 'pineapple' ]

/* code with delay and Promise.all() */

const makeSmoothie3 = async () => {
  const a = getFruit("pineapple");
  const b = getFruit("strawberry");
  /* This will tell all the promises in the array to run concurrently and 
  then have the resolved values be at that index in the array. 
  Await the Promise.all() call to DOUBLE the SPEED of the original function */
  const smoothie = await Promise.all([a, b]);
  return smoothie;
};

makeSmoothie3().then(console.log);

/* check order
peach
[ 'pineapple', 'strawberry' ] makeSmoothie1()
[ 'pineapple', 'strawberry' ] makeSmoothie3()
[ 'strawberry', 'pineapple' ] makeSmoothie2()*/

/* nice other benefit is error handling with try catch */

const badSmoothie = async () => {
  try {
    const a = getFruit("pineapple");
    const b = getFruit("strawberry");
    /* This will tell all the promises in the array to run concurrently and 
    then have the resolved values be at that index in the array. 
    Await the Promise.all() call to double the speed of the original function */
    const smoothie = await Promise.all([a, b]);
    throw "broken!";
    return smoothie;
  } catch (err) {
    console.log(err);
    /* you can return a value, its like ignoring the error and providing some replacement value*/
    return `We are going to be fine...`;

    /* peach
    broken!
    [ 'pineapple', 'strawberry' ]
    [ 'pineapple', 'strawberry' ]
    We are going to be fine...
    [ 'strawberry', 'pineapple' ]
    */

    /* This will break the consumers promise chain and be handled by their catch callback */
    /* throw `Its broken!`; 
    peach
    broken!
    [ 'pineapple', 'strawberry' ]
    [ 'pineapple', 'strawberry' ]
    [ 'strawberry', 'pineapple' ]
    (node:10090) UnhandledPromiseRejectionWarning: Its broken!... */
  }
};

badSmoothie().then(console.log);
