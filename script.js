// - create a very simple version of the game that users can play. When a user clicks on the first the empty square it turns to an X. Then the turn after it turns to an O. Then switches back, etc.
// - The simplest implementation of this game is simply 9 buttons or divs with click events attached to each of them. Clicking on a square just changes the text of the element to X or O. After 9 moves are played the game doesn't do anything else. If the users want to continue playing they can refresh the page.
// - The first version of the game can just be a grid - no need to create the tictactoe board faithfully.
// - When the user clicks each button it sets a global variable that holds the current player. (starts as a null value when the game loads, is x after the first turn, then switches between players)
// ```
// if player turn is null or player turn is o
//   player turn is x
// else
//   player turn is o

var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box5 = document.querySelector('#box5');
var box6 = document.querySelector('#box6');
var box7 = document.querySelector('#box7');
var box8 = document.querySelector('#box8');
var box9 = document.querySelector('#box9');

// var x1Img = document.querySelector(".x1");
// var o1Img = document.querySelector(".o1");

var turnX = function(){
    var x1Img = document.createElement("img");
    x1Img.src = "images/x.png";
    box1.appendChild(x1Img);
    box1.removeEventListener('click', turnX);
}

// var turnX = function(){
//     if(x1Img.style.visibility === "hidden"){
//         x1Img.style.visibility = "visible";
//     }
//     else{
//         x1Img.style.visibility = "hidden";
//     }
//     // document.querySelector(".x1").style.visibility = "visible";
// }

// var turnO = function(){
//     if(o1Img.style.visibility === "hidden"){
//         o1Img.style.visibility = "visible";
//     }
//     else{
//         o1Img.style.visibility = "hidden";
//     }
// }

window.onload = function(){
    box1.addEventListener('click', turnX);
    // box1.addEventListener('click', turnO);
}