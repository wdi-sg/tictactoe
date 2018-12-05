var currentPlayerDisplay;
var boardSize;
var boardGridArray;
var winCon
var currentPlayer;

window.onload = function() {
    boardSize = prompt("Make a x-by-x board. Eg. 9-by-9.\nEnter your desired x value.");
    boardSize = parseInt(boardSize);
    winCon = prompt("Decide how many in a row will determine a win.\nEnter any value >= 3");
    winCon = parseInt(winCon);
    boardGridArray = [];

    var gameBoard = document.createElement("div");
    gameBoard.className = "gameBoard";

    currentPlayerDisplay = document.createElement("div");
    currentPlayerDisplay.className = "currentPlayerDisplay";
    currentPlayerDisplay.innerHTML = "Current Player: Circles";
    currentPlayer = "O";

    var playerCircleScore = 0;
    var playerCrossScore = 0;

    var playerCircleScoreDisplay = document.createElement("div");
    playerCircleScoreDisplay.className = "playersScoreDisplay";

    var playerCrossScoreDisplay = document.createElement("div");
    playerCrossScoreDisplay.className = "playersScoreDisplay";

    var updatePlayersScore = function() {
        playerCircleScoreDisplay.innerHTML = `Player Circle Score is: ${playerCircleScore}`;
        playerCrossScoreDisplay.innerHTML = `Player Cross Score is: ${playerCrossScore}`;
    }
    updatePlayersScore();

    var playersMove = function() {
        if (currentPlayer  == "O" && !(this.innerHTML == "X" || this.innerHTML == "O")) {
            this.innerHTML = "O";
            currentPlayer = "X";
        } else if (!(this.innerHTML == "X" || this.innerHTML == "O")) {
            this.innerHTML = "X";
            currentPlayer = "O";
        }
        checkWins(this.innerHTML);
        if (this.innerHTML == "X") {
            currentPlayerDisplay.innerHTML = "Current Player: Circles";
        } else {
            currentPlayerDisplay.innerHTML = "Current Player: Crosses";
        }
    };

//Original hardcoded 3x3
    // for (var i = 0; i < 9; i++) {
    //     var box = document.createElement("div");
    //     box.className = "box";
    //     box.addEventListener('click', playersMove);
    //     gameBoard.appendChild(box);
    // }

//Dynamic XxX
    for (var i = 0; i < boardSize; i++) {
        boardGridArray[i] = [];
        for (var j = 0; j < boardSize; j++) {
            boardGridArray[i][j] = document.createElement("div");
            boardGridArray[i][j].className = "box";
            boardGridArray[i][j].style.height = `${Math.floor(100/boardSize)-0.55}%`;
            boardGridArray[i][j].style.width = `${Math.floor(100/boardSize)-0.55}%`;
            boardGridArray[i][j].addEventListener('click', playersMove);
            gameBoard.appendChild(boardGridArray[i][j]);
        }
    }

//hardcoded check wins
    // var checkWins = function() {
    //     var allBoxes = document.querySelectorAll("div.box");
    //     if (
    //         ((allBoxes[0].textContent == allBoxes[1].textContent) && (allBoxes[1].textContent == allBoxes[2].textContent) && !allBoxes[1].textContent == "")
    //         ||
    //         ((allBoxes[0].textContent == allBoxes[3].textContent) && (allBoxes[3].textContent == allBoxes[6].textContent) && !allBoxes[3].textContent == "")
    //         ||
    //         ((allBoxes[0].textContent == allBoxes[4].textContent) && (allBoxes[4].textContent == allBoxes[8].textContent) && !allBoxes[4].textContent == "")
    //         ||
    //         ((allBoxes[2].textContent == allBoxes[4].textContent) && (allBoxes[4].textContent == allBoxes[6].textContent) && !allBoxes[4].textContent == "")
    //         ||
    //         ((allBoxes[2].textContent == allBoxes[5].textContent) && (allBoxes[5].textContent == allBoxes[8].textContent) && !allBoxes[5].textContent == "")
    //         ||
    //         ((allBoxes[3].textContent == allBoxes[4].textContent) && (allBoxes[4].textContent == allBoxes[5].textContent) && !allBoxes[4].textContent == "")
    //         ||
    //         ((allBoxes[6].textContent == allBoxes[7].textContent) && (allBoxes[7].textContent == allBoxes[8].textContent) && !allBoxes[7].textContent == "")
    //         ||
    //         ((allBoxes[1].textContent == allBoxes[4].textContent) && (allBoxes[4].textContent == allBoxes[7].textContent) && !allBoxes[4].textContent == "")
    //         ) {

    //         for (var i = 0; i < 9; i++) {
    //             allBoxes[i].innerHTML = "";
    //         }

            // if (currentPlayer % 2 == 0) {
            //     playerCircleScore++;
            // } else {
            //     playerCrossScore++;
            // }
            // updatePlayersScore();
    //     }
    // }

    //dynamic check wins
    var checkWins = function(currentSymbol) {
        var matches;
        var winMatch = function() {
            for (var i = 0; i < boardSize; i++) {
                for (var j = 0; j < boardSize; j++) {
                    boardGridArray[i][j].textContent = "";
                }
            }
            if (currentSymbol == "O") {
                playerCircleScore++;
            } else {
                playerCrossScore++;
            }
            updatePlayersScore();
        }
        //Verticals
        for (var i = 0; i < boardSize; i++) {
            matches = 0;
            for (var j = 0; j < boardSize; j++) {
                if (boardGridArray[j][i].textContent == currentSymbol) {
                    matches++;
                    if (matches >= winCon) {
                        winMatch();
                    }
                } else {
                    matches = 0;
                }
            }
        }
        //Horizontals
        for (var i = 0; i < boardSize; i++) {
            matches = 0;
            for (var j = 0; j < boardSize; j++) {
                if (boardGridArray[i][j].textContent == currentSymbol) {
                    matches++;
                    if (matches >= winCon) {
                        winMatch();
                    }
                } else {
                    matches = 0;
                }
            }
        }
        //Forward Slants
        for (var i = 0; i < boardSize - winCon + 1; i++) {
            for (var j = 0; j < boardSize - winCon + 1; j++) {
                matches = 0;
                for (var k = 0; k < winCon; k++) {
                    if (boardGridArray[i + k][j + k].textContent == currentSymbol) {
                        matches++;
                        if (matches >= winCon) {
                            winMatch();
                        }
                    }
                }

            }
        }
        //Backward Slants
        for (var i = 0; i < boardSize - winCon + 1; i++) {
            for (var j = boardSize-1; j > boardSize - winCon - 1; j--) {
                matches = 0;
                for (var k = 0; k < winCon; k++) {
                    if (boardGridArray[i + k][j - k].textContent == currentSymbol) {
                        matches++;
                        if (matches >= winCon) {
                            winMatch();
                        }
                    }
                }

            }
        }
    }

    document.querySelector('body').appendChild(currentPlayerDisplay);
    document.querySelector('body').appendChild(playerCircleScoreDisplay);
    document.querySelector('body').appendChild(playerCrossScoreDisplay);
    document.querySelector('body').appendChild(gameBoard);
}