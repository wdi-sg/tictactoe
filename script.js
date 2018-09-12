// console.log("hello");

// Create a working game

// create a very simple version of the game that users can play. When a user clicks on the first the empty square it turns to an X. Then the turn after it turns to an O. Then switches back, etc.

var turnOne = document.getElementById('one');

var playerX = function() {

    turnOne.addEventListener('click', playerX(){

        alert('hello');
    });
};

playerX();


// The simplest implementation of this game is simply 9 buttons or divs with click events attached to each of them. Clicking on a square just changes the text of the element to X or O. After 9 moves are played the game doesn't do anything else. If the users want to continue playing they can refresh the page.

// The first version of the game can just be a grid - no need to create the tictactoe board faithfully.

// When the user clicks each button it sets a global variable that holds the current player. (starts as a null value when the game loads, is x after the first turn, then switches between players)

// if player turn is null or player turn is o
//   player turn is x
// else
//   player turn is o


// Detecting a win state

// modify your game so that the game knows when one player has won or lost

// notify the users when that happens

// Use either of the following techniques to detect the win state

// the easiest win state is to simply check for every hard coded possibility

// more difficult: counting if there are three of any player's moves in a row / column / diagonal
