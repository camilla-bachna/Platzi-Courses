"use strict";

/* we can use array map to convert them to an array of promises and resolve them all concurrently using Promise.all()*/

const getFruit = async (name) => {
  const fruits = {
    pineapple: "pineapple",
    peach: "peach",
    strawberry: "strawberry",
  };
  return fruits[name];
};

getFruit("peach").then(console.log); //peach

const fruits = ["peach", "pineapple", "strawberry"];

/* be careful when using async await in a map or forEach loop, because it wont`t actually pause the function in this context.
So normally we would expect this loop to stop if we do await getFruit(), but thats not what happens in that case.
Instead it will run all these promises concurrently. */
const smoothie = fruits.map(async (v) => {
  const getFruits = await getFruit(v);
  console.log(getFruits);
  return getFruits;
});

/* peach
pineapple
strawberry */

/* If you want to run a loop and have every iteration in that loop await a promise you need to use a TRADITIONAL FOR loop.
Use await keyword inside the loop. Like this it will pause each step of a loop until that promise is resolved. */
const fruitLoop = async () => {
  for (const f of fruits) {
    const getFruits = await getFruit(f);
    console.log(getFruits);
  }
};

fruitLoop();

/* if you want to run everything concurrently, you can use the await keyword directly in a for loop. 
If you have a promise that you know results to an array you can use the await keyword directly in your loop, 
it will await the array of items to resolve and then loop over them immediately after. */
const fruitLoop2 = async () => {
  for await (const getFruits of fruits) {
    console.log(getFruits);
  }
};

fruitLoop2();

/* you can use await keyword also in conditionals */

const fruitInspection = async () => {
  if ((await getFruit("peach")) === "peach") {
    console.log("Looks peachy");
  }
};

fruitInspection();
