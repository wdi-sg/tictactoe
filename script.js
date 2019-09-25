//to check result
var stateOfBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

//note for DOM
//use iteration over to create 3x3
//squares will still be id named same sequence

function makeBoard() {

    //make container
    var board = document.createElement("div");
    board.id = "board";

    //make squares
    for (var i = 0; i < stateOfBoard.length; i++) {

        for (var j = 0; j < stateOfBoard[i].length; j++) {

            var square = document.createElement("div");
            square.id = 'square'+[i]+[j];
            square.classList.add("game-square");
            board.appendChild(square);

        }
    }
    document.body.appendChild(board);
}

makeBoard();

//eg. #square1 = stateOfBoard[0][0]

//.slice elements to check i.e. vertical rows, horizontal rows, diagonals
//.every retrieve array if is true (i.e. all are same)
//check which player wins, i.e. are the true valueof "X" or "O"
// function checkResult() {
//   for (var i = 0; i < stateOfBoard.length; i++) {

//     for (var j = 0; j < stateOfBoard[i].length; j++) {

//     }
//   }
//   console.log();
// }


//to change corresponding array value accordingly
function updateStateOfBoard() {

  for (var i = 0; i < stateOfBoard.length; i++) {

    for (var j = 0; j < stateOfBoard[i].length; j++) {

      var whichSquare = document.querySelector('#square'+[i]+[j]);

      if ( whichSquare.innerHTML === "X") {
        stateOfBoard[i][j] = "X";
      } else if (whichSquare.innerHTML === "O") {
        stateOfBoard[i][j] = "O";
      }
    }
  }
  console.log(stateOfBoard);
}

//to alternate entry
var player = 1;
var tictac;

//when square is clicked
//will give content in alternating value

//Alternative:
// var toFill = function(event) {
//  event.target.innerHTML = "test";

var toFill = function() {
    if (player%2 === 0) {
        tictac = "O";
    } else {
        tictac = "X";
    }
    this.innerHTML = tictac;
    updateStateOfBoard();

    player++;
}

//add event listener to squares

function addEvent() {

  for (var i = 0; i < stateOfBoard.length; i++) {

    for (var j = 0; j < stateOfBoard[i].length; j++) {
      var currentSquare = document.querySelector('#square'+[i]+[j]);
      console.log(currentSquare);
      currentSquare.addEventListener("click", toFill);

    }
  }
}
addEvent();