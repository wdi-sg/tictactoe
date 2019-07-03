const p1Token = "1";
const p2Token = "2";
const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];
var p1Turn = true;
var numOfTurns = 0;
var p1LogArr = [];
var p2LogArr = [];
var gameOver = false;

//////////////////////////////////////////////////////
// To mark on the board when the conditions are met //
//////////////////////////////////////////////////////
var clickOnBoard = function(id_num) {
    display('');
    if (numOfTurns < 9 && !gameOver) {

        if (p1Turn) {
            document.getElementById(id_num).textContent = p1Token;
            p1Turn = !p1Turn;
            p1LogArr.push(id_num);
            console.log(`Player One Array: ${p1LogArr}`);
            document.getElementById(id_num).removeEventListener('clicked', doSomething);
        } else {
            document.getElementById(id_num).textContent = p2Token;
            p1Turn = !p1Turn;
            p2LogArr.push(id_num);
            console.log(`Player Two Array: ${p2LogArr}`);
            document.getElementById(id_num).removeEventListener('clicked', doSomething);
        }

        numOfTurns++;

        if (numOfTurns >= 5) {
            checkedWinningCombo();
        }
        console.log(`number of turns : ${numOfTurns}`);
    }
}

////////////////////////////////////////////////////
// Function to be executed when boxes are clicked //
////////////////////////////////////////////////////
var doSomething = function(event) {
    clickOnBoard(parseInt(this.id));
}

///////////////////////////////////////////////////////
// check players Log Array against the winning combo //
///////////////////////////////////////////////////////
var checkedWinningCombo = function() {
    let count = 0;
    console.log(">>>>>>> RUNNING CHECK! >>>>>>>>");
    for (let i = 0; i < winningCombo.length; i++) {
        console.log("winningcombo : "+winningCombo[i]);
        count = 0;
        for (let j = 0; j < p1LogArr.length; j++) {

            if ( winningCombo[i].includes(p1LogArr[j]) ) {
                count++;
            }

            console.log(`j:${j}, count:${count}`);
            if (count >= 3) {
                console.log("p1 won!");
                display("Player One Won!");
                gameOver = true;
            }
        }
    }
    for (let i = 0; i < winningCombo.length; i++) {
        console.log("winningcombo : "+winningCombo[i]);
        count = 0;
        for (let j = 0; j < p2LogArr.length; j++) {

            if ( winningCombo[i].includes(p2LogArr[j]) ) {
                count++;
            }

            console.log(`j:${j}, count:${count}`);
            if (count >= 3) {
                console.log("p2 won!");
                display("Player Two Won!");
                gameOver = true;
            }
        }
    }
}

///////////////
// Init Game //
///////////////
var newGame = function() {
    document.getElementById("reset_game").addEventListener("click", newGame);
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).textContent = "";
        document.getElementById(i).addEventListener('click', doSomething);
    }
    numOfTurns = 0;
    p1LogArr.length = 0;
    p2LogArr.length = 0;
    gameOver = false;
    if (p1Turn) {
        display("Player One Starts");
    } else {
        display("Player Two Starts")
    }
}

/////////////////////
// Display Function//
/////////////////////
var display = function(message) {
    var output = document.querySelector('#output');
    output.innerHTML = message;
};

newGame();






// init game parameters and clear the board for a new game
