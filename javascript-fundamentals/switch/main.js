"use strict";

let sign = prompt("Cual es tu signo?");
sign = sign
  .toLowerCase() //transforms to lowercase
  .trim() //removes blank spaces
  .normalize("NFD") //removes accents (since ES6)
  .replace(/[\u0300-\u036f]/g, ""); //removes accents

console.log(sign);

switch (sign) {
  case "acuario":
    console.log("Itente aislarse del mundo y sentarse en soledad a...");
    break;
  case "piscis":
    console.log("Sepa que de ahora en más, su futuro solo dependerá...");
    break;
  case "cancer":
    //case "cancer:" could be added
    console.log("Dentro su cabeza le surgirán ideas extraordinarias,...");
    break;
  case "leo":
    console.log("Imprime leo");
    break;
  case "escorpio":
    console.log("Imprime escorpio");
    break;
  case "tauro":
    console.log("Imprime acuario");
    break;
  default:
    console.log("No es un signo zodiacal valido.");
    break;
}
