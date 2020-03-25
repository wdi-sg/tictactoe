var player1 = {name: "p1", sym: "x"};
var player2 = {name: "p2", sym: "o"};

var currentPlayer = player1;

var gameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]];

var promptNamesSyms = function() {
  player1.name = prompt("Please enter player 1's name:", "Player 1");
  player1.sym = prompt("Please enter a symbol to use", "×");
  player2.name = prompt("Please enter player 2's name:", "Player 2");
  player2.sym = prompt("Please enter a symbol to use", "⭕");
}

var makeBoard = function () {
  var body = document.querySelector("body");
  var gameBoard = document.createElement("div")
  gameBoard.setAttribute("id", "gameboard");

  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      var gameCell = document.createElement("div");
      gameCell.setAttribute("class", "gamecell");
      gameCell.setAttribute("data-row", row);
      gameCell.setAttribute("data-col", col);
      gameBoard.appendChild(gameCell);
   }
  }

  body.appendChild(gameBoard);
  addCellListeners();
}

var startButton = function (action) {
  if (action === "create") {
    var startButton = document.createElement("button");
    startButton.id = "start-button";
    startButton.innerText = "Start Game";
    startButton.addEventListener("click", clickStart);
    var body = document.querySelector("body");
    body.insertBefore(startButton, document.querySelector("#gameboard"));
  } else if (action === "show") {
    var startButton = document.querySelector("#start-button");
    startButton.innerText = "Restart Game";
    startButton.style.visibility = "visible";
  } else {
    var startButton = document.querySelector("#start-button");
    startButton.style.visibility = "hidden";
  }
}

var clickStart = function () {
  currentPlayer = player1;
  gameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]];
  var board = document.querySelector("#gameboard");
  document.body.innerHTML = "";
  makeBoard();
  startButton("create");
  promptNamesSyms();
}

var addCellListeners = function () {
  var cells = document.querySelectorAll(".gamecell");

  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', updateGame);
  }
}

var makeMark = function (sym) {
  var mark = document.createElement("div");
  mark.setAttribute("class", sym);

  console.log("making: ", sym);
  switch (sym) {
  case player1.sym:
    mark.innerText = player1.sym;
    break;
  case player2.sym:
    mark.innerText = player2.sym;
    break;
  }
  return mark;
}

var checkRows = function (game2DArr) {
  var game = game2DArr;
  var rowWin = null;

  for (var i = 0; i < game.length; i++) {
    if (game[i][0] !== null && arrMatch(game[i])) {
      rowWin = currentPlayer.name;
      break;
    }
  }
  return rowWin;
}

var checkCols = function (game2DArr) {
  var game = game2DArr;
  var colWin = null;

  for (var i = 0; i < game[0].length; i++) {
    var col = [];

    for (var j = 0; j < game.length; j++) {
      col.push(game[j][i]);
    }
    if (col[0] !== null && arrMatch(col)) {
      colWin = currentPlayer.name;
      break;
    }
  }
  return colWin;
}

var checkDias = function (game2DArr) {
  var game = game2DArr;
  var diaWin = null;
  var dia1 = [];
  var dia2 = [];

  for (var i = 0; i < game[0].length; i++) {
    dia1.push(game[i][i]);
    dia2.push(game[i][game.length - 1 - i]);
  }

  var dia = [dia1, dia2];

  for (var i = 0; i < dia.length; i++) {
    if (dia[i][0] !== null && arrMatch(dia[i])) {
      diaWin = currentPlayer.name;
      break;
    }
  }
  return diaWin;
}

var arrMatch = function (arr) {
  var arrMatch = true;
  var ele = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== ele) {
      arrMatch = false;
      break;
    }
  }
  return arrMatch;
}

var fullGame = function (game) {
  var end = true;

  for (var i = 0; i < game.length; i++) {
    for (var j = 0; j < game[0].length; j++) {
      if (game[i][j] === null) {
        end = false;
        return end;
      }
    }
  }
  return end;
}

var displayText = function (str, color) {
  if (document.querySelector("#announce") === null) {
    var announce = document.createElement("h1");
    announce.id = "announce";
    announce.innerText = str;
    announce.style.color = color;

    var gameBoard = document.querySelector("#gameboard");
    document.querySelector("body").appendChild(announce);
  } else {
    var announce = document.querySelector("#announce");
    announce.innerText = str;
    announce.style.color = color;
  }
}

// gameCell.setAttribute("data-row", row);
// gameCell.setAttribute("data-col", col);

var updateGame = function () {
  displayText(`${currentPlayer.name} just played`);

  startButton("hide");
  var row = this.dataset.row;
  var col = this.dataset.col;
  if (gameState[row][col] !== null) {
    console.log("Already played");
    return;
  }
  gameState[row][col] = currentPlayer.sym;

  var symbol = makeMark(currentPlayer.sym);
  this.appendChild(symbol);

  if (fullGame(gameState)) {
    displayText("Game over; neither side won.", "purple");
    addStartButton();
  }

  var rowWin = checkRows(gameState);
  var colWin = checkCols(gameState);
  var diaWin = checkDias(gameState);

  if (rowWin) {
    displayText(`Row win: ${rowWin}`, "#0ca204");
    startButton("show");
  } else if (colWin) {
    displayText(`Column win: ${colWin}`, "#0ca204");
    startButton("show");
  } else if (diaWin) {
    displayText(`Diagonal win: ${diaWin}`, "#0ca204");
    startButton("show");
  }

  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

makeBoard();
startButton("create");
promptNamesSyms();
