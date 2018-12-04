
var playCounter = 0;
var p1score = 0;
var p2score = 0;
var userNamep1;
var userNamep2;

var consoleInform = function() {
    console.log("Loaded!");
};

var checkWin2 = function(symbol) {

}

var checkWin = function(symbol) {
    var gettop1 = document.querySelector('#toprow1').innerText
    var gettop2 = document.querySelector('#toprow2').innerText
    var gettop3 = document.querySelector('#toprow3').innerText
    var getmid1 = document.querySelector('#midrow1').innerText
    var getmid2 = document.querySelector('#midrow2').innerText
    var getmid3 = document.querySelector('#midrow3').innerText
    var getbot1 = document.querySelector('#botrow1').innerText
    var getbot2 = document.querySelector('#botrow2').innerText
    var getbot3 = document.querySelector('#botrow3').innerText
    if (playCounter == 9) {
    return;
    };
    if (symbol == gettop1 && gettop1 == gettop2 && gettop2 == gettop3) {
        playAgain();
    } else if (symbol == getmid1 && getmid1 == getmid2 && getmid2 == getmid3) {
        playAgain();
    } else if (symbol == getbot1 && getbot1 == getbot2 && getbot2 == getbot3) {
        playAgain();
    } else if (symbol == gettop1 && gettop1 == getmid1 && getmid1 == getbot1) {
        playAgain();
    } else if (symbol == gettop2 && gettop2 == getmid2 && getmid2 == getbot2) {
        playAgain();
    } else if (symbol == gettop3 && gettop3 == getmid3 && getmid3 == getbot3) {
        playAgain();
    } else if (symbol == gettop1 && gettop1 == getmid2 && getmid2 == getbot3) {
        playAgain();
    } else if (symbol == gettop3 && gettop3 == getmid2 && getmid2 == getbot1) {
        playAgain();
    }
};

var playAgain = function() {
    var p1 = document.querySelector("#p1name").innerText;
    var p2 = document.querySelector("#p2name").innerText;
    if (playCounter % 2 == 0) {
        p2score++;
        playCounter = 9;
        document.querySelector("#p2score").innerText = p2score;
        alert("Congratulations! " + p2 + " won!\nPlease click \"Reset\" button for a rematch!");
    } else if (playCounter % 2 !== 0) {
        p1score++;
        playCounter = 9;
        document.querySelector("#p1score").innerText = p1score;
        alert("Congratulations! " + p1 + " won!\nPlease click \"Reset\" button for a rematch!");
    };
};

var preventOverwrite = function(input) {
    if (input !== "") {
        alert("Choose an empty box");
    };
    return;
};

var showXorO = function() {
    var test = this.innerText;
    checkWin();
    if (this.innerText !== "" && playCounter == 9) {
        alert("Game has ended! To play again, please refresh the page.")
        return;
    } else if (this.innerText !== "") {
        alert("Choose an empty box.")
        return;
    } else if (playCounter == 9) {
        alert("Game has ended! To play again, please refresh the page.")
        return;
    };

    if(playCounter % 2 == 0) {
        playCounter++
        // preventOverwrite(this.innerText);
        this.innerText = "X";
        checkWin("X");
    } else if(playCounter % 2 !== 0) {
        playCounter++
        // preventOverwrite();
        this.innerText = "O";
        checkWin("O");
    };
};

var resetGame = function() {
    playCounter = 0;
    for (i=0; i<listItems.length; i++) {
        listItems[i].innerText = ""
    };
};

var addName = function(input, node) {
    if (userNamep1 == null || userNamep1 == "") {
        return;
    } else {
        document.querySelector(node).innerText = input;
    };
};

document.addEventListener("DOMContentLoaded", consoleInform);

listItems = document.querySelectorAll('.boxCss');

for (i=0; i<listItems.length; i++) {
    listItems[i].addEventListener('click', showXorO)
};

var resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', resetGame)

setTimeout((userNamep1 = prompt("Player 1 name? (X)")), 1000);
addName(userNamep1, "#p1name");
setTimeout((userNamep2 = prompt("Player 2 name? (O)")), 1000);
addName(userNamep2, "#p2name");

