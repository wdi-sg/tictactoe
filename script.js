window.onload = function () {
  var cells = document.querySelectorAll('.col');
  var result = document.querySelector('.result');
  var dimension = 3;
  var winCondition = 3;
  var board;
  var player;
  var row;
  var col;

  startGame();

  function startGame() {
    var i;

    result.style.opacity = 0;

    for (i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', markerHandler);
    }

    // Create a matrix to represent the board.
    board = new Array(dimension);
    for (i = 0; i < dimension; i++) {
      board[i] = new Array(dimension);
    }
  }

  function markerHandler(event) {
    var cell = event.target;
    row = getRowIndex(event.target.id);
    col = getColIndex(event.target.id);

    // Add a marker only if the cell is empty.
    if (!cell.innerHTML) {
      addMarkerToBoard(cell);
      checkWinState();
    }
  }

  function addMarkerToBoard(cell) {
    var marker;

    player = (!player || player === 'O') ? 'X' : 'O';
    marker = document.createElement('span');
    marker.innerText = player;
    cell.appendChild(marker);
    board[row][col] = player;
  }

  function getRowIndex(id) {
    return Math.floor(id / 3);
  }

  function getColIndex(id) {
    return id % 3;
  }

  function checkWinState() {
    if (checkRow() || checkColumn() || checkDiagonal()) {
      declareWinner(player);
    }
  }

  function checkRow() {
    var count = 1;
    var j;

    for (j = col - 1; j >= 0; j--) {
      if (board[row][j] !== board[row][j + 1]) {
        break;
      }

      count++;
    }

    for (j = col + 1; j < dimension; j++) {
      if (board[row][j] !== board[row][j - 1]) {
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
      if (board[i][col] !== board[i + 1][col]) {
        break;
      }

      count++;
    }

    for (i = row + 1; i < dimension; i++) {
      if (board[i][col] !== board[i - 1][col]) {
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
      if (board[i][i] !== board[i + 1][i + 1]) {
        break;
      }

      count++;
    }

    for (i = row + 1; i < dimension; i++) {
      if (board[i][i] !== board[i - 1][i - 1]) {
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

      if (board[i][colIndex] !== board[i + 1][colIndex - 1]) {
        break;
      }

      count++;
    }

    for (i = row + 1; i < dimension; i++) {
      colIndex = dimension - i - 1;

      if (board[i][colIndex] !== board[i - 1][colIndex + 1]) {
        break;
      }

      count++;
    }

    return count >= winCondition;
  }

  function declareWinner(player) {
    var i;

    result.innerHTML = 'Winner: ' + player;
    result.style.opacity = 1;

    for (i = 0; i < cells.length; i++) {
      cells[i].removeEventListener('click', markerHandler);
    }
  }
};
