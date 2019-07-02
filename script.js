console.log("Hello World!")
var counter = 0;
var gameStart = false;
var winningArray = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var xPositions = [];
var oPositions = [];

var player1Name = "";
var player2Name = "";

//DOM nodes
var getBody = document.querySelector("body");


//changing the X and O
function writeTextInBox (event){
    if(counter%2 === 0){
        event.target.innerText = "X";
        counter+=1;
        xPositions.push(parseInt(event.target.id));
    }else{
        event.target.innerText = "O";
        counter+=1;
        oPositions.push(parseInt(event.target.id));
    }

    console.log(xPositions);

    if(checkWin(player1Name,xPositions)){
        removeClickListener();
    }else if(checkWin(player2Name,oPositions)){
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
        createPlayerLabel.setAttribute("class","player");

        createPlayerLabel.setAttribute("id","player-"+i.toString());
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


})

function preCreateBoard(){
    if(!gameStart){
        gameStart = true;

        //get input value then remove them
        player1Name = document.getElementById("input-1").value;
        player2Name = document.getElementById("input-2").value;
        var getInputContainer = document.querySelector(".input-container")
        getBody.removeChild(getInputContainer);
        console.log(player1Name);
        console.log(player2Name);



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
    makePlayerNameDisplayContainer.setAttribute("class","player-name-container clearfix");


        var makePlayer1NameDiv = document.createElement("div");
        makePlayer1NameDiv.setAttribute("id","player-1-display");
        makePlayer1NameDiv.innerText = "Player 1: "+player1Name+" - 'X'";
        makePlayerNameDisplayContainer.appendChild(makePlayer1NameDiv)

        var makePlayer2NameDiv = document.createElement("div");
        makePlayer2NameDiv.setAttribute("id","player-2-display");
        makePlayer2NameDiv.innerText = "Player 2: "+player2Name+" - 'O'";
        makePlayerNameDisplayContainer.appendChild(makePlayer2NameDiv)

    createBoardContainer.appendChild(makePlayerNameDisplayContainer);

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

// function checkPosition(){


//     for(i=0;i<9;i++){
//         var getBox = document.getElementById((i+1).toString());
//         var getSymbol = getBox.value;
//         if(getSymbol === "X");
//             xPositions.push(i+1)
//         else if(getSymbol === "O")
//             oPositions.push(i+1);
//     }
// }







