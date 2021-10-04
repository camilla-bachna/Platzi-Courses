"use strict";
console.log("Hola a todos");
//Number
//Explicito
let phone;
phone = 1;
phone = 54267891;
//phone = "+34 54267891"; //Error Type 'string' is not assignable to type 'number'.
//Inferido - given
let phoneNumber = 54267891;
phoneNumber = 123;
//phoneNumber = true; //Error Type 'boolean' is not assignable to type 'number'.
//valores hexadecimales
let hex = 0xf00d; //after 0x we can use 0 to 9 and a b c d e f
//valores binarios
let binary = 0b1010; //0b indicates that a binary value follows, only 0 and 1
//valores octales
let octal = 0o744; //0o indicates octal value and digits between 0 and 7
//Boolean
//Explicito
let isPro; //to indicate if a user that publishes photos is pro or not (has a license)
isPro = true;
//isPro = 1; //Error Type 'number' is not assignable to type 'boolean'.
//Inferido
let isUserPro = false;
isUserPro = true;
//isUserPro = 1; //Error Type 'number' is not assignable to type 'boolean'.
//String
let username = "Camilla";
username = "Luis";
//username = true; //Type 'boolean' is not assignable to type 'string'.
//Template string
//Backtick `
let userinfo;
userinfo = `
    User Info:
    username: ${username}
    name: ${username + " " + "Bachna"}
    phone: ${phoneNumber}
    isPro: ${isPro}
`;
console.log("userInfo", userinfo);
