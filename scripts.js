const PLAYER1_TURN = 0;
const PLAYER2_TURN = 1;

class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
    this.score = 0;
  }

  incrementScore() {
    this.score++;
  }
}

class Game {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.gameBoard = this._initBoard();
    this.player1Board = this._initBoard();
    this.player2Board = this._initBoard();
    this.turn = 0;
  }

  _initBoard() {
    const tempBoard = [];
    for (let i = 0; i < this.boardSize; i++) {
      tempBoard.push(Array(this.boardSize).fill(null))
    }
    return tempBoard;
  }

  toggleTurn() {
    if (this.turn === PLAYER1_TURN) {
      this.turn = PLAYER2_TURN
    } else if (this.turn === PLAYER2_TURN) {
      this.turn = PLAYER1_TURN;
    }
  }

  isPlayer1Turn() {
    return this.turn === PLAYER1_TURN;
  }

  isPlayer2Turn() {
    return this.turn === PLAYER2_TURN;
  }

  _gameSquareLogicHandler(e) {
    const colIndex = e.target.dataset.x;
    const rowIndex = e.target.dataset.y;
    console.log(`Player clicked on tile: [${colIndex}][${rowIndex}]`)
    this.toggleTurn();
    // if player one turn, place player 1 symbol, otherwise place player 2 symbol
  }


  updateBoard() {
  }

  checkWin() {
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





