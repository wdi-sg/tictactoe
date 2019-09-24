var board = {
top: [null, null, null],
middle: [null, null, null],
bottom: [null, null, null]
};

var playerTurn = 0;
i = 0;

function turnSquare() {
    var clicked = event.target;
    if (playerTurn % 2 === 0) {
        playerTurn++;
        console.log(playerTurn);
        clicked.style.backgroundColor = 'yellow';
    } else if (playerTurn % 2 === 1) {
        playerTurn++;
        console.log(playerTurn);
        clicked.style.backgroundColor = 'purple'
    }
}
var gameSquare = document.getElementsByClassName('game-square');

for (i = 0; i < gameSquare.length; i++) {
    gameSquare[i].addEventListener('click', turnSquare)
}