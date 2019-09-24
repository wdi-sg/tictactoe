var marker = null;
var markerType = {
    A: "O",
    B: "X",
}
var board = [];
var boardSize = 3;
var rows = [];
var columns = [];
var diagonals = [];
var sets = [];


var createBoardObj = function(boardSize) {
    var newboard = [];

    for(var i = 0; i < boardSize; i++) {
        var row = [];
        for(var j = 0; j < boardSize; j++){
            row.push(null);
        }
        newboard.push(row);
    }
    return newboard;
};

var getRows = function(board) {
    var rows = [];
    board.forEach(row => rows.push(row));
    return rows;
};

var getColumns = function(board) {
    var columns = [];
    // add empty arrays to columns
    for(var i = 0; i < boardSize ; i++) {
        columns.push([]);
    }

    // push squares to empty arrays
    for(var i=0; i < boardSize; i++) {
        var row = board[i];
        for(var j=0; j< row.length; j++) {
            var square = row[j];
            columns[j].push(square);
        }
    }

    return columns;
};

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
    for (var i = 0; i < list.length; i += boardSize + 1) {
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

var getSets = function(board) {
    var rows = getRows(board);
    var columns = getColumns(board);
    var diagonals = getDiagonals(board);

    var sets = rows.concat(columns, diagonals);

    return sets;
}

var checkWinner = function(sets, markerType, board) {
    var markerA = markerType.A;
    var markerB = markerType.B;

    var setA = sets.map(set => set.filter(square => square === markerA).length);
    var setB = sets.map(set => set.filter(square => square === markerB).length);

    if (setA.includes(boardSize)) {
        return markerA;
    } else if (setB.includes(boardSize)) {
        return markerB;
    } else { return "no winner"; }
};

var addMarker = function(event) {

    if (marker === null || marker === markerType.A) {
        marker = markerType.B;
    } else {
        marker = markerType.A;
    }

    event.target.innerText = marker;

    var col = parseInt(event.target.id);
    var row = parseInt(event.target.parentElement.id);

    board[row][col] = marker;

    var rows = getRows(board);
    var columns = getColumns(board);
    var diagonals = getDiagonals(board);
    var sets = getSets(rows, columns, diagonals);

    var winner = checkWinner(sets, markerType, board);
    console.log("winner: ", winner);
    if (winner === markerType.A || winner === markerType.B) {
        alert(winner + " has won!");
    }

};

// create board
var createBoard = function() {
    var boardDiv = document.createElement("div");
    boardDiv.setAttribute("id", "board");

    board = createBoardObj(boardSize);

    // append x rows to board
    for (var i = 0; i < boardSize; i++) {
        var gameRow = document.createElement("div");
        gameRow.classList.add("game-row");
        gameRow.setAttribute("id", i);
        // append 3 squares to row
        for (var j = 0; j < boardSize; j++) {
            var gameSquare = document.createElement("span");
            gameSquare.classList.add("game-square");
            gameSquare.setAttribute("id", j);
            gameSquare.addEventListener("click", addMarker, { once: true });
            gameRow.appendChild(gameSquare);
        }
        boardDiv.appendChild(gameRow);
    }

    // append board to game interface
    var gameInterface = document.querySelector(".game-interface");
    gameInterface.appendChild(boardDiv);

    // remove the start button
    var startButton = document.querySelector(".start-button");
    startButton.remove();

    var boardSizeInput = document.querySelector("#board-size");
    boardSizeInput.remove();

    var boardSizeLabel = document.querySelector(".board-size");
    boardSizeLabel.remove();
};

var getBoardSize = function(event) {
    boardSize = parseInt(event.target.value);
    console.log("board size: ", boardSize);
    board = createBoardObj(boardSize);
    console.log("new board", board);
    createBoard();
};

var boardSizeInput = document.querySelector("#board-size");
boardSizeInput.addEventListener("change", getBoardSize);

var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", createBoard);