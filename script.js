// stores X or O
var marker = null;
var markerType = {
    A: "O",
    B: "X",
}
//
var board = [[1,2,3],
             [4,5,6],
             [7,8,9]];

var rows;
var columns;
var diagonals;
var sets;

var getRows = function(board) {
    var rows = [];
    board.forEach(row => rows.push(row));
    return rows;
};

rows = getRows(board);
console.log("rows: ", rows);

var getColumns = function(board) {
    var columns = [];
    // add empty arrays to columns
    for(var i = 0; i < board.length ; i++) {
        columns.push([]);
    }

    // push squares to empty arrays
    for(var i=0; i< board.length; i++) {
        var row = board[i];
        for(var j=0; j<row.length; j++) {
            var square = row[j];
            columns[j].push(square);
        }
    }

    return columns;
};

columns = getColumns(board);
console.log("columns: ", columns);

var convertBoardToList = function(board) {
    var list = [];
    board.forEach(row => row.forEach(square => list.push(square)));
    return list;
};

var getMirroredBoard = function(board) {
    var mirroredBoard = [];
    board.forEach(row => mirroredBoard.push( row.slice().reverse() ));
    return mirroredBoard;
};

var getDiagonal = function(list, board) {
    var diagonal = [];
    for (var i = 0; i < list.length; i += board.length + 1) {
        diagonal.push(list[i]);
    }
    return diagonal;
};

var getDiagonals = function(board) {
    var diagonals = [];

    var mirroredBoard = getMirroredBoard(board);

    var list = convertBoardToList(board);
    var mirroredList = convertBoardToList(mirroredBoard);

    var diagonal = getDiagonal(list,board);
    var mirroredDiagonal = getDiagonal(mirroredList, mirroredBoard);

    diagonals.push(diagonal);
    diagonals.push(mirroredDiagonal);

    return diagonals;
}

diagonals = getDiagonals(board);
console.log("diagonals: ", diagonals);

sets = rows.concat(columns, diagonals);
console.log("sets: ", sets);

var checkSetsForWin = function(sets) {


};


// add marker to board
// update board with input
var addMarker = function(event) {
    // debugger;
    if (marker === null || marker === markerType.A) {
        marker = markerType.B;
    } else {
        marker = markerType.A;
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