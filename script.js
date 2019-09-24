// stores X or O
var marker = null;
var markerType = {
    A: "O",
    B: "X",
}
//
var board = [[null,null,null],
             [null,null,null],
             [null,null,null]];

var boardSize = null;

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


var getSets = function(board) {
    var rows = getRows(board);
    var columns = getColumns(board);
    var diagonals = getDiagonals(board);

    var sets = rows.concat(columns, diagonals);

    return sets;
}


sets = getSets(rows, columns, diagonals);
console.log("sets: ", sets);


var checkWinner = function(sets, markerType, board) {
    var markerA = markerType.A;
    var markerB = markerType.B;

    var setA = sets.map(set => set.filter(square => square === markerA).length);
    var setB = sets.map(set => set.filter(square => square === markerB).length);
    // console.log(setA);
    // console.log(setB);
    // debugger;
    if (setA.includes(board.length)) {
        return markerA;
    } else if (setB.includes(board.length)) {
        return markerB;
    } else { return "no winner"; }
};

// var winner = checkWinner(sets, markerType, board);
// console.log(winner);

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
    var sets = getSets(rows, columns, diagonals);

    var winner = checkWinner(sets, markerType, board);
    console.log("winner: ", winner);
    if (winner === markerType.A || winner === markerType.B) {
        alert(winner + " has won!");
    }

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