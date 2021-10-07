/* For good practice environment variables coming from outside (process.env.VARIABLE ) are capitalised and 
separated by an underscore instead of a space if there are two words (MI_WEB) */

let name = process.env.NAME || "without name"; //NAME = name of our variable
let web = process.env.MY_WEB || "without web";

console.log(`Hello ${name}`);
console.log(`Mi web is ${web}`);
/* returns Hello without name
Mi web is without web or if one puts variables
Hello Camilla
Mi web is loquesea.com */
