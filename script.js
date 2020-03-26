var player=[];
var marking=["X","O"];
player[0] = "player 1";
player[1] = "player 2";
var takeTurn = 0;

function play(event){
    if (event.innerText !== "X" && event.innerText !== "O"){
    event.innerText = marking[takeTurn];
    togglePlayer();
};
};

function togglePlayer(){
    if(takeTurn === 0) {
    takeTurn = 1;
} else {
    takeTurn = 0
};
};

// ========================================================================

var box1 = document.querySelector("#row-1 > div:first-child")
var box1Text =(box1.innerText);

var box2 = document.querySelector("#row-1 > div:nth-child(2)")
var box2Text =(box2.innerText);

var box3 = document.querySelector("#row-1 > div:last-child")
var box3Text =(box3.innerText);

var box4 = document.querySelector("#row-2 > div:first-child")
var box4Text =(box4.innerText);

var box5 = document.querySelector("#row-2 > div:nth-child(2)")
var box5Text =(box5.innerText);

var box6 = document.querySelector("#row-2 > div:last-child")
var box6Text =(box6.innerText);

var box7 = document.querySelector("#row-3 > div:first-child")
var box7Text =(box7.innerText);

var box8 = document.querySelector("#row-3 > div:nth-child(2)")
var box8Text =(box8.innerText);

var box9 = document.querySelector("#row-3 > div:last-child")
var box9Text =(box9.innerText);

function checkAllBoxes (){
  var i = 0
    while (i < 9) {
    if (box1Text === "X" && box5Text === "X" && box9Text === "X") {
        console.log("YAaaay");
        alert ("we have a winner!")}
        i++;
    // } else if (box1Text === "O" && box5Text === "O" && box9Text === "O") {
    //     console.log("YAaaay");
    //     alert ("we have a winner!")
    //     i++;
    // } else if (box1Text === "X" && box2Text === "X" && box3Text === "X") {
    //     console.log("YAaaay");
    //     alert ("we have a winner!")
    //     i++;
}
}




if (true) {
    console.log ("ahhhhh")
    alert ("hello")
};