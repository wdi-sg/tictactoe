console.log("Hi");

var squares = [];

var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");

squares.push(one);
squares.push(two);
squares.push(three);
squares.push(four);
squares.push(five);
squares.push(six);
squares.push(seven);
squares.push(eight);
squares.push(nine);

var addEventListener = function(squares,i) {
    squares.addEventListener('click',play);
}

function startGame(){

    squares.forEach(addEventListener);

    hideButton();

}

playerTurn = "cross";

// Checks if if anyone (X or O has won)
var won = 0;
// Keeps score for player X
var scoreX = 0;
// Keeps score for player O
var scoreO = 0;

/* "Play again" button to "reset" the game */

// DOM
var button = document.querySelector('button');

// Button is hidden when game is in "play" mode – (i) nobody has won; (ii) it is not a draw
function hideButton() {
    var hideButton = button.setAttribute('style','display:none');
}

// Button is displayed when 1 player has won, or there is a draw
var showButton = function() {
    button.setAttribute('style','display:show');
}

/* Reload function makes the game playable again */
// 1. Change the squares' innerText to NOT crosses or circles
// 2. Sets "won" back to 0 for the play function to work
// 3. Starts the game again
// 4. Hides "play again" button

var reload = function() {

    for (var i = 0; i < squares.length; i++) {
        squares[i].innerText = "😎";
    }

    won = 0;

    startGame();

    hideButton();

}

button.addEventListener('click',reload);

/* Wins*/


function checkWins () {
    if (
        (one.innerText === "❌" && two.innerText === "❌" && three.innerText === "❌") ||
        (one.innerText === "⭕️" && two.innerText === "⭕️" && three.innerText === "⭕️") ||
        (four.innerText === "❌" && five.innerText === "❌" && six.innerText === "❌") ||
        (four.innerText === "⭕️" && five.innerText === "⭕️" && six.innerText === "⭕️") ||
        (seven.innerText === "❌" && eight.innerText === "❌" && nine.innerText === "❌") ||
        (seven.innerText === "⭕️" && eight.innerText === "⭕️" && nine.innerText === "⭕️") ||
        (one.innerText === "❌" && four.innerText === "❌" && seven.innerText === "❌") ||
        (one.innerText === "⭕️" && four.innerText === "⭕️" && seven.innerText === "⭕️") ||
        (two.innerText === "❌" && five.innerText === "❌" && eight.innerText === "❌") ||
        (two.innerText === "⭕️" && five.innerText === "⭕️" && eight.innerText === "⭕️") ||
        (three.innerText === "❌" && six.innerText === "❌" && nine.innerText === "❌") ||
        (three.innerText === "⭕️" && six.innerText === "⭕️" && nine.innerText === "⭕️") ||
        (one.innerText === "❌" && five.innerText === "❌" && nine.innerText === "❌") ||
        (one.innerText === "⭕️" && five.innerText === "⭕️" && nine.innerText === "⭕️") ||
        (three.innerText === "❌" && five.innerText === "❌" && seven.innerText === "❌") ||
        (three.innerText === "⭕️" && five.innerText === "⭕️" && seven.innerText === "⭕️")
        ){

        won++;
        showButton();

        if (won = 1) {

            switch (playerTurn) {
                case "circle":
                message = alert("Congrats! Player ❌ won.");
                message = scoreX++;
                break;
                case "cross":
                message = alert("Congrats! Player ⭕️ won.");
                message = scoreO++;
                break;
                default:
                message = alert("It's a draw.");
            }
        }

    } else {
    console.log("Blop!");
}
}


/* This function checks for a draw, i.e. all tiles are clicked, but nobody has won */
// Game starts with playing squares set to 0; i.e. no tiles have been played yet
// When moves are made, innerText is changed to X or O
//// Playing squares are calculated after each move
//// If tiles played === 9, show "play again" button so that players can play

function checkDraw () {

var playingSquares = 0;

    for (var i = 0; i < squares.length; i++) {

        if (squares[i].innerText !== "😎") {
        playingSquares++
        }

        if (playingSquares === 9) {
        showButton();
        }
    }
    return playingSquares;
}


/* Play function makes it possible for the game to be played */
// If current game is not won yet, players can play their moves one after another
// Game starts with player = "cross"
//// When player clicks on board, tile turns to their symbol using textContent
//// playerTurn is changed to their opponent's symbol, so that next turn opponent gets to go
// Function: checkWins – checks if player has won already
// Event listener is removed from the tile just clicked, so that it does not change the symbols
// Function: checkDraw – check if there is a draw

var play = function() {


if (won === 0) {
    if (playerTurn === "cross") {

        this.textContent = "❌";
        playerTurn = "circle";
        checkWins();
        this.removeEventListener('click',play);
        checkDraw();

    } else {

        this.textContent = "⭕️";
        playerTurn = "cross";
        checkWins();
        this.removeEventListener('click',play);
        checkDraw();

    }
}   else {
        alert("Oops! An error occured.");
    }
}

// Last edit: 20 Mar 11AM

//----------------------------------------------------------------

startGame();


//---------------------------EXTRA STUFF---------------------------


/*

function startGame(){
    // one.addEventListener('click',play);
    // two.addEventListener('click',play);
    // three.addEventListener('click',play);
    // four.addEventListener('click',play);
    // five.addEventListener('click',play);
    // six.addEventListener('click',play);
    // seven.addEventListener('click',play);
    // eight.addEventListener('click',play);
    // nine.addEventListener('click',play);

    hideButton();
}

// winning combinations
// 1 2 3
// 4 5 6
// 7 8 9

// 1 4 7
// 2 5 8
// 3 6 9

// 1 5 9
// 3 5 7

// var key = "name";
// var person = {[key]:"John"};
// console.log(person); // should print  Object { name="John"}


*/