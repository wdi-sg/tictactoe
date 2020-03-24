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

var logGameState = function () {
  var state = "";
  var cells = document.querySelectorAll(".gamecell");
  var gameStateList = [];
  var gameState = [[],[],[]];

  console.log(cells);
  for (var i = 0; i < cells.length; i++) {
    var childEle = cells[i].firstElementChild;
    if (childEle === null) {
      gameStateList.push(null);
    } else {
      gameStateList.push(childEle.className);
    }
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      gameState[i][j] = gameStateList.shift();
    }
  }
  return gameState;
}

var checkRows = function (game2DArr) {
  var game = game2DArr;
  var rowWin = null;

  for (var i = 0; i < game.length; i++) {
    if (game[i][0] !== null && arrMatch(game[i])) {
      rowWin = game[i][0];
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
      colWin = col[0];
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
      diaWin = dia[i][0];
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

var displayWinner = function (winStr) {
  var announce = document.createElement("h1");
  announce.innerText = winStr;
  var gameBoard = document.querySelector("#gameboard");
  document.querySelector("body").appendChild(announce);
}

var updateGame = async function () {
  var symbol = makeMark(currentSym);
  this.appendChild(symbol);
  var currentGame = logGameState();
  var rowWin = checkRows(currentGame);
  var colWin = checkCols(currentGame);
  var diaWin = checkDias(currentGame);

  console.log("row win: ", rowWin);
  console.log("col win: ", colWin);
  console.log("dia win: ", diaWin);

  if (rowWin) {
    displayWinner(`Row win: ${rowWin}`);
  } else if (colWin) {
    displayWinner(`Column win: ${colWin}`);
  } else if (diaWin) {
    displayWinner(`Diagonal win: ${diaWin}`);
  } else {
    return;
  }
}

var addListeners = function () {
  var cells = document.querySelectorAll(".gamecell");

  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', updateGame);
  }
}

makeBoard();
var currentSym = "cross";
