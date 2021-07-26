"use strict";

function startGame() {
  const btnStart = document.querySelector(".btn-start");
  const celeste = document.querySelector(".celeste");
  const violeta = document.querySelector(".violeta");
  const naranja = document.querySelector(".naranja");
  const verde = document.querySelector(".verde");
  //where all the logic of the game is
  class Game {
    constructor() {
      this.initialize();
      this.generateSequence();
      this.nextLevel();
    }
    initialize() {
      //first we have to hide the button Empezar
      btnStart.classList.add("hide");
      //current level is 1
      this.level = 1;
      this.colors = {
        //if the key and value is the same => celeste: celeste => we can just write
        celeste,
        violeta,
        naranja,
        verde,
      };
    }
    generateSequence() {
      //define the sequence internally in an attribute of the game
      //always when we want to add a new atribute we can write it like this
      //iit will get saved internally in th object of the game
      this.sequence = new Array(10)
        .fill(0)
        .map((n) => Math.floor(Math.random() * 4));
    }
    nextLevel() {
      this.illuminateSequence();
    }
    transformNumberToColor(number) {
      switch (number) {
        //in this case we don`t need break; because break will never be executed in case of an return
        case 0:
          return "celeste";
        case 1:
          return "violeta";
        case 2:
          return "naranja";
        case 3:
          return "verde";
      }
    }
    illuminateSequence() {
      for (let i = 0; i < this.level; i++) {
        const color = this.transformNumberToColor(this.sequence[i]);
        //the time between changes of colors, for  the first color i = 0
        setTimeout(() => this.illuminateColor(color), 1000 * i);
      }
    }
    illuminateColor(color) {
      this.colors[color].classList.add("light");
      //so that it gets illuminated only for a certain time
      setTimeout(() => this.turnOffLight(color), 350);
    }
    turnOffLight(color) {
      //[color] = button
      this.colors[color].classList.remove("light");
    }
  }
  //initialize the game
  window.game = new Game();
}
