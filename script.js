//to check result
var stateOfBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

//.slice() elements to obtain arrays of results i.e. vertical rows, horizontal rows, diagonals
//.every() retrieved arrays if is true (i.e. all are same)
//check which player wins, i.e. are the true valueof "X" or "O"
//note: player1 is "X".

//check if Player1 wins
function xWin(value) {
  return value === "X";
}

//check if Player2 wins
function oWin(value) {
  return value === "O";
}

//function checkWhoWon(array)

function checkResult() {

  for (var i = 0; i < stateOfBoard.length; i++) {

    //retrieve results of rows
    var row = stateOfBoard[i];
    console.log(row);

    if (row.every(xWin)) {
        //player1 wins
        console.log("Player 1 wins!");

    } else if (row.every(oWin)) {
        //player2 wins
        console.log("Player 2 wins!");

    }

    for (var j = 0; j < stateOfBoard[i].length; j++) {

        //retrieve results of columns
        var column = stateOfBoard[i].slice(j, 1);
        console.log(column);

        if (column.every(xWin)) {
            //player1 wins
            console.log("Player 1 wins!");

        } else if (column.every(oWin)) {
            //player2 wins
            console.log("Player 2 wins!");

        }
    }

  }
  console.log();
}


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


//use iteration over to create 3x3 squares
//squares will still be id named same sequence
//i.e. sqaure[0][0] = stateOfBoard[0][0]

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
            square.addEventListener("click", toFill);
            board.appendChild(square);

        }
    }
    document.body.appendChild(board);
}

makeBoard();


//add event listener to squares
/*
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
*/