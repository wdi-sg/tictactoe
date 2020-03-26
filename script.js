console.log('wassup loser');

var winSets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var squares = document.querySelectorAll(".game-square");
squares.innerHTML = " ";


var board = [
        null, null, null,
        null, null, null,
        null, null, null
];

var steps = 0;

changedSquare();


var message = document.querySelector(".output");

var clickedSquare = function (event) {
    var clickedElement = event.target;
    if (steps === 0) {
        steps = steps + 1;
        clickedElement.innerHTML = "X";
    } else if (steps === 1) {
        steps = steps - 1;
        clickedElement.innerHTML = "O";
    }
};


var changedSquare = function (selectedSquare, clickedSqaure) {
    for (var i = 0; i < board.length; i++) {
        var selectedSquare = squares[i];
        selectedSquare.addEventListener('click', clickedSquare);
    }
}

console.log("yo you still workin");

// var checkWin = function () {
//     if (board[0][0] === currentPlayer && board[0][1] === currentPlayer && board[0][2] === currentPlayer) {
//         alert(currentPlayer + " has won!");
//         begin = true;
//         return ;
//     } else if (board[1][0] === currentPlayer && board[1][1] === currentPlayer && board[1][2] === currentPlayer) {
//         alert(currentPlayer + " has won!");
//         begin = true;
//         return;
//     } else if (board[2][0] === currentPlayer && board[2][1] === currentPlayer && board[2][2] === currentPlayer) {
//         alert(currentPlayer + " has won!");
//         begin = true;
//         return;
//     } else if (board[0][0] === currentPlayer && board[1][0] === currentPlayer && board[2][0] === currentPlayer) {
//         alert(currentPlayer + " has won!");
//         begin = true;
//         return;
//     } else if (board[0][1] === currentPlayer && board[1][1] === currentPlayer && board[2][1] === currentPlayer) {
//         alert(currentPlayer + " has won!");
//         begin = true;
//         return;
//     } else if (board[0][2] === currentPlayer && board[1][2] === currentPlayer && board[2][2] === currentPlayer) {
//         alert(currentPlayer + " has won!");
//         begin = true;
//         return;
//     } else if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
//         alert(currentPlayer + " has won!");
//         begin = true;
//         return ;
//     } else if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
//         alert(currentPlayer + " has won!");
//         begin = true;
//         return;
//     } else if (turnCount === 9) {
//         alert("It is a draw!");
//         begin = true;
//         return;
//     }
// }

changedSquare();