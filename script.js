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

var gameHistory = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];


// start the game
console.log("Hello");

// create function to check for click event
var squareClick = function (event) {
    // when box is clicked show id of box
    //console.log('clicked ' + this.id);
    //console.log(this);

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

    // var gameCounter.X = 0;
    // var gameCounter.O = 0;

    var gameCounter = {
        "X": 0,
        "O": 0
    };

    // run thru every rows
    for (var x = 0; x < 3; x++) {
        console.log("we are on row: " + x);
        // run thru every col
        for (var y = 0; y < 3; y++) {

            // if a square has either X or 0 as value, increase the counter by 1
            if ((gameHistory[x][y] === playerTurn)) {
                console.log("BANANA");
                gameCounter[playerTurn]++;

            };

            // if 3 Xs are found, there's a match
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


    // run thru every col
    for (var y = 0; y < 3; y++) {
        console.log("we are on col: " + y);

        // run thru every col
        for (var x = 0; x < 3; x++) {

            // if a square has either X or 0 as value, increase the counter by 1
            if ((gameHistory[x][y] === playerTurn)) {
                // || (gameHistory[x][y] === 'O')) {
                // console.log("X in col: " + y);
                // console.log("X in row: " + x);
                gameCounter[playerTurn]++ ;

            }

            // if 3 Xs are found, there's a match
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


//     for (var x = 0; x < 3; x++) {
//         for (var y = 0; y < 3; y++) {
//             if ((gameHistory[y][x] === 'X') || (gameHistory[y][x] === 'O')) {
//                 gameCounter = gameCounter + 1;
//             }
//             if (gameCounter === 3) {
//                 console.log("MATCH");
//             }
//         }
//         gameCounter = 0;
//     }
};

// create an empty game board
var gameBoard = [];

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

// // create a box element
// var box = document.getElementsByClassName('game-square');

// for (var i = 0; i < box.length; i++ ) {
//     // when button clicked run squareClick function;
//     box[i].addEventListener('click', squareClick);
// }

document.addEventListener('DOMContentLoaded', function (event) {
    // now that DOM is ready, set the button click
    var button = document.querySelector('#start');
    button.addEventListener('click', startGame);
});

var checkRow = function() {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            var myTemp;
            if (myTemp[x][y] == 'X') {
                alert("MATCH");
            }
        }
    }
}


// var checkCol1 = function() {
//     if(scoreBoard[0][0] == userBoard[0][0] && scoreBoard[1][0] == userBoard[1][0] && scoreBoard[2][0] == userBoard[2][0]){
//     alert("match found");
//     } else {
//     alert("no match found");
//     }
// };