var player1Name ="stranger";
var player1Score = 0;
var player2Name ="stranger";
var player2Score = 0;
var playerSetUp = ["stranger1", "marker1", "stranger2", "marker2"]
var currentMarker = null
var winner = null

// game set up

window.onload = function () {

playerSetUp[0] = prompt("What is your name?");
playerSetUp[1] = prompt("Please select 'X' or 'O' as your marker.\n Person with marker 'X' will start the game").toLowerCase();
playerSetUp[2] = prompt("What is your opponent's name?");

for (i = 0; i < 5; i++) {
    if (playerSetUp[1].includes("x")) {
        player1Name = playerSetUp[0];
        player2Name = playerSetUp[2];
        playerSetUp[3] = "O";
        i = 10;
    } else if (playerSetUp[1].includes("o")) {
        player2Name = playerSetUp[0];
        player1Name = playerSetUp[2];
        playerSetUp[3] = "X";
        i = 10;
    } else {
        playerSetUp[1] = prompt("'X' will start the game.\nPlease select 'X' or 'O' as your marker.\n")
    }
}

alert("Your opponent will be using marker '" + playerSetUp[3] + "'.");


    document.querySelector("#player1Name").innerHTML = player1Name;
    document.querySelector("#player2Name").innerHTML = player2Name;




// game start
alert("Click the start button to begin!");

var buttons = document.querySelectorAll(".gameButtons");

var startButtonAppear = function(){
    document.querySelector("#start").style.visibility = "hidden";
}

document.querySelector("#start").addEventListener("click", startButtonAppear);



for (i = 0; i < buttons.length ; i++) {

    buttons[i].addEventListener("click", function() {
        if (this.innerHTML === "X" || this.innerHTML === "O") {
            var count = i;
            alert("You cannot change this!")
        } else if (currentMarker === null || currentMarker=== "O") {
                currentMarker = "X";
                this.innerHTML = currentMarker;
                this.style.backgroundColor = "orange";
                document.querySelector("#turns").innerHTML = "Waiting for " + player2Name + "'s move";
                checkWin(player1Name);

            } else if (currentMarker === "X") {
                currentMarker = "O"
                this.innerHTML = currentMarker;
                this.style.backgroundColor = "green";
                document.querySelector("#turns").innerHTML = "Waiting for " + player1Name + "'s move";
                checkWin(player2Name);
            }
    })
}


checkWin = function(player) {
    var buttons = document.querySelectorAll(".gameButtons");
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
        winner = player;
        if (player === player1Name) {
            player1Score +=10;
            alert(player1Name + " has won!");
            document.querySelector("#player1Score").innerHTML = "Score : " + player1Score;
        } else {
            player2Score +=10;
            alert(player2Name + " has won!");
            document.querySelector("#player2Score").innerHTML = "Score : " + player2Score;
        }
        }
}

document.querySelector("#reset").addEventListener("click", function(){
    for (i = 0; i < buttons.length ; i++) {
        buttons[i].innerHTML = i;
        buttons[i].style.backgroundColor = "white";
        document.querySelector("#start").style.visibility = "visible";
        document.querySelector("#start").innerHTML = "Clear scores";
    }
});

}