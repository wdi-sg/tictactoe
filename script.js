var gameBoard;
var player1;
var player2;
const winTypes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]
//retrieve all spans from HTML and assign it variable square; the large game board
var square = document.querySelectorAll('.game-square');
//call startGame function
startGame();

function startGame(){
    gameBoard = Array.from(Array(9).keys());
    for (var i = 0; i < square.length; i++){
        square[i].innerText = "";
        square[i].addEventListener("click", checked, false);
    }
}
//tracks no.of player clicks
var counter = 0;

//Assign click event target to individual spans
function checked(event){
    var squareIndividual = event.target;
    //checks counter for even or odd clicks
        //console.log("before conditional" , counter);
    //if click is even, insert text to span as 'X'
    if (counter % 2 === 0) {
        squareIndividual.textContent = "X";
    //if click is odd insert text to span as 'O'
    }   else if (counter % 2 !== 0) {
        squareIndividual.textContent = "O";
    }
    // document.getElementById(squareIndividual).removeEventListener("click", checked);
    counter++;
    console.log(squareIndividual.id);
        //console.log("after conditional" , counter);
};
//loops through the whole var square array and assign event lister & 'checked' function to it
/*var i = 0;
while (i<square.length){
    var board = square[i];
    console.log(board);
    board.addEventListener('click', checked);
    i++;
}*/
//function to check whether var squareIndividual has been clicked. If yes, remove event listener