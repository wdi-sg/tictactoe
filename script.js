let turn = "o";
let numberOfTurns = 0;
let playerTurn = 1;
let arr = [[], [], []];

const makeBoard = document.createElement("div");
makeBoard.className = "board";
document.body.append(makeBoard);

const board = document.querySelector(".board");
for (let i = 0; i < 3; i++) {
  const makeRow = document.createElement("div");
  makeRow.className = "row";
  board.appendChild(makeRow);
}

const rows = document.querySelectorAll(".row");
for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < rows.length; j++) {
    const makeSquare = document.createElement("div");
    makeSquare.className = "square";
    rows[i].appendChild(makeSquare);
  }
}

const squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function(event) {
    if (
      playerTurn === 1 &&
      numberOfTurns != 9 &&
      event.target.innerHTML === ""
    ) {
      event.target.innerHTML = "o";
      turn = "x";
      playerTurn = 2;
      numberOfTurns++;
      if (checkPlayerOneWon()) {
        console.log("player 1 won");
      }
    } else if (
      playerTurn === 2 &&
      numberOfTurns != 9 &&
      event.target.innerHTML === ""
    ) {
      event.target.innerHTML = "x";
      turn = "o";
      playerTurn = 1;
      numberOfTurns++;
      if (checkPlayerTwoWon()) {
        console.log("player 2 won");
      }
    } else {
      return;
    }
  });
}

const checkPlayerOneWon = function() {
  if (
    (squares[0].textContent === "o" &&
      squares[1].textContent === "o" &&
      squares[2].textContent === "o") ||
    (squares[3].textContent === "o" &&
      squares[4].textContent === "o" &&
      squares[5].textContent === "o") ||
    (squares[6].textContent === "o" &&
      squares[7].textContent === "o" &&
      squares[8].textContent === "o") ||
    (squares[0].textContent === "o" &&
      squares[3].textContent === "o" &&
      square[6].textContent === "o") ||
    (squares[1].textContent === "o" &&
      squares[4].textContent === "o" &&
      squares[7].textContent === "o") ||
    (squares[2].textContent === "o" &&
      squares[5].textContent === "o" &&
      squares[8].textContent === "o") ||
    (squares[0].textContent === "o" &&
      squares[4].textContent === "o" &&
      squares[8].textContent === "o") ||
    (squares[2].textContent === "o" &&
      squares[4].textContent === "o" &&
      squares[6].textContent === "o")
  ) {
    return true;
  }
};

const checkPlayerTwoWon = function() {
  if (
    (squares[0].textContent === "x" &&
      squares[1].textContent === "x" &&
      squares[2].textContent === "x") ||
    (squares[3].textContent === "x" &&
      squares[4].textContent === "x" &&
      squares[5].textContent === "x") ||
    (squares[6].textContent === "x" &&
      squares[7].textContent === "x" &&
      squares[8].textContent === "x") ||
    (squares[0].textContent === "x" &&
      squares[3].textContent === "x" &&
      square[6].textContent === "x") ||
    (squares[1].textContent === "x" &&
      squares[4].textContent === "x" &&
      squares[7].textContent === "x") ||
    (squares[2].textContent === "x" &&
      squares[5].textContent === "x" &&
      squares[8].textContent === "x") ||
    (squares[0].textContent === "x" &&
      squares[4].textContent === "x" &&
      squares[8].textContent === "x") ||
    (squares[2].textContent === "x" &&
      squares[4].textContent === "x" &&
      squares[6].textContent === "x")
  ) {
    return true;
  }
};
