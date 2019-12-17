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
var storeX = [];
var storeO = [];

// checking steps
var steps = 0;

// change square content
var clickedSquare = function (event) {
    var clickedElement = event.target;
    if (steps === 0) {
        steps = steps + 1;
        clickedElement.innerHTML = "X";
    } else if (steps === 1) {
        steps = steps - 1;
        clickedElement.innerHTML = "O";
    }
};

// select WHICH square content to change
// and also PUSH square location into selection array
var changedSquare = function (selectedSquare, clickedSqaure) {
    for (var i = 0; i < squareBoard.length; i++) {
        var selectedSquare = squares[i];
        selectedSquare.addEventListener('click', clickedSquare);
        if (steps === 0) {
            storeX.push(squares[i]);
            steps = steps + 1;
        } else if (steps === 1) {
            storeO.push(squares[i]);
            steps = steps - 1;
        }
    }
}


changedSquare();



/*

*/