console.log('hello tic tac toe');

/*
CREATING
GLOBAL
VARIABLES
*/

// winning sets
var winSets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// defining squares (these are objects)
var squares = document.querySelectorAll(".game-square");
squares.innerHTML = " ";

// creating board array
var squareBoard = [
        null, null, null,
        null, null, null,
        null, null, null
];

// push square locations into array
var storedSquares = [];
var storeX = [];
var storeO = [];

// checking steps
var steps = 0;

// output message
var message = document.querySelector("#output");

/*
CREATING
FUNCTIONS
*/

// change square content
var clickedSquare = function (event) {
    var clickedElement = event.target;
    if (steps === 0) {
        steps = steps + 1;
        clickedElement.innerHTML = "X";
        message.innerHTML = "Player 2, your turn!";
    } else if (steps === 1) {
        steps = steps - 1;
        clickedElement.innerHTML = "O";
        message.innerHTML = "Player 1, your turn!";
    } else if (steps === 2) {
        message.innerHTML = "Start game";
    }
};

// select WHICH square content to change
// and also PUSH square location into selection array
var changedSquare = function (selectedSquare, clickedSqaure) {
    for (var i = 0; i < squareBoard.length; i++) {
        var selectedSquare = squares[i];
        selectedSquare.addEventListener('click', clickedSquare);
        storedSquares.push(squares[i]);
        if (steps === 0) {
            storeX.push(squares[i]);
            console.log(steps);
        } else if (steps === 1) {
            storeO.push(squares[i]);
            console.log(steps);
        }
    }
}

// check stored array against winning sets

var checkWinner = function() {
    for (var i = 0; i < squareBoard.length; i++) {
        console.log("hh");
    }
}

changedSquare();
