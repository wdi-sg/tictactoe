var userChoice = ["X", "O"];
var gameSquares = document.querySelectorAll('.game-square');

var gameSquaresClick = function(){
    console.log('clicked')

};

var gameSquaresI = 0
while(gameSquaresI < gameSquares.length){
    gameSquares[gameSquaresI].addEventListener('click', gameSquaresClick);
    gameSquares[gameSquaresI].value = "X";
    gameSquaresI++
};