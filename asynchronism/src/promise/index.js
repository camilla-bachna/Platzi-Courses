"use strict";
const somethingWIllHappen = () => {
  //create a new promise, pass it 2 arguments (resolve => gets executed correctly, reject)
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Whoops!");
    }
  });
};

somethingWIllHappen()
  .then((response) => console.log(response)) //Hey if(true) {}
  .catch((error) => console.error(error)); //Whoops! if(false) {}

const somethingWIllHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      //best practice, more information, easier to fix bugs
      const error = new Error("Whooops!");
      reject(error);
    }
  });
};

somethingWIllHappen2()
  .then((response) => console.log(response))
  //we can add more thens (.then().then())
  //with catch we control errors
  .catch((error) => console.error(error));

/* Promise all => how to run several promises at the same time or chained together */
Promise.all([somethingWIllHappen(), somethingWIllHappen2()])
  .then((response) => {
    //returns an array with the results
    console.log("Array of results", response); //Array of results [ 'Hey!', 'True' ]
  })
  .catch((error) => {
    console.error(error);
  });
