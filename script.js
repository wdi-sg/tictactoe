let startBoard;
let userPlayer = 'X';
let userPlayer2 = 'O';
let aiPlayer = 'O';
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

let boardArray = [];
let boxes = document.querySelectorAll(".board > div");

const clickHandler = (box) => {
    if (winStatus) {
        return;
    } else {
        boxes[box.target.id].innerText = userPlayer;
        if (!boardArray.includes(parseInt(box.target.id))) {
            boardArray.push(parseInt(box.target.id));
        }
        checkWin();
    }
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
            if (checker(boardArray, winCombinations[i])) {
                winStatus = true;
                console.log("You win!");
            }
        }
    }
}

startGame();