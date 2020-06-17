let player1 = prompt("Player 1, enter your nickname")
let player2 = prompt("Player 2, enter your nickname")
let playerTurn = 0;
let player1Score = 0;
let player2Score = 0;
let checkTie = 0;
let turn = "X";
if (Math.ceil(Math.random() * 2) > 1) {
  turn = "O";
}
let winner = null;

//version 2
function createBoardGame() {
  let boardHTML =
    '<table><tr><td id="square0" class="game-square"></td><td id="square1" class="vertical game-square"></td><td id="square2" class="game-square"></td></tr><tr><td id="square3" class="horizontal game-square"></td><td id="square4" class="vertical horizontal game-square"></td><td id="square5" class="horizontal game-square"></td></tr><tr><td id="square6" class="game-square"></td><td id="square7" class="vertical game-square"></td><td id="square8" class="game-square"></td></tr></table>';
  document.querySelector("#board").innerHTML = boardHTML;
  document.querySelector("#board").style.visibility = "hidden";
}
createBoardGame();

let squares = document.querySelectorAll(".game-square");

//further 2
document.querySelector(".start-game").addEventListener("click", function () {
  document.querySelector("#board").style.visibility = "visible";
  document.querySelector(".start-game").style.visibility = "hidden";
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
    winner = null;
  }
  document.querySelector("#message").innerText = turn + " gets to start.";
  document.querySelector("#scoreBoard").innerText = player1 + ": " + player1Score  + " " + player2 + ": " + player2Score;
});

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (winner !== null) {
      document.querySelector("#message").innerText = " Restart the game?";
    } else if (squares[i].innerHTML === "") {
      squares[i].innerHTML = turn;
      switchTurn();
    } else {
      alert("The square was already being occupied");
    }
  });
}

function switchTurn() {
  if (checkWinner(turn)) {
    if(playerTurn%2===0){
      document.querySelector("#message").innerText = player1 + " won!!";
      player1Score++;
      checkTie=0;
    }else{
      document.querySelector("#message").innerText = player2 + " won!!";
      player2Score++;
      checkTie=0;
    }
    winner = turn;
    document.querySelector(".start-game").style.visibility = "visible";
  } else if (turn === "X") {
    turn = "O";
    document.querySelector("#message").innerText = turn + " gets to move.";
    playerTurn++;
    tie();
  } else {
    turn = "X";
    document.querySelector("#message").innerText = turn + " gets to move.";
    playerTurn++;
    tie();
  }
}
//check all the win posibilities
//0 1 2
//3 4 5
//6 7 8
//3 row,3 column,2 diagonal

//target the square num
function getSquareXO(num) {
  return document.querySelector("#square" + num).innerText;
}

//check if the 3 are all X/O
function checkLine(a, b, c, XO) {
  let result = false;
  if (getSquareXO(a) === XO && getSquareXO(b) === XO && getSquareXO(c) === XO) {
    result = true;
  }
  return result;
}

function checkWinner(XO) {
  let result = false;
  if (
    checkLine(0, 1, 2, XO) ||
    checkLine(3, 4, 5, XO) ||
    checkLine(6, 7, 8, XO) ||
    checkLine(0, 3, 6, XO) ||
    checkLine(1, 4, 7, XO) ||
    checkLine(2, 5, 8, XO) ||
    checkLine(0, 4, 8, XO) ||
    checkLine(2, 4, 6, XO)
  ) {
    result = true;
  }
  return result;
}

function tie(){
  checkTie++;
  if(checkTie===9){
    document.querySelector("#message").innerText = "It's a draw!";
    document.querySelector(".start-game").style.visibility = "visible";
    checkTie=0;
  }
}