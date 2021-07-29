"use strict";
const somethingWIllHappen = () => {
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
      const error = new Error("Whooops!");
      reject(error);
    }
  });
};

somethingWIllHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

/* Promise all */
Promise.all([somethingWIllHappen(), somethingWIllHappen2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((error) => {
    console.error(error);
  });
