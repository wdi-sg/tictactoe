// stores X or O
var marker = null;

//
var board = [[1,2,3],
             [4,5,6],
             [7,8,9]];

var rows = [];
var columns = [];
var diagonals = [[],[]];

var getRows = function() {
    board.forEach(row => rows.push(row));
};

var getColumns = function() {
    // add empty arrays to columns
    for(var i = 0; i < board.length ; i++) {
        columns.push([]);
    }

    console.log(columns);

    // push squares to columns
    for(var i=0; i< board.length; i++) {
        var row = board[i];
        for(var j=0; j<row.length; j++) {
            var square = row[j];
            columns[j].push(square);
        }
    }
}

// add marker to board
// update board with input
var addMarker = function(event) {
    // debugger;
    if (marker === null || marker === "O") {
        marker = "X";
    } else {
        marker = "O";
    }
    event.target.innerText = marker;

    var col = parseInt(event.target.id);
    var row = parseInt(event.target.parentElement.id);

    board[row][col] = marker;
    // console.log(board);

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