var playerTurn = "X";

// var gameStart = function() {
//     var playerTurn = "X";
//     message("player turn is: " + playerTurn);
// }

var message = function(msg) {
    var displayTurn = document.getElementById("display-turn");
    displayTurn.textContent = msg;
}

var nextMove = function(square){
    square.textContent = playerTurn;
    switchTurn();
}

switchTurn = function() {
    if (playerTurn === "X") {
        playerTurn = "O";
    } else {
        playerTurn = "X"
    }
}
// gameStart();