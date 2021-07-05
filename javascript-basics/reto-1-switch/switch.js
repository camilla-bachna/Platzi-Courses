`use strict`;

var stone = "piedra";
var paper = "papel";
var scissors = "tijera";

function game(selection, machine) {
  switch (true) {
    case selection === machine:
      console.log("Pruebalo otra vez");
      break;
    case selection === stone && machine === scissors:
      console.log("Has ganado");
      break;
    case selection === paper && machine === stone:
      console.log("Has ganado");
      break;
    case selection === scissors && machine === paper:
      console.log("Has ganado");
      break;
    default:
      console.log("Has perdido");
  }
}
game(paper, stone);
