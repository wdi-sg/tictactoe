var counter = 1;

//Player 1 turn function
var playerOneTurn = function() {
    event.target.innerHTML = "X";
    counter += 1;
};

//Player 2 turn function
var playerTwoTurn = function() {
    event.target.innerHTML = "O";
    counter += 1;
};

//Main game-playing function
var playGame = function() {
    var oddOrEven = counter % 2;
    if (oddOrEven > 0) {
        playerOneTurn();
    } else if (oddOrEven === 0) {
        playerTwoTurn();
    }
};

var gameSquares = [];

//Adding event listener for click to each square
var initialiseSquares = function() {
    gameSquares = document.querySelectorAll("section")
    for (var i = 0; i < gameSquares.length; i++) {
        gameSquares[i].addEventListener("click", playGame)
    };
}
initialiseSquares();

//Create check for win function