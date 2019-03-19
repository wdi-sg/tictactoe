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

playerTurn = "cross";

// winning combinations
// 1 2 3
// 4 5 6
// 7 8 9

// 1 4 7
// 2 5 8
// 3 6 9

// 1 5 9
// 3 5 7

var won = 0;
var scoreX = 0;
var scoreO = 0;

var button = document.querySelector('button');
var hideButton = button.setAttribute('style','display:none');

var showButton = function() {
    button.setAttribute('style','display:show');
}

var reload = function() {

    for (var i = 0; i < squares.length; i++) {
        squares[i].innerText = "😎";
    }

    won = 0;

    one.addEventListener('click',play);
    two.addEventListener('click',play);
    three.addEventListener('click',play);
    four.addEventListener('click',play);
    five.addEventListener('click',play);
    six.addEventListener('click',play);
    seven.addEventListener('click',play);
    eight.addEventListener('click',play);
    nine.addEventListener('click',play);

}

button.addEventListener('click',reload);


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

    switch (playerTurn) {
        case "circle":
        message = alert("Congrats! Player ❌ won.");
        break;
        case "cross":
        message = alert("Congrats! Player ⭕️ won.");
        break;
        default:
        message = alert("It's a draw.");
    }

    won++;
    showButton();

    } else {
    console.log("Blop!");
}
}


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

// if all spaces are filled up but nobody won, display Button

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
        alert("The game is over.");
    }
}

one.addEventListener('click',play);
two.addEventListener('click',play);
three.addEventListener('click',play);
four.addEventListener('click',play);
five.addEventListener('click',play);
six.addEventListener('click',play);
seven.addEventListener('click',play);
eight.addEventListener('click',play);
nine.addEventListener('click',play);

// notify when somebody has won