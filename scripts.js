const PLAYER1 = 1;
const PLAYER2 = 2;
const IS_OCCUPIED = "X";
const IS_EMPTY = null;

class Utils {

}

class Player {
  constructor(name, symbol) {
    this.hasWon = false;
    this.name = name;
    this.symbol = symbol;
    this.score = 0;
  }

  incrementScore() {
    this.score++;
  }
}

class Game {
  constructor(boardSize, howManyInArowToWin = 3) {
    this.boardSize = boardSize;
    this.howManyInARowToWin = howManyInArowToWin;
    this.gameRound = 0; // once game completed, game round++
    this._init();
  }

  _init() {
    this.player1Board = this._initBoard();
    this.player2Board = this._initBoard();
    this.whosTurn = PLAYER1;
    this.winner = null;
  }

  reset() {
    this._init();
  }

  _initBoard() {
    const tempBoard = [];
    for (let i = 0; i < this.boardSize; i++) {
      tempBoard.push(Array(this.boardSize).fill(IS_EMPTY))
    }
    return tempBoard;
  }

  _toggleTurn() {
    console.group("inside toggle turn");
    console.info("toggle turn fired: " + this.whosTurn);
    console.groupEnd();
    if (this.whosTurn === PLAYER1) {
      this.whosTurn = PLAYER2;
    }else if (this.whosTurn === PLAYER2) {
      this.whosTurn = PLAYER1;
    }
  }

  isPlayer1Turn() {
    return this.whosTurn === PLAYER1;
  }

  isPlayer2Turn() {
    return this.whosTurn === PLAYER2;
  }

  _gameSquareLogicHandler(e) {
    const colIndex = e.target.dataset.x;
    const rowIndex = e.target.dataset.y;
    console.info(`Player ${this.whosTurn} clicked on tile: [${colIndex}][${rowIndex}]`);
    this.updateBoard({colIndex, rowIndex} );
    const hasWon = this.checkWin();
    if (hasWon) {
      console.group("The winner is:");
      console.info("player: " + this.whosTurn);
      this.winner = this.whosTurn;
      this._fireHasWonEvent(e);
    }else {
      this._toggleTurn();
    }
  }

  _fireHasWonEvent = e => {
    const hasWinnerEvent = new CustomEvent('has_winner', {
      bubbles:true,
      'detail' : {
        'winner': this.winner,
      }
    });
    console.group("inside fire has won event");
    console.log(hasWinnerEvent);
    console.groupEnd();
    e.target.dispatchEvent(hasWinnerEvent);
  };

  _setPlayerWin(player) {

  }

  updateBoard(indicesToUpdate) {
    const {colIndex, rowIndex} = indicesToUpdate;
    this.isPlayer1Turn()?
      this.player1Board[colIndex][rowIndex] = IS_OCCUPIED
      : this.player2Board[colIndex][rowIndex] = IS_OCCUPIED;
    console.group("updating board.");
    console.table(this.player1Board);
    console.table(this.player2Board);
    console.groupEnd();
  }

  checkWin() {
    const board = this.isPlayer1Turn()? this.player1Board: this.player2Board;
    return this._hasDiagonalRow(board) || this._hasHorizontalRow(board) || this._hasVerticalRow(board);
  }

  _hasHorizontalRow(boardArr) {
    return boardArr.some( row => this._hasInARow(row) )
  }

  _hasVerticalRow(boardArr) {
    for(let i = 0; i < boardArr.length; i++ ) {
      const column = boardArr.map( row => row[i]);
      if (this._hasInARow(column)) return true;
    }
    return false;
  }

  _hasDiagonalRow(boardArr) {
    let topRightToBtmLeft = [];
    let topLeftToBtmRight = [];
    for (let i = 0; i < this.boardSize; i++) {
      topLeftToBtmRight.push(boardArr[i][i]);
      topRightToBtmLeft.push(boardArr[i][this.boardSize-i-1]);
    }
    console.group("inside diagonal row check");
    console.table(topRightToBtmLeft);
    console.table(topLeftToBtmRight);
    console.groupEnd();
    return this._hasInARow(topLeftToBtmRight) || this._hasInARow(topRightToBtmLeft);
  }

  _hasInARow(arr)  {
    let inARowCounter = 0;
    for (let i = 0 ; i < this.boardSize; i++) {
      if (arr[i] === IS_EMPTY ) {
        inARowCounter = 0;
      }
      if (arr[i] === IS_OCCUPIED ) {
        inARowCounter++;
      }
    }
    return inARowCounter >= this.howManyInARowToWin;
  }
}

class UI {
  constructor(game, player1Symbol = 'X', player2Symbol = 'O') {
    this.player1Symbol = player1Symbol;
    this.player2Symbol = player2Symbol;
    this.game = game;
    this.init();
  }

// listen for click events
  init() {
    this.getUIElements();
    this.allGameSquares.forEach(square => square.addEventListener("click", this._squareClickedUIHandler));
    this.startBtn.addEventListener('click', this._startBtnEventListener);
    this.gameBoardElem.addEventListener('has_winner',  this._hasWinnerEventHandler);
  }

  getUIElements() {
    this.gameBoardElem = this._getGameBoardElem();
    this.allGameSquares = this._getAllGameSquares();
    this.startBtn = this._getStartBtn();
  }

  _getGameBoardElem() {
    return document.getElementById("game_board");
  }

  _getAllGameSquares() {
    return document.querySelectorAll('.game_square');
  }

  _getStartBtn() {
    return document.getElementById('start_btn');
  }

  _startBtnEventListener = e => {
    this.game.reset();
    this.clear();
  };


  _hasWinnerEventHandler = e => {
    e.stopPropagation();
    this._disableEmptySquare();
    console.group("has_winner event received by gameboard");
    console.info(e);
    console.groupEnd();
  };

  _squareClickedUIHandler = e => {
    if (this.game.isPlayer1Turn()) {
      this.setPlayer1Square(e.target);
    }else {
      this.setPlayer2Square(e.target);
    }
    this.game._gameSquareLogicHandler(e);
  };

  setPlayer1Square(element) {
    element.classList.remove('is_player_2');
    element.innerText = this.player1Symbol;
    element.classList.add('is_clicked', 'is_player_1');
    this.disableClick(element)
  }

  setPlayer2Square(element) {
    element.classList.remove('is_player1');
    element.innerText = this.player2Symbol;
    element.classList.add('is_clicked', 'is_player_2');
    this.disableClick(element);
  }

  disableClick(element) {
    element.classList.add('is_click_disabled')
  }

  _disableEmptySquare() {
    this.allGameSquares.forEach(square => {
      if (square.textContent === "") {this.disableClick(square)}
    });
  }

  _removeGameBoardElemEventListeners() {
    this.gameBoardElem.removeEventListener('has_winner', this._hasWinnerEventHandler);
  }


  clear() {
    this._removeGameBoardElemEventListeners();
    const squares = document.getElementsByClassName('game_square');
    Array.from(squares).forEach(square => {
      square.classList.value = "game_square";
      square.innerHTML = "";
      square.removeEventListener('click', this._squareClickedUIHandler);
    });
    this._getAllGameSquares().forEach( square => {
    });
    this.init();
  }
}

// todo: when start game is clicked, create a new game
const game = new Game(3);
const ui = new UI(game);
ui.init();





