console.log("hello!");


//Keep track whose turn it is
var x = 1;
var gameBoard = document.getElementsByClassName("container");


//Keep track of how many turns have been taken (?)
var turnCounter = 0;
var noInARowToWin = 3;
var noInAColumnToWin = 3;


//within the gameBoard is an array to store all the boxes later on
var boardArray = [
[null, null, null],
[null, null, null],
[null, null, null]
];


//Creating boxes
//Label a unique ID
//Add eventListener
for (let i = 0; i < boardArray.length; i++) {
    var row = document.createElement("div");
    gameBoard[0].appendChild(row);
    for (let j = 0; j < boardArray[i].length; j++) {
        var box = document.createElement("div");
        row.appendChild(box);
        row.setAttribute("class", "row-style")
        box.setAttribute("class", "box");
        box.innerText = "|";
        box.id = "" + i+j;
        box.addEventListener("click", createCross);
    }
  };


//Players taking turns
var clickHappened = function(event) {
    if (x === 1) {
        createCross();
        x = 0;
    }
    if (x !== 1) {
        createCircle();
        x = 1;
    }
}


function createCross() {
    if(x === 1){
        this.innerText = "❌";

        x = 0;
    } else if (x !== 1){
        this.innerText = "⭕️";
        x = 1;
    }
}


//if box alr has innertext of x or o, it will not be allowed to be clicked again
// function checkInnerBox() {
//     if (box.innerText === "❌" || box.innertext === "⭕️") {

//     }
// }















