let turn = 0;
let num = 0;
let player1 = 0;
let player2 = 0;

//Gets an array of all the boxes
boxArray = document.querySelectorAll(".box");
console.log(boxArray);

//Tracks the turn of the players
const check = function (event) {
    if(turn%2 === 1 && event.target.textContent === "") {    event.target.textContent = "O";
    turn++;
}
else if (turn%2 === 0 && event.target.textContent === "") {
    event.target.textContent = "X";
    turn++
}
}

//Tracks player's score
var scoreTracker = function () {
    if (turn%2 === 1) {
    player1++;
    console.log("p1: "+ player1);
}
else if (turn%2 === 0) {
    player2++;
    console.log("p2: "+ player2);
}
}

var updateScore = function () {
    score = document.getElementsByTagName("span");
    console.log(score);
    score[0].innerHTML = player1;
    score[1].innerHTML = player2;
}
updateScore();

//Removes all event listener when the game ends
var removeListener = function () {
    for (i=0; i<boxArray.length; i++) {
    boxArray[i].removeEventListener("click", check);
    boxArray[i].removeEventListener("click", returnValue);
    boxArray[i].removeEventListener("click", checkWin);
}
}

//Prompt when game ends
var gameEnd = function () {
    alert("You won!\nRefresh page to play again");
    removeListener();
    scoreTracker();
    updateScore();
    turn = 0;
}

//Return class of box
var returnValue = function (event) {
    array = event.target.classList;
    num = parseInt(array[array.length - 1]);
}

//Checks if play has won the game
const checkWin = function () {
    if (num === 0) {
        if (boxArray[0].innerHTML === "X" && boxArray[4].innerHTML === "X" && boxArray[8].innerHTML === "X" || boxArray[0].innerHTML === "X" && boxArray[1].innerHTML === "X" && boxArray[2].innerHTML === "X" || boxArray[0].innerHTML === "X" && boxArray[3].innerHTML === "X" && boxArray[6].innerHTML === "X" || boxArray[0].innerHTML === "O" && boxArray[4].innerHTML === "O" && boxArray[8].innerHTML === "O" || boxArray[0].innerHTML === "O" && boxArray[1].innerHTML === "O" && boxArray[2].innerHTML === "O" || boxArray[0].innerHTML === "O" && boxArray[3].innerHTML === "O" && boxArray[6].innerHTML === "O" ) {
        setTimeout(gameEnd, 0);
    }
    }
    else if (num === 1) {
        if (boxArray[1].innerHTML === "X" && boxArray[4].innerHTML === "X" &&boxArray[7].innerHTML === "X" || boxArray[1].innerHTML === "O" && boxArray[4].innerHTML === "O" &&boxArray[7].innerHTML === "O" || boxArray[1].innerHTML === "X" && boxArray[0].innerHTML === "X" && boxArray[2].innerHTML === "X" || boxArray[1].innerHTML === "O" && boxArray[0].innerHTML === "O" && boxArray[2].innerHTML === "O") {
        setTimeout(gameEnd, 0);
    }
    }
    else if (num === 2) {
        if (boxArray[2].innerHTML === "X" && boxArray[5].innerHTML === "X" &&boxArray[8].innerHTML === "X" || boxArray[2].innerHTML === "O" && boxArray[5].innerHTML === "O" &&boxArray[8].innerHTML === "O" || boxArray[2].innerHTML === "X" && boxArray[0].innerHTML === "X" &&boxArray[1].innerHTML === "X" || boxArray[2].innerHTML === "O" && boxArray[0].innerHTML === "O" &&boxArray[1].innerHTML === "O" || boxArray[2].innerHTML === "X" && boxArray[4].innerHTML === "X" &&boxArray[6].innerHTML === "X" || boxArray[2].innerHTML === "O" && boxArray[4].innerHTML === "O" &&boxArray[6].innerHTML === "O") {
        setTimeout(gameEnd, 0);
    }
    }
    else if (num === 3) {
        if (boxArray[3].innerHTML === "X" && boxArray[4].innerHTML === "X" &&boxArray[5].innerHTML === "X" || boxArray[3].innerHTML === "O" && boxArray[4].innerHTML === "O" &&boxArray[5].innerHTML === "O" || boxArray[3].innerHTML === "X" && boxArray[0].innerHTML === "X" &&boxArray[6].innerHTML === "X" || boxArray[3].innerHTML === "O" && boxArray[0].innerHTML === "O" &&boxArray[6].innerHTML === "O") {
        setTimeout(gameEnd, 0);
    }
    }
    else if (num === 4) {
        if (boxArray[4].innerHTML === "X" && boxArray[0].innerHTML === "X" &&boxArray[8].innerHTML === "X" || boxArray[4].innerHTML === "O" && boxArray[0].innerHTML === "O" &&boxArray[8].innerHTML === "O" || boxArray[4].innerHTML === "X" && boxArray[2].innerHTML === "X" &&boxArray[6].innerHTML === "X" || boxArray[4].innerHTML === "O" && boxArray[2].innerHTML === "O" &&boxArray[6].innerHTML === "O" || boxArray[4].innerHTML === "X" && boxArray[1].innerHTML === "X" &&boxArray[7].innerHTML === "X" || boxArray[4].innerHTML === "O" && boxArray[1].innerHTML === "O" &&boxArray[7].innerHTML === "O" || boxArray[4].innerHTML === "X" && boxArray[3].innerHTML === "X" &&boxArray[5].innerHTML === "X" || boxArray[4].innerHTML === "O" && boxArray[3].innerHTML === "O" &&boxArray[5].innerHTML === "O") {
        setTimeout(gameEnd, 0);
    }
    }
    else if (num === 5) {
        if (boxArray[5].innerHTML === "X" && boxArray[2].innerHTML === "X" &&boxArray[8].innerHTML === "X" || boxArray[5].innerHTML === "O" && boxArray[2].innerHTML === "O" &&boxArray[8].innerHTML === "O" || boxArray[5].innerHTML === "X" && boxArray[3].innerHTML === "X" &&boxArray[4].innerHTML === "X" || boxArray[5].innerHTML === "O" && boxArray[3].innerHTML === "O" &&boxArray[4].innerHTML === "O") {
        setTimeout(gameEnd, 0);
    }
    }
    else if (num === 6) {
        if (boxArray[6].innerHTML === "X" && boxArray[0].innerHTML === "X" &&boxArray[3].innerHTML === "X" || boxArray[6].innerHTML === "O" && boxArray[0].innerHTML === "O" &&boxArray[3].innerHTML === "O" || boxArray[6].innerHTML === "X" && boxArray[7].innerHTML === "X" &&boxArray[8].innerHTML === "X" || boxArray[6].innerHTML === "O" && boxArray[7].innerHTML === "O" &&boxArray[8].innerHTML === "O" || boxArray[6].innerHTML === "X" && boxArray[4].innerHTML === "X" &&boxArray[2].innerHTML === "X" || boxArray[6].innerHTML === "O" && boxArray[4].innerHTML === "O" &&boxArray[2].innerHTML === "O") {
        setTimeout(gameEnd, 0);
    }
    }
    else if (num === 7) {
        if (boxArray[7].innerHTML === "X" && boxArray[6].innerHTML === "X" &&boxArray[8].innerHTML === "X" || boxArray[7].innerHTML === "O" && boxArray[6].innerHTML === "O" &&boxArray[8].innerHTML === "O" || boxArray[7].innerHTML === "X" && boxArray[1].innerHTML === "X" &&boxArray[4].innerHTML === "X" || boxArray[7].innerHTML === "O" && boxArray[1].innerHTML === "O" &&boxArray[4].innerHTML === "O") {
        setTimeout(gameEnd, 0);
    }
    }
    else if (num === 8) {
        if (boxArray[8].innerHTML === "X" && boxArray[0].innerHTML === "X" &&boxArray[4].innerHTML === "X" || boxArray[8].innerHTML === "O" && boxArray[0].innerHTML === "O" &&boxArray[4].innerHTML === "O" || boxArray[8].innerHTML === "X" && boxArray[6].innerHTML === "X" &&boxArray[7].innerHTML === "X" || boxArray[8].innerHTML === "O" && boxArray[6].innerHTML === "O" &&boxArray[7].innerHTML === "O" || boxArray[8].innerHTML === "X" && boxArray[2].innerHTML === "X" &&boxArray[5].innerHTML === "X" || boxArray[8].innerHTML === "O" && boxArray[2].innerHTML === "O" &&boxArray[5].innerHTML === "O") {
        setTimeout(gameEnd, 0);
    }
    }
}

//Adds event listener to boxes
var addListener = function () {
    for (i=0; i<boxArray.length; i++) {
    boxArray[i].addEventListener("click", check);
    boxArray[i].addEventListener("click", returnValue);
    boxArray[i].addEventListener("click", checkWin);
}
}
addListener();

var clearBoxes = function () {
    for (i=0; i<boxArray.length; i++) {
    boxArray[i].innerHTML = "" ;
}
}

//Reset button
// document.getElementById("reset").onclick = removeListener;
var reset = function () {
    removeListener();
    clearBoxes();
    addListener();
}