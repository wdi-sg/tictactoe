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

// add id to each square
var addId = function(squares) {
    squares.forEach(function(square, index) {
        square.setAttribute("id", index);
    })
}


// create board
var createBoard = function() {
    var board = document.createElement("div");
    board.setAttribute("id", "board");

    // append 3 rows to board
    for (var i = 0; i < 3; i++) {
        var gameRow = document.createElement("div");
        gameRow.classList.add("game-row");

        // append 3 squares to row
        for (var j = 0; j < 3; j++) {
            var gameSquare = document.createElement("span");
            gameSquare.classList.add("game-square");
            gameSquare.addEventListener("click", addMarker, { once: true });
            gameRow.appendChild(gameSquare);
        }
        board.appendChild(gameRow);
    }

    // append board to game interface
    var gameInterface = document.querySelector(".game-interface");
    gameInterface.appendChild(board);

    var startButton = document.querySelector(".start-button");
    startButton.remove();

    var squares = document.querySelectorAll(".game-square");

    addId(squares);

};

var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", createBoard);