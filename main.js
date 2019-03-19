var gameBoard = [];
var gameSize = 3;
var winCon = 3;
var boxClicked = function () {
    var x = parseInt(this.getAttribute("data-x"));
    var y = parseInt(this.getAttribute("data-y"));
    var state = parseInt(this.getAttribute("data-state"));
    console.log("User clicked on box " + x + " " + y);
    var currentText = this.innerText;
    if (!(currentText === "X" || currentText === "O")) {
        var oneOrTwo = circleCross();
        var letter = void 0;
        if (oneOrTwo === 1) {
            //return an X
            letter = "X";
        }
        else {
            //return an O
            letter = "O";
        }
        this.childNodes[0].innerText = letter;
        //assign that oneOrTwo to the array representation
        gameBoard[x][y] = oneOrTwo;
        checkWin();
    }
};
function setupBoard() {
    //create a boxClicked function that extracts the id from data-x and data-y and parses it back into numbers to reference to our checkWin function.
    var gameBoardHTML = document.getElementById("game-board");
    var gameBoardDimension = gameSize * 54;
    gameBoardHTML.style.width = gameBoardDimension + "px";
    gameBoardHTML.style.height = gameBoardDimension + "px";
    for (var i = 0; i < gameSize; i++) {
        var array2d = [];
        for (var j = 0; j < gameSize; j++) {
            array2d.push(0);
            var element = document.createElement("div");
            var paragraph = document.createElement("p");
            element.setAttribute("data-x", i.toString());
            element.setAttribute("data-y", j.toString());
            element.setAttribute("data-state", "0");
            element.setAttribute("class", "box");
            element.appendChild(paragraph);
            element.addEventListener("click", boxClicked);
            gameBoardHTML.appendChild(element);
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
            if (gameBoard[x][y] === gameBoard[x + i][y] && gameBoard[x][y] != 0) {
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
            if (gameBoard[x][y] === gameBoard[x][y + i] && gameBoard[x][y] != 0) {
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
    var diagonalSpaceUp = Math.min(horizontalSpace, verticalSpace);
    var winCountXY = 0;
    if (diagonalSpaceUp >= winCon) {
        for (var i = 0; i < winCon; i++) {
            if (gameBoard[x][y] === gameBoard[x + i][y + i] && gameBoard[x][y] != 0) {
                winCountXY++;
            }
        }
    }
    var verticalSpaceDown = y + 1;
    var diagonalSpaceDown = Math.min(horizontalSpace, verticalSpaceDown);
    if (diagonalSpaceDown >= winCon) {
        for (var i = 0; i < winCon; i++) {
            if (gameBoard[x][y] === gameBoard[x + i][y - i] && gameBoard[x][y] != 0) {
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
var circleOrCross = 0;
function circleCross() {
    circleOrCross++;
    var oneOrTwo = 0;
    if (circleOrCross % 2 === 0) {
        //circleOrCross is odd
        return 1;
    }
    else {
        return 2;
    }
}
//assign divs data-id attributes of data-id-x and data-id-y
//generate them all with javascript
