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
    this.player1Board = this._initBoard();
    this.player2Board = this._initBoard();
    this.whosTurn = PLAYER1;
    this.gameRound = 0; // once game completed, game round++
    this.howManyInARowToWin = howManyInArowToWin;
    this.winner = null;
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
      'detail' : {'winner': this.winner }
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

  _hasInARow(boardArr)  {
    let inARowCounter = 0;
    for (let i = 0 ; i < this.boardSize; i++) {
      if (boardArr[i] === IS_EMPTY ) {
        inARowCounter = 0;
      }
      if (boardArr[i] === IS_OCCUPIED ) {
        inARowCounter++;
      }
    }
    return inARowCounter >= this.howManyInARowToWin;
  }

}

class UI {
  constructor(game, player1Symbol = 'X', player2Symbol = 'O') {
    this.gameBoardElem = document.getElementById("game_board");
    this.gameRows = this.gameBoardElem.children;
    this.allGameSquares = document.querySelectorAll('.game_square');
    this.player1Symbol = player1Symbol;
    this.player2Symbol = player2Symbol;
    this.game = game;
  }

  // listen for click events
  init() {
    this.allGameSquares.forEach(square => square.addEventListener("click", this._squareClickedUIHandler));
    this.gameBoardElem.addEventListener('has_winner',  (e) => {
      this._disAbleEmptySquare();
      console.group("has_winner event received by gameboard");
      console.info(e);
      console.groupEnd();
    })
  }

  _squareClickedUIHandler = e => {
    this.game.isPlayer1Turn() ? this.setPlayer1Square(e.target) : this.setPlayer2Square(e.target);
    this.game._gameSquareLogicHandler(e);
  };

  setPlayer1Square(element) {
    element.innerText = this.player1Symbol;
    element.classList.add('is_clicked', 'is_player_1');
    this.disableClick(element)
  }

  setPlayer2Square(element) {
    element.innerText = this.player2Symbol;
    element.classList.add('is_clicked', 'is_player_2');
    this.disableClick(element);
  }

  disableClick(element) {
    element.classList.add('is_click_disabled')
  }

  _disAbleEmptySquare() {
    this.allGameSquares.forEach(square => {
      if (square.textContent === "") {this.disableClick(square)}
    });
  }

  enableClick(element) {
    element.classList.remove('is_click_disabled');
  }

  clear() {
    this.allGameSquares.forEach(square => {
      square.textContent = "";
      square.classList.remove('is_player1', "is_player2", "is_clicked");
      this.enableClick(square);
    });
  }
}

// todo: when start game is clicked, create a new game
const game = new Game(3);
const ui = new UI(game);
ui.init();





