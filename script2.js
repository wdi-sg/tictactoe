console.log("working");

var origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';

const winCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
            ];

const cells = document.querySelectorAll('.boxes');

function startGame() {
    origBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

startGame();

function turnClick(square) {
    turn(square.target.id, huPlayer);
}

function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).textContent = player;
}













