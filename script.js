//state of the boxes

var stateOfBoxes=
[
["n","n","n"],
["n","n","n"],
["n","n","n"]
];
var touchedItems=9;
//var row;
//var column;
var endGame=false;
var outcomeTrigger="n";
var gameStart=false;
var win=0;
var lose=0;
//var mainScreen=document.querySelector("body");
var restart;
var gameToStart
var messageToDisplay;
var userInputTimer;
var userKeyed;
var timerLose;
var forceUser;
var winLose=function(){
var outcome;
//var continueSearch=true;
//horizontal search
    for(var rowNumber=0;rowNumber<stateOfBoxes.length;rowNumber++)
    {
        if(stateOfBoxes[rowNumber][0]===stateOfBoxes[rowNumber][1]&&stateOfBoxes[rowNumber][0]===stateOfBoxes[rowNumber][2])
        {
//            console.log("entered");
            if(stateOfBoxes[rowNumber][0]==="X")
            {

                endGame=true;
                outcomeTrigger="X";
            }
            else if(stateOfBoxes[rowNumber][0]==="O")
            {
                endGame=true;
                outcomeTrigger="O";
            }
        }
    }
//rotate array for vertical search
    var newArray = [];
        for(var i = 0; i < stateOfBoxes.length; i++){
            newArray.push([]);
        };

        for(var i = 0; i < stateOfBoxes.length; i++){
            for(var j = 0; j < stateOfBoxes.length; j++){
                newArray[j].push(stateOfBoxes[i][j]);
            };
        };
//console.log(stateOfBoxes);
//console.log(newArray);
//vertical search
    for(rowNumber=0;rowNumber<newArray.length;rowNumber++)
    {
        if(newArray[rowNumber][0]===newArray[rowNumber][1]&&newArray[rowNumber][0]===newArray[rowNumber][2])
        {
//            console.log("entered");
            if(newArray[rowNumber][0]==="X")
            {

                endGame=true;
                outcomeTrigger="X";
            }
            else if(newArray[rowNumber][0]==="O")
            {
                endGame=true;
                outcomeTrigger="O";
            }
        }
    }
//diagonal search
    if(stateOfBoxes[0][0]===stateOfBoxes[1][1]&&stateOfBoxes[0][0]===stateOfBoxes[2][2]){
        if(stateOfBoxes[0][0]==="X")
            {

                endGame=true;
                outcomeTrigger="X";
            }
            else if(stateOfBoxes[0][0]==="O")
            {
                endGame=true;
                outcomeTrigger="O";
            }


                }

        if(stateOfBoxes[0][2]===stateOfBoxes[1][1]&&stateOfBoxes[0][2]===stateOfBoxes[2][0]){
        if(stateOfBoxes[0][2]==="X")
            {

                endGame=true;
                outcomeTrigger="X";
            }
            else if(stateOfBoxes[0][2]==="O")
            {
                endGame=true;
                outcomeTrigger="O";
            }


                }
            if(outcomeTrigger!=="O"&&outcomeTrigger!=="X"&&touchedItems===0){
                outcomeTrigger="D";
            }

console.log(outcomeTrigger)
}



//Computer Sequence
var computerTurn=function(){
    //console.log("my turn");
    var computerRow, computerColumn;
    var computerRowText, computerColumnText;
    var boxId=["#box"];
    var boxIdSearch;
    for(;;){
        computerRow=Math.floor(Math.random()*3);
        computerColumn=Math.floor(Math.random()*3);
        if(stateOfBoxes[computerRow][computerColumn]==="n")
        {
            console.log("inserted");
            break;
        }
    }
        stateOfBoxes[computerRow][computerColumn]="O"
        computerRowText=computerRow.toString();
        computerColumnText=computerColumn.toString();
        //console.log(typeof computerColumnText);
        //console.log(typeof computerRowText);
        boxId.push(computerRowText);
        boxId.push(computerColumnText);
        //console.log(boxId);
        boxIdSearch=boxId.join("");
        var boxComputerSearched=document.querySelector(boxIdSearch);
        boxComputerSearched.style.backgroundColor="red";
        boxComputerSearched.innerText="O";
        touchedItems--;
        //console.log(boxIdSearch);

}

var forcedComputerTurn=function(){
    //console.log("my turn");
    clearTimeout(forceUser);
    var computerRow, computerColumn;
    var computerRowText, computerColumnText;
    var boxId=["#box"];
    var boxIdSearch;
    for(;;){
        computerRow=Math.floor(Math.random()*3);
        computerColumn=Math.floor(Math.random()*3);
        if(stateOfBoxes[computerRow][computerColumn]==="n")
        {
            console.log("inserted");
            break;
        }
    }
        stateOfBoxes[computerRow][computerColumn]="X"
        computerRowText=computerRow.toString();
        computerColumnText=computerColumn.toString();
        //console.log(typeof computerColumnText);
        //console.log(typeof computerRowText);
        boxId.push(computerRowText);
        boxId.push(computerColumnText);
        //console.log(boxId);
        boxIdSearch=boxId.join("");
        var boxComputerSearched=document.querySelector(boxIdSearch);
        boxComputerSearched.style.backgroundColor="Yellow";
        boxComputerSearched.innerText="X";
        touchedItems--;
        //console.log(boxIdSearch);
                   if(touchedItems>0){
                var computerlag=setTimeout(computerTurn,0);
            }
            winLose();
                    var textEntry=document.getElementById("declare-winner-loser");
        var winText=document.getElementById("winText");
        var loseText=document.getElementById("loseText");
        if((outcomeTrigger==="n"||outcomeTrigger==="#")&&touchedItems>=0)
        {
            textEntry.innerText="Continue Playing";
            winText.innerText="Wins:"+win;
            loseText.innerText="Lose:"+lose;

        }else
        if(outcomeTrigger==="X"&&touchedItems>=0)
        {
            //debugger;
            textEntry.innerText="You Win!";
            messageToDisplay=textEntry.innerText;
            //console.log(messageToDisplay);
            win++;
             winText.innerText="Wins:"+win;
            loseText.innerText="Lose:"+lose;
            gameStart=false;
            stateOfBoxes=
                        [
                        ["n","n","n"],
                        ["n","n","n"],
                        ["n","n","n"]
                        ];
                        endGame=!endGame;
                        outcomeTrigger="#";
                        touchedItems=9;
            restart=setTimeout(restartScreen,100);

        }else
        if((outcomeTrigger==="O"&&touchedItems>=0)||userKeyed)
        {

            textEntry.innerText="You Lose!";
            messageToDisplay=textEntry.innerText;
            lose++;
             winText.innerText="Wins:"+win;
            loseText.innerText="Lose:"+lose;
            gameStart=false;
              stateOfBoxes=
                        [
                        ["n","n","n"],
                        ["n","n","n"],
                        ["n","n","n"]
                        ];
                         endGame=!endGame;
                         outcomeTrigger="#";
                         touchedItems=9;
            restart=setTimeout(restartScreen,100);

        }else if(outcomeTrigger==="D")
        {
            textEntry.innerText="Draw";
            messageToDisplay=textEntry.innerText;
             winText.innerText="Wins:"+win;
            loseText.innerText="Lose:"+lose;
            gameStart=false;
              stateOfBoxes=
                        [
                        ["n","n","n"],
                        ["n","n","n"],
                        ["n","n","n"]
                        ];
                         endGame=false;
                         outcomeTrigger="#";
                         touchedItems=9;
            restart=setTimeout(restartScreen,100);
        }

}

//To insert the X
var insertText=function(event){
//    console.log(endGame);
userKeyed=true;
clearTimeout(timerLose);
clearTimeout(forceUser);
//if(!userKeyed)
if(true)
{forceUser=setTimeout(function(){
            forcedComputerTurn();
var closeThisForceFunction=setTimeout(function(){
                            clearTimeout(forceUser);
                         },5001);
},5000);
timerLose=setTimeout(function(){
userKeyed=false;
console.log("do something naughty");
            textEntry.innerText="You Lose!";
            messageToDisplay=textEntry.innerText;
            lose++;
             winText.innerText="Wins:"+win;
            loseText.innerText="Lose:"+lose;
            gameStart=false;
              stateOfBoxes=
                        [
                        ["n","n","n"],
                        ["n","n","n"],
                        ["n","n","n"]
                        ];
                         endGame=false;
                         outcomeTrigger="#";
                         touchedItems=9;
                         var closeThisLoseFunction=setTimeout(function(){
                            clearTimeout(timerLose);
                         },10001);
            restart=setTimeout(restartScreen,1000);
            clearTimeout(timerLose);
},10000);}
//
    if(!endGame)
    {

        var idArray=this.id.split("");
//    console.log(idArray);
    var row=parseInt(idArray[idArray.length-2]);
    var column=parseInt(idArray[idArray.length-1]);

    //console.log(typeof row);
    //console.log(typeof column);
//    console.log(stateOfBoxes[row][column]);
    if(stateOfBoxes[row][column]==="n")
    {
        this.innerText="X";
        this.style.backgroundColor="blue";
        stateOfBoxes[row][column]="X";
        touchedItems--
        if(touchedItems>0){
                var computerlag=setTimeout(computerTurn,0);
            }
            winLose();}
            //n for continue X for win O for lose through variable outcome trigger
        var textEntry=document.getElementById("declare-winner-loser");
        var winText=document.getElementById("winText");
        var loseText=document.getElementById("loseText");
        if((outcomeTrigger==="n"||outcomeTrigger==="#")&&touchedItems>=0)
        {
            textEntry.innerText="Continue Playing";
            winText.innerText="Wins:"+win;
            loseText.innerText="Lose:"+lose;

        }else
        if(outcomeTrigger==="X"&&touchedItems>=0)
        {
            //debugger;
            textEntry.innerText="You Win!";
            messageToDisplay=textEntry.innerText;
            //console.log(messageToDisplay);
            win++;
             winText.innerText="Wins:"+win;
            loseText.innerText="Lose:"+lose;
            gameStart=false;
            stateOfBoxes=
                        [
                        ["n","n","n"],
                        ["n","n","n"],
                        ["n","n","n"]
                        ];
                        endGame=!endGame;
                        outcomeTrigger="#";
                        touchedItems=9;
            restart=setTimeout(restartScreen,100);

        }else
        if((outcomeTrigger==="O"&&touchedItems>=0)||userKeyed)
        {

            textEntry.innerText="You Lose!";
            messageToDisplay=textEntry.innerText;
            lose++;
             winText.innerText="Wins:"+win;
            loseText.innerText="Lose:"+lose;
            gameStart=false;
              stateOfBoxes=
                        [
                        ["n","n","n"],
                        ["n","n","n"],
                        ["n","n","n"]
                        ];
                         endGame=!endGame;
                         outcomeTrigger="#";
                         touchedItems=9;
            restart=setTimeout(restartScreen,100);

        }else if(outcomeTrigger==="D")
        {
            textEntry.innerText="Draw";
            messageToDisplay=textEntry.innerText;
             winText.innerText="Wins:"+win;
            loseText.innerText="Lose:"+lose;
            gameStart=false;
              stateOfBoxes=
                        [
                        ["n","n","n"],
                        ["n","n","n"],
                        ["n","n","n"]
                        ];
                         endGame=false;
                         outcomeTrigger="#";
                         touchedItems=9;
            restart=setTimeout(restartScreen,100);
        }

    }

}
var restartScreen=function(){
    clearTimeout(timerLose);
clearTimeout(forceUser);
    console.log("Restart");
    document.body.innerHTML="";
    var message=document.createElement("h1");
    //messageToDisplay=textEntry.innerText;
    message.innerText=messageToDisplay;
    document.body.appendChild(message);
    var startScreen=setTimeout(initialScreen,1000);
}
var gameStartScreen=function(){
var box00Clicked=document.querySelector("#box00");
var box01Clicked=document.querySelector("#box01");
var box02Clicked=document.querySelector("#box02");
var box10Clicked=document.querySelector("#box10");
var box11Clicked=document.querySelector("#box11");
var box12Clicked=document.querySelector("#box12");
var box20Clicked=document.querySelector("#box20");
var box21Clicked=document.querySelector("#box21");
var box22Clicked=document.querySelector("#box22");

box00Clicked.addEventListener("click",insertText);
box01Clicked.addEventListener("click",insertText);
box02Clicked.addEventListener("click",insertText);
box10Clicked.addEventListener("click",insertText);
box11Clicked.addEventListener("click",insertText);
box12Clicked.addEventListener("click",insertText);
box20Clicked.addEventListener("click",insertText);
box21Clicked.addEventListener("click",insertText);
box22Clicked.addEventListener("click",insertText);
}

var initialScreen=function(event){
    console.log("initial screen");
/*stateOfBoxes=
                        [
                        ["n","n","n"],
                        ["n","n","n"],
                        ["n","n","n"]
                        ];*/
if(!gameStart){
    //console.log("loop");
        var boxId="box";
        var iText,jText,boxIdText;
        document.body.innerHTML="";
        var container=document.createElement("div");
        container.classList.add("container");
        document.body.appendChild(container);
        var title=document.createElement("h1");
        title.innerText="Tic Tac Toe";
        container.appendChild(title);
        var playarea=document.createElement("div");
        playarea.classList.add("playarea");
        container.appendChild(playarea)


        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                var box=document.createElement("div");
                iText=i.toString();
                jText=j.toString();
                boxIdText=boxId+iText+jText;
                //console.log(boxIdText);
                box.classList.add("box");
                box.setAttribute("id",boxIdText);
                playarea.appendChild(box);

            }

        }
        var text=document.createElement("h2");
        text.setAttribute("id","declare-winner-loser");
        playarea.appendChild(text);
        //console.log("Start game");
        var winText=document.createElement("p");
        winText.setAttribute("id","winText");
        winText.style.fontSize="35px";
        winText.innerText="Win:"+win;
        playarea.appendChild(winText);
        var loseText=document.createElement("p");
        loseText.setAttribute("id","loseText");
        loseText.style.fontSize="35px";
        loseText.innerText="Lose:" +lose;
        playarea.appendChild(loseText);
        gameStart=true;
        userKeyed=false;
        //
        gameToStart=setTimeout(gameStartScreen,500);
    }

}



//Collect of all the clicking events
window.onload=function(){
    //for start screen

    var mainScreen=document.querySelector("p");


mainScreen.addEventListener("click",initialScreen);

}