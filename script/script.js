/// variables

playerOneImage = "images/icons/elephant.png";
playerTwoImage = "images/icons/giraffe.png";


// Keep track who's turn it is.
var playerTwoTurn = false;
// Global variable for the "gameBoard" object.
var gameBoard = document.querySelector('#game-board');

// gameBoardArray[row][column] = 1 or 2 (player1 or player 2)
var gameBoardArray = [];
var numberInARowToWin = 3;
var gameBoardSize = 3;
var maximumAllowableGameBoardSize = 8;

var playerOneName = "Player 1";
var playerTwoName = "Player 2";
var turnCounter = 0;

// Game start prompt
var gamePopUpSplashScreen = document.querySelector('#game-alert');
var gamePopUpText = document.querySelector('#game-popup-text');
var gamePopUpButton = document.querySelector('#game-start-button');
var gameOptionsSplashScreen = document.querySelector('#game-settings');
var playerOneNameInput = document.querySelector('#player-1-name');
var playerTwoNameInput = document.querySelector('#player-2-name');
var gameOptionsLaunchButton = document.querySelector('#game-options-launch');
var gameOptionsApplyButton = document.querySelector('#game-options-apply');
var gameOptionsCancelButton = document.querySelector('#game-options-cancel');
var gameBoardSizeInput = document.querySelector('#game-board-size');
var gameBoardMatchLengthInput = document.querySelector('#game-board-match');

// Adding to all the game squares 'click' functionality
var addBoardSquareEventListeners = function() {
var boardSquares = document.querySelectorAll('.board-square');
    for (let i = 0; i < boardSquares.length; i++) {
        boardSquares[i].addEventListener('click', clickBoardSquare);        
    }
}


// Create a board of certain width or height. If you input only one number it's a square.
// Each square ('board-square') has an ID that is "x y" - corresponding to the index in the 2D array gameBoardArray.
var createGameGrid = function(inputWidth, inputHeight=inputWidth) {
    // console.log("Width: " + inputWidth + " Height: " + inputHeight);
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
        // console.log(gameBoardArray);
    }
    playerTwoTurn = false;
    addBoardSquareEventListeners();
    turnCounter = 0;
}


var removeAllChildElements = function(inputElement) {
    while (inputElement.firstChild) {
        inputElement.removeChild(inputElement.firstChild);
    }
}


// This function is called when you click a board square.
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


var beginGameButtonFunction = function() {
    // console.log('game begin!');
    document.body.removeChild(gamePopUpSplashScreen);
    createGameGrid(gameBoardSize);
}


// Extract the array indices from the board square Id and return it.
var boardSquareUpdate = function(idString) {
    arrayCoords = idString.split(" ");
    gameBoardArray[arrayCoords[0]][arrayCoords[1]] = playerTwoTurn ? "2" : "1";
    // console.log(gameBoardArray);
    var result = checkWinCondition(numberInARowToWin);
    if (result) {
        var playerNo = result[0];
        var messageToDisplay;
        console.log(playerNo);
        if (playerNo === "1") {
            messageToDisplay = playerOneName + " has won the game!\nClick to play again."
        } else if (playerNo === "2") {
            messageToDisplay = playerTwoName + " has won the game!\nClick to play again."
        } else {
            messageToDisplay = "It's a draw!\nClick to play again."
        }
        popUpMessage(messageToDisplay);
    }
}


var popUpMessage = function(messageString, confirmationString="ok") {
    gamePopUpText.textContent = messageString;
    gamePopUpButton.textContent = confirmationString;
    document.body.appendChild(gamePopUpSplashScreen);
}


var launchGameOptions = function() {
    document.body.appendChild(gameOptionsSplashScreen);
}


var applyGameOptions = function () {
    // console.log('Game settings applied!');
    playerOneName = playerOneNameInput.value;
    playerTwoName = playerTwoNameInput.value;
    // console.log(playerOneName, playerTwoName);
    gameBoardSize = parseInt(gameBoardSizeInput.value);
    // Make sure the game Board Size is actually a number.
    if (isNaN(gameBoardSize)) {
        gameBoardSize = 3;
    }
    gameBoardSize = Math.min(gameBoardSize, maximumAllowableGameBoardSize);
    gameBoardSizeInput.value = gameBoardSize;
    document.body.removeChild(gameOptionsSplashScreen);
    // if invalid (like length 5 in a 3x3 grid) - clamp it to the grid size.
    numberInARowToWin = Math.min(parseInt(gameBoardMatchLengthInput.value), gameBoardSize); 
    // Make sure we can actually win the game, invalid number will default to the size of the game board.
    if (isNaN(numberInARowToWin)) {
        numberInARowToWin = gameBoardSize;
    }
    gameBoardMatchLengthInput.value = numberInARowToWin;
    createGameGrid(gameBoardSize);
}


var cancelGameOptions = function() {
    document.body.removeChild(gameOptionsSplashScreen);
}

// Default length of 3, but you'll want to scan in 4 directions for a win condition.
var checkWinCondition = function(inputLength=3) {
    // console.log("checking to see if a player has won");
    // We only check the player who just played.
    turnCounter++;
    var playerValueToTest = playerTwoTurn ? "2" : "1";
    var counter = 0;

    // Check rows. -
    for (let row = 0; row < gameBoardArray.length; row++) { 
        const rowElement = gameBoardArray[row];
        for (let col = 0; col < (rowElement.length - (inputLength - 1)); col++) {
            // console.log(row, col);
            var newCol = col;
            while (gameBoardArray[row][newCol] === playerValueToTest) {   
                counter++;
                if (counter === inputLength){
                    console.log("winner player " + playerValueToTest);
                    console.log([playerValueToTest, row, col, row, newCol]);
                    return [playerValueToTest, row, col, row, newCol];
                    }
                newCol++;
                }
            counter = 0;   
        } 
    }
    // Check Columns |
    for (let col = 0; col < gameBoardArray[0].length; col++) { 
        for (let row = 0; row < (gameBoardArray.length - (inputLength - 1)); row++) {
            var newRow = row;
            while (gameBoardArray[newRow][col] === playerValueToTest) {   
                counter++;
                if (counter === inputLength){
                    console.log("winner player " + playerValueToTest);
                    console.log([playerValueToTest, row, col, newRow, col]);
                    return [playerValueToTest, row, col, newRow, col];
                    }
                newRow++;
                }
            counter = 0;   
        }
    }
    // Check forward & down diagonals. \
    for (let row = 0; row < (gameBoardArray.length - (inputLength - 1)); row++) {
        const rowElement = gameBoardArray[row];
        for (let col = 0; col < (rowElement.length - (inputLength - 1)); col++) {
            var newRow = row;
            var newCol = col;
            while (gameBoardArray[newRow][newCol] === playerValueToTest) {
                counter++;
                if (counter === inputLength) {
                    console.log("winner player " + playerValueToTest);
                    console.log([playerValueToTest, row, col, newRow, newCol]);
                    return [playerValueToTest, row, col, newRow, newCol];
                }
                newRow++;
                newCol++;
            }
            counter = 0;            
        }
        
    }
    // Check forward & up diagonals. /
    for (let row = (inputLength - 1); row < gameBoardArray.length; row++) {
        const rowElement = gameBoardArray[row];
        for (let col = 0; col < (rowElement.length - (inputLength - 1)); col++) {
            var newRow = row;
            var newCol = col;
            while (gameBoardArray[newRow][newCol] === playerValueToTest) {
                counter++;
                if (counter === inputLength) {
                    console.log("winner player " + playerValueToTest);
                    console.log([playerValueToTest, row, col, newRow, newCol]);
                    return [playerValueToTest, row, col, newRow, newCol];
                }
                newRow--;
                newCol++;
            }
            counter = 0;
        }       
    }

    // No winner this time!
    var maxTurns = (gameBoardArray.length * gameBoardArray[0].length)
    if (turnCounter >= maxTurns) {
        return "Draw";
    }
    
    return false
    // TODO: Return something if the board is full and the game is a draw.
}



///////////////////////////////
// Check match 3 pseudocode. //
///////////////////////////////
/*
If boardsquare is 1 or 2.
    Check horizontal forward matches first.
    Checklength = 1
    while square in front is equal to boardsquare.
        checklength++
        if checklength = winning length:
            return (i,j,k,l)
        increase to check the square in front of that.
*/



// createSquareGrid(3);
// createSquareGrid(3,4);
// createSquareGrid(5);
// createSquareGrid(8,10);

// addBoardSquareEventListeners();

gamePopUpButton.addEventListener('click', beginGameButtonFunction);
gameOptionsApplyButton.addEventListener('click', applyGameOptions);
gameOptionsCancelButton.addEventListener('click', cancelGameOptions);
gameOptionsLaunchButton.addEventListener('click', launchGameOptions);

document.body.removeChild(gamePopUpSplashScreen);
