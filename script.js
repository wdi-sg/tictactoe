//Variables

var x = 'X';
var o = 'O';
var step = 0;

//Controls whether the game can continue or stop
var isGameOver = false;

//Array of multiple arrays of the 8 different winning combinations
var winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


//Variable referring to all elements with the class .game-square
var boxes = document.querySelectorAll('.game-square');


//Callback function that first checks if game is over, if not it returns. Else if boxes[i] holds either the variable x or o, it will return. Else it will check if step is an even or odd number and will update the innerText accordingly depending on the step. Check for winner function is run after every click.
var handleClick = function(event) {
    if(isGameOver) {
    return;
    }

    if(event.target.innerText === x || event.target.innerText === o) {
        return;
    }

    if (step % 2 === 0) {
        event.target.innerText = x;
    } else {
        event.target.innerText = o;
    }
    step++;
    checkIfWon();
}

//Check if won function takes the winning combinations index of each individual array's number. That number represents the boxes array index and checks for its innerText value and if any given set of winning combination is all equal to the same value, a player has won. Checking if the first index of the array is empty to determine whether all 3 values are the same. Update isGameOver status so that players cannot continue the game after game has been won.
var checkIfWon = function() {

    for(var i = 0; i < winningCombinations.length; i++) {

        if((boxes[winningCombinations[i][0]].innerText ===  boxes[winningCombinations[i][1]].innerText) &&
         (boxes[winningCombinations[i][1]].innerText === boxes[winningCombinations[i][2]].innerText) &&
        (boxes[winningCombinations[i][0]].innerText != '')) {

            if (step % 2 === 0) {
                console.log("Player O has won!");
            } else {
                console.log("Player X has won!");
            }
            isGameOver = true;
      }
    }
}

//This creates event handlers for every box with the class name of .game-square(boxes[i]). Loop through every one of those classes to add an event handler to each.
for(var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', handleClick);
        console.log('X');
    }

//Refresh button to restart the game.
var refreshPage = document.querySelector('.refresh-button');

var refreshButton = function (event){
    var allBoxes = document.querySelectorAll('.game-square');
    for(var i = 0; i < allBoxes.length; i++) {
        allBoxes[i].innerText = '';
        isGameOver = false;
    }
}

refreshPage.addEventListener('click', refreshButton);