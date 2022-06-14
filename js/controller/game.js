import { ball } from "../model/ball.js"
import { bar } from "../model/bar.js"

let baall = new ball(20, 20, "tomato", "white");
let playerOne = new bar(20, 100, "green", "white");
let playerTwo = new bar(20, 100, "yellow", "white");
let width = document.documentElement.clientWidth - baall.movement;
let height = document.documentElement.clientHeight - baall.movement;
let ballDom = document.querySelector("#ball");
let baar = document.querySelector("#bar1");
let bar1 = document.querySelector("#bar2");
let controlGame;
let time = 100;

document.onkeydown = function (e) {
  switch (e.key) {
    case "q": // Q
    case "a": // A
      playerOne.key = e.key;
      playerOne.keyPress = true;
      console.log(playerOne.keyPress);
      break;
    case "o": // O
    case "l": // L
      playerTwo.key = e.key;
      playerTwo.keyPress = true;
      break;
  }
};
document.onkeyup = function (e) {
  if (e.key == "q" || e.key == "a") {
    playerOne.keyPress = false;
  }
  if (e.key == "o" || e.key == "l") {
    playerTwo.keyPress = false;
  }
};


export const init = () => {
    playerOne.moveBar("q", "a", baar, height);
    playerTwo.moveBar("o", "l", bar1, height);
    baall.moveBall(ballDom);
    let col1 = baall.collidePlayer1(baar, ballDom);
    let col2 = baall.collidePlayer2(ballDom, bar1, width);
    baall.checkStateBall(ballDom, height, col1, col2);
    baall.checkIfLost(ballDom, width, stop);
}

export const board = () => {
    playerOne.setAtributes(baar);
    playerTwo.setAtributes(bar1);
    baall.setAtributes(ballDom);
    ballDom.direction = 1;
    ballDom.state = 1; 
};

function checkIfLost() {
    if (ball.offsetLeft >= width) {
        stop();
        console.log("punto player 1");
    }
    if (ball.offsetLeft <= 0) {
        stop();
        console.log("punto player 2");
    }
}

const start = () => {
    board();
    controlGame = setInterval(init, time);
    checkIfLost();
}

function stop() {
    clearInterval(controlGame);
    document.body.style.background = "#f00";
}

start();
