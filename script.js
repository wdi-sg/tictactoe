window.onload = function () {
  var board = document.querySelector('.board');
  var result = document.querySelector('.winner');
  var turn = document.querySelector('.turn');
  var button = document.querySelector('.btn');
  var playerOne = document.querySelector('.player--1');
  var playerTwo = document.querySelector('.player--2');
  var symbolOne = document.querySelector('.symbol--1');
  var symbolTwo = document.querySelector('.symbol--2');
  var scoreOne = document.querySelector('.score--1');
  var scoreTwo = document.querySelector('.score--2');
  var dimension = 3;
  var winCondition = 3;
  var gamePlay;
  var moves;
  var row;
  var col;

  setup();
  startGame();

  function setup() {
    displayBoard();

    playerOne.addEventListener('change', updateTurn);
    playerTwo.addEventListener('change', updateTurn);
    symbolOne.addEventListener('click', switchSymbol);
    symbolTwo.addEventListener('click', switchSymbol);

    button.addEventListener('click', function () {
      startGame();
    });
  }

  function startGame() {
    moves = 0;
    hideResult();
    hideButton();
    initializeCells();
    resetGamePlay();
    updateTurn();
  }

  function hideResult() {
    result.style.opacity = 0;
  }

  function hideButton() {
    button.style.display = 'none';
  }

  function displayBoard() {
    var rowElement;
    var colElement;
    var i;
    var j;

    for (i = 0; i < dimension; i++) {
      rowElement = document.createElement('div');
      rowElement.classList.add('row');
      rowElement.style.flex = '0 0 calc(100%/' + dimension + ')';

      for (j = 0; j < dimension; j++) {
        colElement = document.createElement('div');
        colElement.classList.add('col');
        colElement.style.flex = '0 0 calc(100%/' + dimension + ')';
        colElement.id = i * dimension + j;
        rowElement.appendChild(colElement);
      }

      board.appendChild(rowElement);
    }
  }

  function initializeCells() {
    var cells = document.querySelectorAll('.col');
    var markers = document.querySelectorAll('.marker');
    var i;

    for (i = 0; i < markers.length; i++) {
      markers[i].remove();
    }

    for (i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', markerHandler);
    }
  }

  function resetGamePlay() {
    var i;

    gamePlay = new Array(dimension);
    for (i = 0; i < dimension; i++) {
      gamePlay[i] = new Array(dimension);
    }
  }

  function updateTurn() {
    turn.style.opacity = 1;
    turn.innerHTML = getCurrentPlayer() + '\'s turn';
  }

  function getCurrentPlayer() {
    return moves % 2 === 0 ? playerOne.value : playerTwo.value;
  }

  function getCurrentSymbol() {
    return moves % 2 === 0 ? symbolOne.innerHTML : symbolTwo.innerHTML;
  }

  function getPreviousPlayer() {
    return moves % 2 === 0 ? playerTwo.value : playerOne.value;
  }

  function getPreviousSymbol() {
    return moves % 2 === 0 ? symbolTwo.innerHTML : symbolOne.innerHTML;
  }

  function setPreviousScore() {
    if (moves % 2 === 0) {
      scoreTwo.innerHTML = parseInt(scoreTwo.innerHTML) + 1;
    } else {
      scoreOne.innerHTML = parseInt(scoreOne.innerHTML) + 1;
    }
  }

  function switchSymbol() {
    symbolOne.innerHTML = symbolOne.innerHTML === 'O' ? 'X' : 'O';
    symbolTwo.innerHTML = symbolTwo.innerHTML === 'O' ? 'X' : 'O';
  }

  function markerHandler() {
    row = getRowIndex(this.id);
    col = getColIndex(this.id);

    // Add a marker only if the cell is empty.
    if (!this.innerHTML) {
      addMarkerToBoard(this);
      moves++;
      if (checkWinState()) {
        hideTurn();
        declareWinner();
        updateScore();
      } else {
        updateTurn();
        if (moves === dimension * dimension) {
          hideTurn();
          draw();
        }
      }
    }
  }

  function showButton() {
    button.style.display = 'inline-block';
  }

  function draw() {
    result.innerHTML = 'Draw!';
    result.style.opacity = 1;
  }

  function hideTurn() {
    turn.style.opacity = 0;
  }

  function addMarkerToBoard(cell) {
    var marker = document.createElement('span');
    marker.innerText = getCurrentSymbol();
    marker.classList.add('marker');
    cell.appendChild(marker);
    gamePlay[row][col] = getCurrentSymbol();
  }

  function getRowIndex(id) {
    return Math.floor(id / dimension);
  }

  function getColIndex(id) {
    return id % dimension;
  }

  function checkWinState() {
    return checkRow() || checkColumn() || checkDiagonal();
  }

  function checkRow() {
    var count = 1;
    var j;

    for (j = col - 1; j >= 0; j--) {
      if (gamePlay[row][j] !== gamePlay[row][j + 1]) {
        break;
      }

      count++;
    }

    for (j = col + 1; j < dimension; j++) {
      if (gamePlay[row][j] !== gamePlay[row][j - 1]) {
        break;
      }

      count++;
    }

    return count >= winCondition;
  }

  function checkColumn() {
    var count = 1;
    var i;

    for (i = row - 1; i >= 0; i--) {
      if (gamePlay[i][col] !== gamePlay[i + 1][col]) {
        break;
      }

      count++;
    }

    for (i = row + 1; i < dimension; i++) {
      if (gamePlay[i][col] !== gamePlay[i - 1][col]) {
        break;
      }

      count++;
    }

    return count >= winCondition;
  }

  function checkDiagonal() {
    return checkTopLeftToBottomRight() || checkTopRightToBottomLeft();
  }

  function checkTopLeftToBottomRight() {
    var count = 1;
    var i;

    if (row !== col) {
      return false;
    }

    for (i = row - 1; i >= 0; i--) {
      if (gamePlay[i][i] !== gamePlay[i + 1][i + 1]) {
        break;
      }

      count++;
    }

    for (i = row + 1; i < dimension; i++) {
      if (gamePlay[i][i] !== gamePlay[i - 1][i - 1]) {
        break;
      }

      count++;
    }

    return count >= winCondition;
  }

  function checkTopRightToBottomLeft() {
    var count = 1;
    var i;
    var colIndex;

    if (row + col !== dimension - 1) {
      return false;
    }

    for (i = row - 1; i >= 0; i--) {
      colIndex = dimension - i - 1;

      if (gamePlay[i][colIndex] !== gamePlay[i + 1][colIndex - 1]) {
        break;
      }

      count++;
    }

    for (i = row + 1; i < dimension; i++) {
      colIndex = dimension - i - 1;

      if (gamePlay[i][colIndex] !== gamePlay[i - 1][colIndex + 1]) {
        break;
      }

      count++;
    }

    return count >= winCondition;
  }

  function declareWinner() {
    showResult();
    disableCells();
    showButton();
  }

  function showResult() {
    result.innerHTML = 'Winner: ' + getPreviousPlayer() + ' (' + getPreviousSymbol() + ')';
    result.style.opacity = 1;
  }

  function disableCells() {
    var cells = document.querySelectorAll('.col');
    var i;

    for (i = 0; i < cells.length; i++) {
      cells[i].removeEventListener('click', markerHandler);
    }
  }

  function updateScore() {
    setPreviousScore();
  }
};
