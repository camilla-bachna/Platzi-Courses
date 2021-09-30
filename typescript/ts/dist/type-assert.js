"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//<type> angle bracket syntax
let username;
username = "camilla-bachna";
//we have string, TS confine in us
let message = username.length > 5 //thanks to assertion we can access property length
    ? `Welcome ${username}`
    : "Username is too short";
console.log("message", message); //message Welcome camilla-bachna
let usernameWithId = "camilla-bachna 1";
//how to get username
username = usernameWithId.substring(0, 14); //from position 0 14 characters
console.log("username only", username); //username only camilla-bachna
//Sintaxis "as"
username = "luis";
message =
    username.length > 5
        ? `Welcome ${username}`
        : "Username is too short";
console.log("message", message); //message Username is too short
let helloUser;
helloUser = "hello paparazzi";
username = helloUser.substring(6);
console.log("username", username); //username paparazzi
