const p1Token = "1";
const p2Token = "2";
const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var p1Turn = true;
var numOfTurns = 0;
var p1LogArr = [];
var p2LogArr = [];
var gameOver = false;
var oneVsOneMode = true;
var playerWinningCount = {
    p1: 0,
    p2: 0,
    draw: 0
}

//////////////////////////////////////////////////////
// To mark on the board when the conditions are met //
//////////////////////////////////////////////////////
var clickOnBoard = function(id_num) {
    display('');

    if (numOfTurns < 9 && !gameOver) {
        if (p1Turn) {
            document.getElementById(id_num).textContent = p1Token;
            p1LogArr.push(id_num);
        } else {
            document.getElementById(id_num).textContent = p2Token;
            p2LogArr.push(id_num);
        }
        numOfTurns++;
        p1Turn = !p1Turn;
        document.getElementById(id_num).removeEventListener('click', doSomething);
        if (numOfTurns >= 5) {
            checkedWinningCombo_temp(p1Turn);
        }
        console.log(`number of turns : ${numOfTurns}`);
        if (numOfTurns === 9 && ) {
            playerWinningCount.draw++;
        }
    }
}

///////////////////////////////////////////////////////
// check players Log Array against the winning combo //
///////////////////////////////////////////////////////
var checkedWinningCombo_temp = function(p1Turn) {
    let count = 0;
    //let tempArr = [];
    //Check P1 results

    if (!p1Turn) {
        p1OuterLoop: for (let i = 0; i < winningCombo.length; i++) {
            console.log("winningcombo : " + winningCombo[i]);
            count = 0;
            for (let j = 0; j < p1LogArr.length; j++) {

                if (winningCombo[i].includes(p1LogArr[j])) {
                    count++;
                }
                console.log(`j:${j}, count:${count}`);
                if (count >= 3) {
                    console.log("p1 won!");
                    display("Player One Won!");
                    playerWinningCount.p1++;
                    gameOver = true;
                    break p1OuterLoop;
                }
            }
        }
    }
    else {
        p2OuterLoop: for (let i = 0; i < winningCombo.length; i++) {
            console.log("winningcombo : " + winningCombo[i]);
            count = 0;
            for (let j = 0; j < p2LogArr.length; j++) {

                if (winningCombo[i].includes(p2LogArr[j])) {
                    count++;
                }

                console.log(`j:${j}, count:${count}`);
                if (count >= 3) {
                    console.log("p2 won!");
                    display("Player Two Won!");
                    playerWinningCount.p2++;
                    gameOver = true;
                    break p2OuterLoop;
                }
            }
        }
    }
    console.log("OUT of nested loops");
    console.log(`winning count:${playerWinningCount.p1}, ${playerWinningCount.p2}`)
}

////////////////////////////////////
// Init Game: Add Event Listeners //
////////////////////////////////////
window.onload = function newGame() {
    document.getElementById("reset_game").addEventListener("click", newGame);
    //document.getElementById("1v1_game").addEventListener("click", switchGameMode);
    //document.getElementById("1vPC_game").addEventListener("click", switchGameMode);
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).textContent = "";
        document.getElementById(i).addEventListener('click', doSomething);
    }
    numOfTurns = 0;
    p1LogArr.length = 0;
    p2LogArr.length = 0;
    gameOver = false;
    switchGameMode();
    if (p1Turn) {
        display("Player One Starts");
    } else {
        display("Player Two Starts")
    }
}

////////////////////////////////////////////////////
// Function to be executed when boxes are clicked //
////////////////////////////////////////////////////
var doSomething = function(event) {
    clickOnBoard(parseInt(this.id));
}

/////////////////////
// Display Function//
/////////////////////
var display = function(message) {
    var output = document.querySelector('#output');
    output.innerHTML = message;
};

var switchGameMode = function() {
    if (oneVsOneMode) {
        document.getElementById("1v1_game").disabled = true;
        document.getElementById("1vPC_game").disabled = false;
    } else {
        document.getElementById("1v1_game").disabled = false;
        document.getElementById("1vPC_game").disabled = true;
    }
}

//////////////////////
// HUMAN VS PC Mode //
//////////////////////
var playerCPU = function() {
    var cpuMode = "random";

    if (!oneVsOneMode) {

        //analyse board

        //place x
        //pass back to player
    }
}

// init game parameters and clear the board for a new game
