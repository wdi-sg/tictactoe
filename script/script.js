/// variables

playerOneImage = "images/icons/elephant.png";
playerTwoImage = "images/icons/giraffe.png";

var playerTwoTurn = false;

var boardSquares = document.querySelectorAll('.board-square')

var gameBoard = document.querySelector('#game-board');

var setupBoard = function() {
    for (let i = 0; i < boardSquares.length; i++) {
        boardSquares[i].addEventListener('click', clickBoardSquare);        
    }
}

var createGameGrid = function(inputWidth, height=inputWidth) {
    console.log("Width: " + inputWidth + " height: " + height);
    gameBoard.destor
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

setupBoard();