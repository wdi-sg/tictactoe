console.log("Tic tac toe game starts now");

/*alert("Game Starts Here");*/

// Board
var board = [
  [ "", "", "" ],
  [ "", "", "" ],
  [ "", "", "" ]
];


// Player
var playerTurn = false;

// If and else statement
var playerStartsGame = function(event){
   if (playerTurn === false) {
    this.innerHTML = "X";
    playerTurn = true;
} else {
    this.innerHTML = "O";
    playerTurn = false;
}
};


// Event listener
var items = document.querySelectorAll(".game");
// Event listeners attached to all buttons using for loop
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", playerStartsGame);
     console.log("Click works");
};


// STEP 1: Create grid on HTML and CSS [done]
// STEP 2: Create a board array and name each of the grids. [DONE]
// STEP 3: Create event listeners to all the individual boxes (divs) [DONE]
// STEP 4: MAKE FUNCTION TO FIND OUT IF INPUT IS AN X OR O [DONE]
/*if player turn is null or player turn is o   player turn is x else
  player turn is o*/



/*document.getElementById("btn-1").textContent = "X";
document.querySelector("#btn-1").textContent = "X";
*/

/*ONCLICK METHOD
OR
INNERTEXT
*/

/*
function myFunction() {
  var x = document.getElementById("btn-1").textContent;
  document.getElementById("demo").innerHTML = X;
}
*/

/*console.log(document.getElementById("#btn-1"));*/

/*board = ('apple');
board = ('pear');
board = ('banana');
debugger
board = ('orange');
board = ('guava');
board = ('mango');
board = ('apple');
*/


