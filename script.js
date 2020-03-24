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

var clickHandler = function (event) {
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
    for (var k = 0; k < board.length; k++) {
        for (var l = 0; l < board.length; l++) {

            }
        }
    }
}