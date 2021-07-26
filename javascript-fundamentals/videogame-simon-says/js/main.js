"use strict";

function startGame() {
  const btnStart = document.querySelector(".btn-start");
  const celeste = document.querySelector(".celeste");
  const violeta = document.querySelector(".violeta");
  const naranja = document.querySelector(".naranja");
  const verde = document.querySelector(".verde");
  const lastLevel = 10;
  //where all the logic of the game is
  class Game {
    constructor() {
      this.initialize();
      this.generateSequence();
      this.nextLevel();
    }
    initialize() {
      this.chooseColor = this.chooseColor.bind(this);
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
      this.sequence = new Array(lastLevel)
        .fill(0)
        .map((n) => Math.floor(Math.random() * 4));
    }
    nextLevel() {
      this.sublevel = 0;
      this.illuminateSequence();
      this.addClickEvents();
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

    transformColorToNumber(color) {
      switch (color) {
        case "celeste":
          return 0;
        case "violeta":
          return 1;
        case "naranja":
          return 2;
        case "verde":
          return 3;
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
    addClickEvents() {
      this.colors.celeste.addEventListener("click", this.chooseColor);
      this.colors.violeta.addEventListener("click", this.chooseColor);
      this.colors.naranja.addEventListener("click", this.chooseColor);
      this.colors.verde.addEventListener("click", this.chooseColor);
    }
    chooseColor(event) {
      const nameColor = event.target.dataset.color;
      const numberColor = transformColorToNumber(nameColor);
      //illuminate color
      this.illuminateColor(nameColor);
      if (numberColor === this.sequence[this.sublevel]) {
        //increase level
        this.sublevel++;
        if (this.sublevel === this.level) {
          this.level++;
          //this.eliminateClickEvent();
          if (this.level === lastLevel + 1) {
            //Ganó!
          } else {
            this.nextLevel();
          }
        }
      } else {
        //Perdió
      }
    }
  }
  //initialize the game
  window.game = new Game();
}
