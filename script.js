// create a back end game board
var createGameBoard = function () {
    let gameBoard = [];

    for (let a = 0; a < boardSize; a++) {
        let row = [];
        for (let b = 0; b < boardSize; b++) {
            row.push("");
        }
        gameBoard.push(row);
    }

    return gameBoard;
}

// generate game board UI using the back end game board
var createGameBoardUI = function (gameBoard) {
    let tableElement = document.createElement("table");

    for (let a = 0; a < gameBoard.length; a++) {
        let rowElement = document.createElement("tr");

        for (let b = 0; b < gameBoard.length; b++) {
            let cellElement = document.createElement("td");

            cellElement.setAttribute("data-id" , a + "," + b);
            cellElement.addEventListener("click", clickOnCell);
            cellElement.textContent = "";

            rowElement.appendChild(cellElement);
        }

        tableElement.appendChild(rowElement);
    }

    document.querySelector(".gameBoard").appendChild(tableElement);
}

var generateGame = function () {
    // remove the old game before generating a new game
    if (document.querySelector(".gameBoard > table") !== null) {
        document.querySelector(".gameBoard > table").remove();
    }

    // overwrite the global game board variable
    playerGameBoard = createGameBoard(boardSize);
    createGameBoardUI(playerGameBoard);

    // start computer player engine
    computerPlayerEngine = setInterval(computerPlayerAction, 1000);

    return playerGameBoard;
}

// click event for each cells
var clickOnCell = function (event) {
    let xAxis = this.getAttribute("data-id").split(",")[0];
    let yAxis = this.getAttribute("data-id").split(",")[1];

    if (humanPlayer["turn"] === true) {
        event.target.textContent = humanPlayer["symbol"];
        playerGameBoard[xAxis][yAxis] = humanPlayer["symbol"];

        hidePlayAgainButton();
        setGameMessage("It is now " + computerPlayer["name"] + "'s turn.");

        humanPlayer["turn"] = false;
        computerPlayer["turn"] = true;

        this.removeEventListener("click", clickOnCell);
        checkForMatch(this, humanPlayer);

    } else if (computerPlayer["turn"] === true) {
        event.target.textContent = computerPlayer["symbol"];
        playerGameBoard[xAxis][yAxis] = computerPlayer["symbol"];

        hidePlayAgainButton();
        setGameMessage("It is now " + humanPlayer["name"] + "'s turn.");

        computerPlayer["turn"] = false;
        humanPlayer["turn"] = true;

        this.removeEventListener("click", clickOnCell);
        checkForMatch(this, computerPlayer);
    }
}

// check for winning matches based on user input
var checkForMatch = function (userInput, player) {
    let matchFound = false;
    let winningCombinationBasedOnUserInput = getWinningCombinationBasedOnUserInput(userInput.getAttribute("data-id"));

    // check if user input matches one of the possibilities
    for (let i = 0; i < winningCombinationBasedOnUserInput.length; i++) {
        matchFound = winningCombinationBasedOnUserInput[i].every(function(item) {
            let xAxis = item.split(",")[0];
            let yAxis = item.split(",")[1];

            return playerGameBoard[xAxis][yAxis] === userInput.textContent;
        });

        // set the style of the cells to show the win class
        // remove all click events to end the game
        // alert player that he have win the game
        if (matchFound === true) {
            for (let r = 0; r < winningCombinationBasedOnUserInput[i].length; r++) {
                let tempElement = document.querySelector('[data-id="' + winningCombinationBasedOnUserInput[i][r] + '"]');
                tempElement.className = "win";
            }

            // disable game board since there is a winner
            disableGameBoard();
            player["score"]++;

            if (player["mode"] === "human") {
                setTimeout(function() {
                    alert(player["name"] + ". You win the game!");
                },250);

                setGameMessage(player["name"] + ", you win the game! You have score a total of " + player["score"] + " point.");
                showPlayAgainButton();

            } else if (player["mode"] === "computer") {
                setTimeout(function() {
                    alert("You have lost the game :(");
                },250);

                setGameMessage("You have lost the game :(");
                showPlayAgainButton();
            }

            gameRound++;
            break;
        }
    }

    checkGameIsDraw(matchFound);
}

// check if the board is completely filled and determined if it is a draw
var checkGameIsDraw = function (matchFound) {
    let filled = true;

    for (let a = 0; a < playerGameBoard.length; a++) {
        for (let b = 0; b < playerGameBoard[a].length; b++) {
            if (playerGameBoard[a][b] === "") {
                filled = false;
            }
        }
    }

    if (filled === true && matchFound === false) {
        disableGameBoard();

        setTimeout(function(){
             alert("The game is a draw!");
        },250);

        setGameMessage("The game is a draw!");
        gameRound++;

        showPlayAgainButton();
    }
}

var getListOfIndexForEmptyCellOnGameBoard = function () {
    let temp  = [];

    for (let a = 0; a < playerGameBoard.length; a++) {
        for (let b = 0; b < playerGameBoard.length; b++) {
            if (playerGameBoard[a][b] === ""){
                temp.push(a + "," + b);
            }
        }
    }

    return temp;
}

// get all the winning combination for row, column, diagonal
var getAllWinningCombination = function () {
    let temp = [];
    let winningCombination = [];

    // 3 row winning sequence
    for (let a = 0; a < boardSize; a++) {
        for (var b = 0; b < boardSize; b++) {
            temp.push(a + "," + b);
        }
        winningCombination.push(temp);
        temp = [];
    }

    // 3 column winning sequence
    for (let a = 0; a < boardSize; a++) {
        for (var b = 0; b < boardSize; b++) {
            temp.push(b + "," + a);
        }
        winningCombination.push(temp);
        temp = [];
    }

    // diagonal winning sequence from top left corner (0,0) to bottom right corner (2,2)
    // pattern for this is +1 +1
    for (let a = 0; a < boardSize; a++) {
        temp.push((0 + a) + "," + (0 + a));
    }
    winningCombination.push(temp);
    temp = [];

    // diagonal winning sequence from bottom left corner (2,0) to top right corner (0,2)
    // pattern for this is -1 +1
    for (let a = 0; a < boardSize; a++) {
        temp.push((boardSize - 1 - a) + "," + (0 + a));
    }

    winningCombination.push(temp);
    temp = [];

    return winningCombination;
}

// find all possible winning combination based on user input
var getWinningCombinationBasedOnUserInput = function (userInputIndex) {
    let winningCombinationBasedOnUserInput = [];
    let winningCombination = getAllWinningCombination(boardSize);

    // find all possible winning possibilities based on user input
    for (let i = 0; i < winningCombination.length; i++) {
        if (winningCombination[i].indexOf(userInputIndex) > -1) {
            winningCombinationBasedOnUserInput.push(winningCombination[i]);
        }
    }

    return winningCombinationBasedOnUserInput;
}

var showPlayAgainButton = function () {
    let buttonElement = document.querySelector(".gameButton");
    buttonElement.addEventListener("click", generateGame);
    buttonElement.style.display = "block";
}

var hidePlayAgainButton = function () {
    let buttonElement = document.querySelector(".gameButton");
    buttonElement.removeEventListener("click", generateGame);
    buttonElement.style.display = "none";
}

var disableGameBoard = function () {
    let cellElement = document.querySelectorAll("td");

    for (let i = 0; i < cellElement.length; i++) {
        cellElement[i].removeEventListener("click", clickOnCell);
    }

    // pause the computer player engine
    clearInterval(computerPlayerEngine);
}

// set game message for the player
var setGameMessage = function (message) {
    document.querySelector(".gameMessage").textContent =
        "Round " + gameRound + ": " + message;
}

var computerPlayerAction = function () {
    if (computerPlayer["turn"] === true && computerPlayer["mode"] === "computer" ) {
        //computerPlayerRandomApproach();
        computerPlayerDefensiveApproach();
    }
}

//make the computer play by randomly picking a spot on the board
var computerPlayerRandomApproach = function () {
    let listOfIndexForEmptyCellOnGameBoard = getListOfIndexForEmptyCellOnGameBoard();
    let random =  Math.floor((Math.random() * listOfIndexForEmptyCellOnGameBoard.length));
    let randomIndex = listOfIndexForEmptyCellOnGameBoard[random];

    document.querySelector('[data-id="' + randomIndex + '"]').click();
}

// make the computer player to be defensive and block the human player from winning
// check all of human player move
// check for all the possible combination the human player can win
// find the path closest to winning and block the human player
var computerPlayerDefensiveApproach = function () {
    // always aim for the center of the board for defense as the first step
    // only apply to odd number board size game because only odd number board have a center cell
    // if there is no winning move by the player, randomize the next move
    let winningIndex = getWinningCellIndexForHumanPlayer();

    if (boardSize % 2 === 1) {
        let indexForCenterCell = Math.floor(boardSize / 2);

        if (playerGameBoard[indexForCenterCell][indexForCenterCell] === "") {
            document.querySelector('[data-id="' + indexForCenterCell + "," + indexForCenterCell + '"]').click();
        } else if (winningIndex === false) {
            computerPlayerRandomApproach();
        } else {
            document.querySelector('[data-id="' + winningIndex + '"]').click();
        }
    }
}

// this function like the eye of the computer
// it helps the computer identify where to block the player
var getWinningCellIndexForHumanPlayer = function () {
    let winningCombination = [];
    let humanPlayerSymbolPosition = [];
    let shortestPathToWinningCombination = [];

    // find all the position the human player have place the symbol
    for (let a = 0; a < playerGameBoard.length; a++) {
        for (let b = 0; b < playerGameBoard.length; b++) {
            if (playerGameBoard[a][b] === humanPlayer["symbol"]) {
                humanPlayerSymbolPosition.push(a + "," + b);
            }
        }
    }

    // find all the possible winning combination based on the position of the human player symbol
    for (let i = 0; i < humanPlayerSymbolPosition.length; i++) {
        winningCombination = winningCombination.concat(
            getWinningCombinationBasedOnUserInput(humanPlayerSymbolPosition[i]));
    }

    // remove all the duplicated possible winning combination
    for (let a = 0; a < winningCombination.length; a++) {
        for (let b = a + 1; b < winningCombination.length; b++) {
            if (winningCombination[a].toString() === winningCombination[b].toString()) {
                winningCombination.splice(a, 1);
            }
        }
    }

    // find which of the possible combination has the short path to winning
    // as long as the player 1 cell away from winning, block it
    // it does not matter which combination it is
    outer_loop: for (let a = 0; a < winningCombination.length; a++) {
        let temp = 0;

        inner_loop: for (let b = 0; b < winningCombination[a].length; b++) {
                let xAxis = winningCombination[a][b].split(",")[0];
                let yAxis = winningCombination[a][b].split(",")[1];

                // check if the any combination contain symbols by computer player
                if (playerGameBoard[xAxis][yAxis] == computerPlayer["symbol"]) {
                    temp = 0;
                    break;
                }

                // find combination that are 1 cell away from completion
                if (playerGameBoard[xAxis][yAxis] == humanPlayer["symbol"]) {
                    temp++;
                }

                // shortest path which is board size - 1
                if (temp === boardSize - 1) {
                    shortestPathToWinningCombination = winningCombination[a];
                    break outer_loop;
                }
        }
    }

    // find the cell which is empty from the combination
    for (let i = 0; i < shortestPathToWinningCombination.length; i++) {
        let xAxis = shortestPathToWinningCombination[i].split(",")[0];
        let yAxis = shortestPathToWinningCombination[i].split(",")[1];

        if (playerGameBoard[xAxis][yAxis] === "") {
            return shortestPathToWinningCombination[i];
        }
    }

    return false;
}

let humanPlayer = {
    name: "Player O",
    symbol: "O",
    mode: "human",
    turn: true,
    score: 0
}

let computerPlayer = {
    name: "AI Godzilla X",
    symbol: "X",
    mode: "computer",
    turn: false,
    score: 0
}

// main
let gameRound = 1;
let boardSize = 3;
let playerGameBoard = [];
let computerPlayerEngine = null;

generateGame();