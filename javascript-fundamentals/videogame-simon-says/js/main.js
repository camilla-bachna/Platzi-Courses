"use strict";

const btnStart = document.querySelector(".btn-start");
const celeste = document.querySelector(".celeste");
const violeta = document.querySelector(".violeta");
const naranja = document.querySelector(".naranja");
const verde = document.querySelector(".verde");
const finalLevel = 10;

//where all the logic of the game is
class Game {
  constructor() {
    this.initialize = this.initialize.bind(this);
    this.initialize();
    this.generateSequence();
    setTimeout(this.nextLevel, 500);
  }
  initialize() {
    this.nextLevel = this.nextLevel.bind(this); //like this nextLevel will always be Game, will not change context
    this.chooseColor = this.chooseColor.bind(this); //will always be Game
    this.toggleBtnStart();
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
  toggleBtnStart() {
    //btnStart.classList.toggle("hide")
    if (btnStart.classList.contains("hide")) {
      btnStart.classList.remove("hide");
    } else {
      btnStart.classList.add("hide");
    }
  }
  generateSequence() {
    //define the sequence internally in an attribute of the game
    //always when we want to add a new atribute we can write it like this
    //iit will get saved internally in th object of the game
    this.sequence = new Array(finalLevel)
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
  eliminateClickEvent() {
    this.colors.celeste.removeEventListener("click", this.chooseColor);
    this.colors.violeta.removeEventListener("click", this.chooseColor);
    this.colors.naranja.removeEventListener("click", this.chooseColor);
    this.colors.verde.removeEventListener("click", this.chooseColor);
  }
  chooseColor(event) {
    const nameColor = event.target.dataset.color;
    const numberColor = this.transformColorToNumber(nameColor);
    //illuminate color
    this.illuminateColor(nameColor);
    if (numberColor === this.sequence[this.sublevel]) {
      //increase level
      this.sublevel++;
      if (this.sublevel === this.level) {
        this.level++;
        this.eliminateClickEvent();
        if (this.level === finalLevel + 1) {
          this.wonGame();
        } else {
          //attention: setTimeout changes the this => this is window, needs to be bind, put it in initialize
          setTimeout(this.nextLevel, 1500); // We are only using the reference to the function, call it, but don`t invoke it here (don`t write nextLevel())
          // we say which function needs to be called
        }
      }
    } else {
      //Perdió
      this.lostGame();
    }
  }
  wonGame() {
    //Sweetalert
    swal("Genial", "Felicitaciones, ganaste el juego!", "success").then(
      this.initialize() //since we only pass 1 function no need to write () => then(() => this.initialize() ); we can skip the arrow function
    );
  }
  lostGame() {
    //Sweetalert
    swal("Oops...", "Lo lamentamos, perdiste :(", "error").then(() => {
      this.eliminateClickEvent();
      this.initialize();
    });
  }
}
//initialize the game
function startGame() {
  window.game = new Game();
}
