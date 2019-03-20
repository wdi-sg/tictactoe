//player inputs
var player1Name = prompt("Player 1! What is your name?")
var player1Icon = prompt(player1Name + ", type in a string that will be used as your icon").toString();

var player2Name = prompt("Player 2! What is your name?")
var player2Icon = prompt(player2Name + ", type in a string that will be used as your icon").toString();

var boardSize = parseInt(prompt("What is the size of your board?"))
var turnCounter = 1;
var player1Score = 0;
var player2Score = 0;

// generating win conditions

var solutionSet = [];
var solutionSetSplit = [];

var generateSolutionSet = function() {
    var solutionElement = [];
    var solutionString = [];
    var solutionStringMod = [];
    for (i=0; i<boardSize; i++) {
        for(j=0; j<boardSize; j++){
            solutionElement = (String.fromCharCode(i+65)+j).toString();
            solutionString.push(solutionElement);
            solutionStringMod = solutionString.join();
        }
    solutionSet.push(solutionStringMod);
    solutionString = [];
    }
    for (i=0; i<boardSize; i++) {
        for(j=0; j<boardSize; j++){
            solutionElement = (String.fromCharCode(j+65)+i).toString();
            solutionString.push(solutionElement);
            var solutionStringMod = solutionString.join();
        }
    solutionSet.push(solutionStringMod);
    solutionString = [];
    }
    for (i=0; i<boardSize; i++) {
        solutionElement = (String.fromCharCode(i+65)+i).toString();
        solutionString.push(solutionElement);
        solutionStringMod = solutionString.join();
    }
    solutionSet.push(solutionStringMod);
    solutionString = [];
    for (i=0; i<boardSize; i++) {
        solutionElement = (String.fromCharCode(i+65)+(boardSize-1-i)).toString();
        solutionString.push(solutionElement);
        solutionStringMod = solutionString.join();
    }
    solutionSet.push(solutionStringMod);
    solutionString = [];
    for(i=0; i<(boardSize*2+2); i++){
        var temp = solutionSet[i].split(",");
        solutionSetSplit.push(temp);
    }
}

//checking win conditions

var checkWin1 = function() {
    var playerSolutionElement = [];
    var playerSolutionString = [];
    var thisElementMatches = [];
    var yesIndeed =[];
    if(turnCounter>(boardSize-1)*2) {
        for(i=0; i<(boardSize*boardSize);i++) {
            if(document.getElementsByClassName("boardColumn")[i].innerText === player1Icon){
                playerSolutionElement = document.getElementsByClassName("boardColumn")[i].className.split(" ")[1];
                playerSolutionString.push(playerSolutionElement);
            }
        }
        for (i=0; i<solutionSet.length; i++){
            for(j=0; j<boardSize; j++){
                if(playerSolutionString.includes(solutionSetSplit[i][j]) === true) {
                    thisElementMatches.push(true);
                } else {
                    thisElementMatches.push(false);
                } // eg. cycles through solutionSetSplit[A][j] and returns array of T and F
            }
            var thisStringMatches = thisElementMatches.every(function(item){
                   return item === true;
            })
            if (thisStringMatches === true){
                yesIndeed.push(true);
            } else {
                yesIndeed.push(false);
            }
            thisElementMatches= [];
        }
        if (yesIndeed.includes(true) === true){
            alert("Player 1 wins!!");
            clearBoard();
        }
    }
}

var checkWin2 = function() {
    var playerSolutionElement = [];
    var playerSolutionString = [];
    var thisElementMatches = [];
    var yesIndeed =[];
    if(turnCounter>((boardSize-1)*2)+1) {
        for(i=0; i<(boardSize*boardSize);i++) {
            if(document.getElementsByClassName("boardColumn")[i].innerText === player2Icon){
                playerSolutionElement = document.getElementsByClassName("boardColumn")[i].className.split(" ")[1];
                playerSolutionString.push(playerSolutionElement);
            }
        }
        for (i=0; i<solutionSet.length; i++){
            for(j=0; j<boardSize; j++){
                if(playerSolutionString.includes(solutionSetSplit[i][j]) === true) {
                    thisElementMatches.push(true);
                } else {
                    thisElementMatches.push(false);
                } // eg. cycles through solutionSetSplit[A][j] and returns array of T and F
            }
            var thisStringMatches = thisElementMatches.every(function(item){
                   return item === true;
            })
            if (thisStringMatches === true){
                yesIndeed.push(true);
            } else {
                yesIndeed.push(false);
            }
            thisElementMatches= [];
        }
        if (yesIndeed.includes(true) === true){
            alert("Player 2 wins!!");
            clearBoard();
        }
    }
}

//board creation/maintenance


var generateBoard = function(size) {
    for(i=0; i<size; i++){
        var createRow = document.createElement("div");
        createRow.setAttribute("class","boardRow");
        document.body.appendChild(createRow)
        var boardRowSelect = document.getElementsByClassName("boardRow")
        for (j=0; j<size; j++){
            var createColumn = document.createElement("button");
            createColumn.setAttribute("class", "boardColumn " + String.fromCharCode(i+65) + j);
            boardRowSelect[i].appendChild(createColumn);
        }
    }
    generateSolutionSet();
}

generateBoard(boardSize);

var clearBoard = function() {
    turnCounter = 1;
    var allDivs = document.getElementsByClassName("boardRow");
    for (i=allDivs.length; i>0 ;i--){
        document.body.removeChild(allDivs[i-1]);
    }
    boardSize = parseInt(prompt("What is the size of your board?"));
    generateBoard(boardSize);
    solutionSet=[];
    solutionSetSplit=[];
    generateSolutionSet();
    playGame();
}

//game logic
var button = document.getElementsByClassName("boardColumn");

var playGame = function() {
    for (var i=0 ; i<(boardSize*boardSize) ; i++) {
        button[i].addEventListener("click",function(){
            var playerClick = this.innerText;
            if (playerClick == "" && turnCounter % 2 === 1) {
                this.innerText = player1Icon;
                turnCounter ++;
                checkWin1();
            } else if (playerClick == "" && turnCounter % 2 === 0) {
                this.innerText = player2Icon ;
                turnCounter ++;
                checkWin2();
            }
        })
    }
}

playGame();