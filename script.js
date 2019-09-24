// stores X or O
var playerTurn = null;
var board = [[null,null,null],
             [null,null,null],
             [null,null,null]];

// add X or O to the board
var addMarker = function(event) {
    // debugger;
    if (playerTurn === null || playerTurn === "O") {
        playerTurn = "X";
    } else {
        playerTurn = "O";
    }
    event.target.innerText = playerTurn;

    var col = parseInt(event.target.id);
    var row = parseInt(event.target.parentElement.id);

    board[row][col] = playerTurn;
    console.log(board);

};

// create board
var createBoard = function() {
    var board = document.createElement("div");
    board.setAttribute("id", "board");

    // append 3 rows to board
    for (var i = 0; i < 3; i++) {
        var gameRow = document.createElement("div");
        gameRow.classList.add("game-row");
        gameRow.setAttribute("id", i);
        // append 3 squares to row
        for (var j = 0; j < 3; j++) {
            var gameSquare = document.createElement("span");
            gameSquare.classList.add("game-square");
            gameSquare.setAttribute("id", j);
            gameSquare.addEventListener("click", addMarker, { once: true });
            gameRow.appendChild(gameSquare);
        }
        board.appendChild(gameRow);
    }

    // append board to game interface
    var gameInterface = document.querySelector(".game-interface");
    gameInterface.appendChild(board);

    // remove the start button
    var startButton = document.querySelector(".start-button");
    startButton.remove();
};

var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", createBoard);