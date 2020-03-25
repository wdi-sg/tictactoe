let startBoard;
let userPlayer = 'X';
let userPlayer2 = 'O';
let aiPlayer = 'O';
let currentPlayer = userPlayer;
let winStatus = false;
let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
]

let boardArrayX = [];
let boardArrayO = [];
let boardArray = [];

let boxes = document.querySelectorAll(".board > div");

const switchPlayer = (player1, player2) => {
    return ((currentPlayer === player1) ? currentPlayer = player2 : currentPlayer = player1);
}

const clickHandler = (box) => {
    if (winStatus) {
        return;
    } else {
        boxes[box.target.id].innerText = currentPlayer;
        if (currentPlayer === 'X' && !boardArrayX.includes(parseInt(box.target.id))){
            boardArrayX.push(parseInt(box.target.id));
        } else if (currentPlayer === 'O' && !boardArrayX.includes(parseInt(box.target.id))) {
            boardArrayO.push(parseInt(box.target.id));
        }

        if (!boardArray.includes(parseInt(box.target.id))) {
            boardArray.push(parseInt(box.target.id));
        }
        checkWin();
    }
    switchPlayer(userPlayer, userPlayer2);
}

const replayGame = () => {
    boardArray.length = 0;
    winStatus = false;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "";
    }
}

const startGame = () => {
    boardArray.length = 0;
    boardArrayX.length = 0;
    boardArrayO.length = 0;
    winStatus = false;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "";
        boxes[i].setAttribute("id", i);
        boxes[i].addEventListener('click', clickHandler);
    }
}

let startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", startGame);

let checker = (arr, targetArr) => {
    return targetArr.every(el => arr.includes(el));
}

const checkWin = () => {
    if (winStatus) {
        return;
    } else {
        for (i = 0; i < winCombinations.length; i++) {
            if (checker(boardArrayX, winCombinations[i])) {
                winStatus = true;
                console.log("X wins!");
            } else if (checker(boardArrayO, winCombinations[i])) {
                winStatus = true;
                console.log("O wins!");
            }
        }
    }
}

startGame();