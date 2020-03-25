console.log('wassup loser');

var squares = document.querySelectorAll(".game-square");
squares.innerHTML = " ";


var squareBoard = [
        null, null, null,
        null, null, null,
        null, null, null
];


var steps = 0;


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


var changedSquare = function (selectedSquare, clickedSqaure) {
    for (var i = 0; i < squareBoard.length; i++) {
        var selectedSquare = squares[i];
        selectedSquare.addEventListener('click', clickedSquare);
    }
}

changedSquare();