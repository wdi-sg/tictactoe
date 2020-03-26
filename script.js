var turn = 1;
var allSquares = document.getElementsByClassName("game-square");
var boardElements = [];
var player1;
var player2;
var startButton = document.getElementById("start");
var winnerList = document.createElement("div");
var startClick = 0;
var player1TotalWin = 0;
var player2TotalWin = 0;



//Code to create the board & reset the board
var createBoard = function(){
  if(startClick === 0){
    startClick++;
  }else if(startClick === 1){
    var boardGet = document.getElementById("board");
    boardGet.parentNode.removeChild(boardGet);
  }
  document.getElementById("player1-tag").classList.add("hide");
  document.getElementById("player2-tag").classList.add("hide");
  document.getElementById("player1").classList.add("hide");
  document.getElementById("player2").classList.add("hide");
  startButton.classList.add("hide");
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;
  var board = document.createElement("div");
  board.id = "board";
  document.body.appendChild(board);
  for (var i = 0; i < 3; i++){
    var gameRow = document.createElement("div");
    gameRow.className = "game-row";
    board.appendChild(gameRow);
    for(var j = 0; j < 3; j++){
      var gameSquare = document.createElement("span");
      gameSquare.className = "game-square";
      gameSquare.innerHTML = "- ";
      gameRow.appendChild(gameSquare);
    }
  }
  winnerList.className = "winner-list";
  winnerList.classList.add("hide");
  document.body.appendChild(winnerList);
  for(var i = 0; i < allSquares.length; i++){
    allSquares[i].addEventListener("click", flipSymbol);
  }
}


//Code for symbols
var flipSymbol = function(event){
  if(turn === 1){
    event.target.innerHTML= "X ";
    event.target.value = "X";
    for(var i = 0; i < allSquares.length; i++){
      boardElements[i] = allSquares[i].value;
    }
    if(calculateWinner(boardElements) === true){
      player1TotalWin++;
      winnerList.innerHTML = `${player1} is the winner! Current Score: ${player1TotalWin}-${player2TotalWin}`
      startButton.classList.remove("hide");
      winnerList.classList.remove("hide");
    }
    turn++;
  }else if(turn === 2){
    event.target.innerHTML = "O ";
    event.target.value = "O";
    for(var i = 0; i < allSquares.length; i++){
      boardElements[i] = allSquares[i].value;
    }
    if(calculateWinner(boardElements) === true){
      player2TotalWin++;
      winnerList.innerHTML = `${player2} is the winner! Current Score: ${player1TotalWin}-${player2TotalWin}`
      startButton.classList.remove("hide");
      winnerList.classList.remove("hide");
    }
    turn--;
  }
}

//Function to calculate the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }
  }
}

startButton.addEventListener("click", createBoard);