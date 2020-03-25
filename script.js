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

var startState = 0;

function startStateSwitcher () {
    if (startState === 0) {
        startState = 1;
    } else {
        startState = 0;
    }
}

//Start button appear or disappear
var button = document.querySelector('.start');

var buttonClicked = function () {
    button.style.display = 'none';
    startStateSwitcher();
}

var buttonReappear = function () {
    button.style.display = 'block';
    startStateSwitcher();
}

button.addEventListener('click', buttonClicked);

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
        alert('Player X wins!');
    }

    var alertO = function () {
        alert('Player O wins!');
    }

    for (var k = 0; k < board.length; k++) {
        if (k === 0) {
            //First row check
            if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
            } else if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
            //First column check
            } else if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
            } else if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') {
                setTimeout(alert0, 200);
                buttonReappear();
            //Left diagonal check
            } else if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
            } else if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
            }
        } else if (k === 1) {
            //Second row check
            if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
            } else if (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
            //Second column check
            } else if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
            } else if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
            }
        } else if (k === 2) {
            //Third row check
            if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
            } else if (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
            //Third column check
            } else if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
            } else if (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
            //Right diagonal check
            } else if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
                setTimeout(alertX, 200);
                buttonReappear();
            } else if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
                setTimeout(alertO, 200);
                buttonReappear();
            }
        }
    }
}