// Initialize gameBox element for all box elements
var gameBox = document.getElementsByClassName("game-box");
// Initialized moveNumber variable
var moveNumber = 0;

var gameRow = document.getElementsByTagName("tr");

// Initialize Game Board Array
gameBoardArray = [["", "", ""], ["", "", ""], ["", "", ""]];

// Setting the addEventListener to listen for clicks and execute functions when clicked.
for (var i = 0; i < gameBox.length; i++) {
  gameBox[i].addEventListener("click", function(event) {
    var positionInArray = event.target.id;
    var coordinates = positionInArray.split("");
    row = coordinates[0];
    column = coordinates[1];

    // Setting the box value to be O or X depending on whose turn it is.
    // Had to put this logic inside here otherwise the boxValue would not change.
    if (moveNumber % 2 == 0) {
      var boxValue = "O";
    } else {
      var boxValue = "X";
    }
    if(this.textContent ===""){
    this.textContent = boxValue;
    // Setting the value into the position in array
    gameBoardArray[row][column] = boxValue;
    // Incrementing the move number to keep track of the number of moves
    moveNumber++;
    document.getElementById("score").textContent = moveNumber;
    checkWinInARow();
    checkWinInAColumn();
    checkWinInADiagonal(); } else {
        alert("Please click on an empty box!")
    }
    if (moveNumber >=9) {
        alert("The game ends in a draw!")
    }
  });
}
// Initializing Win Conditions

// Checking for a win in a row
// Doing a hardcode first just to get my game to work basically
var checkWinInARow = function() {
  if (
    // Hardcoding the conditions for winning in a row
    (gameBoardArray[0][0] === gameBoardArray[0][1] &&
      gameBoardArray[0][0] === gameBoardArray[0][2] &&
      // Have to check that the field is not empty otherwise would return a winning value for three empty boxes.
      gameBoardArray[0][0] !== "") ||
    (gameBoardArray[1][0] === gameBoardArray[1][1] &&
      gameBoardArray[1][0] === gameBoardArray[1][2] &&
      gameBoardArray[1][0] !== "") ||
    (gameBoardArray[1][0] === gameBoardArray[1][1] &&
      gameBoardArray[1][0] === gameBoardArray[1][2] &&
      gameBoardArray[1][0] !== "")
  ) {
    alert("You Win! You got three in a row!");
  }
};

var checkWinInAColumn = function() {
  if (
    // Hardcoding the conditions for winning in a Column
    (gameBoardArray[0][0] === gameBoardArray[1][0] &&
      gameBoardArray[1][0] === gameBoardArray[2][0] &&
      // Have to check that the field is not empty otherwise would return a winning value for three empty boxes.
      gameBoardArray[0][0] !== "") ||
    (gameBoardArray[0][1] === gameBoardArray[1][1] &&
      gameBoardArray[1][1] === gameBoardArray[2][1] &&
      gameBoardArray[0][1] !== "") ||
    (gameBoardArray[0][2] === gameBoardArray[1][2] &&
      gameBoardArray[1][2] === gameBoardArray[2][2] &&
      gameBoardArray[0][2] !== "")
  ) {
    alert("You Win! You got three in a column!");
  }
};

var checkWinInADiagonal = function() {
  if (
    (gameBoardArray[0][0] === gameBoardArray[1][1] &&
      gameBoardArray[1][1] === gameBoardArray[2][2] &&
      gameBoardArray[0][0] !== "") ||
    (gameBoardArray[0][2] === gameBoardArray[1][1] &&
      gameBoardArray[1][1] === gameBoardArray[2][0] &&
      gameBoardArray[0][2] !== "")
  ) {
    alert("You win! You got three in a diagonal!");
  }
};
