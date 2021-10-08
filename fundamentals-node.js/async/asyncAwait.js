async function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola ${name}`);
      resolve(name);
    }, 1500);
  });
}
/* The async is redundant in the functions we made since they return a promise 
(besides knowing that inside we are doing an asynchronous process with setTimeout) 
but it helps to understand the code in a simpler way */
async function talk(name) {
  //Syntax ES6
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla");
      resolve(name);
      //reject("Hay un error en talk");
    }, 1000);
  });
}

async function goodBye(name) {
  //Syntax ES6
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Adios, ${name}`);
      resolve();
    }, 1000);
  });
}

// ---
//Iif we would remove the await would not wait 1 second
async function main() {
  /* In the first await the value of the name is obtained 
  and it passes it as a parameter in goodbye. */
  let name = await hello("Luis");
  await talk();
  await talk();
  await talk();
  await goodBye(name);
  console.log("Termina el proceso");
}

console.log("Empezamos el proceso...");

/* If we add a then at the end it is printed last */
main().then(() => console.log("imprimiendo datos luego de la conversacion"));

/* The main function is asynchronous so if we put here another console.log
it will be the second instruction that gets executed */
console.log("Va a ser la segunda instrucción");

/* Empezamos el proceso...
Va a ser la segunda instrucción
Hola Luis
Bla bla bla bla
Bla bla bla bla
Bla bla bla bla
Adios, Luis
Termina el proceso
imprimiendo datos luego de la conversacion */
