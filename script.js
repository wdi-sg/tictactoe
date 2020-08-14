//Action to load Gameboard
window.onload = function() {
    initBoard();
    var makeSelection = function() {
        if (event.target.innerHTML === "X" || event.target.innerHTML === "O") {
            return;
        }
// Switch statement to control if mark made is noughts or crosses
        switch (turnCounter%2) {
        case 0:
            event.target.innerHTML = "X"
            updateBoard();
            currentPlayer = "X"
            break;
        case 1:
            event.target.innerHTML = "O"
            updateBoard();
            currentPlayer = "O"
            break;
        }
    turnCounter++;
    checkWin();
    }
        document.querySelectorAll(".game-square").forEach(function(button, i){
            button.addEventListener('click', makeSelection);
            button.id = "square" + [i];
    });
}

//Function to initiate Gameboard
var initBoard = function(){
    var title = document.createElement("h1");
    var body = document.querySelector('body')
    title.innerText = "Tic Tac Toe";
    body.appendChild(title);

    var board = document.createElement("div");
    board.id = "board";
    body.appendChild(board);

    for (var i = 0; i < 3; i++) {
    var gameRow = document.createElement("div");
    gameRow.className += "game-row";
    board.appendChild(gameRow);

    var gameSquare = document.createElement("span");
    gameSquare.className += "game-square";
    gameRow.appendChild(gameSquare);

    var gameSquare = document.createElement("span");
    gameSquare.className += "game-square";
    gameRow.appendChild(gameSquare);

    var gameSquare = document.createElement("span");
    gameSquare.className += "game-square";
    gameRow.appendChild(gameSquare);
    }
}

//Global variables
var gameSquare = document.querySelector(".game-square");
var turnCounter = 0;
var gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

var winner = null;
var currentPlayer = "X";
var square0 = gameBoard[0][0];
var square1 = gameBoard[0][1];
var square2 = gameBoard[0][2];
var square3 = gameBoard[1][0];
var square4 = gameBoard[1][1];
var square5 = gameBoard[1][2];
var square6 = gameBoard[2][0];
var square7 = gameBoard[2][1];
var square8 = gameBoard[2][2];


// Function to loop through the Game Board and check if win conditions are met.
 var checkWin = function() {
    handleWinner();
    for (var i = 0; i < gameBoard.length; i++) {
        //check for vertical wins
       if (gameBoard[0][i] === currentPlayer &&  gameBoard[0][i] === gameBoard[1][i] && gameBoard[0][i] === gameBoard[2][i]){
                winner = currentPlayer
            }
        //check for horizontal wins
       if (gameBoard[i][0] === currentPlayer && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1]=== gameBoard[i][2]){
                winner = currentPlayer
                console.log(winner, currentPlayer);
            }
    }
    //Check for diagonal wins
    if (gameBoard[0] === currentPlayer && gameBoard[0] === gameBoard[4] && gameBoard[4]===gameBoard[8]) {
        winner = currentPlayer;
    }
    if (gameBoard[2] === currentPlayer && gameBoard[2] === gameBoard[4] && gameBoard[4]===gameBoard[6]) {
        winner = currentPlayer;
    }
    console.log("checkWin function was triggered", winner);
}


var handleWinner = function() {
    if (winner !== null) {
        turnCounter = 0
    }
    console.log("HandleWinner was triggered", turnCounter);
}


var updateBoard = function() {
    if (event.target.id === "square0") {
        square0 = event.target.innerHTML;
    } else if (event.target.id === "square1") {
        square1 = event.target.innerHTML;
    } else if (event.target.id === "square2") {
        square2 = event.target.innerHTML;
    } else if (event.target.id === "square3") {
        square3 = event.target.innerHTML;
    } else if (event.target.id === "square4") {
        square4 = event.target.innerHTML;
    } else if (event.target.id === "square5") {
        square5 = event.target.innerHTML;
    } else if (event.target.id === "square6") {
        square6 = event.target.innerHTML;
    } else if (event.target.id === "square7") {
        square7 = event.target.innerHTML;
    } else if (event.target.id === "square7") {
        square8 = event.target.innerHTML;
    }
}