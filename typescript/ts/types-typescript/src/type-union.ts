//Union Types
//as idUser is already defined in another file. To resolve this temporary we export an empty object:
export {};

// 10, "10"
/* let idUser: number | string;
idUser = 10;
idUser = "10";

//Search username with an id
function getUsernameById(id: number | string) {
  //logic, find user
  return "luixaviles";
}

getUsernameById(20);
getUsernameById("20"); */

//Alias Types
type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = "10";

//Search username with an id
function getUsernameById(id: IdUser): Username {
  //Username as type of return
  //logic, find user
  return "luixaviles";
}

getUsernameById(20);
getUsernameById("20");

//Literal types
//only the following sizes are admissible 100x100, 500x500, 1000x1000
type SquareSize = "75x75" | "100x100" | "500x500" | "1000x1000";
type screen = string;
//let smallPicture: SquareSize = "200x200"; //Error: Type '"200x200"' is not assignable to type 'SquareSize'
let smallPicture: SquareSize = "100x100";
let mediumPicture: SquareSize = "500x500";

const validateScreen = (screen: SquareSize): screen => {
  return screen;
};

const screenType = validateScreen("100x100");
console.log(screenType); //100x100
