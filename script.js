//Game state variables

let boardDimensions = 3;
let userPlayer = 'X';
let userPlayer2 = 'O';
let aiPlayer;
let currentPlayer = userPlayer;
let gameOver = false;
let winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [6, 4, 2],
]

let boardArrayX = [];
let boardArrayO = [];
let boardArray = [];

//Handlers
const clickBoxHandler = (box) => {
    if (gameOver) {
        return;
    } else if (!boxes[box.target.id].innerText) {
        boxes[box.target.id].innerText = currentPlayer;
        boxes[box.target.id].classList.add("background-lightblue");
        boxes[box.target.id].classList.remove("background-blue");

    if (currentPlayer === 'X' && !boardArrayX.includes(parseInt(box.target.id))){
        boardArrayX.push(parseInt(box.target.id));
        switchPlayer(userPlayer, userPlayer2);
    } else if (currentPlayer === 'O' && !boardArrayX.includes(parseInt(box.target.id))) {
        boardArrayO.push(parseInt(box.target.id));
        switchPlayer(userPlayer, userPlayer2);
    }

    if (!boardArray.includes(parseInt(box.target.id))) {
        boardArray.push(parseInt(box.target.id));
    }

    checkWin();
    }
}

const boxHoverHandler = () => {
    event.target.classList.toggle("hover");
    event.target.classList.toggle("important");
}

const closeBtnHandler = () => {
    winModal.style.visibility = "hidden";
    overlay.classList.remove("overlay");
}

const displayWinModal = () => {
    overlay.classList.add("overlay");
    winModal.style.visibility = "visible";
}


// Game state functions
const startGame = () => {
    boardArray.length = 0;
    boardArrayX.length = 0;
    boardArrayO.length = 0;
    gameOver = false;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "";
        boxes[i].setAttribute("id", i);
        boxes[i].classList.remove("hover");
        boxes[i].classList.remove("important");
        boxes[i].classList.remove("background-lightblue");
        boxes[i].classList.remove("text-orange")
        boxes[i].classList.add("background-blue");
        boxes[i].addEventListener('mousedown', clickBoxHandler);
        boxes[i].addEventListener('mouseover', boxHoverHandler);
        boxes[i].addEventListener('mouseleave', boxHoverHandler)
        boxes[i].addEventListener('click', (event) => {
            event.target.classList.add("text-orange");
        })
    }
}

const switchPlayer = (player1, player2) => {
    return ((currentPlayer === player1) ? currentPlayer = player2 : currentPlayer = player1);
}

const checkWin = () => {
    let checkIncl = (arr, targetArr) => {
    return targetArr.every(el => arr.includes(el));
}

    if (gameOver) {
        return;
    } else {
        for (i = 0; i < winCombinations.length; i++) {
            if (checkIncl(boardArrayX, winCombinations[i])) {
                gameOver = true;
                console.log(`${checkWhichPlayerWon()} wins!`);
                document.querySelector(".modal-content-text > h2").innerText = `${checkWhichPlayerWon()} won!`
                displayWinModal();
            } else if (checkIncl(boardArrayO, winCombinations[i])) {
                gameOver = true;
                console.log(`${checkWhichPlayerWon()} wins!`);
                document.querySelector(".modal-content-text > h2").innerText = `${checkWhichPlayerWon()} won!`
                displayWinModal();
            }
        }

        if ((boardArray.length === boardDimensions * boardDimensions) && gameOver === false) {
            gameOver = true;
            console.log(`It's a draw!`)
            document.querySelector(".modal-content-text > h2").innerText = `It's a draw!`;
            displayWinModal();
                //temporary fix for modal not displaying on draw
        }
    }
    startBtnAddRemove();
}

const checkWhichPlayerWon = () => {
    switch (boxes[boardArray[boardArray.length - 1]].innerText) {
        case userPlayer:
        return "Player 1"
        break;
        case userPlayer2:
        return "Player 2"
        break;
        case aiPlayer:
        return "The Computer"
        break;
    }
}

const startBtnAddRemove = () => {
    if (!gameOver && boardArray.length !== boardDimensions * boardDimensions) {
        startBtn1.style.visibility = "hidden";
    } else {
        startBtn1.style.visibility = "visible";
    }
}

//DOM Variables
let main = document.querySelector("main");

let boxes = document.querySelectorAll(".board > div");

let overlay = document.createElement("div");
main.appendChild(overlay);

let startBtn1 = document.querySelector(".start-btn");
startBtn1.addEventListener("click", startGame);

let startBtn2 = document.querySelector(".modal-content > button")
startBtn2.addEventListener("click", () => {
    winModal.style.visibility = "hidden";
    overlay.classList.remove("overlay");
    startGame();
})

let closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", closeBtnHandler);

//
startGame();