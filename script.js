// create a back end game board
const createGameBoard = function () {
    const gameBoard = [];

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
    const tableElement = document.createElement("table");

    for (let a = 0; a < gameBoard.length; a++) {
        const rowElement = document.createElement("tr");

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
    playerGameBoard = createGameBoard();
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
        checkForWinState(this, playerGameBoard, humanPlayer);


        if (getListOfIndexForEmptyCellOnGameBoard(playerGameBoard).length > 0) {
            // computer players turn right after player takes an action
            setTimeout(computerPlayerAction, 350);
        }


    } else if (computerPlayer["turn"] === true) {
        event.target.textContent = computerPlayer["symbol"];
        playerGameBoard[xAxis][yAxis] = computerPlayer["symbol"];

        computerPlayer["turn"] = false;
        humanPlayer["turn"] = true;

        setGameMessage("It is now " + humanPlayer["name"] + "'s turn.");
        this.removeEventListener("click", clickOnCell);
        checkForWinState(this, playerGameBoard, computerPlayer);
    }
}

// check for winning matches based on user input
const checkForWinState = function (userInput, newGameBoard, player) {
    let matchFound = false;
    const winningCombinationBasedOnUserInput = getWinningCombinationBasedOnUserInput(userInput.getAttribute("data-id"));

    // check if user input matches one of the possibilities
    for (let i = 0; i < winningCombinationBasedOnUserInput.length; i++) {
        matchFound = winningCombinationBasedOnUserInput[i].every(function(item) {
            const xAxis = item.split(",")[0];
            const yAxis = item.split(",")[1];

            return newGameBoard[xAxis][yAxis] === userInput.textContent;
        });

        // set the style of the cells to show the win class
        // remove all click events to end the game
        // alert player that he have win the game
        if (matchFound === true) {
            for (let r = 0; r < winningCombinationBasedOnUserInput[i].length; r++) {
                const tempElement = document.querySelector('[data-id="' + winningCombinationBasedOnUserInput[i][r] + '"]');

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

    checkForDrawState(matchFound);
}

// check if the board is completely filled and determined if it is a draw
const checkForDrawState = function (winState) {
    let filled = true;

    for (let a = 0; a < playerGameBoard.length; a++) {
        for (let b = 0; b < playerGameBoard[a].length; b++) {
            if (playerGameBoard[a][b] === "") {
                filled = false;
            }
        }
    }

    if (filled === true && winState === false) {
        gameDraw++;

        disableGameBoard();
        showPlayAgainButton();
        setGameMessage("The game is a draw!");
    }
}

const getListOfIndexForEmptyCellOnGameBoard = function (newGameBoard) {
    const temp  = [];

    for (let a = 0; a < newGameBoard.length; a++) {
        for (let b = 0; b < newGameBoard.length; b++) {
            if (newGameBoard[a][b] === ""){
                temp.push(a + "," + b);
            }
        }
    }

    return temp;
}

// get all the winning combination for row, column, diagonal
const getAllWinningCombination = function () {
    let temp = [];
    const winningCombination = [];

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
    const winningCombinationBasedOnUserInput = [];

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
    const buttonElement = document.querySelector(".gameButton");
    buttonElement.addEventListener("click", generateGame);
    buttonElement.style.display = "block";
    showScoreBoard();
}

const hidePlayAgainButton = function () {
    const buttonElement = document.querySelector(".gameButton");
    buttonElement.removeEventListener("click", generateGame);
    buttonElement.style.display = "none";
}

const disableGameBoard = function () {
    const cellElement = document.querySelectorAll("td");

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
    computerPlayerDefensiveAggressiveApproach();
}

// as tic tac toe is a 0 sum game, one players misfortune is the other player fortunate
// minimax will be used to determine the best outcome for the computer player based on the worst outcome from the human player
// max always start with computer player
// min always for human player
// this algorithm try to get the best outcome for the computer base on the worst outcome for the human based on their response
const minimax = function (newGameBoard, player) {
    // get the list of empty cells on the game board
    // computer player will try to get the maximum score based on the given empty cells
    const availableCellsIndex = getListOfIndexForEmptyCellOnGameBoard(newGameBoard);

    // this is the base method for terminating the recursive minimax function
    if (checkForWin(newGameBoard, humanPlayer) === true) {
        return { score: -10 };
    } else if (checkForWin(newGameBoard, computerPlayer) === true) {
        return { score: 10 };
    } else if (availableCellsIndex.length === 0) {
        return { score: 0 };
    }

    let bestMove;
    let moves = [];

    // run through all the empty cells
    // for each of the cell, computer player will try to fill in with it's symbol to find the best outcome - max
    for (let i = 0; i < availableCellsIndex.length; i++) {
        let move = {};
        const xAxis = availableCellsIndex[i].split(",")[0];
        const yAxis = availableCellsIndex[i].split(",")[1];

        move.index = availableCellsIndex[i];
        newGameBoard[xAxis][yAxis] = player.symbol;

        // run minimax on the human player to get their response which they will setup for the worst outcome for the computer player
        // human player will always try to get the lowest possible score to oppose the computer player
        // a recursion will run to determine the score
        if (player["mode"] === "computer") {
            let result = minimax(createSnapshot(newGameBoard), humanPlayer);
            move.score = result.score;
        } else {
            let result = minimax(createSnapshot(newGameBoard), computerPlayer);
            move.score = result.score;
        }
        newGameBoard[xAxis][yAxis] = "";
        moves.push(move);
    }

    // based on the move list returned from the recursion, consolidate and find the min/max outcome for the player
    // depending on the stage, if this is on the max stage. Computer  will get the best possible outcome
    if(player["mode"] === "computer") {
        let bestScore = -10000;

        for(let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
         // human player will get the best possible outcome which in turn is the worst outcome for the computer player
         // this means that human player will always try to get the lowest possible score to oppose the computer player
        let bestScore = 10000;

        for(let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}

//make the computer play by randomly picking a spot on the board
const computerPlayerRandomApproach = function () {
    const listOfIndexForEmptyCellOnGameBoard = getListOfIndexForEmptyCellOnGameBoard();
    const random =  Math.floor((Math.random() * listOfIndexForEmptyCellOnGameBoard.length));
    const randomIndex = listOfIndexForEmptyCellOnGameBoard[random];

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
    const humanPlayerWinningCellIndex = getWinningCellIndexForHumanPlayer();
    const indexForCenterOfBoardCell = Math.floor(boardSize / 2);

    if (playerGameBoard[indexForCenterOfBoardCell][indexForCenterOfBoardCell] === "" && boardSize % 2 === 1) {
        document.querySelector('[data-id="' + indexForCenterOfBoardCell + "," + indexForCenterOfBoardCell + '"]').click();
    } else if (humanPlayerWinningCellIndex === false) {
        computerPlayerRandomApproach();
    } else {
        document.querySelector('[data-id="' + humanPlayerWinningCellIndex + '"]').click();
    }
}

// make the computer player to be defensive and block the human player from winning
// computer player will also be looking out for winning move and try to win the game using minimax
const computerPlayerDefensiveAggressiveApproach = function () {
    // always aim for the center of the board for defense as the first step
    // only apply to odd number board size game because only odd number board have a center cell
    // if there is no winning move by the player, randomize the next move
    const humanPlayerWinningCellIndex = getWinningCellIndexForHumanPlayer();
    const computerPlayerWinningCellIndex = getWinningCellIndexForComputerPlayer();
    const indexForCenterOfBoardCell = Math.floor(boardSize / 2);

    if (playerGameBoard[indexForCenterOfBoardCell][indexForCenterOfBoardCell] === "" && boardSize % 2 === 1) {
        document.querySelector('[data-id="' + indexForCenterOfBoardCell + "," + indexForCenterOfBoardCell + '"]').click();
    } else if (computerPlayerWinningCellIndex !== false) {
        // always try to win
        document.querySelector('[data-id="' + computerPlayerWinningCellIndex + '"]').click();
    } else if (humanPlayerWinningCellIndex !== false) {
        // if unable to win, always try to block human player's move
        document.querySelector('[data-id="' + humanPlayerWinningCellIndex + '"]').click();
    } else {
        // choose the best move using minimax
        // once filtered based on the 3 criteria above, run minimax
        // because of the above criteria, there are some form of alpha pruning achieve before running minimax which save computation
        const bestMove = minimax(createSnapshot(playerGameBoard), computerPlayer);
        document.querySelector('[data-id="' + bestMove.index + '"]').click();
    }
}

// this function like the eye of the computer player
// it helps the computer identify where the human player can win the game
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
        const xAxis = shortestPathToWinningCombination[i].split(",")[0];
        const yAxis = shortestPathToWinningCombination[i].split(",")[1];

        if (playerGameBoard[xAxis][yAxis] === "") {
            return shortestPathToWinningCombination[i];
        }
    }

    return false;
}

// this function like the eye of the computer player
// it helps the computer identify where it can win the game
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
        const xAxis = shortestPathToWinningCombination[i].split(",")[0];
        const yAxis = shortestPathToWinningCombination[i].split(",")[1];

        if (playerGameBoard[xAxis][yAxis] === "") {
            return shortestPathToWinningCombination[i];
        }
    }

    return false;
}

const checkForWin = function (newGameBoard, player) {
    let matchFound = false;

    for (let i = 0; i < winningCombination.length; i++) {
        matchFound = winningCombination[i].every(function(item) {
            const xAxis = item.split(",")[0];
            const yAxis = item.split(",")[1];

            return newGameBoard[xAxis][yAxis] === player.symbol;
        });

        if (matchFound === true) {
            break;
        }
    }

    return matchFound;
}

// to enable deep cloning of an  object
// this is to overcome the issue of shallow cloning object in JS
// spread does not work because the game board is an mutable object storing a list of mutable objects
var createSnapshot = function (gameBoard) {
    let temp = [ [],[],[] ];

    for (let a = 0; a < gameBoard.length; a++) {
        for (let b = 0; b < gameBoard[a].length; b++) {
            temp[a].push(gameBoard[a][b]);
        }
    }

    return temp;
}

let gameDraw = 0;
let gameRound = 1;
let playerGameBoard = [];

const boardSize = 3;
const winningCombination = getAllWinningCombination();

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

generateGame();