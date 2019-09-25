console.log("hello");

var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

//put array of squares into variable

var allSquares = document.querySelectorAll(".game-square");

//created for loop in order for event listener to work

var attachListenersToBoard = function () {
    console.log("looping through");
    for (i = 0; i < allSquares.length; i++) {
        var bigSquare = allSquares[i];
        bigSquare.addEventListener('click', doSomething);
    }
};

//create game counter global variable

var gameStage = 0;

//created what will happen after event listener is activated
//if you have two outcomes – here it's "x" and "o", you don't have to blindly code out everything, simply use the modulus to choose between odd and even.


var doSomething = function (event) {
    console.log(gameStage);
    console.log(event.target);
    let coordinates = event.target.id;
    console.log(coordinates);
        if (gameStage%2 === 0 && gameStage < 9) {
            event.target.innerText = "X";
                board[coordinates[0]][coordinates[1]] = "X";
        } else if (gameStage%2 === 1 && gameStage < 9) {
            event.target.innerText = "O";
                board[coordinates[0]][coordinates[1]] = "O";
    }
    winnerCheck();
    console.log(board);
    gameStage ++;
};


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







// var attachListenersToBoard2 = function () {
//     console.log("checking for winner");
//     for (i = 0; i < board.length; i++) {
//         for (j=0; j < board[i].length; j++) {
//             var bigBoard = board[i][j];
//             bigBoard.addEventListener('click', trackSomething);
//         }
//     }
// };

// var trackSomething = function (event) {
//     console.log("winner function");
//     if (board[00]
// }



// str = "Daniel"
// str[00], 00, 00
// arr[1]

//ran attach listener function

attachListenersToBoard();

// var board = {
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// };

// var attachListenersToBoard = function () {
//     console.log("looping through");
//     for (i = 0; i < board.length; i++) {
//         for (i = j; j < board[i].length; j++) {
//             var playLog = board
//         }
//         var bigSquare = allSquares[i];
//         bigSquare.addEventListener('click', doSomething);
//     }
// };