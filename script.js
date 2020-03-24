var firstRowLeft = document.querySelector('.first-row-left');
var firstRowCenter = document.querySelector('.first-row-center');
var firstRowRight = document.querySelector('.first-row-right');
var secondRowLeft = document.querySelector('.second-row-left');
var secondRowCenter = document.querySelector('.second-row-center');
var secondRowRight = document.querySelector('.second-row-right');
var thirdRowLeft = document.querySelector('.third-row-left');
var thirdRowCenter = document.querySelector('.third-row-center');
var thirdRowRight = document.querySelector('.third-row-right');

var playerTurn = 'X';

var clickHandler = function (event) {
    var elementSelected = document.querySelector('.' + event.target.className);

    if (playerTurn == 'X') {
        playerTurn = 'O';
        elementSelected.innerText = 'X';
    } else {
        playerTurn = 'X';
        elementSelected.innerText = 'O';
    }
}

firstRowLeft.addEventListener("click", clickHandler);
firstRowCenter.addEventListener("click", clickHandler);
firstRowRight.addEventListener("click", clickHandler);
secondRowLeft.addEventListener("click", clickHandler);
secondRowCenter.addEventListener("click", clickHandler);
secondRowRight.addEventListener("click", clickHandler);
thirdRowLeft.addEventListener("click", clickHandler);
thirdRowCenter.addEventListener("click", clickHandler);
thirdRowRight.addEventListener("click", clickHandler);