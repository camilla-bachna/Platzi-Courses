//import module
const importModule = require("./module");

//execute a function of module
console.log(importModule); //{} if not exported else [Function: greeting] and if we export un object { greeting: [Function: greeting], prop1: 'Hola, que tal?' }
console.log(importModule.prop1); //Hola, que tal?
importModule.greeting(); //Hola mundo!
