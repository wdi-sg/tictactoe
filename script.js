console.log('hello tic tac toe');

/*
CREATING
GLOBAL
VARIABLES
*/

// defining squares (these are objects)
var squares = document.querySelectorAll(".game-square");
squares.innerHTML = " ";

// creating board array
var squareBoard = [
        null, null, null,
        null, null, null,
        null, null, null
];

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
var changedSquare = function (selectedSquare, clickedSqaure) {
    for (var i = 0; i < squareBoard.length; i++) {
        var selectedSquare = squares[i];
        selectedSquare.addEventListener('click', clickedSquare);
    }
}

changedSquare();

/*

*/