"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let idUser;
idUser = 10;
idUser = "10";
//Search username with an id
function getUsernameById(id) {
    //Username as type of return
    //logic, find user
    return "luixaviles";
}
getUsernameById(20);
getUsernameById("20");
//let smallPicture: SquareSize = "200x200"; //Error: Type '"200x200"' is not assignable to type 'SquareSize'
let smallPicture = "100x100";
let mediumPicture = "500x500";
const validateScreen = (screen) => {
    return screen;
};
const screenType = validateScreen("100x100");
console.log(screenType); //100x100
