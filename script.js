var makeBoard = function () {
  var body = document.querySelector("body");
  var gameBoard = document.createElement("div")
  gameBoard.setAttribute("id", "gameboard");

  for (var i = 0; i < 9; i++) {
    var gameCell = document.createElement("div");
    gameCell.setAttribute("class", "gamecell");
    gameBoard.appendChild(gameCell);
  }

  body.appendChild(gameBoard);
  addListeners();
}

var makeMark = function (sym) {
  var mark = document.createElement("div");
  mark.setAttribute("class", sym);

  switch (sym) {
  case "cross":
    mark.innerText = "❌";
    currentSym = "circle";
    break;
  case "circle":
    mark.innerText = "⭕";
    currentSym = "cross";
    break;
  }
  return mark;
}

var updateGame = function () {
  var symbol = makeMark(currentSym);
  this.appendChild(symbol);
}

var addListeners = function () {
  var cells = document.querySelectorAll(".gamecell");

  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', updateGame);
  }
}

makeBoard();
var currentSym = "cross";
