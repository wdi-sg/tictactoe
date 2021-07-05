console.log("Hello World!")
var counter = 0;
var gameStart = false;

var player1Name = "";
var player2Name = "";
var player1Symbol = null;
var player2Symbol = null;

var player1WinCounter = 0;
var player2WinCounter = 0;
console.log(1%3);
console.log(1/3);
var boardArray = [];
var countdown = 0;


var intervalRef1 = null;
var intervalRef2 = null;

var boardSize = null;
//DOM nodes
var getBody = document.querySelector("body");




//changing the X and O
var writeTextInBox = function(event){
    var getXAxis = null;
    var getYAxis = null;
    var getTimer = document.querySelectorAll(".timing");
    if(counter%2 === 0){
        if(event.target.innerText){
            console.log("error");
        }else{
           event.target.innerText = player1Symbol;
           getXAxis = checkXAxis(parseInt(event.target.id));
           getYAxis = checkYAxis(parseInt(event.target.id));
           boardArray[getYAxis][getXAxis] = player1Symbol;

            stopTimer1();
            for(i=0;i<2;i++){
                getTimer[i].innerHTML = "5s"
            }
            startTimer2();

            counter+=1;

        }
    }

    else{
        if(event.target.innerText){
            console.log("error");
        }else{
            event.target.innerText = player2Symbol;
            getXAxis = checkXAxis(parseInt(event.target.id));
            getYAxis = checkYAxis(parseInt(event.target.id));
            boardArray[getYAxis][getXAxis] = player2Symbol;

            stopTimer2();
            for(i=0;i<2;i++){
                getTimer[i].innerHTML = "5s"
            }
            startTimer1();
            counter+=1;

        }
    }


    if(checkAll(player1Symbol)){
        player1WinCounter +=1;
        stopTimer1();
        stopTimer2();
        removeClickListener();
    }else if(checkAll(player2Symbol)){
        player2WinCounter +=1;
        stopTimer1();
        stopTimer2();
        removeClickListener();
    }

    var testEmpty = 0;
    for(i=0;i<boardArray.length;i++){
        for(j=0;j<boardArray.length;j++){
            if(boardArray[i][j]===null){
                testEmpty+=1;
            }
        }
    }
    if(testEmpty === 0){
        endGameByFull();
    }

};

var endGameByFull = function(){
    stopTimer1();
    stopTimer2();
    removeClickListener();
    document.getElementById("win-display").innerText = `Nobody Wins`;
    var getButton = document.getElementById("start-button");
    getButton.style.visibility = "visible";
}

var removeClickListener = function(){
    for(i=0;i<9;i++){
        var aBox = document.getElementById((i+1).toString());
        aBox.removeEventListener("click", writeTextInBox )


    }
}


var preCreateBoard= function(){
    if(!gameStart){
        boardSize = parseInt(document.querySelector(".board-size").value);
        if(boardSize<3){
            alert("Need to enter a value larger than 2!")
        }else{
            gameStart = true;
            //get input value then remove them
            player1Name = document.getElementById("input-1").value;
            player2Name = document.getElementById("input-2").value;

            //get symbol
            player1Symbol = document.getElementById("select-box").value;
            if(player1Symbol==="X")
                player2Symbol ="O";
            else
                player2Symbol = "X";

            //remove the whole input container
            var getInputContainer = document.querySelector(".input-container")
            getBody.removeChild(getInputContainer);

            for(i=0;i<boardSize;i++){
                var emptyArray =[]
                for(j=0;j<boardSize;j++){
                    emptyArray.push(null);
                }
                boardArray.push(emptyArray);
            }

            createBoard();
        }

    }else{
        var getBoard = document.getElementById("board");
        counter = 0;
        getBody.removeChild(getBoard);
        boardArray=[];
        for(i=0;i<boardSize;i++){
            var emptyArray =[]
            for(j=0;j<boardSize;j++){
                emptyArray.push(null);
            }
            boardArray.push(emptyArray);
        }
        createBoard();
    }
}

//function to create board
var createBoard = function(){

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
        makePlayer1NameDiv.innerText = "Player 1: "+player1Name+" - "+player1Symbol;
        makePlayerNameDisplayContainer.appendChild(makePlayer1NameDiv)

        var makePlayer2NameDiv = document.createElement("div");
        makePlayer2NameDiv.setAttribute("class","player-2");
        makePlayer2NameDiv.setAttribute("id","player-2-display");
        makePlayer2NameDiv.innerText = "Player 2: "+player2Name+" - "+player2Symbol;
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
    var makeTimerContainer = document.createElement("div");
    makeTimerContainer.setAttribute("class","player-status-container clearfix");


        var makePlayer1Timer = document.createElement("div");
        makePlayer1Timer.setAttribute("class","player-1 timing");
        makePlayer1Timer.setAttribute("id","timer-1");
        makePlayer1Timer.innerHTML = "5s";
        makeTimerContainer.appendChild(makePlayer1Timer)

        var makePlayer2Timer = document.createElement("div");
        makePlayer2Timer.setAttribute("id","timer-2");
        makePlayer2Timer.setAttribute("class","player-2 timing");
        makePlayer2Timer.innerHTML = "5s";
        makeTimerContainer.appendChild(makePlayer2Timer);

    createBoardContainer.appendChild(makeTimerContainer);

    //Make Timer
    startTimer1();

    //start creating board here
    var createGameBoard = document.createElement("div");
    createGameBoard.setAttribute("class","game-board");

    for(i=0;i<boardSize;i++){
        createRow = document.createElement("div");
        createRow.setAttribute("class","game-row")


        for(k=0;k<boardSize;k++){
            createBox = document.createElement("span");
            createBox.setAttribute("class","game-square");
            createBox.setAttribute("id",(j).toString());
            createRow.appendChild(createBox);
            j++;
        }
        createGameBoard.appendChild(createRow);
        console.log(i);
    }
    createBoardContainer.appendChild(createGameBoard);
    //give each span an id from 1-9
    getBody.appendChild(createBoardContainer);
    for(l=0;l<(boardSize*boardSize);l++){
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

//check Horizontal Wins
var checkHorizontal = function(arr,sym){
    var checkCounter = 0;
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[i][j]===sym){
                 checkCounter++;
            }
            else{
                checkCounter = 0;
                break;
            }
        }
        if(checkCounter ===arr.length){
            break;
        }
        else{
            checkCounter = 0;
            continue;
        }
    }
    if(checkCounter === arr.length)
        return true
    else
        return false
}

//check vertical wins
var checkVertical = function(arr,sym){
    var checkCounter = 0;
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[j][i]===sym){
                 checkCounter++;
            }
            else{
                checkCounter = 0;
                break;
            }
        }
        if(checkCounter ===arr.length){
            break;
        }
        else{
            checkCounter = 0;
            continue;
        }
    }
    if(checkCounter === arr.length)
        return true
    else
        return false
}

//check X wins
var checkX = function(arr,sym){
    var checkCounter = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i][i]===sym){
            checkCounter++;
        }
        else{
            checkCounter = 0;
            break;
        }
    }

    if(checkCounter === arr.length){
        return true
    }else{
        checkCounter =0;
        var k = 0;
        for(j=arr.length-1;j>=0;j--){
            if(arr[k][j]===sym){
                checkCounter++;
                k++;
            }
            else{
                checkCounter = 0;
                break;
            }
        }

        if(checkCounter === arr.length){
            return true;
        }else{
            return false;
        }
    }

}

//run all checks
var checkAll = function(sym){
    var emptyArr = [checkHorizontal(boardArray,sym),checkVertical(boardArray,sym),checkX(boardArray,sym)]
    var getWinDisplay = document.getElementById("win-display");
    if(emptyArr.includes(true) && sym === player1Symbol){
        getWinDisplay.innerText = `${player1Name} Wins!!!`;
            var getButton = document.getElementById("start-button");
            getButton.style.visibility = "visible";
            return true;
    }else if (emptyArr.includes(true) && sym === player2Symbol){
        getWinDisplay.innerText = `${player2Name} Wins!!!`;
            var getButton = document.getElementById("start-button");
            getButton.style.visibility = "visible";
            return true;
    }else
        return false

}

//get X Axis num
var checkXAxis = function(num){
    var aNum =null

    if(num<=boardArray.length)
        return num-1
    else{
        if(num%boardArray.length === 0){

            return (boardArray.length-1)
        }
        else{

            return num%boardArray.length-1
        }

    }
}

//get Y Axis num
var checkYAxis = function(num){

    return Math.floor((num-1)/boardArray.length);
}

//create Timing
var timesUp = function(sym){
    var getTimer = document.querySelectorAll(".timing");
    var stopper = false
    stopTimer1();
    stopTimer2();
    for(i=0;i<2;i++){
        getTimer[i].innerHTML = "5s"
    }

    var getBox = null;
    while(!stopper){
        getBox = document.getElementById((Math.floor(Math.random()*(boardSize*boardSize-1)))+1);
        if(getBox.innerText){
            continue;
        }else{
            getBox.innerText=sym;
            stopper = true;
        }
    }
    var getXAxis = null;
    var getYAxis = null;
    getXAxis = checkXAxis(parseInt(getBox.id));
    getYAxis = checkYAxis(parseInt(getBox.id));
    boardArray[getYAxis][getXAxis] = sym;
    counter++;
    if(sym === "X"){
        startTimer2();
    }else{
        startTimer1();
    }

    if(checkAll(player1Symbol)){
        player1WinCounter +=1;
        stopTimer1();
        stopTimer2();
        removeClickListener();
    }else if(checkAll(player2Symbol)){
        player2WinCounter +=1;
        stopTimer1();
        stopTimer2();
        removeClickListener();
    }


}


var timer1 = function(){

    var getTimer = document.getElementById("timer-1");
    countdown++;
    getTimer.innerHTML = (5-countdown)+"s";

    if (countdown===5){
        timesUp(player1Symbol);
    }
}

var timer2 = function(){
    var getTimer = document.getElementById("timer-2");
    countdown++;
    getTimer.innerHTML = (5-countdown)+"s";

    if (countdown===5){
        timesUp(player2Symbol);
    }
}

var startTimer1 = function(){
    countdown = 0;
    intervalRef1 = setInterval(timer1,1000);
}

var stopTimer1 = function(){
    clearInterval(intervalRef1);
}

var startTimer2 = function(){
    countdown = 0;
    intervalRef2 = setInterval(timer2,1000);
}

var stopTimer2 = function(){
    clearInterval(intervalRef2);
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
    var createShortDescription = document.createElement("p");
    createShortDescription.setAttribute("id","short-description");
    createShortDescription.innerText="Player 1 please choose your symbol:";

    createInputContainer.appendChild(createShortDescription);

    var createSymbolChoice = document.createElement("select");
    createSymbolChoice.setAttribute("id","select-box");

        var createOption1 = document.createElement("option");
        var createOption2 = document.createElement("option");
        createOption1.setAttribute("id","option-1");
        createOption2.setAttribute("id","option-2");
        createOption1.setAttribute("value","X");
        createOption2.setAttribute("value","O");
        createOption1.innerText = "X";
        createOption2.innerText = "O";

    createSymbolChoice.appendChild(createOption1);
    createSymbolChoice.appendChild(createOption2);

    createInputContainer.appendChild(createSymbolChoice);

    //input board size
    var createAnotherDescription = document.createElement("p");
    createAnotherDescription.innerText = "Please input board size:"
    var createBoardSizeInput = document.createElement("input");
    createBoardSizeInput.setAttribute("class","player-input board-size");
    createBoardSizeInput.setAttribute("type","text");

    createInputContainer.appendChild(createAnotherDescription);
    createInputContainer.appendChild(createBoardSizeInput);


})

