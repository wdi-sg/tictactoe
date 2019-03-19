var turnNumber = -1;
//if turnNumber is odd, X
//if turnNumber is even, O

var currentPlayer = null;

var checkPlayer = function(player1, player2){
    if (turnNumber%2 === 1) {
            currentPlayer = player1;
        } else {
            currentPlayer = player2;
        };
};

var tileInPlay = 0;

var gameBoard = document.querySelector('.gameBoard');

//When game ends nine rounds with a draw
var maxRounds = function(){
        setTimeout(function(){ alert("No more moves possible.\nGame ends in a draw."); }, 100);
};

var gameRun = function(){

turnNumber++;
console.log("Game starts");

// console.log("Round 1. Current Player: " + currentPlayer);

gameBoard.addEventListener('click', function(event) {
    //check if click is within tile column
    if (event.target.className === 'column') {
        // bumps turnNumber at start of turn
        turnNumber++;

        // if (turnNumber%2 === 1) {
        //     currentPlayer = "player1";
        // } else {
        //     currentPlayer = "player2";
        // };
        checkPlayer("Player 1", "Player 2");
        tileInPlay = document.getElementById(event.target.id);
        console.log("Round " + turnNumber + ". " + currentPlayer + " played " +event.target.id + ".");
        //if player1, set X. if player2, set O.
        if (turnNumber%2 === 1) {
            tileInPlay.innerHTML = "<p>X</p>";
        } else {
            tileInPlay.innerHTML = "<p>O</p>";
        };
    };
    //if max number of rounds without win, end game
    if (turnNumber === 9) {
        maxRounds();
    };
});

};

//run game button
var button2 = document.getElementById("runGame");
button2.addEventListener('click', function(){gameRun()});

//reset game button
var button = document.getElementById("reset");
button.addEventListener('click', function(){
    window.location.reload();
});