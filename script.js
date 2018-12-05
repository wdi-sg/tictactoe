// create a very simple version of the game that users can play. When a user clicks on the first the empty square it turns to an X. Then the turn after it turns to an O. Then switches back, etc.
// The simplest implementation of this game is simply 9 buttons or divs with click events attached to each of them. Clicking on a square just changes the text of the element to X or O. After 9 moves are played the game doesn't do anything else. If the users want to continue playing they can refresh the page.
// The first version of the game can just be a grid - no need to create the tictactoe board faithfully.
// When the user clicks each button it sets a global variable that holds the current player. (starts as a null value when the game loads, is x after the first turn, then switches between players)



var turn = null;


var play = function () {

if(this.textContent.length === 0){
        if (turn === null || turn === 0){
            this.textContent ="X";
            turn += 1;
        } else {
            this.textContent = "O";
            turn -= 1;
        } return turn;
    }
}

// var checkBox = function () {

// if()

}

window.onload = function(){

     var getButtons = document.querySelectorAll("button");
     // set an event listener on each element
     for(var i = 0; i < getButtons.length; i++){
         getButtons[i].addEventListener("click",play);

     }

}


