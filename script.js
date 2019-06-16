// create a back end game board
const createGameBoard = function () {
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
const createGameBoardUI = function (gameBoard) {
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

const generateGame = function () {
    // remove the old game before generating a new game
    if (document.querySelector(".gameBoard > table") !== null) {
        document.querySelector(".gameBoard > table").remove();
        gameRound++;
    }

    // overwrite the global game board variable
    playerGameBoard = createGameBoard(boardSize);
    createGameBoardUI(playerGameBoard);

    if (humanPlayer["turn"] === true) {
        setGameMessage("It is now " + humanPlayer["name"] + "'s turn.");
    } else {
        setTimeout(computerPlayerAction, 350);
        setGameMessage("It is now " + computerPlayer["name"] + "'s turn.");
    }

    hidePlayAgainButton();

    return playerGameBoard;
}

// click event for each cells
const clickOnCell = function (event) {
    let xAxis = this.getAttribute("data-id").split(",")[0];
    let yAxis = this.getAttribute("data-id").split(",")[1];

    if (humanPlayer["turn"] === true) {
        event.target.textContent = humanPlayer["symbol"];
        playerGameBoard[xAxis][yAxis] = humanPlayer["symbol"];

        humanPlayer["turn"] = false;
        computerPlayer["turn"] = true;

        setGameMessage("It is now " + computerPlayer["name"] + "'s turn.");
        this.removeEventListener("click", clickOnCell);
        checkForMatch(this, humanPlayer);

        // computer players turn right after player takes an action
        setTimeout(computerPlayerAction, 350);

    } else if (computerPlayer["turn"] === true) {
        event.target.textContent = computerPlayer["symbol"];
        playerGameBoard[xAxis][yAxis] = computerPlayer["symbol"];

        computerPlayer["turn"] = false;
        humanPlayer["turn"] = true;

        setGameMessage("It is now " + humanPlayer["name"] + "'s turn.");
        this.removeEventListener("click", clickOnCell);
        checkForMatch(this, computerPlayer);
    }
}

// check for winning matches based on user input
const checkForMatch = function (userInput, player) {
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

                if (player["mode"] === "human") {
                    tempElement.className = "win";
                } else {
                    tempElement.className = "lose";
                }
            }

            // disable game board since there is a winner
            disableGameBoard();
            player["win"]++;

            if (player["mode"] === "human") {
                computerPlayer["lose"]++;
                setGameMessage(player["name"] + ", you win the game!");
                showPlayAgainButton();

            } else if (player["mode"] === "computer") {
                humanPlayer["lose"]++;
                setGameMessage("You have lost the game :(");
                showPlayAgainButton();
            }

            break;
        }
    }

    checkGameIsDraw(matchFound);
}

// check if the board is completely filled and determined if it is a draw
const checkGameIsDraw = function (matchFound) {
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
        setGameMessage("The game is a draw!");
        gameDraw++;

        showPlayAgainButton();
    }
}

const getListOfIndexForEmptyCellOnGameBoard = function () {
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
const getAllWinningCombination = function () {
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
const getWinningCombinationBasedOnUserInput = function (userInputIndex) {
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

const showScoreBoard = function () {
    console.log("Round: " + gameRound);
    console.log("# of Draw: " + gameDraw);
    console.log(humanPlayer["name"] + " has won " + humanPlayer["win"] + " round.");
    console.log(computerPlayer["name"] + " has won " + computerPlayer["win"] + " round.");
}

const showPlayAgainButton = function () {
    let buttonElement = document.querySelector(".gameButton");
    buttonElement.addEventListener("click", generateGame);
    buttonElement.style.display = "block";
    showScoreBoard();
}

const hidePlayAgainButton = function () {
    let buttonElement = document.querySelector(".gameButton");
    buttonElement.removeEventListener("click", generateGame);
    buttonElement.style.display = "none";
}

const disableGameBoard = function () {
    let cellElement = document.querySelectorAll("td");

    for (let i = 0; i < cellElement.length; i++) {
        cellElement[i].removeEventListener("click", clickOnCell);
    }
}

// set game message for the player
const setGameMessage = function (message) {
    document.querySelector(".gameMessage").textContent =
        "Round " + gameRound + ": " + message;
}

const computerPlayerAction = function () {
    //computerPlayerRandomApproach();
    //computerPlayerDefensiveApproach();
    computerPlayerDefensiveAggressiveApproach();
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
const computerPlayerDefensiveApproach = function () {
    // always aim for the center of the board for defense as the first step
    // only apply to odd number board size game because only odd number board have a center cell
    // if there is no winning move by the player, randomize the next move
    let humanPlayerWinningCellIndex = getWinningCellIndexForHumanPlayer();
    let indexForCenterOfBoardCell = Math.floor(boardSize / 2);

    if (playerGameBoard[indexForCenterOfBoardCell][indexForCenterOfBoardCell] === "" && boardSize % 2 === 1) {
        document.querySelector('[data-id="' + indexForCenterOfBoardCell + "," + indexForCenterOfBoardCell + '"]').click();
    } else if (humanPlayerWinningCellIndex === false) {
        computerPlayerRandomApproach();
    } else {
        document.querySelector('[data-id="' + humanPlayerWinningCellIndex + '"]').click();
    }
}

// make the computer player to be defensive and block the human player from winning
// computer player will also be looking out for winning move and try to win the game
const computerPlayerDefensiveAggressiveApproach = function () {
    // always aim for the center of the board for defense as the first step
    // only apply to odd number board size game because only odd number board have a center cell
    // if there is no winning move by the player, randomize the next move
    let humanPlayerWinningCellIndex = getWinningCellIndexForHumanPlayer();
    let computerPlayerWinningCellIndex = getWinningCellIndexForComputerPlayer();
    let indexForCenterOfBoardCell = Math.floor(boardSize / 2);

    if (playerGameBoard[indexForCenterOfBoardCell][indexForCenterOfBoardCell] === "" && boardSize % 2 === 1) {
        document.querySelector('[data-id="' + indexForCenterOfBoardCell + "," + indexForCenterOfBoardCell + '"]').click();
    } else if (computerPlayerWinningCellIndex !== false) {
        document.querySelector('[data-id="' + computerPlayerWinningCellIndex + '"]').click();
    } else if (humanPlayerWinningCellIndex === false) {
        computerPlayerRandomApproach();
    } else {
        // block human player
        document.querySelector('[data-id="' + humanPlayerWinningCellIndex + '"]').click();
    }
}

// this function like the eye of the computer
// it helps the computer identify where it can win the game
const getWinningCellIndexForHumanPlayer = function () {
    let winningCombination = [];
    let humanPlayerSymbolPosition = [];
    let shortestPathToWinningCombination = [];

    // find all the position the human player have placed the symbol
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
                    break inner_loop;
                }

                // find combination that are 1 cell away from completion
                if (playerGameBoard[xAxis][yAxis] == humanPlayer["symbol"]) {
                    temp++;
                }

                // shortest path which is board size - 1
                // make sure that the 2nd loop is complete before executing this check
                // this is to fix a bug whereby if the first 2 cell matches the pattern
                if (temp === boardSize - 1 && b === winningCombination[a].length - 1) {
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

const getWinningCellIndexForComputerPlayer = function () {
    let winningCombination = [];
    let computerPlayerSymbolPosition = [];
    let shortestPathToWinningCombination = [];

    // find all the position the computer player have placed the symbol
    for (let a = 0; a < playerGameBoard.length; a++) {
        for (let b = 0; b < playerGameBoard.length; b++) {
            if (playerGameBoard[a][b] === computerPlayer["symbol"]) {
                computerPlayerSymbolPosition.push(a + "," + b);
            }
        }
    }

    // find all the possible winning combination based on the position of the human player symbol
    for (let i = 0; i < computerPlayerSymbolPosition.length; i++) {
        winningCombination = winningCombination.concat(
            getWinningCombinationBasedOnUserInput(computerPlayerSymbolPosition[i]));
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
                if (playerGameBoard[xAxis][yAxis] == humanPlayer["symbol"]) {
                    temp = 0;
                    break inner_loop;
                }

                // find combination that are 1 cell away from completion
                if (playerGameBoard[xAxis][yAxis] == computerPlayer["symbol"]) {
                    temp++;
                }

                // shortest path which is board size - 1
                // make sure that the 2nd loop is complete before executing this check
                // this is to fix a bug whereby if the first 2 cell matches the pattern
                if (temp === boardSize - 1 && b === winningCombination[a].length - 1) {
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

const humanPlayer = {
    name: "Human",
    symbol: "O",
    mode: "human",
    turn: true,
    lose: 0,
    win: 0
}

const computerPlayer = {
    name: "AI Godzilla Xtreme",
    symbol: "X",
    mode: "computer",
    turn: false,
    lose: 0,
    win: 0
}

// main
let gameDraw = 0;
let gameRound = 1;
let boardSize = 3;
let playerGameBoard = [];

generateGame();