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

var playerTurn = null; // null becos it's an empty square in the beginning.
var numOfRows = 3;
var sqPerRows = 3;

// create an empty game board
var gameBoard = [];

var gameHistory = [
[null, null, null],
[null, null, null],
[null, null, null]
];

var gameCounter = {
    "X": 0,
    "O": 0
};

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

var checkingRows = function() {
    // run thru every rows
    for (var x = 0; x < 3; x++) {
        console.log("we are on row: " + x);
        // run thru every col
        for (var y = 0; y < 3; y++) {

            // if a square has either X or 0 as value, increase the counter by 1
            if ((gameHistory[x][y] === playerTurn)) {
                gameCounter[playerTurn]++;
            };

            // if 3 Xs or 3 Os are found, there's a match
            if (gameCounter[playerTurn] === 3) {
                alert(playerTurn + " WINS");
            }
        }

        console.log("Counter X: " + gameCounter["X"]);
        console.log("Counter O: " + gameCounter["O"]);

        gameCounter = {
            "X": 0,
            "O": 0
        };
    }
}



var checkingColumns = function() {
    // run thru every col
    for (var y = 0; y < 3; y++) {
        console.log("we are on col: " + y);

        // run thru every col
        for (var x = 0; x < 3; x++) {

            // if a square has either X or 0 as value, increase the counter by 1
            if ((gameHistory[x][y] === playerTurn)) {
                gameCounter[playerTurn]++ ;

            }
            // if 3 Xs or 3 0s are found, there's a match
            if (gameCounter[playerTurn] === 3) {
                alert("X WINS");
            }
        }
        console.log("Counter X: " + gameCounter["X"]);
        console.log("Counter O: " + gameCounter["O"]);

        gameCounter = {
            "X": 0,
            "O": 0
        };
    }
}

 // start the game
console.log("Hello");

var startGame = function(event) {
    //console.log("create board");

    var board = document.createElement('div');
    board.className = 'board';

    for (var x = 0; x < numOfRows; x++) {
        var row = document.createElement('div');
        row.className = 'game-row';
        board.appendChild(row);

        for (var y = 0; y < sqPerRows; y++) {
            var square = document.createElement('button');
            square.className = 'game-square';

            //STORE posX
            square.setAttribute("id", x);
            //STORE posY
            square.setAttribute("value", y);
            row.appendChild(square);
            square.addEventListener('click', squareClick);

            // checking if posX & posY are captured
            var tempX = square.getAttribute('id');
            var tempY = square.getAttribute('value');
            console.log(tempX + tempY);
        }
    }
     // gameBoard.push(square);
     document.body.appendChild(board);
 }


 document.addEventListener('DOMContentLoaded', function (event) {
    // now that DOM is ready, set the button click
    var button = document.querySelector('#start');
    button.addEventListener('click', startGame);
});


// When square is clicked
var squareClick = function (event) {
    // when square is clicked show id of box
    // console.log('clicked ' + this.id);
    // console.log(this);

    // check current playerTurn to determined next playerTurn
    if ((playerTurn == null) || (playerTurn == 'O')) {
        playerTurn = 'X';
    } else {
        playerTurn = 'O';
    }

    // update innerText of box click with playerTurn
    this.innerText = playerTurn;
    console.log(playerTurn + "click" + this.id + this.value);

    // Store clicked position into game history
    var posX = this.id;
    var posY = this.value;

    // Store either X or O into posX & posY of gameHistory
    gameHistory[posX][posY] = playerTurn;
    console.log(gameHistory);

    checkingRows();
    checkingColumns();
};