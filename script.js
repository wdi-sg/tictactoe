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


var winLose=function(){
var outcome;
//var continueSearch=true;
//horizontal search
    for(var rowNumber=0;rowNumber<stateOfBoxes.length;rowNumber++)
    {
        if(stateOfBoxes[rowNumber][0]===stateOfBoxes[rowNumber][1]&&stateOfBoxes[rowNumber][0]===stateOfBoxes[rowNumber][2])
        {
            console.log("entered");
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
console.log(stateOfBoxes);
console.log(newArray);
//vertical search
    for(rowNumber=0;rowNumber<newArray.length;rowNumber++)
    {
        if(newArray[rowNumber][0]===newArray[rowNumber][1]&&newArray[rowNumber][0]===newArray[rowNumber][2])
        {
            console.log("entered");
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
        boxComputerSearched.innerText="O";
        touchedItems--;
        //console.log(boxIdSearch);

}

//To insert the X
var insertText=function(event){
    if(!endGame)
    {
        var idArray=this.id.split("");
    console.log(idArray);
    var row=parseInt(idArray[idArray.length-2]);
    var column=parseInt(idArray[idArray.length-1]);
    //console.log(typeof row);
    //console.log(typeof column);
//    console.log(stateOfBoxes[row][column]);
    if(stateOfBoxes[row][column]==="n")
    {
        this.innerText="X";
        stateOfBoxes[row][column]="X";
        touchedItems--
        if(touchedItems>0){
                computerTurn();
            }
            winLose();}
            //n for continue X for win O for lose through variable outcome trigger
        var textEntry=document.getElementById("declare-winner-loser");
        if(outcomeTrigger==="n"&&touchedItems>=0)
        {
            textEntry.innerText="Continue Playing";
        }else
        if(outcomeTrigger==="X"&&touchedItems>=0)
        {
            textEntry.innerText="You Win!";
        }else
        if(outcomeTrigger==="O"&&touchedItems>=0)
        {
            textEntry.innerText="You Lose!";
        }else if(touchedItems==0&&outcomeTrigger==="n")
        {
            textEntry.innerText="Draw";
        }

    }

}

//Collect of all the clicking events
window.onload=function(){
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