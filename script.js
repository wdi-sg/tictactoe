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
        [null, null, null,],
        [null, null, null,],
        [null, null, null,],
];

var steps = 0;

console.log(steps);

var message = document.querySelector(".output");

var checkWin = function (currentPlayer) {
    console.log(board);

    if (board[0][0] === currentPlayer && board[0][1] === currentPlayer && board[0][2] === currentPlayer) {
        alert(currentPlayer + " has won!");

        return ;
    } else if (board[1][0] === currentPlayer && board[1][1] === currentPlayer && board[1][2] === currentPlayer) {
        alert(currentPlayer + " has won!");

        return;
    } else if (board[2][0] === currentPlayer && board[2][1] === currentPlayer && board[2][2] === currentPlayer) {
        alert(currentPlayer + " has won!");

        return;
    } else if (board[0][0] === currentPlayer && board[1][0] === currentPlayer && board[2][0] === currentPlayer) {
        alert(currentPlayer + " has won!");

        return;
    } else if (board[0][1] === currentPlayer && board[1][1] === currentPlayer && board[2][1] === currentPlayer) {
        alert(currentPlayer + " has won!");

        return;
    } else if (board[0][2] === currentPlayer && board[1][2] === currentPlayer && board[2][2] === currentPlayer) {
        alert(currentPlayer + " has won!");

        return;
    } else if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        alert(currentPlayer + " has won!");

        return ;
    } else if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        alert(currentPlayer + " has won!");
        return;
    } else if (steps === 9) {
        alert("It is a draw!");

        return;
    }
}

var clickedSquare = function (event) {

    var clickedElement = event.target;

    // if (event.target.innerHTML !== '') {
    //     return
    // }

    if (steps % 2 === 0) {
        steps = steps + 1;

        clickedElement.innerHTML = "X";
        checkWin("X")
        console.log(steps)
    } else if (steps % 2 === 1) {
        steps = steps + 1;
        clickedElement.innerHTML = "O";
        checkWin("O")
        console.log(steps)
    }

// function checkWin (parameter1, parameter2) {
//     console.log(parameter1, parameter2)
// }

// checkWin(87, "world")
// checkWin("fuck", "you")

    // switch (steps) {
    //     case 0:
    //         steps = steps + 1;
    //         clickedElement.innerHTML = "X";
    //         break
    //     case 1:
    //         steps = steps - 1;
    //         clickedElement.innerHTML = "O";
    //         break
    // }
};


var changedSquare = function () {
    for (var i = 0; i < squares.length; i++) {
        var selectedSquare = squares[i];
        selectedSquare.addEventListener('click', clickedSquare);
    }
}

changedSquare();

console.log("yo you still workin");