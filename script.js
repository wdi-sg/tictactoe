console.log("Hi");

var squares = [];

var one = document.getElementsByClassName('square')[0].getElementsByTagName('span')[0];
var two = document.getElementsByClassName('square')[1].getElementsByTagName('span')[0];
var three = document.getElementsByClassName('square')[2].getElementsByTagName('span')[0];
var four = document.getElementsByClassName('square')[3].getElementsByTagName('span')[0];
var five = document.getElementsByClassName('square')[4].getElementsByTagName('span')[0];
var six = document.getElementsByClassName('square')[5].getElementsByTagName('span')[0];
var seven = document.getElementsByClassName('square')[6].getElementsByTagName('span')[0];
var eight = document.getElementsByClassName('square')[7].getElementsByTagName('span')[0];
var nine = document.getElementsByClassName('square')[8].getElementsByTagName('span')[0];

squares.push(one);
squares.push(two);
squares.push(three);
squares.push(four);
squares.push(five);
squares.push(six);
squares.push(seven);
squares.push(eight);
squares.push(nine);

//add "arrays" to all the elements (I tried, but turned out as strings)

function makeArrays() {

    var wrap = document.getElementsByClassName('wrap')[0];
    var boards = wrap.getElementsByClassName('board');


    for (var j = 0; j < boards.length; j++) {

        var squaries = boards[j].getElementsByClassName('square');

        for (var i = 0; i < squaries.length; i++) {

            var div = document.createElement('div');
            var array = [j+1, i+1];
            div.innerText = "[" + array + "]";

            squaries[i].appendChild(div);
        }
    }
}

makeArrays();

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
        document.getElementsByClassName('square')[i].getElementsByTagName('span')[0].innerText = "😎";
    }

    won = 0;

    startGame();

    hideButton();

}

button.addEventListener('click',reload);

/* Wins*/
// 1. All possible winning combinations are hardcoded within the first if statement
// 2. If there's a win, win is = 1
// 3. Play button is displayed
// 4. Specific player is congratulated
// 5. Score for specific played is added
//// 🌟 Future: Use the "arrays" associated with the squares to check for wins

function checkWins() {

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
        ) {

            won++;

            if (won === 1) {
                showButton();

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
                    message = console.log("Bloop.");
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

        if (document.getElementsByClassName('square')[i].getElementsByTagName('span')[0].innerText !== "😎") {
        playingSquares++
        }
    }

        if (playingSquares === 9) {

            showButton();

            if (won = 0) {
                console.log("It's a draw.");
            } else {
                console.log("Blop.")
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

        var arrayx = this.nextElementSibling.innerText;

        checkWins();

        this.removeEventListener('click',play);
        checkDraw();

    } else {

        this.textContent = "⭕️";
        playerTurn = "cross";

        var arrayo = this.nextElementSibling.innerText;

        checkWins();
        this.removeEventListener('click',play);
        checkDraw();

    }
}   else {
        alert("Oops! The game is over.");
    }
}


startGame();