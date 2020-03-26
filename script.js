//Creating main div container
var mainDivContainer = document.createElement('div');
mainDivContainer.classList.add('main-container');
document.body.appendChild(mainDivContainer);

var playerTurn = 'X';

var board = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
];

//Start state
var startState = 0;

function startStateSwitcher () {
    if (startState === 0) {
        startState = 1;
    } else {
        startState = 0;
    }
}

//Prompt for player name at the start
var promptPlayerX;
var promptPlayerO;
var replacePlayerXName = document.querySelector('.player-X');
var replacePlayerOName = document.querySelector('.player-O');


function promptPlayerName () {
    playerX = prompt("Player X name: ");
    playerO = prompt("Player O name: ");
    replacePlayerXName.innerText = playerX;
    replacePlayerOName.innerText = playerO;
}

setTimeout(promptPlayerName, 500);

//Start button appear or disappear
var button = document.querySelector('.start');

var buttonClicked = function () {
    button.style.display = 'none';
    resetGame();
    startStateSwitcher();
}

var buttonReappear = function () {
    button.style.display = 'block';
    startStateSwitcher();
}

button.addEventListener('click', buttonClicked);

//Score counter
var playerXScore = 0;
var playerOScore = 0;

var scoreCounter = function () {
    var selectScoreX = document.querySelector('.scoreX');
    var selectScoreO = document.querySelector('.scoreO');
    selectScoreX.innerText = playerXScore;
    selectScoreO.innerText = playerOScore;
}

//Game functionality
var clickHandler = function (event) {
    if (startState === 1) {
        var elementSelected = document.querySelector('.' + event.target.className);
        //Split the event.target.className string into an array (e.g. square-0-0 into [square, 0, 0])
        var gridSelected = (event.target.className).split('-');

        if (playerTurn == 'X' && elementSelected.innerText == '') {
            playerTurn = 'O';
            elementSelected.innerText = 'X';
            //Update the board array
            board[gridSelected[1]][gridSelected[2]] = 'X'
        } else if (playerTurn == 'O' && elementSelected.innerText == '') {
            playerTurn = 'X';
            elementSelected.innerText = 'O';
            //Update the board array
            board[gridSelected[1]][gridSelected[2]] = 'O'
        }
        winCondition();
    }
}

//Creating the grid
var gridCreator = function (num) {
    for (var i = 0; i < num; i++) {
        var rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        mainDivContainer.appendChild(rowDiv);

        for (var j = 0; j < num; j++) {
            var columnDiv = document.createElement('div');
            columnDiv.classList.add('square-' + i + '-' + j);
            columnDiv.addEventListener("click", clickHandler);
            rowDiv.appendChild(columnDiv);

        }
    }
}

gridCreator(3);

//Win condition
var winCondition = function () {
    var alertX = function () {
        alert(`${playerX} wins! Click start to replay.`);
    }

    var alertO = function () {
        alert(`${playerO} wins! Click start to replay.`);
    }

    for (var k = 0; k < board.length; k++) {
        if (k === 0) {
            //First row check
            if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
                playerXScore++;
                scoreCounter();
            } else if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
                playerOScore++;
                scoreCounter();
            //First column check
            } else if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
                playerXScore++;
                scoreCounter();
            } else if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
                playerOScore++;
                scoreCounter();
            //Left diagonal check
            } else if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
                playerXScore++;
                scoreCounter();
            } else if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
                playerOScore++;
                scoreCounter();
            }
        } else if (k === 1) {
            //Second row check
            if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
                playerXScore++;
                scoreCounter();
            } else if (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
                playerOScore++;
                scoreCounter();
            //Second column check
            } else if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
                playerXScore++;
                scoreCounter();
            } else if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
                playerOScore++;
                scoreCounter();
            }
        } else if (k === 2) {
            //Third row check
            if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
                playerXScore++;
                scoreCounter();
            } else if (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
                playerOScore++;
                scoreCounter();
            //Third column check
            } else if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
                playerXScore++;
                scoreCounter();
            } else if (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
                playerOScore++;
                scoreCounter();
            //Right diagonal check
            } else if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
                playerXScore++;
                scoreCounter();
            } else if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
                playerOScore++;
                scoreCounter();
            }
        }
    }
}

//Reset game board
function resetGame () {
    playerTurn = 'X'
    var square00 = document.querySelector('.square-0-0');
    square00.innerText = null;
    board[0][0] = null;
    var square01 = document.querySelector('.square-0-1');
    square01.innerText = null;
    board[0][1] = null;
    var square02 = document.querySelector('.square-0-2');
    square02.innerText = null;
    board[0][2] = null;
    var square10 = document.querySelector('.square-1-0');
    square10.innerText = null;
    board[1][0] = null;
    var square11 = document.querySelector('.square-1-1');
    square11.innerText = null;
    board[1][1] = null;
    var square12 = document.querySelector('.square-1-2');
    square12.innerText = null;
    board[1][2] = null;
    var square20 = document.querySelector('.square-2-0');
    square20.innerText = null;
    board[2][0] = null;
    var square21 = document.querySelector('.square-2-1');
    square21.innerText = null;
    board[2][1] = null;
    var square22 = document.querySelector('.square-2-2');
    square22.innerText = null;
    board[2][2] = null;
}