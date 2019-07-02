// Step-1. start the game
// Step-2. make squares appear
// Step-3. user clicks a box (x)
// Step-4. user clicks another box (o)
// Step-5. go back to step 3.

/*
////////////////////////////////////////////////////////
// 1st Version//////////////////////////////////////////
////////////////////////////////////////////////////////

var playerTurn = null; // null becos it's an empty square in the beginning.

// start the game
console.log("Hello");

// create function to check for click event
var squareClick = function (event) {
    // when box is clicked show id of box
    console.log('clicked ' + this.id);

    // check current playerTurn to determined next playerTurn
    if ((playerTurn == null) || (playerTurn == 'O')) {
        playerTurn = 'X';
    } else {
        playerTurn = 'O';
    }
    // update innerText of box click with playerTurn
    this.innerText = playerTurn;
};

// create a box element
var box = document.getElementsByClassName('game-square');

for (var i = 0; i < box.length; i++ ) {
    // when button clicked run squareClick function;
    box[i].addEventListener('click', squareClick);
}
*/

////////////////////////////////////////////////////////
// 2nd Version//////////////////////////////////////////
////////////////////////////////////////////////////////
var squares = [];
var playerTurn = null; // null becos it's an empty square in the beginning.

// start the game
console.log("Hello");

// create function to check for click event
var squareClick = function (event) {
    // when box is clicked show id of box
    console.log('clicked ' + this.id);

    // check current playerTurn to determined next playerTurn
    if ((playerTurn == null) || (playerTurn == 'O')) {
        playerTurn = 'X';
    } else {
        playerTurn = 'O';
    }
    // update innerText of box click with playerTurn
    this.innerText = playerTurn;
};

// create an empty game board
var gameBoard = [];

var startGame = function(event) {
    //console.log("create board");

    var board = document.createElement('div');
    board.className = 'board';

    for (var i = 0; i < 3; i++) {
        var row = document.createElement('div');
        row.className = 'game-row';
        board.appendChild(row);

        for (var j = 0; j < 3; j++) {
            var square = document.createElement('button');
            square.className = 'game-square';
            row.appendChild(square);
            square.addEventListener('click', squareClick);
        }
    }
     // gameBoard.push(square);
    document.body.appendChild(board);
}

// create a box element
var box = document.getElementsByClassName('game-square');

for (var i = 0; i < box.length; i++ ) {
    // when button clicked run squareClick function;
    box[i].addEventListener('click', squareClick);
}

document.addEventListener('DOMContentLoaded', function (event) {
    // now that DOM is ready, set the button click
    var button = document.querySelector('#start');
    button.addEventListener('click', startGame);
});