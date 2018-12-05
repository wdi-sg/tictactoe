// create a very simple version of the game that users can play. When a user clicks on the first the empty square it turns to an X. Then the turn after it turns to an O. Then switches back, etc.
// The simplest implementation of this game is simply 9 buttons or divs with click events attached to each of them. Clicking on a square just changes the text of the element to X or O. After 9 moves are played the game doesn't do anything else. If the users want to continue playing they can refresh the page.
// The first version of the game can just be a grid - no need to create the tictactoe board faithfully.
// When the user clicks each button it sets a global variable that holds the current player. (starts as a null value when the game loads, is x after the first turn, then switches between players)



var turn = null;

var square =["*","*","*","*","*","*","*","*","*"];

var winArray = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

var play = function () {

    if(this.textContent === ""){
            if (turn === null || turn === 0){
                this.textContent ="X";
                turn += 1;

                checkBox()
            } else {
                this.textContent = "O";
                turn -= 1;
                checkBox()
            }
            return turn;
    } else {
 }

};
console.log("come out of play function after else; return.")

var checkBox = function() {


    var allButtons = document.querySelectorAll("button");

    allButtons.forEach(function(element, index){

            if(allButtons[index].innerHTML  === 'X' || allButtons[index].innerHTML === 'O')

        square[index] = allButtons[index].innerHTML;

    }); checkWin()

}

var checkWin = function() {

    if ( square[0] === 'X' &&  square[1] === 'X' && square[2] === 'X' ) {
        alert("X win!");
        stop();
    } else if ( square[0] === 'O' &&  square[1] === 'O' && square[2] === 'O') {
        alert("O win!");
    } else if ( square[3] === 'X' &&  square[4] === 'X' && square[5] === 'X') {
       alert("X win!");
    } else if ( square[3] === 'O' &&  square[4] === 'O' && square[5] === 'O') {
        alert("O win!");
    } else if ( square[6] === 'X' &&  square[7] === 'X' && square[8] === 'X') {
       alert("X win!");
    } else if ( square[6] === 'O' &&  square[7] === 'O' && square[8] === '0') {
       alert("O win!");
    } else if ( square[0] === 'X' &&  square[3] === 'X' && square[6] === 'X') {
       alert("X win!");
    } else if ( square[0] === 'O' &&  square[3] === 'O' && square[6] === 'O') {
       alert("O win!");
    } else if ( square[1] === 'X' &&  square[4] === 'X' && square[7] === 'X') {
       alert("X win!");
    } else if ( square[1] === 'O' &&  square[4] === 'O' && square[7] === 'O') {
       alert("O win!");
    } else if ( square[2] === 'X' &&  square[5] === 'X' && square[8] === 'X') {
       alert("X win!");
    } else if ( square[2] === '0' &&  square[5] === '0' && square[8] === '0') {
       alert("O win!");
    } else if ( square[0] === 'X' &&  square[4] === 'X' && square[8] === 'X') {
       alert("X win!");
    } else if ( square[0] === 'O' &&  square[4] === 'O' && square[8] === 'O') {
       alert("O win!");
    } else if ( square[2] === 'X' &&  square[4] === 'X' && square[6] === 'X') {
       alert("X win!");
    } else if ( square[2] === '0' &&  square[4] === '0' && square[6] === 'X') {
       alert("O win!");
    }
}

var stop = function(){
//removeEventListener("mousemove", myFunction)
}

window.onload = function(){


     var getButtons = document.querySelectorAll("button");
     // set an event listener on each element
     for(var i = 0; i < getButtons.length; i++){
         getButtons[i].addEventListener("click",play);

     }

}


