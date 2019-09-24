// stores X or O
var playerTurn = null;

// add X or O to the board
var addMarker = function(event) {
    if (playerTurn === null || playerTurn === "O") {
        playerTurn = "X";
    } else {
        playerTurn = "O";
    }
    event.target.innerText = playerTurn;
};

// get all the squares
var squares = document.getElementsByClassName("game-square");

// add event listener to each square
for (var i = 0; i < squares.length; i++) {
    var square = squares[i];
    square.addEventListener('click', addMarker, {once: true});
}