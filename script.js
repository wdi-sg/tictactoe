let board = [];
let boardElArr = [];
const boardSize = 3;
let turn = 0;
let player = 1;
let msgEl = document.querySelector(".turn");
let game = true;

const clickingElement = (e) => {
  turn = turn + 1;

  let index = e.target.id;
  let i = index[0];
  let j = index[1];

  if (turn % 2 == !0) {
    player = 1;
    msgEl.innerText = "Turn: player 2";
    boardElArr[i][j].innerText = "O";
    board[i][j] = "O";
  } else {
    player = 2;
    msgEl.innerText = "Turn: player 1";
    boardElArr[i][j].innerText = "X";
    board[i][j] = "X";
  }
  if (turn >= 5) {
    checkingWinner();
  }
  if (turn === 9) {
    msgEl.innerText = "Game over, there is no winner!!.....Losers!!!!!";
  }
};

const checkingWinner = () => {
  let i = 0;
  let j = 0;
  for (let i = 0; i < boardSize; i++) {
    let j = 0;
    if (
      board[i][j] == board[i][j + 1] &&
      board[i][j] == board[i][j + 2] &&
      board[i][j] !== 0 &&
      board[i][j + 1] !== 0 &&
      board[i][j + 2] !== 0
    ) {
      msgEl.innerText = `Game over, player${player} is the winner`;
      game = false;
    }
  }

  for (let j = 0; j < boardSize; j++) {
    let i = 0;

    if (
      board[i][j] == board[i + 1][j] &&
      board[i][j] == board[i + 2][j] &&
      board[i][j] !== 0 &&
      board[i + 1][j] !== 0 &&
      board[i + 2][j] !== 0
    ) {
      msgEl.innerText = `Game over, player${player} is the winner`;
      game = false;
    }
  }

  if (
    board[i][j] === board[i + 1][j + 1] &&
    board[i][j] === board[i + 2][j + 2] &&
    board[i][j] !== 0
  ) {
    msgEl.innerText = `Game over, player${player} is the winner`;
    game = false;
  }
  if (
    board[i + 2][j] === board[i + 1][j + 1] &&
    board[i + 2][j] === board[i][j + 2] &&
    board[i][j + 2] !== 0
  ) {
    msgEl.innerText = `Game over, player${player} is the winner`;
    game = false;
  }
};

for (let i = 0; i < boardSize; i++) {
  board[i] = [];
  boardElArr[i] = [];
  for (let j = 0; j < boardSize; j++) {
    board[i][j] = 0;
    boardElArr[i][j] = document.createElement("div");
    boardElArr[i][j].id = `${i}${j}`;
    boardElArr[i][j].className = "grid-item";
    document.querySelector(".grid-container").appendChild(boardElArr[i][j]);

    boardElArr[i][j].addEventListener("click", clickingElement);
  }
}
