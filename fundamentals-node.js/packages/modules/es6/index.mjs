//import module
import importModule from "./module.mjs";

//execute a function of module
console.log(importModule); //{ greeting: [Function: greeting], prop1: 'Hola, que tal?' }
console.log(importModule.prop1); //Hola, que tal?
importModule.greeting(); //Hola mundo!
