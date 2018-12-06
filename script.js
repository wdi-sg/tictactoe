var turn = 0;
var player = 1;
var win = false;

var board = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
];

// var winResults = [
// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6]
// ];

var playerOne = [];
var playerTwo = [];

function allGrids() {
var grids = document.querySelectorAll(".grid");
    for (var i=0; i<grids.length; i++) {
            grids[i].addEventListener("click", outcome)
        }
}

allGrids();

function outcome(button) {
    if (turn % 2 === 0) {
        this.innerHTML = "X";
        this.removeEventListener('click', outcome);
        player = 2;
        console.log(board)

        if (playerOne.length > 2) {
            win = winCheck(player);
            if (win) {
                alert("X won!")
            }
            else {
                alert("O won!")
            }
        }
    }
        else {
            this.innerHTML = "O";
            this.removeEventListener('click', outcome);
            player =1;
            console.log(board)

            if (playerTwo.length > 2) {
                win = winCheck(player);
                if (win) {
                    alert("O won!")
                }
                else {
                    alert("X won!")
                }
        }
    }

turn++

}


function winCheck() {
        if ((player === board[0][0]) && (board[0][0] === board[1][1]) && (board[1][1]  === board[2][2])){
            return true;


        }

        if ((player === board[0][2]) && (board[0][2] === board[1][1]) && (board[1][1] === board[2][0])) {
            return true;
        }

        for ( var i=0; i < 3; i++) {
            if ((player === board[i][0]) && (board[i][0] === board[i][1]) && (board[i][1] === board[i][2])) {
            return true;
        }
    }

        for (var j= 0; j<3; j++){
         if ((player === board[0][j]) && (board[0][j] === board[1][j]) && (board[1][j] === board[2][j])) {
             return true;
         }
     }

}

