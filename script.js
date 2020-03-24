// Initialisation

var board = [
[null, null, null],
[null, null, null],
[null, null, null]
]

var playerTurn = 1;
var moves = 0;

var gameboard = document.querySelector(".gameboard");
var rows = gameboard.children;

for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < rows[i].children.length; j++) {
    rows[i].children[j].addEventListener("click", clickHandler);
    board[i][j] = rows[i].children[j].firstChild;
  }
}

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearBoard);



// Helper functions

function clickHandler(event) {
  if (moves === 9) {
    alert("You cannot make any more moves");
    return
  }
  addSymbol(event);
  checkWin();
  moves++;
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
}

function checkWin() {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0].innerText === "X" && board[i][1].innerText === "X" && board[i][2].innerText === "X") {
      alert("Player 1 won!");
    } else if (board[i][0].innerText === "O" && board[i][1].innerText === "O" && board[i][2].innerText === "O") {
      alert("Player 2 won!");
    }
  }
}