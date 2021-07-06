console.log("tictactoeboard");

var turnCounter = 0;
var board = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
// var winCond= [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8],
//   [6,4,2],
// ];
function turn(){
    if (turnCounter === 0 | turnCounter === 2 | turnCounter === 4 | turnCounter === 6 | turnCounter === 8){
        var p1 = event.target.innerText="X";
    }
    else {
    var p2 = event.target.innerText="O" ;
    }
    turnCounter = turnCounter + 1;
}

var allButtons = document.querySelectorAll("button");


for (var i = 0; i < allButtons.length; i++){

document.getElementById("my-btn0").addEventListener('click', turn);
document.getElementById("my-btn1").addEventListener('click', turn);
document.getElementById("my-btn2").addEventListener('click', turn);
document.getElementById("my-btn3").addEventListener('click', turn);
document.getElementById("my-btn4").addEventListener('click', turn);
document.getElementById("my-btn5").addEventListener('click', turn);
document.getElementById("my-btn6").addEventListener('click', turn);
document.getElementById("my-btn7").addEventListener('click', turn);
document.getElementById("my-btn8").addEventListener('click', turn);
}
