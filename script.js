//Creating main div container
var mainDivContainer = document.createElement('div');
mainDivContainer.classList.add('main-container');
document.body.appendChild(mainDivContainer);

var playerTurn = 'X';

var clickHandler = function (event) {
    var elementSelected = document.querySelector('.' + event.target.className);

    if (playerTurn == 'X' && elementSelected.innerText == '') {
        playerTurn = 'O';
        elementSelected.innerText = 'X';
    } else if (playerTurn == 'O' && elementSelected.innerText == '') {
        playerTurn = 'X';
        elementSelected.innerText = 'O';
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


var firstRowLeft = document.querySelector('.square-0-0');
var firstRowCenter = document.querySelector('.square-0-1');
var firstRowRight = document.querySelector('.square-0-2');
var secondRowLeft = document.querySelector('.square-1-0');
var secondRowCenter = document.querySelector('.square-1-1');
var secondRowRight = document.querySelector('.square-1-2');
var thirdRowLeft = document.querySelector('.square-2-0');
var thirdRowCenter = document.querySelector('.square-2-1');
var thirdRowRight = document.querySelector('.square-2-2');