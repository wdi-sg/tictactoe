var numBox = prompt("e.g. Enter 3 for 3x3 grid");
let numBoxes = Math.pow(numBox,2);

//Sets the width of the wrapper based on the number of boxes the user wants
wrapperWidth = numBox*100+"px"
wrapper = document.querySelector(".wrapper");
wrapper.style.width = wrapperWidth;

//Creates array of id to be assigned to each box e.g. [i,j]
var numBoxArray = [];
for (i=0; i<numBox; i++) {
    for (j=0; j<numBox; j++) {
        numBoxArray.push(i+","+j);
    }
}

//Creates the boxes based on the number of boxes the user wants
for (i=0; i<numBoxes; i++) {
    var box = document.createElement("div");
    box.id = numBoxArray[i];
    box.className = "box";
    box.innerHTML = "";
    box.style.border = "solid 1px black";
    box.style.width= "98px";
    box.style.height= "98px";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.fontSize = "30px";
    wrapper = document.querySelector(".wrapper");
    wrapper.appendChild(box);
}

//Gets an array of all the boxes
boxArray = document.querySelectorAll(".box");
console.log(boxArray);

//Tracks the turn of the players
let turn = 0;
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

//Updates the scoreboard
let player1 = 0;
let player2 = 0;
var updateScore = function () {
    score = document.getElementsByTagName("span");
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


//Return id of box
let player1Array = [];
let player2Array = [];
var returnValue = function (event) {
    if(turn%2 === 0) {
        var string = event.target.id;
        player1Array.push(string);
    }
    else if (turn%2 === 1) {
        var string = event.target.id;
        player2Array.push(string);
    }
}

//Creates an array of all winning combinations
let winDiagonalLeftToRight = [];
for (i=0; i<numBox; i++) {
    for (j=0; j<numBox; j++) {
        if (i===j) {
            winDiagonalLeftToRight.push(i+","+j);
        }
    }
}

let winLeftToRight = [];
for (i=0; i<numBox; i++) {
    let holdingArray = [];
    winLeftToRight.push(holdingArray);
    for (j=0; j<numBox; j++) {
             holdingArray.push(i+","+j);
    }
}

let winTopToBtm = [];
for (i=0; i<numBox; i++) {
    let holdingArray = [];
    winTopToBtm.push(holdingArray);
    for (j=0; j<numBox; j++) {
             holdingArray.push(i+","+j);
    }
}

let winDiagonalRightToLeft = [];
j=0;
for (i=numBox-1; i>=0; i--) {
    winDiagonalRightToLeft.push(i+","+j);
    j++;
}

winArray = winLeftToRight.concat(winTopToBtm);
winArray.push(winDiagonalLeftToRight,winDiagonalRightToLeft);
console.log(winArray);



//Checks if a player has won the game
const checkWin = function () {

for (i=0;i<numBox;i++) {
    if (player2Array === )
        array = winArray[i];
        for (j=0; j<player2Array.length; j++) {
            for (j=0; j<player2Array.length; j++) {
                if (player2Array[i][j] === winArray[i][j])
            }
        }
        if (player2Array[i].includes(array[i])) {
            let holdingArray = [];
            holdingArray.push(player2Array[i]);
        }
        else if (player1Array[i].includes(array[i])) {
        }
    }
}


//     if (num === 0) {
//         if (boxArray[0].innerHTML === "X" && boxArray[4].innerHTML === "X" && boxArray[8].innerHTML === "X" || boxArray[0].innerHTML === "X" && boxArray[1].innerHTML === "X" && boxArray[2].innerHTML === "X" || boxArray[0].innerHTML === "X" && boxArray[3].innerHTML === "X" && boxArray[6].innerHTML === "X" || boxArray[0].innerHTML === "O" && boxArray[4].innerHTML === "O" && boxArray[8].innerHTML === "O" || boxArray[0].innerHTML === "O" && boxArray[1].innerHTML === "O" && boxArray[2].innerHTML === "O" || boxArray[0].innerHTML === "O" && boxArray[3].innerHTML === "O" && boxArray[6].innerHTML === "O" ) {
//         setTimeout(gameEnd, 0);
//     }
//     }
//     else if (num === 1) {
//         if (boxArray[1].innerHTML === "X" && boxArray[4].innerHTML === "X" &&boxArray[7].innerHTML === "X" || boxArray[1].innerHTML === "O" && boxArray[4].innerHTML === "O" &&boxArray[7].innerHTML === "O" || boxArray[1].innerHTML === "X" && boxArray[0].innerHTML === "X" && boxArray[2].innerHTML === "X" || boxArray[1].innerHTML === "O" && boxArray[0].innerHTML === "O" && boxArray[2].innerHTML === "O") {
//         setTimeout(gameEnd, 0);
//     }
//     }
//     else if (num === 2) {
//         if (boxArray[2].innerHTML === "X" && boxArray[5].innerHTML === "X" &&boxArray[8].innerHTML === "X" || boxArray[2].innerHTML === "O" && boxArray[5].innerHTML === "O" &&boxArray[8].innerHTML === "O" || boxArray[2].innerHTML === "X" && boxArray[0].innerHTML === "X" &&boxArray[1].innerHTML === "X" || boxArray[2].innerHTML === "O" && boxArray[0].innerHTML === "O" &&boxArray[1].innerHTML === "O" || boxArray[2].innerHTML === "X" && boxArray[4].innerHTML === "X" &&boxArray[6].innerHTML === "X" || boxArray[2].innerHTML === "O" && boxArray[4].innerHTML === "O" &&boxArray[6].innerHTML === "O") {
//         setTimeout(gameEnd, 0);
//     }
//     }
//     else if (num === 3) {
//         if (boxArray[3].innerHTML === "X" && boxArray[4].innerHTML === "X" &&boxArray[5].innerHTML === "X" || boxArray[3].innerHTML === "O" && boxArray[4].innerHTML === "O" &&boxArray[5].innerHTML === "O" || boxArray[3].innerHTML === "X" && boxArray[0].innerHTML === "X" &&boxArray[6].innerHTML === "X" || boxArray[3].innerHTML === "O" && boxArray[0].innerHTML === "O" &&boxArray[6].innerHTML === "O") {
//         setTimeout(gameEnd, 0);
//     }
//     }
//     else if (num === 4) {
//         if (boxArray[4].innerHTML === "X" && boxArray[0].innerHTML === "X" &&boxArray[8].innerHTML === "X" || boxArray[4].innerHTML === "O" && boxArray[0].innerHTML === "O" &&boxArray[8].innerHTML === "O" || boxArray[4].innerHTML === "X" && boxArray[2].innerHTML === "X" &&boxArray[6].innerHTML === "X" || boxArray[4].innerHTML === "O" && boxArray[2].innerHTML === "O" &&boxArray[6].innerHTML === "O" || boxArray[4].innerHTML === "X" && boxArray[1].innerHTML === "X" &&boxArray[7].innerHTML === "X" || boxArray[4].innerHTML === "O" && boxArray[1].innerHTML === "O" &&boxArray[7].innerHTML === "O" || boxArray[4].innerHTML === "X" && boxArray[3].innerHTML === "X" &&boxArray[5].innerHTML === "X" || boxArray[4].innerHTML === "O" && boxArray[3].innerHTML === "O" &&boxArray[5].innerHTML === "O") {
//         setTimeout(gameEnd, 0);
//     }
//     }
//     else if (num === 5) {
//         if (boxArray[5].innerHTML === "X" && boxArray[2].innerHTML === "X" &&boxArray[8].innerHTML === "X" || boxArray[5].innerHTML === "O" && boxArray[2].innerHTML === "O" &&boxArray[8].innerHTML === "O" || boxArray[5].innerHTML === "X" && boxArray[3].innerHTML === "X" &&boxArray[4].innerHTML === "X" || boxArray[5].innerHTML === "O" && boxArray[3].innerHTML === "O" &&boxArray[4].innerHTML === "O") {
//         setTimeout(gameEnd, 0);
//     }
//     }
//     else if (num === 6) {
//         if (boxArray[6].innerHTML === "X" && boxArray[0].innerHTML === "X" &&boxArray[3].innerHTML === "X" || boxArray[6].innerHTML === "O" && boxArray[0].innerHTML === "O" &&boxArray[3].innerHTML === "O" || boxArray[6].innerHTML === "X" && boxArray[7].innerHTML === "X" &&boxArray[8].innerHTML === "X" || boxArray[6].innerHTML === "O" && boxArray[7].innerHTML === "O" &&boxArray[8].innerHTML === "O" || boxArray[6].innerHTML === "X" && boxArray[4].innerHTML === "X" &&boxArray[2].innerHTML === "X" || boxArray[6].innerHTML === "O" && boxArray[4].innerHTML === "O" &&boxArray[2].innerHTML === "O") {
//         setTimeout(gameEnd, 0);
//     }
//     }
//     else if (num === 7) {
//         if (boxArray[7].innerHTML === "X" && boxArray[6].innerHTML === "X" &&boxArray[8].innerHTML === "X" || boxArray[7].innerHTML === "O" && boxArray[6].innerHTML === "O" &&boxArray[8].innerHTML === "O" || boxArray[7].innerHTML === "X" && boxArray[1].innerHTML === "X" &&boxArray[4].innerHTML === "X" || boxArray[7].innerHTML === "O" && boxArray[1].innerHTML === "O" &&boxArray[4].innerHTML === "O") {
//         setTimeout(gameEnd, 0);
//     }
//     }
//     else if (num === 8) {
//         if (boxArray[8].innerHTML === "X" && boxArray[0].innerHTML === "X" &&boxArray[4].innerHTML === "X" || boxArray[8].innerHTML === "O" && boxArray[0].innerHTML === "O" &&boxArray[4].innerHTML === "O" || boxArray[8].innerHTML === "X" && boxArray[6].innerHTML === "X" &&boxArray[7].innerHTML === "X" || boxArray[8].innerHTML === "O" && boxArray[6].innerHTML === "O" &&boxArray[7].innerHTML === "O" || boxArray[8].innerHTML === "X" && boxArray[2].innerHTML === "X" &&boxArray[5].innerHTML === "X" || boxArray[8].innerHTML === "O" && boxArray[2].innerHTML === "O" &&boxArray[5].innerHTML === "O") {
//         setTimeout(gameEnd, 0);
//     }
//     }
// }

//Adds event listener to boxes
var addListener = function () {
    for (i=0; i<boxArray.length; i++) {
    boxArray[i].addEventListener("click", check);
    boxArray[i].addEventListener("click", returnValue);
    boxArray[i].addEventListener("click", checkWin);
}
}
addListener();


//Clears the boxes
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