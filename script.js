console.log("Great!");
//Assumption, when game is empty, first icon appear is x. Then next is o. Switching between x and o.
//if user click 1st button, x will appear
//next user clicks, o will appear



//If (box [0][0] === “x” && box[0][1] === “x” && box[0][2] === “x”)
//console.log(“x across the top”)
//Instructions
//Create a working game
// create a very simple version of the game that users can play. When a user clicks on the first the empty square it turns to an X. Then the turn after it turns to an O. Then switches back, etc.
var board = ["", "", "",
            "" , "", "",
            "", "", ""]; //for later to store value into board

var turnsX = document.querySelectorAll(".box"); //created var turnsX that stores the array of box classes

var X = true; //setting the starting value as true first

//comparing the content inside, if content is empty and X is true, then will appear X. Else if content inside is empty and X is false, we want it to appear 0, but need remember write X = true
var turnedX = function() {
    if (this.innerHTML === "" && X === true) {
        this.innerHTML = "X";
        X = false;
    } else if (this.innerHTML === "" && X !== true) {
        this.innerHTML = "O";
        X = true;
    }
    console.log("Box turned X");
}
// this function is when we call, on clicking the box, the box will turn
var clickFunc = function(event) {
    for (var i = 0; i < turnsX.length; i++) {
        turnsX[i].addEventListener("click", turnedX);
};

 };
clickFunc();

// this.innerHTML use this for all the innerHTML


// The simplest implementation of this game is simply 9 buttons or divs with click events attached to each of them. Clicking on a square just changes the text of the element to X or O. After 9 moves are played the game doesn't do anything else. If the users want to continue playing they can refresh the page.


// The first version of the game can just be a grid - no need to create the tictactoe board faithfully.

// When the user clicks each button it sets a global variable that holds the current player. (starts as a null value when the game loads, is x after the first turn, then switches between players)

// var playerTurn = null;

// var player1Turn = "X";
// var player2Turn = "0";

// if (playerTurn === null || player2Turn === "0") {
//     player1Turn;
//     player2Turn
// } else (playerTurn === player1Turn) {
//     player2Turn;
//     player1Turn
// }

// if player turn is null or player turn is o
//   player turn is x
// else
//   player turn is o

// var board = [
//   [ null, null, null ],
//   [ null, null, null ],
//   [ null, null, null ]
// ];

// so that the starting value is zero