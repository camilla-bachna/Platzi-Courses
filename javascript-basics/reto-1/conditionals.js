`use strict`;

var stone = "piedra";
var paper = "papel";
var scissors = "tijera";

function game(selection, machine) {
  if (selection === machine) {
    console.log("Puebalo otra vez");
  } else if (selection === stone && machine === scissors) {
    console.log("Has ganado");
  } else if (selection === paper && machine === stone) {
    console.log("Has ganado");
  } else if (selection === scissors && machine === paper) {
    console.log("Has ganado");
  } else {
    console.log("Has perdido");
  }
}

game(stone, scissors);
