window.onload = function () {
  var cells = document.querySelectorAll('.col');
  var result = document.querySelector('.winner');
  var turn = document.querySelector('.turn');
  var button = document.querySelector('.btn');
  var playerOne = document.querySelector('.player--1');
  var playerTwo = document.querySelector('.player--2');
  var scoreOne = document.querySelector('.score--1');
  var scoreTwo = document.querySelector('.score--2');

  var players = [
    {
      name: playerOne.value,
      score: 0,
      symbol: 'X'
    },
    {
      name: playerTwo.value,
      score: 0,
      symbol: 'O'
    }
  ];

  var dimension = 3;
  var winCondition = 3;
  var board;
  var moves;
  var row;
  var col;

  startGame();

  function startGame() {
    var markers;
    var i;

    moves = 0;
    result.style.opacity = 0;
    button.style.display = 'none';
    button.addEventListener('click', function () {
      startGame();
    });

    turn.innerHTML = players[0].name + '\'s turn';

    playerOne.addEventListener('change', updatePlayerName);
    playerTwo.addEventListener('change', updatePlayerName);

    markers = document.querySelectorAll('.marker');
    for (i = 0; i < markers.length; i++) {
      markers[i].remove();
    }

    for (i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', markerHandler);
    }

    board = new Array(dimension);
    for (i = 0; i < dimension; i++) {
      board[i] = new Array(dimension);
    }
  }

  function updatePlayerName() {
    players[0].name = playerOne.value;
    players[1].name = playerTwo.value;
    turn.innerHTML = players[moves % 2].name + '\'s turn';
  }

  function markerHandler(event) {
    var cell = event.target;
    row = getRowIndex(event.target.id);
    col = getColIndex(event.target.id);

    // Add a marker only if the cell is empty.
    if (!cell.innerHTML) {
      addMarkerToBoard(cell);
      checkWinState();
      moves++;
      turn.innerHTML = players[moves % 2].name + '\'s turn';
    }
  }

  function addMarkerToBoard(cell) {
    var marker;
    var player;

    // player = (!player || player === 'O') ? 'X' : 'O';
    player = players[moves % 2];
    marker = document.createElement('span');
    marker.innerText = player.symbol;
    marker.classList.add('marker');
    cell.appendChild(marker);
    board[row][col] = player.symbol;
  }

  function getRowIndex(id) {
    return Math.floor(id / 3);
  }

  function getColIndex(id) {
    return id % 3;
  }

  function checkWinState() {
    if (checkRow() || checkColumn() || checkDiagonal()) {
      declareWinner();
      updateScore();
    } else {
      if (moves === dimension * dimension - 1) {
        button.style.display = 'inline-block';
        result.innerHTML = 'Draw!';
        result.style.opacity = 1;
      }
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

  function declareWinner() {
    var i;
    var winner = players[moves % 2];

    winner.score++;
    result.innerHTML = 'Winner: ' + winner.name + ' (' + winner.symbol + ')';
    result.style.opacity = 1;

    for (i = 0; i < cells.length; i++) {
      cells[i].removeEventListener('click', markerHandler);
    }

    button.style.display = 'inline-block';
  }

  function updateScore() {
    scoreOne.innerHTML = players[0].score;
    scoreTwo.innerHTML = players[1].score;
  }
};
