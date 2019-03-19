// create a back end game board
var createGameBoard = function () {
    var gameBoard = [];

    for (var a = 0; a < boardSize; a++) {
        var row = [];
        for (var b = 0; b < boardSize; b++) {
            row.push("");
        }
        gameBoard.push(row);
    }

    return gameBoard;
}

// generate game board UI using the back end game board
var createGameBoardUI = function (gameBoard) {
    var tableElement = document.createElement("table");

    for (var a = 0; a < gameBoard.length; a++) {
        var rowElement = document.createElement("tr");

        for (var b = 0; b < gameBoard.length; b++) {
            var cellElement = document.createElement("td");

            cellElement.setAttribute("data-id" , a + "," + b);
            cellElement.addEventListener("click", clickOnSquare);
            cellElement.textContent = "";

            rowElement.appendChild(cellElement);
        }

        tableElement.appendChild(rowElement);
    }
    setGameMessage(firstPlayer["name"] + " will go first.");
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

    return playerGameBoard;
}

// click event for each cells
var clickOnSquare = function (event) {
    var xAxis = this.getAttribute("data-id").split(",")[0];
    var yAxis = this.getAttribute("data-id").split(",")[1];

    if (firstPlayer["turn"] === true) {
        event.target.textContent = firstPlayer["symbol"];
        playerGameBoard[xAxis][yAxis] = firstPlayer["symbol"];

        hidePlayAgainButton();
        setGameMessage("It is now " + secondPlayer["name"] + "'s turn.");

        firstPlayer["turn"] = false;
        secondPlayer["turn"] = true;

        this.removeEventListener("click", clickOnSquare);
        checkForMatch(this, firstPlayer);

    } else if (secondPlayer["turn"] === true) {
        event.target.textContent = secondPlayer["symbol"];
        playerGameBoard[xAxis][yAxis] = secondPlayer["symbol"];

        hidePlayAgainButton();
        setGameMessage("It is now " + firstPlayer["name"] + "'s turn.");

        secondPlayer["turn"] = false;
        firstPlayer["turn"] = true;

        this.removeEventListener("click", clickOnSquare);
        checkForMatch(this, secondPlayer);
    }
}

// check for winning matches based on user input
var checkForMatch = function (userInput, player) {
    var matchFound = false;
    var cellValue = userInput.textContent;
    var winningPossibilityBasedOnUserInput = getWinningPossibilityBasedOnUserInput(userInput);

    // check if user input matches one of the possibilities
    for (var i = 0; i < winningPossibilityBasedOnUserInput.length; i++) {
        matchFound = winningPossibilityBasedOnUserInput[i].every(function(item) {
            var xAxis = item.split(",")[0];
            var yAxis = item.split(",")[1];

            return playerGameBoard[xAxis][yAxis] === cellValue;
        });

        // set the style of the cells to show the win class
        // remove all click events to end the game
        // alert player that he have win the game
        if (matchFound === true) {
            for (var r = 0; r < winningPossibilityBasedOnUserInput[i].length; r++) {
                var tempElement = document.querySelector('[data-id="' + winningPossibilityBasedOnUserInput[i][r] + '"]');
                tempElement.className = "win";
            }

            // disable game board since there is a winner
            disableGameBoard();

            player["score"] = player["score"] + 1;
            alert(player["name"] + ". You win the game!");
            setGameMessage(player["name"] + ", you win the game! Your score is " + player["score"]);

            showPlayAgainButton();

            break;
        }
    }

    checkGameIsDraw(matchFound);
}

// check if the board is completely filled and determined if it is a draw
var checkGameIsDraw = function (matchFound) {
    var filled = true;

    for (var a = 0; a < playerGameBoard.length; a++) {
        for (var b = 0; b < playerGameBoard[a].length; b++) {
            if (playerGameBoard[a][b] === "") {
                filled = false;
            }
        }
    }

    if (filled === true && matchFound === false) {
        alert("The game is a draw!");
        setGameMessage("The game is a draw!");

        showPlayAgainButton();
    }
}

// get all the winning possibilities for row, column, diagonal
var getAllWinningPossibility = function () {
    var temp = [];
    var winningSequence = [];

    // 3 row winning sequence
    for (var a = 0; a < boardSize; a++) {
        for (var b = 0; b < boardSize; b++) {
            temp.push(a + "," + b);
        }
        winningSequence.push(temp);
        temp = [];
    }

    // 3 column winning sequence
    for (var a = 0; a < boardSize; a++) {
        for (var b = 0; b < boardSize; b++) {
            temp.push(b + "," + a);
        }
        winningSequence.push(temp);
        temp = [];
    }

    // diagonal winning sequence from top left corner (0,0) to bottom right corner (2,2)
    // pattern for this is +1 +1
    for (var a = 0; a < boardSize; a++) {
        temp.push((0 + a) + "," + (0 + a));
    }
    winningSequence.push(temp);
    temp = [];

    // diagonal winning sequence from bottom left corner (2,0) to top right corner (0,2)
    // pattern for this is -1 +1
    for (var a = 0; a < boardSize; a++) {
        temp.push((boardSize - 1 - a) + "," + (0 + a));
    }

    winningSequence.push(temp);
    temp = [];

    return winningSequence;
}

// find all possible winning possibilities based on user input
var getWinningPossibilityBasedOnUserInput = function (userInput) {
    var winningPossibilityBasedOnUserInput = [];
    var cellIndex = userInput.getAttribute("data-id");
    var winningPossibility = getAllWinningPossibility(3);

    // find all possible winning possibilities based on user input
    for (var i = 0; i < winningPossibility.length; i++) {
        if (winningPossibility[i].indexOf(cellIndex) > -1) {
            winningPossibilityBasedOnUserInput.push(winningPossibility[i]);
        }
    }

    return winningPossibilityBasedOnUserInput;
}

var showPlayAgainButton = function () {
    var buttonElement = document.querySelector(".gameButton");
    buttonElement.addEventListener("click", generateGame);
    buttonElement.style.display = "block";
}

var hidePlayAgainButton = function () {
    var buttonElement = document.querySelector(".gameButton");
    buttonElement.removeEventListener("click", generateGame);
    buttonElement.style.display = "none";
}

var disableGameBoard = function () {
    var cellElement = document.querySelectorAll("td");

    for (var i = 0; i < cellElement.length; i++) {
        cellElement[i].removeEventListener("click", clickOnSquare);
    }
}

// set game message for the player
var setGameMessage = function (message) {
    document.querySelector(".gameMessage").textContent = message;
}

var firstPlayer = {
    name: "Player O",
    symbol: "O",
    turn: true,
    score: 0
}
var secondPlayer = {
    name: "Player X",
    symbol: "X",
    turn: false,
    score: 0
}

var boardSize = 3;
var playerGameBoard = [];

generateGame();