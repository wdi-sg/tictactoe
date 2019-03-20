const arrOfSq = document.querySelectorAll(".square");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

let turn = 0;
let player;

function gameEnd(){
    for (let i = 0; i < arrOfSq.length; i++) {
        arrOfSq[i].removeEventListener("click",playersMove);
        arrOfSq[i].textContent = "";
    }
    turn = 0;
    let player;
    message.textContent = "Click on a Sq to start game!";
    addListeners();
}

function checkForWin(){
    if(turn > 3) {
        if (arrOfSq[0].textContent && arrOfSq[1].textContent && arrOfSq[2].textContent === "X" || arrOfSq[0].textContent && arrOfSq[1].textContent && arrOfSq[2].textContent === "O" ) {
            alert("Game Won! Restarting the game..");
            gameEnd();
        } else if (arrOfSq[3].textContent && arrOfSq[4].textContent && arrOfSq[5].textContent === "X" || arrOfSq[3].textContent && arrOfSq[4].textContent && arrOfSq[5].textContent === "O" ) {
            alert("Game Won! Restarting the game..");
            gameEnd();
        } else if (arrOfSq[6].textContent && arrOfSq[7].textContent && arrOfSq[8].textContent === "X" || arrOfSq[6].textContent && arrOfSq[7].textContent && arrOfSq[8].textContent === "O" ) {
            alert("Game Won! Restarting the game..");
            gameEnd();
        } else if (arrOfSq[0].textContent && arrOfSq[3].textContent && arrOfSq[6].textContent === "X" || arrOfSq[0].textContent && arrOfSq[3].textContent && arrOfSq[6].textContent === "O" ) {
            alert("Game Won! Restarting the game..");
            gameEnd();
        } else if (arrOfSq[1].textContent && arrOfSq[4].textContent && arrOfSq[7].textContent === "X" || arrOfSq[1].textContent && arrOfSq[4].textContent && arrOfSq[7].textContent === "O" ) {
            alert("Game Won! Restarting the game..");
            gameEnd();
        } else if (arrOfSq[2].textContent && arrOfSq[5].textContent && arrOfSq[8].textContent === "X" || arrOfSq[2].textContent && arrOfSq[5].textContent && arrOfSq[8].textContent === "O" ) {
            alert("Game Won! Restarting the game..");
            gameEnd();
        } else if (arrOfSq[0].textContent && arrOfSq[4].textContent && arrOfSq[8].textContent === "X" || arrOfSq[0].textContent && arrOfSq[4].textContent && arrOfSq[8].textContent === "O" ) {
            alert("Game Won! Restarting the game..");
            gameEnd();
        } else if (arrOfSq[2].textContent && arrOfSq[4].textContent && arrOfSq[6].textContent === "X" || arrOfSq[2].textContent && arrOfSq[4].textContent && arrOfSq[6].textContent === "O" ) {
            alert("Game Won! Restarting the game..");
            gameEnd();
        }
    }
}

function playersMove(event){
    if (event.target.textContent === "") {
        if (turn % 2 === 0) {
            player = "X";
            message.textContent = `It's player O's turn!`;
            event.target.textContent = player;
            turn++;
            checkForWin();
        } else {
            player = "O";
            message.textContent = `It's player X's turn!`;
            event.target.textContent = player;
            turn++;
            checkForWin();
        }
    }
}

function addListeners(){
    for (let i = 0; i < arrOfSq.length; i++) {
    arrOfSq[i].addEventListener("click",playersMove);
    // arrOfSq[i].addEventListener("click",checkForWin);
    }
}

resetButton.addEventListener("click",gameEnd);

addListeners();