//Setup the starting values of the game.
var turn = `O`; //First turn is always cross.
var currentPlayer;
var moves = 0; //Count number of moves.
var grids = document.querySelectorAll(".grid");
var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
var gameStarted = false;
var gameBoard = document.getElementById('gameboard')
var playerOneName;
var playerTwoName;

var player = {
    1: {
        name: "",
        icon: "",
        wins: 0,
        losses: 0
    },
    2: {
        name: "",
        icon: "",
        wins: 0,
        losses: 0
    },
    updateData: function(no, nameInput, iconInput) {
        this[no].name = nameInput;
        this[no].icon = iconInput;
    },
    addWin: function(playerNo) {
        this[playerNo].wins++;
    },
    addLoss: function(playerNo) {
        this[playerNo].losses++;
    }
}

function clearInput(element) {
    element.value = "";
}

//Display first turn.
var turnDisplay = document.querySelector(".turn")
var turnElement = document.getElementById("show-turn")
turnElement.innerText = turn

//This function will return "X" if "X" is the winner.
var winCheck = function() {

    var p1Win = (player[1].icon + player[1].icon + player[1].icon)
    var p2Win = (player[2].icon + player[2].icon + player[2].icon)

    //Check each column
    for (var col = 0; col < 3; col++) {
        var colArray = [];
        for (var row = 0; row < 3; row++) {
            colArray.push(board[row][col])
        }
        var colCombi = colArray.join("")
        if (colCombi === p1Win) {
            playerWin(1);
            return player[1].name
        } else if (colCombi === p2Win) {
            playerWin(2);
            return player[2].name
        }
    }
    //Check each row
    for (var row = 0; row < 3; row++) {
        var rowArray = [];
        for (var col = 0; col < 3; col++) {
            rowArray.push(board[row][col])
        }
        var rowCombi = rowArray.join("")
        if (rowCombi === p1Win) {
            playerWin(1);
            return player[1].name
        } else if (rowCombi === p2Win) {
            playerWin(2);
            return player[2].name
        }
    }

    //Check the board diagonally left to right, and make sure it doesn't match empty boards
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[1][1] !== "") {
        if (board[1][1] === player[1].icon) {
            player.addWin(1);
            return player[1].name
        } else if (board[1][1] === player[2].icon) {
            player.addWin(2);
            return player[2].name
        }
    }
    //Check diagonal right to left, and make sure it doesn't match empty boards
    else if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[1][1] !== "") {
        if (board[1][1] === player[1].icon) {
            player.addWin(1);
            return player[1].name
        } else if (board[1][1] === player[2].icon) {
            player.addWin(2);
            return player[2].name
        }
    }
}


//Update the board whenever grids get clicked.
function updateBoard() {
    board = [
        [grids[0].innerText, grids[1].innerText, grids[2].innerText],
        [grids[3].innerText, grids[4].innerText, grids[5].innerText],
        [grids[6].innerText, grids[7].innerText, grids[8].innerText]
    ];
}


//Function to change current turn display.
function displayTurn(value) {
    return turnElement.innerText = value
};
//Function to change grid to become an "O"
function playerOneMove(element) {
    element.innerText = player[1].icon;
    currentPlayer = player[2].name;
}

//Function to change grid to become an "X",
function playerTwoMove(element) {
    console.log(`p2 move made`)
    element.innerText = player[2].icon; //Change element's inner text.
    currentPlayer = player[1].name;
}

//What to do whenever a grid is clicked.
function handleClick() {
    //Only run the function if the div is empty & doesn't already have text, eg X or O, and if gameStarted is true;
    clearInterval(countdown);
    console.log(`current player is ${currentPlayer}`)
    if (this.innerText === "" && gameStarted) {
        if (currentPlayer === player[1].name) {
            //the 'this' argument passed into the cross function references the element that is clicked, the grid div.
            playerOneMove(this);
        } else if (currentPlayer === player[2].name) {
            //the 'this' argument passed into the cross function references the element that is clicked, the grid div.
            playerTwoMove(this);
        }
        updateBoard();
        moves++;
        displayTurn(currentPlayer)
        var countdown = setInterval(updateTimer, 1000);
        if (countdown === 0) {
            clearInterval(countdown);
        }
    }

    //TO HANDLE WIN/LOSS
    var winner = winCheck();
    if (winner === player[1].name || winner === player[2].name) {
        displayTurn(`${winner} wins! Resetting game in 3 seconds...`);
        congratulations(winner);
        setTimeout(restart, 3000);
        //If there's no winner but 9 moves have been made, change 'turn' div to show gameover.
    } else if (moves === 9) {
        displayTurn(`Game is over! Press restart to start over.`)
        return setTimeout(restart, 3000);
    }
}
//Function to restart game
function restart() {
    document.getElementById('congrats').classList.add('hide');
    for (var i = 0; i < grids.length; i++) {
        grids[i].innerText = "";
    };
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    moves = 0;
    currentPlayer = player[1].name;
    updateGameStats();
    displayTurn(currentPlayer);
}
//
// var restartBtn = document.getElementById(`restart-btn`);
// restartBtn.addEventListener(`click`, restart)

//add click eventListener to all grid divs, clicks should trigger the function handleClick.
for (var i = 0; i < grids.length; i++) {
    grids[i].addEventListener('click', handleClick);
}
//Start game Function
var startBtn = document.getElementById('start-btn');
var instructions = document.getElementById('instructions')
var playerOneNameInput = document.getElementById('player1-nameinput')
var playerTwoNameInput = document.getElementById('player2-nameinput')
var playerOneIconInput = document.getElementById('player1-iconinput')
var playerTwoIconInput = document.getElementById('player2-iconinput')
var playerOneNameDisplay = document.getElementById('p1-name')
var playerTwoNameDisplay = document.getElementById('p2-name')
var playerOneWinsDisplay = document.getElementById('p1wins')
var playerOneLossesDisplay = document.getElementById('p1losses')
var playerTwoWinsDisplay = document.getElementById('p2wins')
var playerTwoLossesDisplay = document.getElementById('p2losses')
var gameStatus = document.getElementById('game-status')
var currentInstructions = document.getElementById('current-instructions')

//START GAME FUNCTION
startBtn.addEventListener('click', startGame)

function startGame() {
    //If any of the inputs are empty, do not start game, display error message.
    if (playerOneIconInput.value === "" || playerOneNameInput.value === "" || playerTwoIconInput.value === "" || playerTwoNameInput.value === "") {
        return currentInstructions.innerText = "Please ensure all inputs are filled up."

        //If both icon/name inputs are the same, return error message.
    } else if (playerOneIconInput.value === playerTwoIconInput.value) {
        return currentInstructions.innerText = "Players cannot have the same icons."
    } else if (playerOneNameInput.value === playerTwoNameInput.value) {
        return currentInstructions.innerText = "Players cannot have the same name."

        //If all inputs have satisfactory values, start the game.
    } else {
        //Tell program that game has started.
        gameStarted = true;
        //Hide instructions & start button.
        startBtn.classList.add('hide');
        instructions.classList.add('hide')
        //Display gameboard, game status & restart button.
        gameBoard.classList.remove('hide')
        gameStatus.classList.remove('hide')
        document.getElementById('timer').classList.remove('hide');
        //Get the values of player 1 and player 2 from their inputs, then clear the inputs.
        player.updateData(1, playerOneNameInput.value, playerOneIconInput.value);
        player.updateData(2, playerTwoNameInput.value, playerTwoIconInput.value);
        clearInput(playerOneNameInput);
        clearInput(playerTwoNameInput);
        clearInput(playerOneIconInput);
        clearInput(playerTwoIconInput);
        playerOneNameDisplay.innerText = player[1].name
        playerTwoNameDisplay.innerText = player[2].name
        currentPlayer = player[1].name;
        updateGameStats();
        displayTurn(currentPlayer);
        randomMove();
    }
}

//Function to show the congrats div.
function congratulations(winner) {
    document.getElementById('congrats').classList.remove('hide')
    document.getElementById('winner-name').innerText = winner;
}

//Function to add wins/losses according to which player has won.
function playerWin(no) {
    if (no === 1) {
        player.addWin(1);
        player.addLoss(2)
    } else if (no === 2) {
        player.addWin(2);
        player.addLoss(1)
    }
}

//Function to update the players wins/losses display.
function updateGameStats() {
    playerOneWinsDisplay.innerText = player[1].wins
    playerOneLossesDisplay.innerText = player[1].losses
    playerTwoWinsDisplay.innerText = player[2].wins
    playerTwoLossesDisplay.innerText = player[2].losses
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getEmptyGrids() {
    var emptyGrids = [];
    for (var i = 0; i < grids.length; i++) {
        if (grids[i].innerText === "") {
            emptyGrids.push(i);
        }
    }
    return emptyGrids;
}

var timeLimit = 10;

function updateTimer() {
    if (timeLimit > 0) {
        document.getElementById('time-left').innerText = timeLimit;
        console.log(`${timeLimit} seconds left.`)
        timeLimit--;
    } else if (timeLimit === 0) {
        return;
    }
}

//Function to make random move for current player.
function randomMove() {

    var emptyGrids = getEmptyGrids();
    //Get indexes of empty grids.
    var randomIndex = emptyGrids[getRandomInt(emptyGrids.length)];
    var randomGrid = grids[randomIndex]

    if (currentPlayer === player[1].name) {
        currentPlayer = player[2].name;
        moves++;
        displayTurn(currentPlayer)
        randomGrid.innerText = player[1].icon
        updateBoard();
    } else if (currentPlayer === player[2].name) {
        currentPlayer = player[1].name;
        displayTurn(currentPlayer);
        randomGrid.innerText = player[2].icon
        moves++;
        updateBoard();
    }
    var winner = winCheck();
    if (winner === player[1].name || winner === player[2].name) {
        displayTurn(`${winner} wins! Resetting game in 3 seconds...`);
        congratulations(winner);
        return setTimeout(restart, 3000);
        //If there's no winner but 9 moves have been made, change 'turn' div to show gameover.
    } else if (moves === 9) {
        displayTurn(`Game is over! Press restart to start over.`)
        return setTimeout(restart, 3000);
    }
  }
