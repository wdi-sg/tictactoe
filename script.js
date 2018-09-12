var playerOne = {name: "Player One", symbol: "X", score: 0};
var playerTwo = {name: "Player Two", symbol: "O", score: 0};

var gameBoard = document.querySelector("#game-board");
var turnStatement = document.querySelector("#whose-turn");
var playerOneScore = document.querySelector("#player-one");
var playerTwoScore = document.querySelector("#player-two");
var startButton = document.querySelector("#start-button");
var newGameButton = document.querySelector("#new-game-button");
var setupStuff = document.querySelector("#setup-stuff");
var aiCheckbox = document.querySelector("#ai-checkbox");

var playerOneStarts;
var playVsAI;
var gamePaused;
var turnOrder;
var squaresClicked;
var totalSquares;
var matchesToWin;

var boardArray = [];

// [y][x]
var createBoard = function (xAxis, yAxis) {
  for (var y = 0; y < yAxis; y++) {
    var newDiv = document.createElement("div");
    gameBoard.appendChild(newDiv);
    newArray = [];
    for (var x = 0; x < xAxis; x++) {
      var newButton = document.createElement("button");
      newDiv.appendChild(newButton);
      newArray.push(newButton);
      newButton.addEventListener("click", gameLogic);
      newButton.classList.add("game-square");

      if (y === 0) {
        newButton.classList.add("top");
      } else if (y === yAxis - 1) {
        newButton.classList.add("bottom");
      }

      if (x === 0) {
        newButton.classList.add("left");
      } else if (x === xAxis - 1) {
        newButton.classList.add("right");
      }
    }
    boardArray.push(newArray);
  }
  totalSquares = boardArray.length * boardArray[0].length;
}

var gameLogic = function (event) {
  if (this.textContent || gamePaused) {
    return;
  }
  this.textContent = turnOrder;

  if (checkWin(turnOrder)) {
    return;
  }

  squaresClicked++;
  if (squaresClicked >= totalSquares) {
    draw ();
    return;
  }

  if (turnOrder === playerOne.symbol) {
    turnOrder = playerTwo.symbol;
    if (playVsAI) {
      aiScript();
      return;
    }
  } else if (turnOrder === playerTwo.symbol) {
    turnOrder = playerOne.symbol;
  }
  updateTurn();
}

var win = function (turnOrder) {
  if (turnOrder === playerOne.symbol) {
    turnStatement.textContent = `${playerOne.name} won!`;
    playerOne.score++;
  } else if (turnOrder === playerTwo.symbol) {
    turnStatement.textContent = `${playerTwo.name} won!`;
    playerTwo.score++;
  }
  gamePaused = true;
  updateScores();
  newGameButton.style.display = "inline-block";
}

var draw = function () {
  gamePaused = true;
  turnStatement.textContent = `It's a draw.`;
  newGameButton.style.display = "inline-block";
}

var updateTurn = function () {
  turnStatement.textContent = `It's ${turnOrder}'s turn.`;
}

var updateScores = function () {
  playerOneScore.innerHTML = `${playerOne.name}<br>Symbol: ${playerOne.symbol}<br>Score: ${playerOne.score}`;
  playerTwoScore.innerHTML = `${playerTwo.name}<br>Symbol: ${playerTwo.symbol}<br>Score: ${playerTwo.score}`;
}

var checkWin = function (turnOrder) {
  rows = boardArray.length;
  columns = boardArray[0].length;
  var offset = matchesToWin - 1;

  // check horizontal
  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < columns - offset; x++) {
      if (boardArray[y][x].textContent === turnOrder) {
        var winCounter = 1;
        for (var z = 1; z <= offset; z++) {
          if (boardArray[y][x + z].textContent === turnOrder) {
            winCounter++;
            if (winCounter >= matchesToWin) {
              win(turnOrder);
              return true;
            }
          } else {
            break;
          }
        }
      }
    }
  }

  //check vertical
  for (var y = 0; y < rows - offset; y++) {
    for (var x = 0; x < columns; x++) {
      if (boardArray[y][x].textContent === turnOrder) {
        var winCounter = 1;
        for (var z = 1; z <= offset; z++) {
          if (boardArray[y + z][x].textContent === turnOrder) {
            winCounter++;
            if (winCounter >= matchesToWin) {
              win(turnOrder);
              return true;
            }
          } else {
            break;
          }
        }
      }
    }
  }

  //check diagonal down
  for (var y = 0; y < rows - offset; y++) {
    for (var x = 0; x < columns - offset; x++) {
      if (boardArray[y][x].textContent === turnOrder) {
        var winCounter = 1;
        for (var z = 1; z <= offset; z++) {
          if (boardArray[y + z][x + z].textContent === turnOrder) {
            winCounter++;
            if (winCounter >= matchesToWin) {
              win(turnOrder);
              return true;
            }
          } else {
            break;
          }
        }
      }
    }
  }

  //check diagonal up
  for (y = offset; y < rows; y++) {
    for (x = 0; x < columns - offset; x++) {
      if (boardArray[y][x].textContent === turnOrder) {
        var winCounter = 1;
        for (z = 1; z <= offset; z++) {
          if (boardArray[y - z][x + z].textContent === turnOrder) {
            winCounter++;
            if (winCounter >= matchesToWin) {
              win(turnOrder);
              return true;
            }
          } else {
            break;
          }
        }
      }
    }
  }
  return false;
}

var newGame = function () {
  for (var y = 0; y < boardArray.length; y++) {
    for (var x = 0; x < boardArray[0].length; x++) {
      boardArray[y][x].textContent = "";
    }
  }

  playerOneStarts = !playerOneStarts;
  if (playerOneStarts) {
    turnOrder = playerOne.symbol;
  } else {
    turnOrder = playerTwo.symbol;
  }

  updateTurn();

  squaresClicked = 0;
  gamePaused = false;
  newGameButton.style.display = "none";

  if (playVsAI && turnOrder === playerTwo.symbol) {
    aiScript();
  }
}

window.onload  = function () {
  startButton.addEventListener("click", setupGame);
  newGameButton.addEventListener("click", newGame);
}

var setupGame = function () {
  var rows = document.querySelector("#rows").value;
  var columns = document.querySelector("#columns").value;
  var matches = document.querySelector("#matches-needed").value;

  createBoard(columns, rows);
  matchesToWin = matches;

  if (aiCheckbox.checked) {
    playVsAI = true;
  }

  playerOne.name = document.querySelector("#p1-name").value;
  playerOne.symbol = document.querySelector("#p1-symbol").value;
  if (playVsAI === true) {
    playerTwo.name = "The AI";
    playerTwo.symbol = "[o.o]";
  } else {
    playerTwo.name = document.querySelector("#p2-name").value;
    playerTwo.symbol = document.querySelector("#p2-symbol").value;
  }

  turnOrder = playerOne.symbol;
  squaresClicked = 0;
  playerOneStarts = true;
  gamePaused = false;
  setupStuff.style.display = "none";

  updateTurn();
  updateScores();
}

var aiScript = function () {

  var gameSquares = document.querySelectorAll(".game-square");
  var emptySquares = [];

  for (var i = 0; i < gameSquares.length; i++) {
    if (!gameSquares[i].textContent) {
      emptySquares.push(gameSquares[i]);
    }
  }

  var random = Math.floor(Math.random()*emptySquares.length);
  emptySquares[random].textContent = turnOrder;

  if (checkWin(turnOrder)) {
    return;
  }

  squaresClicked++;
  if (squaresClicked >= totalSquares) {
    draw ();
    return;
  }

  turnOrder = playerOne.symbol;
  updateTurn();
}
