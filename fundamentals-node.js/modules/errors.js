/* function codeBreaks() {
  return 3 + z;
}

try {
  codeBreaks(); //ReferenceError: z is not defined
} catch (error) {
  console.error("Vaya, algo se ha roto...");
  console.error(error); //ReferenceError: z is not defined...
  console.error(error.message); //z is not defined
  console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("Esto de aqui está al final"); */

/*  without try catch does not make it to the end
Vaya, algo se ha roto...
ReferenceError: z is not defined...
z is not defined
Pero no pasa nada, lo hemos capturado
Esto de aqui está al final */

function anotherFunction() {
  codeBreaks();
}

function codeBreaks() {
  return 3 + z;
}

function codeBreaksAsync(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error en mi funcion asíncrona");
      cb(error);
    }
  }, 1000);
}

try {
  //anotherFunction();
  codeBreaksAsync(function (error) {
    console.log(error.message);
  });
} catch (error) {
  console.error("Vaya, algo se ha roto...");
  console.error(error);
  console.error(error.message);
  console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("Esto de aqui está al final");

/* 
anotherFunction:
Vaya, algo se ha roto...
ReferenceError: z is not defined
    at codeBreaks (/home/camillabachna/Desktop/Platzi/Platzi Courses/platzi-courses/fundamentals-node.js/modules/errors.js:28:14)
    at anotherFunction (/home/camillabachna/Desktop/Platzi/Platzi Courses/platzi-courses/fundamentals-node.js/modules/errors.js:24:3)
    at Object.<anonymous> (/home/camillabachna/Desktop/Platzi/Platzi Courses/platzi-courses/fundamentals-node.js/modules/errors.js:32:3)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
z is not defined
Pero no pasa nada, lo hemos capturado
Esto de aqui está al final */

/* codeBreaksAsync: Esto de aqui está al final
Error en mi funcion asíncrona
z is not defined */
