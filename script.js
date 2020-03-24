var turn = 1;
var allSquares = document.getElementsByClassName("game-square");
var boardElements = [];

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
var winnerList = document.createElement("div");
winnerList.className = "winner-list";
document.body.appendChild(winnerList);



var flipSymbol = function(event){
  if(turn === 1){
    event.target.innerHTML= "X ";
    event.target.value = "X";
    for(var i = 0; i < allSquares.length; i++){
      boardElements[i] = allSquares[i].value;
    }
    if(calculateWinner(boardElements) === true){
      winnerList.innerHTML = "X is the winner!"
    }
    turn++;
  }else if(turn === 2){
    event.target.innerHTML = "O ";
    event.target.value = "O";
    for(var i = 0; i < allSquares.length; i++){
      boardElements[i] = allSquares[i].value;
    }
    if(calculateWinner(boardElements) === true){
      winnerList.innerHTML = "O is the winner!"
    }
    turn--;
  }
}

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

for(var i = 0; i < allSquares.length; i++){
  allSquares[i].addEventListener("click", flipSymbol);
}