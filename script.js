// true is X's turn, false is O's turn
var turnOrder = "X";
var winner = "";

var buttons = document.querySelectorAll("button");
var turnStatement = document.querySelector("#whose-turn");

var getGrid = function () {
  var output = []
  for (var i = 0; i < buttons.length; i++) {
    output.push(buttons[i].textContent);
  }
  return output;
}

var gameLogic = function (event) {
  if (this.textContent === "X" || this.textContent === "O") {
    console.log("Clicked on an already played square.");
  } else if (!winner) {
    this.textContent = turnOrder;

    if (!checkWin(turnOrder)) {
      if (turnOrder === "X") {
        turnOrder = "O";
      } else if (turnOrder === "O"){
        turnOrder = "X";
      }
      turnStatement.textContent = `It's ${turnOrder}'s turn.`;
    }
  }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", gameLogic);
}

var winConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

var checkWin = function (input) {
  console.log("checking win....");

  for (i = 0; i < winConditions.length; i++) {

    var counter = 0;

    for (y = 0; y < winConditions[i].length ; y++) {
        if (getGrid()[winConditions[i][y]] === input) {
        counter++;
        if (counter === 3) {
          turnStatement.textContent = `${turnOrder} has won!`;
          winner = turnOrder;
          return true;
        }
      }
    }

  }
  return false;
}

  // for (i = 0; i < getGrid().length; i++) {
  //
  // }


//if (getGrid[0] === n
