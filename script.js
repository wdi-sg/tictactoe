var userChoice = ["X", "O", ""];
var gameSquares = document.querySelectorAll('.game-square');

var player;
var playerSymbol;
var gameProgress = 0;

var gameSquaresClick = function(event){
    console.log('clicked');
    console.log(gameSquaresI);
    if (gameProgress % 2 === 0) {
        event.target.innerText = userChoice[0];
        gameProgress++;
        console.log(gameProgress);
    } else {
        event.target.innerText = userChoice[1];
        gameProgress++;
    };
};

for (var gameSquaresI = 0; gameSquaresI < gameSquares.length; gameSquaresI++){
    playerClick = gameSquares[gameSquaresI].addEventListener('click', gameSquaresClick);
};