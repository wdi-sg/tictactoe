/**
 * @desc tic tac toe game
 * @author mahchinkok@gmail.com
 *
 **/

const p1Token = "⭕";
const p2Token = "❌";
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
var playerWinningCount = {
    p1: 0,
    p2: 0,
    draw: 0
}
var p1Turn = true;
var numOfTurns = 0;
var p1LogArr = [];
var p2LogArr = [];
var gameInProcess = true;
var computerMode = true;
var drawGame = false;


////////////////////////////////////
// Init Game: Add Event Listeners //
////////////////////////////////////
window.onload = function loadInitJS() {
    loadEventListener();
    resetGame();
    switchGameMode();
}

var tryAgain = function() {
    numOfTurns = 0;
    p1LogArr.length = 0;
    p2LogArr.length = 0;
    gameInProcess = true;
    drawGame = true;
    if (computerMode) {
        p1Turn = true;
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).textContent = "";
        document.getElementById(i).style.backgroundColor = "#00ADB5";
    }
    if (p1Turn) {
        display("Player One Starts");
    } else {
        display("Player Two Starts")
    }
    displayScores();
}

var resetGame = function() {
    numOfTurns = 0;
    p1LogArr.length = 0;
    p2LogArr.length = 0;
    gameInProcess = true;
    drawGame = true;
    p1Turn = true;
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).textContent = "";
        document.getElementById(i).style.backgroundColor = "#00ADB5";
    }
    if (p1Turn) {
        display("Player One Starts");
    } else {
        display("Player Two Starts")
    }
    playerWinningCount.p1 = 0;
    playerWinningCount.p2 = 0;
    playerWinningCount.draw = 0;

    displayScores();
}
// add event listener to the document
var loadEventListener = function() {
    document.addEventListener('click', function(event) {
        console.log(event.target);
        if (event.target.matches(".box")) {
            if (computerMode && !p1Turn) {
                // disable clicking when its computer mode and computer's turn
            } else {
                clickOnBoard(parseInt(event.target.id));
            }
        }
        if (event.target.matches("#try_again")) {
            tryAgain();
        }
        if (event.target.matches("#reset_game")) {
            resetGame();
        }
        if (event.target.matches("#auto_game")) {
            switchGameMode();
        }
    }, false);
}

var switchGameMode = function() {
    if (computerMode) {
        document.getElementById("auto_game").textContent = "1P Vs 2P";
        computerMode = false;
    } else {
        document.getElementById("auto_game").textContent = "1P Vs Computer";
        computerMode = true;
    }
    resetGame();
    console.log("comp mode: " + computerMode);
}

///////////////////////////////////////////////////////
// check players Log Array against the winning combo //
///////////////////////////////////////////////////////
var checkedWinningCombo_temp = function(p1Turn) {
    let count = 0;

    if (!p1Turn) {
        p1OuterLoop: for (let i = 0; i < winningCombo.length; i++) {
            count = 0;
            for (let j = 0; j < p1LogArr.length; j++) {
                if (winningCombo[i].includes(p1LogArr[j])) {
                    count++;
                }
                if (count >= 3) {
                    console.log("p1 won!");
                    display("Player One Won!");
                    highlightWinBoxes(winningCombo[i]);
                    playerWinningCount.p1++;
                    gameInProcess = false;
                    drawGame = false;
                    break p1OuterLoop;
                }
            }
        }
    }
    else {
        p2OuterLoop: for (let i = 0; i < winningCombo.length; i++) {
            count = 0;
            for (let j = 0; j < p2LogArr.length; j++) {
                if (winningCombo[i].includes(p2LogArr[j])) {
                    count++;
                }
                if (count >= 3) {
                    console.log("p2 won!");
                    display("Player Two Won!");
                    highlightWinBoxes(winningCombo[i]);
                    playerWinningCount.p2++;
                    gameInProcess = false;
                    drawGame = false;
                    break p2OuterLoop;
                }
            }
        }
    }
    console.log(`winning count:${playerWinningCount.p1}, ${playerWinningCount.p2}`)
}

//////////////////////////////////////////////////////
// To mark on the board when the conditions are met //
//////////////////////////////////////////////////////
var clickOnBoard = function(id_num) {
    display('');
    if (!p1LogArr.includes(id_num) && !p2LogArr.includes(id_num)) {
        if (numOfTurns < 9 && gameInProcess) {
            if (p1Turn) {
                document.getElementById(id_num).textContent = p1Token;
                p1LogArr.push(id_num);
                numOfTurns++;
            } else {
                document.getElementById(id_num).textContent = p2Token;
                p2LogArr.push(id_num);
                numOfTurns++;
            }
            p1Turn = !p1Turn;
            if (numOfTurns >= 5) {
                checkedWinningCombo_temp(p1Turn);
            }
            console.log(`number of turns : ${numOfTurns}`);
            if (numOfTurns === 9 && gameInProcess && drawGame) {
                console.log('gameInProcess=> draw');
                playerWinningCount.draw++;
            }
            displayScores();
        }
    }
    //added this part for computer mode
    if (computerMode && gameInProcess) {
        console.log("P1Turn : " + p1Turn);
        console.log("game in progress :" + gameInProcess);
        console.log("computerMode : " + computerMode);
        setTimeout(cpuMove, 400);
        console.log("P1Turn : " + p1Turn);
    }
}

//////////////////////
// HUMAN VS PC Mode //
//////////////////////
var cpuMove = function() {
    console.log('CPU is active!')
    if (gameInProcess && computerMode && numOfTurns < 9) {
        // (1)analyse board, (2)place token
        let comp_id_num = randomMove();
        document.getElementById(comp_id_num).textContent = p2Token;
        p1Turn = !p1Turn;
        p2LogArr.push(comp_id_num);
        console.log("p2LogArr: " + p2LogArr);
        numOfTurns++;
        if (numOfTurns >= 5) {
            checkedWinningCombo_temp(p1Turn);
        }
        console.log(`CPU counting number of turns : ${numOfTurns}`);
        if (numOfTurns === 9 && gameInProcess && drawGame) {
            console.log('gameInProcess=> draw');
            playerWinningCount.draw++;
        }
        displayScores();
        // turn finishes and pass back to player
    }
}

var randomMove = function() {
    console.log("p1Array: " + p1LogArr);
    let randomNum = "";
    let checkedDuplicate = true;
    randomNum = studyMoves();
    console.log("studymove randomNum: " + randomNum);
    if (randomNum !== "") {
        return randomNum;
    }
    while (checkedDuplicate) {
        randomNum = Math.floor(Math.random() * 9);
        if (p1LogArr.includes(randomNum) || p2LogArr.includes(randomNum)) {
            checkedDuplicate = true;
        } else {
            checkedDuplicate = false;
        }
    }
    return randomNum;
}

var studyMoves = function() {
    console.log("studying, ");
    let count = "";
    let i = "";
    let trackI = "";
    let tempId = "";
    //check computer finishing moves
    AnotherOuterLoop: for (i = 0; i < winningCombo.length; i++) {
        count = 0;
        console.log(" WCombo : " + winningCombo[i]);
        for (let j = 0; j < p2LogArr.length; j++) {
            if (winningCombo[i].includes(p2LogArr[j])) {
                count++;
            }
            console.log(`j:${j}, count:${count}`);
            console.log(`check finishing moves winning combo: ${winningCombo[i]}`);
            if (count >= 2) {
                console.log("Stop Combo : " + winningCombo[i]);
                break AnotherOuterLoop;
            }
        }
    }
    if (count >= 2) {
        for (let k = 0; k < 3; k++) {
            tempId = winningCombo[i][k];
            console.log("tempid: " + tempId);
            console.log(`study possible moves: ${k}`);
            if (document.getElementById(parseInt(tempId)).textContent === "") {
                console.log("returning tempId: " + tempId);
                return tempId;
            }
        }
    }
    // defending against player finishing moves
    OuterLoop: for (i = 0; i < winningCombo.length; i++) {
        count = 0;
        console.log(" WCombo : " + winningCombo[i]);
        for (let j = 0; j < p1LogArr.length; j++) {
            if (winningCombo[i].includes(p1LogArr[j])) {
                count++;
            }
            console.log(`j:${j}, count:${count}`);
            console.log(`check defending moves winning combo: ${winningCombo[i]}`);
            if (count >= 2) {
                console.log("Stop Combo : " + winningCombo[i]);
                break OuterLoop;
            }
        }
    }
    if (count >= 2) {
        for (let k = 0; k < 3; k++) {
            tempId = winningCombo[i][k];
            console.log("tempid: " + tempId);
            console.log(`study possible moves: ${k}`);
            if (document.getElementById(parseInt(tempId)).textContent === "") {
                console.log("returning tempId: " + tempId);
                return tempId;
            }
        }
    }
    return "";
}

/////////////////////
// Display Function//
/////////////////////
var display = function(message) {
    var output = document.querySelector('#output');
    output.innerHTML = message;
};

var displayScores = function() {
    document.getElementById("score1").textContent = playerWinningCount.p1;
    document.getElementById("scoreD").textContent = playerWinningCount.draw;
    document.getElementById("score2").textContent = playerWinningCount.p2;
};

var highlightWinBoxes = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).style.backgroundColor = "yellow";
    }

}
