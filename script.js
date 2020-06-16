/*
squaresList[X].innerText
0 | 1 | 2
3 | 4 | 5
6 | 7 | 8

*/

// ui variables
const board = document.getElementById('board');
const startBtn = document.getElementById('start-btn');

window.onload = loadGame();

const squaresList = document.querySelectorAll('.game-square');

// create game over message
var gameOver = document.createElement('div');
gameOver.innerText = "Game over!";
gameOver.classList = "game-over";

// create play again button
var playAgain = document.createElement('button');
playAgain.innerText = "Play Again?";
playAgain.classList = "play-again";
playAgain.addEventListener('click', replay);

// keep track of whose turn it is
let turn = 0;

// add event listener to each square
squaresList.forEach((square) => {
  square.addEventListener('click', draw)
})

// draw X or O function
function draw(e) {
  let selected = e.target;
  if (turn % 2 === 0 && selected.innerText === "") {
    selected.innerText = "x";
    turn++;
    if (turn > 8) {
      document.body.appendChild(gameOver);
      document.body.appendChild(playAgain);
    }
  } else if (turn % 2 !== 0 && selected.innerText === "") {
    selected.innerText = "o";
    turn++;
    if (turn > 8) {
      document.body.appendChild(gameOver);
    }
  }
}

//SECOND VERSION - create board using JS
function loadGame() {
  var gameBoard = 
  `<div class="game-row">
    <span class="game-square"></span><span class="game-square"></span><span class="game-square"></span>
  </div>
  <div class="game-row">
    <span class="game-square"></span><span class="game-square"></span><span class="game-square"></span>
  </div>
  <div class="game-row">
    <span class="game-square"></span><span class="game-square"></span><span class="game-square"></span>
  </div>`
  board.innerHTML = gameBoard;
  board.style.visibility = "hidden";
}

// hide button and show game board
function showBoard(){
  board.style.visibility = "visible";
  board.style.border = "1px solid black";
  startBtn.style.visibility = "hidden";
}

// replay function
function replay(){
  turn = 0;
  squaresList.forEach((square) => {
    square.innerText = "";
  })
  playAgain.remove();
  gameOver.remove();
}

