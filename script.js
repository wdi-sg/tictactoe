var player1 = {name: "Player 1", sym: "×"};
var player2 = {name: "Player 2", sym: "⭕"};

var gridSize = 4;
var winLength = 3;

var currentPlayer = player1;
var gameState = [];
for (var row = 0; row < gridSize; row++) {
  gameState.push([]);
  for (var col = 0; col < gridSize; col++) {
    gameState[row][col] = null;
  }
}


var buildPrompts = function() {
  var body = document.querySelector("body");
  var form = document.createElement("div");
  form.id = "player-form";

  var info = ["p1-name", "p1-sym", "p2-name", "p2-sym"];
  for (var i = 0; i< info.length; i++) {
    var inputField = document.createElement("input");
    inputField.classList.add("input");
    inputField.id = info[i];
    var inputLabel = document.createElement("label");
    inputLabel.classList.add("label");
    inputLabel.setAttribute("for", info[i]);
    form.appendChild(inputLabel);
    form.appendChild(inputField);
  }
  body.insertBefore(form, document.querySelector("#gameboard"));
  document.querySelector("[for='p1-name']").innerText = "Player 1 name";
  document.querySelector("[for='p1-sym']").innerText = "Player 1 symbol";
  document.querySelector("[for='p2-name']").innerText = "Player 2 name";
  document.querySelector("[for='p2-sym']").innerText = "Player 2 symbol";
  document.querySelector("#p1-name").value = player1.name;
  document.querySelector("#p1-sym").value = player1.sym;
  document.querySelector("#p2-name").value = player2.name;
  document.querySelector("#p2-sym").value = player2.sym;

}

var makeBoard = function () {
  var body = document.querySelector("body");
  var gameBoard = document.createElement("div")
  gameBoard.setAttribute("id", "gameboard");

  for (var row = 0; row < gridSize; row++) {
    for (var col = 0; col < gridSize; col++) {
      var gameCell = document.createElement("div");
      gameCell.classList.add("gamecell");
      gameCell.setAttribute("data-row", row);
      gameCell.setAttribute("data-col", col);
      gameCell.style.width = `${600/gridSize - 5}px`;
      gameCell.style.height = `${600/gridSize - 5}px`;
      gameBoard.appendChild(gameCell);
   }
  }

  body.appendChild(gameBoard);

  var lCells = document.querySelectorAll("[data-col='0']");
  for (var i = 0; i < lCells.length; i++) {
    lCells[i].style.marginLeft = "-5px";
  }
  var rCells = document.querySelectorAll(`[data-col='${gridSize-1}']`);
  for (var i = 0; i < rCells.length; i++) {
    rCells[i].style.marginRight = "-5px";
  }
  var tCells = document.querySelectorAll("[data-row='0']");
  for (var i = 0; i < tCells.length; i++) {
    tCells[i].style.marginTop = "-5px";
  }
  var bCells = document.querySelectorAll(`[data-row='${gridSize-1}']`);
  for (var i = 0; i < bCells.length; i++) {
    bCells[i].style.marginBottom = "-5px";
  }

  addCellListeners();
}

var addCellListeners = function () {
  var cells = document.querySelectorAll(".gamecell");

  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', updateGame);
  }
}

var styleCells = function () {
  var cells = document.querySelectorAll(".gamecell");

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
  player1.name = document.querySelector("#p1-name").value;
  player1.sym = document.querySelector("#p1-sym").value;
  player2.name = document.querySelector("#p2-name").value;
  player2.sym = document.querySelector("#p2-sym").value;

  currentPlayer = player1;
  gameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]];
  var board = document.querySelector("#gameboard");
  document.body.innerHTML = "";
  makeBoard();
  startButton("create");
}


var makeMark = function (sym) {
  var mark = document.createElement("div");
  mark.classList.add("mark");

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
    displayText(`Row win: ${currentPlayer.name}'s ${currentPlayer.sym}s`, "#0ca204");
    startButton("show");
  } else if (colWin) {
    displayText(`Column win: ${currentPlayer.name}'s ${currentPlayer.sym}s`, "#0ca204");
    startButton("show");
  } else if (diaWin) {
    displayText(`Diagonal win: ${currentPlayer.name}'s ${currentPlayer.sym}s`, "#0ca204");
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
buildPrompts();
