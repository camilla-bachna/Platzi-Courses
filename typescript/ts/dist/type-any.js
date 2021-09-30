"use strict";
// Tipo explicito
let idUser;
idUser = 1; //number
idUser = "1"; //string
console.log("idUser", idUser);
//Tipo inferido
let otherId; //type any
otherId = 1;
otherId = "1";
//otherId = true;
console.log("otherId", otherId);
let surprise = "hello typescript";
//surprise.sayHello(); //Error TypeError: surprise.sayHello is not a function, the compiler has not been able to determine the existence of this function as part of the object surprise 
const res = surprise.substring(6); //6 is the first position (t)
console.log("res", res);
