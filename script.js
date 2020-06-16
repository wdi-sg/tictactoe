var gameBoard = []; //initialize game board as an array
var gameState = "X";

gameBoard = document.querySelectorAll('.game-square'); //stores all the spans into array

for(i = 0; i < gameBoard.length; i++){ //add onclick to all spans
    gameBoard[i].onclick = doSomething;
}
function doSomething(){
    if(gameState == "X"){
        this.innerHTML = "X";
        gameState = "O";
    } else {
        this.innerHTML = "O";
        gameState = "X";
    }
}