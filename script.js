console.log("hello");

//create game counter and 'array' representation of board

var gameStage = 0;
var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

//targeted all squares and stored into variable

var allSquares = document.querySelectorAll(".game-square");

//created for loop in order for event listener to work

var attachListenersToBoard = function () {
    console.log("looping through");
    for (i = 0; i < allSquares.length; i++) {
        var bigSquare = allSquares[i];
        bigSquare.addEventListener('click', doSomething);
    }
};


//created what will happen after event listener is activated: use  modulus to choose between odd and even.

//*note* By assigning id to each square, you can get them "targeted" with each click.
// continued..we are essentially telling JS where each click takes place.

var doSomething = function (event) {
    console.log(gameStage);
    console.log(event.target);
    let coordinates = event.target.id;
    console.log(coordinates);
        if (gameStage%2 === 0 && gameStage < 9) {
            event.target.innerText = "X";
                board[coordinates[0]][coordinates[1]] = "X";
//equivalent to board[representation of row][representation of cell]
        } else if (gameStage%2 === 1 && gameStage < 9) {
            event.target.innerText = "O";
                board[coordinates[0]][coordinates[1]] = "O";
    }
    winnerCheck();
    console.log(board);
    gameStage ++;
};

//created winnerCheck function.


var winnerCheck = function () {
    console.log("winning check");
    if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X" ||
        board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X" ||
        board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X" ||
        board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X" ||
        board[1][0] === "X" && board[1][1] === "X" && board[2][1] === "X" ||
        board[2][0] === "X" && board[1][2] === "X" && board[2][2] === "X" ||
        board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X" ||
        board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X"
        ) {
        alert("X wins");
    } else if (
        board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O" ||
        board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O" ||
        board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O" ||
        board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O" ||
        board[1][0] === "O" && board[1][1] === "O" && board[2][1] === "O" ||
        board[2][0] === "O" && board[1][2] === "O" && board[2][2] === "O" ||
        board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O" ||
        board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O"
        ) {
        alert("O wins");
    }
};

attachListenersToBoard();