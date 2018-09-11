//start with turn 1, ends with a max of turn 9
var turn = 1;
var gameStatus = document.getElementsByTagName("h1")[0];

//ensuring that player 1 and player 2 marks out different signs when its their turn
function scribe (event) {
    if (turn % 2 !== 0) {
    this.textContent = "x";
    this.classList.add("x")
        if (turn > 4) {
            checkResults("x");
        }
    } else {
    this.textContent = "o";
    this.classList.add("o")
        if (turn > 4) {
            checkResults("o");
        }
    }
    turn ++;
}

for (var i = 1; i <= 9; i++) {
        document.getElementById(i).addEventListener("click",scribe)
    };

//create function to notify players when one of them wins - From turn 5 onwards, check if anybody wins


// 8 winning combinations listed below:
// [1,2,3],
// [4,5,6],
// [7,8,9],
// [1,4,7],
// [2,5,8],
// [3,6,9],
// [1,5,9],
// [3,5,7],

function checkResults (className) {
    var board = document.getElementsByClassName("game-field");
    switch (true) {
        case (board[0].classList[1] === className && board[1].classList[1] === className && board[2].classList[1] === className):
            gameStatus.textContent = `${className} Wins!`
            break;
        case (board[3].classList[1] === className && board[4].classList[1] === className && board[5].classList[1] === className):
            gameStatus.textContent = `${className} Wins!`
            break;
        case (board[6].classList[1] === className && board[7].classList[1] === className && board[8].classList[1] === className):
            gameStatus.textContent = `${className} Wins!`
            break;
        case (board[0].classList[1] === className && board[3].classList[1] === className && board[6].classList[1] === className):
            gameStatus.textContent = `${className} Wins!`
            break;
        case (board[1].classList[1] === className && board[4].classList[1] === className && board[7].classList[1] === className):
            gameStatus.textContent = `${className} Wins!`
            break;
        case (board[2].classList[1] === className && board[5].classList[1] === className && board[8].classList[1] === className):
            gameStatus.textContent = `${className} Wins!`
            break;
        case (board[0].classList[1] === className && board[4].classList[1] === className && board[8].classList[1] === className):
            gameStatus.textContent = `${className} Wins!`
            break;
        case (board[2].classList[1] === className && board[4].classList[1] === className && board[6].classList[1] === className):
            gameStatus.textContent = `${className} Wins!`
            break;
        default:
            gameStatus.textContent = 'Status'
        }
    }