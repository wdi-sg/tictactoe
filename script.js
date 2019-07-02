console.log("Hello World!")
var counter = 0;
var gameStart = false;
var winningArray = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var xPositions = [];
var oPositions = [];

var player1Name = "";
var player2Name = "";

var player1WinCounter = 0;
var player2WinCounter = 0;

var player1Time = 300;
var palyer2Time = 300;

var countdown1 = 0;
var countdown2 = 0;

var intervalRef1 = null;
var intervalRef2 = null;

//DOM nodes
var getBody = document.querySelector("body");


//changing the X and O
function writeTextInBox (event){
    if(counter%2 === 0){
        event.target.innerText = "X";
        // clearInterval(intervalRef1);
        // startTimer2();
        counter+=1;
        xPositions.push(parseInt(event.target.id));
    }else{
        event.target.innerText = "O";
        // clearInterval(intervalRef2);
        // startTimer1();
        counter+=1;
        oPositions.push(parseInt(event.target.id));
    }

    console.log(xPositions);

    if(checkWin(player1Name,xPositions)){
        player1WinCounter +=1;
        removeClickListener();
    }else if(checkWin(player2Name,oPositions)){
        player2WinCounter +=1;
        removeClickListener();
    }


};

function removeClickListener(){
    for(i=0;i<9;i++){
        var aBox = document.getElementById((i+1).toString());
        aBox.removeEventListener("click", writeTextInBox )


    }
}

//on start, create a start button for creating board
document.addEventListener("DOMContentLoaded",function(event){
    var createButton = document.createElement("button");
    createButton.addEventListener("click",function(){
        preCreateBoard();
    })
    createButton.setAttribute("id","start-button");
    createButton.innerText = "Start Game";
    getBody.appendChild(createButton);

    //create player names input container
    var createInputContainer = document.createElement("div");
    createInputContainer.setAttribute("class","input-container")


    for(i=1;i<3;i++){

        var createPlayerLabel = document.createElement("p")
        createPlayerLabel.setAttribute("class","player player-"+i.toString());
        createPlayerLabel.innerText = "Player "+i;

        var createPlayerInput = document.createElement("input");
        createPlayerInput.setAttribute("type","text");
        createPlayerInput.setAttribute("class","player-input");
        createPlayerInput.setAttribute("placeholder","Please enter name of Player "+i);
        createPlayerInput.setAttribute("id","input-"+i.toString());

        createInputContainer.appendChild(createPlayerLabel);
        createInputContainer.appendChild(createPlayerInput);

    }

    getBody.appendChild(createInputContainer);

    //create choice of symbol



})

function preCreateBoard(){
    if(!gameStart){
        gameStart = true;
        //get input value then remove them
        player1Name = document.getElementById("input-1").value;
        player2Name = document.getElementById("input-2").value;
        var getInputContainer = document.querySelector(".input-container")
        getBody.removeChild(getInputContainer);
        createBoard();

    }else{
        var getBoard = document.getElementById("board");
        counter = 0;
        getBody.removeChild(getBoard);
        xPositions = [];
        oPositions= [];
        createBoard();
    }
}

//function to create board
function createBoard(){

    var j = 1;
    var createRow = null;
    var createBox = null;
    var createBoardContainer = document.createElement("div");
    createBoardContainer.setAttribute("id","board");

    //display players name
    var makePlayerNameDisplayContainer = document.createElement("div");
    makePlayerNameDisplayContainer.setAttribute("class","player-status-container clearfix");


        var makePlayer1NameDiv = document.createElement("div");
        makePlayer1NameDiv.setAttribute("class","player-1");
        makePlayer1NameDiv.setAttribute("id","player-1-display");
        makePlayer1NameDiv.innerText = "Player 1: "+player1Name+" - 'X'";
        makePlayerNameDisplayContainer.appendChild(makePlayer1NameDiv)

        var makePlayer2NameDiv = document.createElement("div");
        makePlayer2NameDiv.setAttribute("class","player-2");
        makePlayer2NameDiv.setAttribute("id","player-2-display");
        makePlayer2NameDiv.innerText = "Player 2: "+player2Name+" - 'O'";
        makePlayerNameDisplayContainer.appendChild(makePlayer2NameDiv)

    createBoardContainer.appendChild(makePlayerNameDisplayContainer);


    //display players score
    var makePlayerNameDisplayScore = document.createElement("div");
    makePlayerNameDisplayScore.setAttribute("class","player-status-container clearfix");


        var makePlayer1ScoreDiv = document.createElement("div");
        makePlayer1ScoreDiv.setAttribute("class","player-1");
        makePlayer1ScoreDiv.setAttribute("id","player-1-score");
        makePlayer1ScoreDiv.innerText = "Win :"+player1WinCounter;
        makePlayerNameDisplayScore.appendChild(makePlayer1ScoreDiv)

        var makePlayer2ScoreDiv = document.createElement("div");
        makePlayer2ScoreDiv.setAttribute("id","player-2-score");
        makePlayer2ScoreDiv.setAttribute("class","player-2");
        makePlayer2ScoreDiv.innerText = "Win :"+player2WinCounter;
        makePlayerNameDisplayScore.appendChild(makePlayer2ScoreDiv);

    createBoardContainer.appendChild(makePlayerNameDisplayScore);


    //make Timer Display
    // var makeTimerContainer = document.createElement("div");
    // makeTimerContainer.setAttribute("class","player-status-container clearfix");


    //     var makePlayer1Timer = document.createElement("div");
    //     makePlayer1Timer.setAttribute("class","player-1");
    //     makePlayer1Timer.setAttribute("id","timer-1");
    //     makePlayer1Timer.innerHTML = "5 : 00"
    //     makeTimerContainer.appendChild(makePlayer1Timer)

    //     var makePlayer2Timer = document.createElement("div");
    //     makePlayer2Timer.setAttribute("id","timer-2");
    //     makePlayer2Timer.setAttribute("class","player-2");
    //     makePlayer2Timer.innerHTML = "5 : 00"
    //     makeTimerContainer.appendChild(makePlayer2Timer);

    // createBoardContainer.appendChild(makeTimerContainer);

    // //Make Timer
    // startTimer1();

    //start creating board here
    for(i=0;i<3;i++){
        createRow = document.createElement("div");
        createRow.setAttribute("class","game-row")


        for(k=0;k<3;k++){
            createBox = document.createElement("span");
            createBox.setAttribute("class","game-square");
            createBox.setAttribute("id",(j).toString());
            createRow.appendChild(createBox);
            j++;
        }
        createBoardContainer.appendChild(createRow);
        console.log(i);
    }

    getBody.appendChild(createBoardContainer);
    for(l=0;l<9;l++){
        var aBox = document.getElementById((l+1).toString());
        aBox.addEventListener("click", writeTextInBox);

    }

    //for show win only
    var makeWinDisplay = document.createElement("p");
    makeWinDisplay.setAttribute("id","win-display");

    createBoardContainer.appendChild(makeWinDisplay);

    var getButton = document.getElementById("start-button");
    getButton.style.visibility = "hidden";
}

function checkWin(symbol,symbolArray){
    var counter = 0;
    var getWinDisplay = document.getElementById("win-display");
    for(i=0;i<winningArray.length;i++){
        for(j=0;j<symbolArray.length;j++){
            if(winningArray[i].includes(symbolArray[j]) ){
                counter +=1;
            }
        }
        if(counter === 3){
            getWinDisplay.innerText = `${symbol} Wins!!!`;
            var getButton = document.getElementById("start-button");
            getButton.style.visibility = "visible";

            return true;
        }else{
            counter = 0;
        }
    }



}


// function timer1(){

//     var getTimer = document.getElementById("timer-1");
//     countdown1++;
//     getTimer.innerHTML = convertSeconds(player1Time-countdown1);
// }

// function timer2(){

//     var getTimer = document.getElementById("timer-2");
//     countdown1++;
//     getTimer.innerHTML = convertSeconds(player1Time-countdown1);
// }


// function convertSeconds(s){
//     var min = Math.floor(s/60);
//     var sec = s%60;
//     return min + ':' + sec;
// }

// function startTimer1(){
//     intervalRef1 = setInterval(timer1,1000);

// }

// function stopTimer1(){
//     clearInterval(intervalRef1);
// }

// function startTimer2(){
//     intervalRef2 = setInterval(timer2,1000);

// }

// function stopTimer2(){
//     clearInterval(intervalRef2);
// }