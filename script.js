// ensure that the entire document is loaded before executing any function
window.onload = function() {
    var squares = document.querySelectorAll(".game-square");
    var numOfTurns = 0;
    var xTurn = "✕";
    var oTurn = "◯";
    var currentTurn = document.getElementById("current-turn");
    var fillSquare = function(event) {
        if (numOfTurns>=9){
            currentTurn.innerText = "Game Draw!";
        }
        else {
            if (event.target.innerText === ""){
                if (numOfTurns%2 === 0){
                    event.target.innerText = xTurn;
                    currentTurn.innerText = `${xTurn} player's turn`;
                }
                else {
                    event.target.innerText = oTurn;
                    currentTurn.innerText = `${oTurn} player's turn`;
                }
                numOfTurns++
            }
        }
    }
    for (var i=0;i<squares.length;i++){
        squares[i].addEventListener("click",fillSquare);
    }
}