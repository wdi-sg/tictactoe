console.log("TIC TAC TOE");

//global variables
var button = document.querySelector('#start');
var body = document.querySelector("body");
var squares = document.querySelectorAll(".game-square");
var playerTurn = "X";
var gameMoves = 0;
var gridSize = 3;

//function to start game
var startGame = function(event) {
    console.log ("starting game");

//run make board function
    makeBoard();

//remove button after game starts
    button.remove();
}

var makeBoard = function(event){
    //create div id = board
    var boardTemp = document.createElement("div");
    boardTemp.setAttribute("id", "board");

    //create div class = game-row x3
    for(i=0; i<gridSize; i++){
        var rowsTemp = document.createElement("div");
        rowsTemp.setAttribute("class","game-row");

    //create button class = game-square x3 per row
        for (j=0;j<gridSize; j++){
        var cellTemp = document.createElement("button");
        cellTemp.setAttribute("class","game-square");
        //set additional attributes to mark coordinates of cell
        cellTemp.setAttribute("rowNo", i);
        cellTemp.setAttribute("colNo", j);
        cellTemp.addEventListener("click",gamePlay);
        //append buttons to rows
        rowsTemp.appendChild(cellTemp);
    }
        //append rows to board
        boardTemp.appendChild(rowsTemp);
    }
    //append board to body
    body.appendChild(boardTemp);
}

var boardTally = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
];

var columnArray = [[], [], []];

var gamePlay = function(event){
    //check if game moves = 9. If so show game over
    if(gameMoves === 9) {
        alert("Game over!");
        clearBoard();

    //else if moves less than 9, do normal stuff
    }else if (gameMoves < 9) {
        console.log("play on");

        //when player clicks on square, check on playerTurn. If playerTurn = null, display image "X" and change player turn to nextO
        if(playerTurn === "X"){
            console.log("player x turn");
            playerTurn = "O";
            console.log("player turn now is " + playerTurn);
            event.target.style.backgroundImage = "url('images/x.png')";

        //Else, display image two and change player turn back to null
        }else if (playerTurn === "O"){
            console.log("player O turn");
            playerTurn = "X"
            console.log("player turn now is " + playerTurn);
            event.target.style.backgroundImage = "url('images/o.png')";
        }
    //log number of games moves
    gameMoves = gameMoves + 1;
    console.log("game moves now is " + gameMoves);

    //grab attributes to fill in array
    var cdn = [event.target.getAttribute("rowNo"), event.target.getAttribute("colNo")];

    //use cdn[0] to select boardTally(row)
    //use cdn[1] to select position in row and fill in playerTurn
    var firstIndex = cdn[0];
    var secondIndex = cdn[1];
    for (i=0; i<boardTally.length; i++) {
        if (i === parseInt(firstIndex)) {
            for (j=0; j<boardTally[i].length; j++) {
                if (j === parseInt(secondIndex)) {
                    columnArray[secondIndex].push(playerTurn);
                    boardTally[i][j] = playerTurn;
                }
            }
        }
    }
    //run check for win function
    checkForWin();
    }
}

var stringX = ["O", "O", "O"]
var stringO = ["X", "X", "X"]


var checkForWin = function(){
    console.log(boardTally[0]);
    if (JSON.stringify(boardTally[0]) === JSON.stringify(stringX) || JSON.stringify(boardTally[1]) === JSON.stringify(stringX) || JSON.stringify(boardTally[2]) === JSON.stringify(stringX)) {
    alert("Player X won!");
    }else if(JSON.stringify(boardTally[0]) === JSON.stringify(stringO) || JSON.stringify(boardTally[1]) === JSON.stringify(stringO) || JSON.stringify(boardTally[2]) === JSON.stringify(stringO)){
        alert("Player O won!");
    }else if(JSON.stringify(columnArray[0]) === JSON.stringify(stringX) || JSON.stringify(columnArray[1]) === JSON.stringify(stringX) || JSON.stringify(columnArray[2]) === JSON.stringify(stringX)) {
        alert("Player X won!");
    }else if(JSON.stringify(columnArray[0]) === JSON.stringify(stringO) || JSON.stringify(columnArray[1]) === JSON.stringify(stringO) || JSON.stringify(columnArray[2]) === JSON.stringify(stringO)){
        alert("Player O won!");
    }else if(boardTally[0][0] === "O" && boardTally[1][1] === "O" && boardTally [2][2] === "O"){
        alert("Player X won!");
    }else if(boardTally[0][0] === "X" && boardTally[1][1] === "X" && boardTally [2][2] === "X"){
        alert("Player O won!");
    }else if(boardTally[0][2] === "O" && boardTally[1][1] === "O" && boardTally [2][0] === "O"){
        alert("Player X won!");
    }else if(boardTally[0][2] === "X" && boardTally[1][1] === "X" && boardTally [2][0] === "X"){
        alert("Player O won!");
    }
}

//to reset board and reload page to start over
var clearBoard = function(){
    playerTurn = "null";
    gameMoves = -1;
    location.reload();
}

document.addEventListener('DOMContentLoaded', function( event ){

  // now that the dom is ready, set the button click
  button.addEventListener('click', startGame);

});