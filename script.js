console.log("Hi");

var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");

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
var button = document.querySelector('button');
var hideButton = button.setAttribute('style','display:none');

var showButton = function() {
    button.setAttribute('style','display:show');
}

var reload = function() {
    window.location.reload();
}

var clickButton = function() {
    button.addEventListener('click',reload);
}


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
    alert("Congrats you have won");
    won++;
    showButton();
    } else {
    console.log("Blop!");
}
}

var play = function() {

if (won === 0) {
    if (playerTurn === "cross") {
        this.textContent = "❌";
        playerTurn = "circle";
        checkWins();
    } else {
        this.textContent = "⭕️";
        playerTurn = "cross";
        checkWins();
    }
} else {
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