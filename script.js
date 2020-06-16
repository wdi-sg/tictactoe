/*
squaresList[X].innerText
0 | 1 | 2
3 | 4 | 5
6 | 7 | 8

winning combos:
0 1 2
0 4 8
0 3 6
1 4 7
2 5 8
2 4 6
3 4 5
6 7 8
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

// keep track of winner
let winnerFound = false;

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
  } else if (turn % 2 !== 0 && selected.innerText === "") {
    selected.innerText = "o";
    turn++;
  }
  getWinner(); // evaluate winner every turn
  if (winnerFound) {
    document.body.appendChild(gameOver);
    document.body.appendChild(playAgain);
    squaresList.forEach((square) => {
      square.removeEventListener('click', draw)
    })
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
  winnerFound = false;
  squaresList.forEach((square) => {
    square.innerText = "";
    square.addEventListener('click', draw);
  })
  playAgain.remove();
  gameOver.remove();
}

// evaluate winner function
function getWinner() {
  if (squaresList[0].innerText === "x" && squaresList[1].innerText === "x" && squaresList[2].innerText === "x") {
    alert('x is the winner');
    winnerFound = true;
  } else if (squaresList[0].innerText === "o" && squaresList[1].innerText === "o" && squaresList[2].innerText === "o") {
    alert('o is the winner');
    winnerFound = true;
  }
  
  if (squaresList[0].innerText === "x" && squaresList[4].innerText === "x" && squaresList[8].innerText === "x") {
    alert('x is the winner');
    winnerFound = true;
  } else if (squaresList[0].innerText === "o" && squaresList[4].innerText === "o" && squaresList[8].innerText === "o") {
    alert('o is the winner');
    winnerFound = true;
  }

  if (squaresList[0].innerText === "x" && squaresList[3].innerText === "x" && squaresList[6].innerText === "x") {
    alert('x is the winner');
    winnerFound = true;
  } else if (squaresList[0].innerText === "o" && squaresList[3].innerText === "o" && squaresList[6].innerText === "o") {
    alert('o is the winner');
    winnerFound = true;
  }

  if (squaresList[1].innerText === "x" && squaresList[4].innerText === "x" && squaresList[7].innerText === "x") {
    alert('x is the winner');
    winnerFound = true;
  } else if (squaresList[1].innerText === "o" && squaresList[4].innerText === "o" && squaresList[7].innerText === "o") {
    alert('o is the winner');
    winnerFound = true;
  }

  if (squaresList[2].innerText === "x" && squaresList[5].innerText === "x" && squaresList[8].innerText === "x") {
    alert('x is the winner');
    winnerFound = true;
  } else if (squaresList[2].innerText === "o" && squaresList[5].innerText === "o" && squaresList[8].innerText === "o") {
    alert('o is the winner');
    winnerFound = true;
  }  

  if (squaresList[2].innerText === "x" && squaresList[4].innerText === "x" && squaresList[6].innerText === "x") {
    alert('x is the winner');
    winnerFound = true;
  } else if (squaresList[2].innerText === "o" && squaresList[4].innerText === "o" && squaresList[6].innerText === "o") {
    alert('o is the winner');
    winnerFound = true;
  }

  if (squaresList[3].innerText === "x" && squaresList[4].innerText === "x" && squaresList[5].innerText === "x") {
    alert('x is the winner');
    winnerFound = true;
  } else if (squaresList[3].innerText === "o" && squaresList[4].innerText === "o" && squaresList[5].innerText === "o") {
    alert('o is the winner');
    winnerFound = true;
  }  

  if (squaresList[6].innerText === "x" && squaresList[7].innerText === "x" && squaresList[8].innerText === "x") {
    alert('x is the winner');
    winnerFound = true;
  } else if (squaresList[6].innerText === "o" && squaresList[7].innerText === "o" && squaresList[8].innerText === "o") {
    alert('o is the winner');
    winnerFound = true;
  }
  else if (!winnerFound && turn === 9) {
    document.body.appendChild(gameOver);
    document.body.appendChild(playAgain);
    squaresList.forEach((square) => {
      square.removeEventListener('click', draw)
    })
  }
}