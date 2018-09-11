var container = document.querySelector("#container");

var board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

var space = 100;
var size = 10;
var createBoard = function(){
  for(var row = 0; row < board.length; row++){
    for(var col = 0; col < board[0].length; col++){
      var square = document.createElement("div");
      square.setAttribute("class", "square");
      container.appendChild(square);

      square.style.top = row * (space + size) +"px";
      square.style.left = col * (space + size) +"px" ;
    }
  }
}

createBoard();
