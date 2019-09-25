//to check result
var stateOfBoard = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"]
];

//.slice() elements to obtain arrays of results i.e. vertical rows, horizontal rows, diagonals
//.every() retrieved arrays if is true (i.e. all are same)
//check which player wins

//to check if Player1 wins
function xWin(value) {
  return value === "X";
}

//to check if Player2 wins
function oWin(value) {
  return value === "O";
}

//function checkWhoWon(array)
function gameWon(check) {
    if (check.every(xWin)) {
        //player1 wins
        alert("Player 1 wins!");

    } else if (check.every(oWin)) {
        //player2 wins
        alert("Player 2 wins!");

    }
}

function checkResult() {

  for (var i = 0; i < stateOfBoard.length; i++) {

    //retrieve results of rows
    var row = stateOfBoard[i];
    console.log("row" + [i] + " is: " + row);
    //check if gameWon by row
    gameWon(row);

    var column = [];

    for (var j = 0; j < stateOfBoard[i].length; j++) {

        //retrieve results of columns
        var k = (stateOfBoard[j].slice(i, i+1)).toString();
        column.push( k );

    }

    console.log("column" + [i] + " is: " + column);
    //check if gameWon by column
    gameWon(column);

    console.log("Checking results!");
  }
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
    checkResult();
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