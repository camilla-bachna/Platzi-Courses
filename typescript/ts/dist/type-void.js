"use strict";
// Void
//Tipo explicito
function showInfo(user) {
    console.log("User Info", user.id, user.username, user.firstName);
    //return "hola";
}
showInfo({ id: 1, username: "camilla-bachna", firstName: "Camilla" });
//Tipo inferido function showFormattedInfo(user: any): void
function showFormattedInfo(user) {
    console.log("User Info", "\n    id: " + user.id + "\n    username: " + user.username + "\n    firstName: " + user.firstName + "\n    ");
}
showFormattedInfo({ id: 1, username: "camilla-bachna", firstName: "Camilla" });
/* User Info
    id: 1
    username: camilla-bachna
    firstName: Camilla */
//tipo void, como tipo de dato en variable
var unusable;
//unusable = null; //Type 'null' is not assignable to type 'void'.
unusable = undefined;
//Tipo: Never 
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
;
//like this the function handles an error correctly and never returns a value
try {
    handleError(404, "Not found");
}
catch (error) { }
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
    //return sum; 
}
sumNumbers(10);
//infinite cycle, program never stops, the terminal is blocked
