// Initialisation

var board = [
[null, null, null],
[null, null, null],
[null, null, null]
]

var playerOne = "Player 1";
var playerTwo = "Player 2";

var playerOneScoreDisplay = document.getElementById("player-one-score");
var playerTwoScoreDisplay = document.getElementById("player-two-score");

var playerOneScore = parseInt(playerOneScoreDisplay.innerText);
var playerTwoScore = parseInt(playerTwoScoreDisplay.innerText);

var playerTurn = 1;
var moves = 0;
var gameStart = false;

var gameboard = document.querySelector(".gameboard");
var rows = gameboard.children;

for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < rows[i].children.length; j++) {
    rows[i].children[j].addEventListener("click", clickHandler);
    board[i][j] = rows[i].children[j].firstChild;
  }
}

var startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearBoard);

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetScore);



// Helper functions

function startGame() {
  gameStart = true;
  startButton.style.display = "none";
  playerOne = document.querySelectorAll("input")[0].value;
  playerTwo = document.querySelectorAll("input")[1].value;
}

function clickHandler(event) {
  if (gameStart) {
    if (moves === 9) {
      alert("You cannot make any more moves");
      return
    }
    addSymbol(event);
    checkWin();
    moves++;
  }
}

function addSymbol(event) {
  if (playerTurn === 1) {
    playerTurn = 2;
    event.target.firstChild.innerText = "X";
  } else {
    playerTurn = 1;
    event.target.firstChild.innerText = "O";
  }
}

function clearBoard() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j].innerText = "";
    }
  }
  playerTurn = 1;
  moves = 0;
  gameStart = false;
  startButton.style.display = "inline";
  document.querySelectorAll("input")[0].value = "";
  document.querySelectorAll("input")[1].value = "";
}

function resetScore() {
  playerOneScoreDisplay.innerText = "0";
  playerTwoScoreDisplay.innerText = "0";
}

function checkWin() {
  for (let i = 0; i < board.length; i++) {
    // row win
    if (board[i][0].innerText === "X" && board[i][1].innerText === "X" && board[i][2].innerText === "X") {
      alert(`${playerOne} won!`);
      playerOneScore++;
      playerOneScoreDisplay.innerText = playerOneScore;
    } else if (board[i][0].innerText === "O" && board[i][1].innerText === "O" && board[i][2].innerText === "O") {
      alert(`${playerTwo} won!`);
      playerTwoScore++;
      playerTwoScoreDisplay.innerText = playerTwoScore;
    // diagonal win
  } else if (board[0][0].innerText === "X" && board[1][1].innerText === "X" && board[2][2].innerText === "X") {
    alert(`${playerOne} won!`);
    playerOneScore++;
    playerOneScoreDisplay.innerText = playerOneScore;
  } else if (board[0][0].innerText === "O" && board[1][1].innerText === "O" && board[2][2].innerText === "O") {
    alert(`${playerTwo} won!`);
    playerOnTwoore++;
    playerTwoScoreDisplay.innerText = playerTwoScore;
  } else if (board[0][2].innerText === "X" && board[1][1].innerText === "X" && board[2][0].innerText === "X") {
    alert(`${playerOne} won!`);
    playerOneScore++;
    playerOneScoreDisplay.innerText = playerOneScore;
  } else if (board[0][2].innerText === "O" && board[1][1].innerText === "O" && board[2][0].innerText === "O") {
    alert(`${playerTwo} won!`);
    playerOnTwoore++;
    playerTwoScoreDisplay.innerText = playerTwoScore;
    // column win
  } else if (board[0][i].innerText === "X" && board[1][i].innerText === "X" && board[2][i].innerText === "X") {
    alert(`${playerOne} won!`);
    playerOneScore++;
    playerOneScoreDisplay.innerText = playerOneScore;
  } else if (board[0][i].innerText === "O" && board[1][i].innerText === "O" && board[2][i].innerText === "O") {
    alert(`${playerTwo} won!`);
    playerOnTwoore++;
    playerTwoScoreDisplay.innerText = playerTwoScore;
  }
}
}