/// variables

playerOneImage = "images/icons/elephant.png";
playerTwoImage = "images/icons/giraffe.png";

var playerTwoTurn = false;



var gameBoard = document.querySelector('#game-board');

var setupBoard = function() {
var boardSquares = document.querySelectorAll('.board-square');
    for (let i = 0; i < boardSquares.length; i++) {
        boardSquares[i].addEventListener('click', clickBoardSquare);        
    }
}

var createGameGrid = function(inputWidth, inputHeight=inputWidth) {
    console.log("Width: " + inputWidth + " height: " + inputHeight);
    removeAllChildElements(gameBoard);
    for (let i = 0; i < inputHeight; i++) { // generate a row
        var gameRow = document.createElement('div');
        gameRow.classList.add('board-row');
        for (let j = 0; j < inputWidth; j++) { // generate a square
            var boardSquare = document.createElement('div');
            boardSquare.classList.add('board-square');
            gameRow.appendChild(boardSquare);
        }
        gameBoard.appendChild(gameRow);
    }

    setupBoard();
}

var removeAllChildElements = function(inputElement) {
    while (inputElement.firstChild) {
        inputElement.removeChild(inputElement.firstChild);
    }
}

var clickBoardSquare = function(event) {
    if (this.children.length) {
        return;
    }

    var playerImage = "";
    var playerClassName = "";
    if (playerTwoTurn) {
        playerImage = playerTwoImage;
        playerClassName = 'player-two';
        playerTwoTurn = false;
    } else {
        playerImage = playerOneImage;
        playerClassName = 'player-one';
        playerTwoTurn = true;
    }
    var turnImage = document.createElement("img");
    turnImage.src = playerImage;
    turnImage.classList.add('player-image');
    turnImage.classList.add(playerClassName);
    this.appendChild(turnImage);
};

// createSquareGrid(3);
// createSquareGrid(3,4);
// createSquareGrid(5);
// createSquareGrid(8,10);

// setupBoard();