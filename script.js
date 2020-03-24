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
        //console.log(boxIdSearch);

}

//To insert the X
var insertText=function(event){
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