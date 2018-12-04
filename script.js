console.log("script link works!");

var playerTurn = null;
var buttons = document.querySelectorAll(".gameButtons");
var reset = document.querySelector("#reset");
var player1Score = 0;
var player2Score = 0;
var startPlayer;
var SecondPlayer;

// get player's names
player1_name = prompt("What is Player 1's name?");
player2_name = prompt("What is Player 2's name?");
document.querySelector("#Player1").innerHTML = player1_name;
document.querySelector("#Player2").innerHTML = player2_name;


//determine who starts the game
var random = Math.random();
if (random <=0.5) {
    var startPlayer = 1;
    document.querySelector("#Player1").innerHTML = player1_name + " " + "<span class=marker>X</span>";
    var secondPlayer = 2;
    document.querySelector("#Player2").innerHTML = player2_name + " " + "<span class=marker>O</span>";
    alert(player1_name + " starts first!")
} else {
    startPlayer = 2;
    document.querySelector("#Player2").innerHTML = player2_name + " " + "<span class=marker>X</span>";
    secondPlayer = 1;
    document.querySelector("#Player1").innerHTML = player1_name + " " + "<span class=marker>O</span>";
    alert(player2_name + " starts first!")
}


//Game logic
//Game board starts empty 9 boxes
//First player click = X -> Second player click = O -> Continues until 9 times or a win
//Constraint: Cannot click on already populated fields
for (i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener("click", function() {
        if (this.innerHTML === "X" || this.innerHTML === "O") {
            alert("You cannot change this!")
        } else if (playerTurn === null || playerTurn === "O") {
                playerTurn = "X";
                this.innerHTML = playerTurn;
                this.style.color = "black";
                checkWin(startPlayer);
            } else {
                playerTurn = "O"
                this.innerHTML = playerTurn;
                this.style.color = "black";
                checkWin(secondPlayer);
            }
    })
}

reset.addEventListener("click", function() {
    for (i = 0; i < buttons.length ; i++) {
        buttons[i].innerHTML = i;
        buttons[i].style.color = "white";

    }
});




checkWin = function(player) {
    if(
    (buttons[0].innerHTML === buttons[1].innerHTML && buttons[1].innerHTML === buttons[2].innerHTML) ||
    (buttons[3].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[5].innerHTML) ||
    (buttons[6].innerHTML === buttons[7].innerHTML && buttons[7].innerHTML === buttons[8].innerHTML) ||
    (buttons[0].innerHTML === buttons[3].innerHTML && buttons[3].innerHTML=== buttons[6].innerHTML) ||
    (buttons[1].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[7].innerHTML) ||
    (buttons[2].innerHTML === buttons[5].innerHTML && buttons[5].innerHTML === buttons[8].innerHTML) ||
    (buttons[0].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[8].innerHTML) ||
    (buttons[6].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[2].innerHTML)
    ) {
    alert("Player " + player + " has won!")
    i = 10;
    }
}