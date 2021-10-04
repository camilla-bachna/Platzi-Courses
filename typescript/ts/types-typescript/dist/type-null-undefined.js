"use strict";
//Explicita
let nullVariable;
nullVariable = null; //Only accepts type null. 
//nullVariable = 1; //Type '1' is not assignable to type 'null'.
let otherVariable = null; //let otherVariable: any
otherVariable = "test";
console.log("nullVariable", nullVariable); //nullVariable null
console.log("otherVariable", otherVariable); //otherVariable test
//Undefined
let undefinedVariable = undefined;
//undefinedVariable = "test"; //Type '"test"' is not assignable to type 'undefined'.
let otherUndefined = undefined; //let otherUndefined: any
otherUndefined = 1;
console.log("undefinedVariable", undefinedVariable); //undefinedVariable undefined
console.log("otherUndefined", otherUndefined); //otherUndefined 1
//Null y undefined como subtipos
//--strictNullChecks
let albumName;
//albumName = null; //with "use strict": Type 'null' is not assignable to type 'string'.
//albumName = undefined; //with "use strict": Type 'undefined' is not assignable to type 'string'.
