var gameBoard = [];
var gameSize = 3;
var winCon = 3;
function setupBoard() {
    for (var i = 0; i < gameSize; i++) {
        var array2d = [];
        for (var j = 0; j < gameSize; j++) {
            array2d.push(0);
        }
        gameBoard.push(array2d);
    }
}
setupBoard();
var horizontalLength = gameBoard.length;
var verticalLength = gameBoard[0].length;
function checkHorizontal(x, y) {
    var horizontalSpace = horizontalLength - x;
    var winCountX = 0;
    if (horizontalSpace >= winCon) {
        for (var i = 0; i < winCon; i++) {
            if (gameBoard[x][y] === gameBoard[x + i][y] && (gameBoard[x][y] != 0)) {
                winCountX++;
            }
        }
    }
    if (winCountX === winCon) {
        console.log("horizontal win condition met");
    }
}
function checkVertical(x, y) {
    var verticalSpace = verticalLength - y;
    var winCountY = 0;
    if (verticalSpace >= winCon) {
        for (var i = 0; i < winCon; i++) {
            if (gameBoard[x][y] === gameBoard[x][y + i] && (gameBoard[x][y] != 0)) {
                winCountY++;
            }
        }
    }
    if (winCountY === winCon) {
        console.log("vertical win condition met");
    }
}
function checkDiagonal(x, y) {
    var horizontalSpace = horizontalLength - x;
    var verticalSpace = verticalLength - y;
    var diagonalSpace = Math.min(horizontalSpace, verticalSpace);
    var winCountXY = 0;
    if (diagonalSpace >= winCon) {
        for (var i = 0; i < winCon; i++) {
            if (gameBoard[x][y] === gameBoard[x + i][y + i] && (gameBoard[x][y] != 0)) {
                winCountXY++;
            }
        }
    }
    if (winCountXY === winCon) {
        console.log("diagonal win condition met");
    }
}
function checkWin() {
    //function to check through all 3 possible directions in each cell
    for (var i = 0; i < horizontalLength; i++) {
        for (var j = 0; j < verticalLength; j++) {
            checkHorizontal(i, j);
            checkVertical(i, j);
            checkDiagonal(i, j);
        }
    }
}
//write a function that alternates between returning the number 1 and the number 2 everytime it is called
