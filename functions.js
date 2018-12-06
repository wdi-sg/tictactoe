// game contents
var winPossibilities = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]
    ];

var grid = [[0,0,0],
            [0,0,0],
            [0,0,0]];

// global variables

var num;
var remainder;
var player1;
var player2;
var player1sym;
var player2sym;
var player1score = 0;
var player2score = 0;
var player1Arr = [];
var player2Arr =[];
var ifWinning = false;
var noOfTurns = 0;


// initalised during load

window.onload = function (){
    // add button to initalise game
    var button = document.querySelector("button");
    button.textContent = "Start!";
    button.addEventListener("click", startGame);

    document.getElementsByTagName("p")[0].textContent = "Click start to play!";

    setTimeout(function(){
        player1 = prompt("Player 1's Name:");
        player1sym = prompt(player1 + ", choose your symbol!");
        player2 = prompt("Player 2's Name:");
        player2sym = prompt(player2 + ", choose your symbol!");
    },1000)


}


// add event listeners to all grid boxes
function startGame(){
    // adds scoreboard
    var scoreboard = document.querySelector(".scoreboard");
        if (scoreboard.innerHTML === ""){
        var playersNow = document.createElement("p");
        playersNow.id = "players";
        scoreboard.appendChild(playersNow);
        playersNow.textContent= player1 + " : " + player2;

        // adds default score
        var playersScore = document.createElement("p");
        playersScore.id = "playersScore";
        playersScore.textContent = player1score + " : " + player2score;
        playersNow.parentNode.insertBefore(playersScore, playersNow.nextSibling);
    }

    // removes button
    var buttonDiv = document.querySelector(".button");
    var button = document.querySelector("button");
    buttonDiv.removeChild(button);

    var wholeGrid = document.querySelector("main");
    var boxes = document.querySelectorAll(".box");

    for (var i=0; i< boxes.length; i++){
         console.log(boxes[i]);
         boxes[i].addEventListener("click", game);
    }

    document.getElementsByTagName("p")[0].textContent = "Ready when you are!";
}


// actual game

function game(){
    if (noOfTurns< 9 && !ifWinning){
        num = event.target.id;
        answer = Math.floor(num / 3);
        remainder = num % 3;
        // console.log("ans:" + answer + " num:"+num + " R:"+remainder);

        var gridNotTaken = checkGridTaken();
        if (gridNotTaken){
            if (noOfTurns % 2 == 0) { //comes first
                player = "X";
                this.innerHTML = player1sym;
                this.style.backgroundColor = "#C3FFCD";
                document.getElementsByTagName("p")[0].textContent = "It's " + player2 +"'s turn.";
                appendGridList();
                console.log(grid);
                player1Arr.push(parseInt(this.id));

                if (player1Arr.length > 2){
                    // ifWinning = checkWin(player);
                    ifWinning = checkWin(player1Arr);
                    if (ifWinning){
                        console.log("yay");
                        document.getElementsByTagName("p")[0].textContent = player1 +" wins! Try again?";
                        player1score++;
                        document.getElementById("playersScore").textContent = player1score + " : " + player2score;
                        resetPrompt();
                    } else{
                        console.log("nooo");
                    }
                }

            }
             else { //comes later
                player = "O";
                this.innerHTML = player2sym;
                this.style.backgroundColor = "#D1ACA6";
                document.getElementsByTagName("p")[0].textContent = "It's " + player1 +"'s turn.";
                appendGridList(player);
                console.log(grid);
                player2Arr.push(parseInt(this.id));

                if (player2Arr.length > 2){
                    // ifWinning = checkWin(player);
                    ifWinning = checkWin(player2Arr);
                    if (ifWinning){
                        console.log("yay");
                        document.getElementsByTagName("p")[0].textContent = player2 +" wins! Try again?";
                        player2score++;
                        document.getElementById("playersScore").textContent = player1score + " : " + player2score;
                        resetPrompt();
                    } else{
                        console.log("nooo");
                    }
                }
            }
            noOfTurns++;
        }

        if (noOfTurns === 9 && !ifWinning){
            document.getElementsByTagName("p")[0].textContent = "No turns left. It's a draw! Try again?";
            resetPrompt();
        }

    } else {
        document.getElementsByTagName("p")[0].textContent = "The game has ended. Try again?";
        resetPrompt();
    }
}


// change grid list according to play

function appendGridList(){
    if (remainder > 0) {
        grid[answer][remainder-1] = player;
    } else {
        console.log(num);
        grid[answer -1][2] = player;

    }
}


// check if grid is taken, so there is no double play

function checkGridTaken(){
    if (remainder > 0) {
        if (Boolean(grid[answer][remainder-1]) === false){
            return true;
        } else {
            document.getElementsByTagName("p")[0].textContent = "Cell already filled. Try another one.";
            return false;
        }
    } else {
        if (Boolean(grid[answer -1][2]) === false){
            return true;
        } else {
            document.getElementsByTagName("p")[0].textContent = "Cell already filled. Try another one.";
            return false;
        }
    }
}


// check winning condition
// Array.every(function) --> the function is a threshold/filter. eg. value > 30, returns 36, 44 etc
// each val in winArray checked against playerArr. if val exists in playerArr, indexOf() returns the index of said val i.e > 0
// thus if it returns -1, it means the value does not exist in playerArr.

function checkWin(playerArray){
    // debugger;
    var winning = false;
    for (var winArray of winPossibilities){
        var res = winArray.every(val => playerArray.indexOf(val)  !== -1);
        if (res){
            winning = true;
            break;
        }
    }
    return winning;
}

// alternative method to check winning condition

// function checkWin(player){
//     // check diagonal;
//     debugger;
//     if ((player === grid[0][0]) && (grid[0][0] === grid[1][1]) && (grid[1][1]  === grid[2][2])){
//         return true;
//     }

//     if ((player === grid[0][2]) && (grid[0][2] === grid[1][1]) && (grid[1][1] === grid[2][0])) {
//         // check anti-diagonal
//         return true;
//     }

//     // check rows
//     for (var i= 0; i<3; i++){
//         if ((player === grid[i][0]) && (grid[i][0] === grid[i][1]) && (grid[i][1] === grid[i][2])) {
//             return true;
//         }
//     }

//     // check columns
//     for (var j= 0; j<3; j++){
//         if ((player === grid[0][j]) && (grid[0][j] === grid[1][j]) && (grid[1][j] === grid[2][j])) {
//             return true;
//         }
//     }
//     return false;
// }


// reset the whole game to play again
function resetPrompt(){
    // remove eventlistener for boxes so reset won't be repeatedly called
    var boxes = document.querySelectorAll(".box");

    for (var i=0; i< boxes.length; i++){
         console.log(boxes[i]);
         boxes[i].removeEventListener("click", game);
    }

    // reset button
    var buttonDiv = document.querySelector(".button");
    var button = document.createElement("button");
    button.type = "button";
    button.textContent = "Try again?";
    buttonDiv.appendChild(button);
    button.addEventListener("click", reset);
}

function reset(){
    // reinitialise the variables

    grid = [[0,0,0],
            [0,0,0],
            [0,0,0]];
    num;
    remainder;
    player1;
    player2;
    player1sym;
    player2sym;
    player1Arr = [];
    player2Arr =[];
    ifWinning = false;
    noOfTurns = 0;

    // reintialise grid contents
    boxes = document.querySelectorAll(".box");
    for (var i=0; i<9; i++){
        boxes[i].textContent = "";
        boxes[i].style.backgroundColor = "";
    }

    startGame();
}
