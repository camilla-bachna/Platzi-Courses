"use strict";
//Array
//Corchetes []
//Tipo Explicito
var users;
users = ["camilla-bachna", "paparazzi", "lensqueen"];
//users = [1, true, "test"]; //Error Type 'number' is not assignable to type 'string'. Type 'boolean' is not assignable to type 'string'.
//Tipo Inferido
var otherUsers = ["camilla-bachna", "paparazzi", "lensqueen"]; //let otherUsers: string[]
//users = [1, true, "test"]; //Error
//Array<TIPO>
var pictureTitles; //let pictureTitles: string[]
pictureTitles = ["Favorite Sunset", "Vacation time", "Landscape"];
//Accessing values in an array
console.log("first user", users[0]); //first user camilla-bachna
console.log("first title", pictureTitles[0]); //first title Favorite Sunset
//Properties in array
console.log("users.length", users.length); //users.length 3
//use of functions like in JS
users.push("guillermo");
users.sort();
console.log("users", users); //users [ 'camilla-bachna', 'guillermo', 'lensqueen', 'paparazzi' ]
//Tuple
//example [1, "user"]
var userIdentification;
userIdentification = [1, "Camilla"];
console.log("userIdentification", userIdentification); //userIdentification [ 1, 'Camilla' ]
console.log("username", userIdentification[1]); //username Camilla
console.log("username", userIdentification[1].toLowerCase()); //username camilla
console.log("id", userIdentification[0]); //id 1
//Tuples with various values
//id (number), username (string), is Pro (boolean)
var userInfo;
userInfo = [2, "paparazzi", true];
console.log("userInfo", userInfo); //userInfo [ 2, 'paparazzi', true ]
//array of tuples
var array = []; //have to initialize with an empty array
array.push([1, "camilla-bachna"]);
array.push([2, "luixaviles"]);
array.push([3, "paparazzi"]);
console.log("array", array); //array [ [ 1, 'camilla-bachna' ], [ 2, 'luixaviles' ], [ 3, 'paparazzi' ] ]
//Use of functions array
//paparazzi => paparazzi001: access 2nd position in 3rd array
array[2][1] = array[2][1].concat("001");
console.log("array", array); //array [ [ 1, 'camilla-bachna' ], [ 2, 'luixaviles' ], [ 3, 'paparazzi001' ] ]
