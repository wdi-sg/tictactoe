var turn = 1;
var counter = 0;

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

var flipSymbol = function(event){
  if(turn === 1){
    event.target.innerHTML= "X ";
    turn++;
  }else if(turn === 2){
    event.target.innerHTML = "O ";
    turn--;
  }
}

var allSquares = document.getElementsByClassName("game-square");
for(var i = 0; i < allSquares.length; i++){
  allSquares[i].addEventListener("click", flipSymbol);
}