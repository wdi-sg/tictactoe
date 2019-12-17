/// variables

playerOneImage = "images/icons/elephant.png";
playerTwoImage = "images/icons/giraffe.png";

// Keep track who's turn it is.
var playerTwoTurn = false;
// Global variable for the "gameBoard" object.
var gameBoard = document.querySelector('#game-board');
// gameBoardArray[row][column] = 1 or 2 (player1 or player 2)
var gameBoardArray = [];


var addBoardSquareEventListeners = function() {
var boardSquares = document.querySelectorAll('.board-square');
    for (let i = 0; i < boardSquares.length; i++) {
        boardSquares[i].addEventListener('click', clickBoardSquare);        
    }
}

var createGameGrid = function(inputWidth, inputHeight=inputWidth) {
    console.log("Width: " + inputWidth + " Height: " + inputHeight);
    removeAllChildElements(gameBoard);
    gameBoardArray = [];
    for (let i = 0; i < inputHeight; i++) { // generate a row
        var gameRow = document.createElement('div');
        gameRow.classList.add('board-row');
        gameBoardArray[i] = [];
        for (let j = 0; j < inputWidth; j++) { // generate a square
            var boardSquare = document.createElement('div');
            boardSquare.classList.add('board-square');
            boardSquare.id = i + " " + j;
            gameRow.appendChild(boardSquare);
            gameBoardArray[i][j] = null;
        }
        gameBoard.appendChild(gameRow);
        console.log(gameBoardArray);
    }

    addBoardSquareEventListeners();
}

var removeAllChildElements = function(inputElement) {
    while (inputElement.firstChild) {
        inputElement.removeChild(inputElement.firstChild);
    }
}

var clickBoardSquare = function(event) {
    if (this.children.length) { // if there's already an image then return.
        return;
    }

    var playerImage = "";
    var playerClassName = "";
    if (playerTwoTurn) {
        playerImage = playerTwoImage;
        playerClassName = 'player-two';
    } else {
        playerImage = playerOneImage;
        playerClassName = 'player-one';
    }
    var turnImage = document.createElement("img");
    turnImage.src = playerImage;
    turnImage.classList.add('player-image');
    turnImage.classList.add(playerClassName);
    boardSquareUpdate(this.id);
    this.appendChild(turnImage);
    playerTwoTurn = !playerTwoTurn
};

var boardSquareUpdate = function(idString) {
    arrayCoords = idString.split(" ");
    gameBoardArray[arrayCoords[0]][arrayCoords[1]] = playerTwoTurn ? "2" : "1";
    // console.log(gameBoardArray);
    checkWinCondition();
}

var checkWinCondition = function(length=3) {
    console.log("checking to see if a player has won");
}
// createSquareGrid(3);
// createSquareGrid(3,4);
// createSquareGrid(5);
// createSquareGrid(8,10);

// addBoardSquareEventListeners();

createGameGrid(3);