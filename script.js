window.onload = function () {
  var cells = document.querySelectorAll('.col');
  var result = document.querySelector('.winner');
  var button = document.querySelector('.btn');
  var playerOne = document.querySelector('.player--1');
  var playerTwo = document.querySelector('.player--2');
  var scoreOne = document.querySelector('.score--1');
  var scoreTwo = document.querySelector('.score--2');

  var dimension = 3;
  var winCondition = 3;
  var board;
  var players = [
    {
      name: playerOne.innerHTML,
      score: 0,
      symbol: 'X'
    },
    {
      name: playerTwo.innerHTML,
      score: 0,
      symbol: 'O'
    }
  ];
  var moves;
  var row;
  var col;

  button.addEventListener('click', function () {
    startGame();
  });

  // playerOne = this.prompt('Please enter the name of player 1:');
  // playerTwo = this.prompt('Please enter the name of player 2:');

  startGame();

  function startGame() {
    var markers;
    var i;

    // player = null;
    moves = 0;
    result.style.opacity = 0;
    button.style.display = 'none';

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

  function resetPlayers() {
    players = [
      {
        name: playerOne.innerHTML,
        score: 0,
        symbol: 'X'
      },
      {
        name: playerTwo.innerHTML,
        score: 0,
        symbol: 'O'
      }
    ];
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
