console.log("hello script js");

var turn = 0;
var playerOne = [1,2,3];
var playerTwo = [];
var winPerm = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
var winArray = [];

for (var i=0; i<winPerm.length; i++) {
    winPerm[i]
}
console.log(winPerm[0]);
console.log(playerOne);
if (winPerm[0] === playerOne) {
    console.log("Playerone win")
}

var div1 = document.getElementById("1");
var div2 = document.getElementById("2");
var div3 = document.getElementById("3");
var div4 = document.getElementById("4");
var div5 = document.getElementById("5");
var div6 = document.getElementById("6");
var div7 = document.getElementById("7");
var div8 = document.getElementById("8");
var div9 = document.getElementById("9");

// var checkWin = function() {
//     if (playerOne === )
// }

var changeText = function(event){
    if (turn === 0 || turn%2 === 0) {
        console.log("P1 clicked: "+ event.target.innerText);
        playerOne.push(event.target.innerText);
        console.log(playerOne);
        event.target.innerText = "X";
        turn++;
        checkWin();
    } else {
        console.log("P2 clicked: "+ event.target.innerText);
        playerTwo.push(event.target.innerText);
        console.log(playerTwo);
        event.target.innerText = "O";
        turn++;
    }

}



document.addEventListener('DOMContentLoaded', function( event ){

    // var div1 = document.getElementById("1");
    // var div2 = document.getElementById("2");
    // var div3 = document.getElementById("3");
    // var div4 = document.getElementById("4");
    // var div5 = document.getElementById("5");
    // var div6 = document.getElementById("6");
    // var div7 = document.getElementById("7");
    // var div8 = document.getElementById("8");
    // var div9 = document.getElementById("9");

    div1.addEventListener('click', changeText);
    div2.addEventListener('click', changeText);
    div3.addEventListener('click', changeText);
    div4.addEventListener('click', changeText);
    div5.addEventListener('click', changeText);
    div6.addEventListener('click', changeText);
    div7.addEventListener('click', changeText);
    div8.addEventListener('click', changeText);
    div9.addEventListener('click', changeText);


  // now that the dom is ready, set the button click
  // var button = document.querySelector('#start');

  // button.addEventListener('click', startGame);


});





















// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( "WOW SOMETHING HAPPENED" );
// };