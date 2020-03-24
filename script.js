let turn = "O";
let numberOfTurns = 0;
let playerTurn = 1;
let squares;
let gameStarted = false;
let playerOneName;
let playerTwoName;
let playerOneScore = 0;
let playerTwoScore = 0;
let enteredPlayerOneName = false;
let enteredPlayerTwoName = false;

if (!gameStarted) {
  createButton();
}

function createButton() {
  document.body.textContent = "";
  const startButton = document.createElement("button");
  startButton.textContent = "Click to start!";
  document.body.appendChild(startButton);
  startButton.addEventListener("click", function() {
    if (!enteredPlayerOneName && !enteredPlayerTwoName) {
      document.body.removeChild(startButton);
      const playerOneInput = document.createElement("input");
      playerOneInput.setAttribute("placeholder", "Player one name");
      document.body.appendChild(playerOneInput);
      playerOneInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
          playerOneName = playerOneInput.value;
          document.body.removeChild(playerOneInput);
          const playerTwoInput = document.createElement("input");
          playerTwoInput.setAttribute("placeholder", "Player two name");
          document.body.appendChild(playerTwoInput);
          playerTwoInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
              playerTwoName = playerTwoInput.value;
              document.body.removeChild(playerTwoInput);
              enteredPlayerOneName = true;
              enteredPlayerTwoName = true;
              drawBoard();
            }
          });
        }
      });
      gameStarted = true;
    } else {
      document.body.removeChild(startButton);
      drawBoard();
    }
  });
}

const drawBoard = function() {
  const h1 = document.createElement("h1");
  h1.className = "h1";
  h1.textContent = "Ugly Tic-Tac-Toe";
  document.body.append(h1);

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

  squares = document.querySelectorAll(".square");

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(event) {
      if (
        playerTurn === 1 &&
        numberOfTurns != 9 &&
        event.target.innerHTML === ""
      ) {
        event.target.innerHTML = "O";
        turn = "X";
        playerTurn = 2;
        numberOfTurns++;
        if (checkPlayerOneWon()) {
          playerTurn = 1;
          numberOfTurns = 0;
          playerOneScore++;
          alert(`
          ${playerOneName} won! 
          ${playerOneName}'s score: ${playerOneScore} 
          ${playerTwoName}'s score: ${playerTwoScore}`);
          createButton();
        }
      } else if (
        playerTurn === 2 &&
        numberOfTurns != 9 &&
        event.target.innerHTML === ""
      ) {
        event.target.innerHTML = "X";
        turn = "O";
        playerTurn = 1;
        numberOfTurns++;
        if (checkPlayerTwoWon()) {
          playerTurn = 1;
          numberOfTurns = 0;
          playerTwoScore++;
          alert(`
          ${playerTwoName} won!
          ${playerOneName}'s score: ${playerOneScore} 
          ${playerTwoName}'s score: ${playerTwoScore}`);
          createButton();
        }
      } else {
        console.log("happened");
        drawBoard();
      }
    });
  }

  const checkPlayerOneWon = function() {
    if (
      (squares[0].textContent === "O" &&
        squares[1].textContent === "O" &&
        squares[2].textContent === "O") ||
      (squares[3].textContent === "O" &&
        squares[4].textContent === "O" &&
        squares[5].textContent === "O") ||
      (squares[6].textContent === "O" &&
        squares[7].textContent === "O" &&
        squares[8].textContent === "O") ||
      (squares[0].textContent === "O" &&
        squares[3].textContent === "O" &&
        squares[6].textContent === "O") ||
      (squares[1].textContent === "O" &&
        squares[4].textContent === "O" &&
        squares[7].textContent === "O") ||
      (squares[2].textContent === "O" &&
        squares[5].textContent === "O" &&
        squares[8].textContent === "O") ||
      (squares[0].textContent === "O" &&
        squares[4].textContent === "O" &&
        squares[8].textContent === "O") ||
      (squares[2].textContent === "O" &&
        squares[4].textContent === "O" &&
        squares[6].textContent === "O")
    ) {
      return true;
    }
  };

  const checkPlayerTwoWon = function() {
    if (
      (squares[0].textContent === "X" &&
        squares[1].textContent === "X" &&
        squares[2].textContent === "X") ||
      (squares[3].textContent === "X" &&
        squares[4].textContent === "X" &&
        squares[5].textContent === "X") ||
      (squares[6].textContent === "X" &&
        squares[7].textContent === "X" &&
        squares[8].textContent === "X") ||
      (squares[0].textContent === "X" &&
        squares[3].textContent === "X" &&
        squares[6].textContent === "X") ||
      (squares[1].textContent === "X" &&
        squares[4].textContent === "X" &&
        squares[7].textContent === "X") ||
      (squares[2].textContent === "X" &&
        squares[5].textContent === "X" &&
        squares[8].textContent === "X") ||
      (squares[0].textContent === "X" &&
        squares[4].textContent === "X" &&
        squares[8].textContent === "X") ||
      (squares[2].textContent === "X" &&
        squares[4].textContent === "X" &&
        squares[6].textContent === "X")
    ) {
      return true;
    }
  };
};
