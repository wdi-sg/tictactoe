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

// create game over div
var gameOver = document.createElement('div');
gameOver.innerText = "Game over!";
gameOver.classList = "game-over";

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

function showBoard(){
  board.style.visibility = "visible";
  startBtn.style.visibility = "hidden";
}

