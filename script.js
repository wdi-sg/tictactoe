// ensure that the entire document is loaded before executing any function
window.onload = function() {
    var numOfTurns = 0;
    var xTurn = "✕";
    var oTurn = "◯";
    var gameStarted = false;
    var displayMsg = document.getElementById("current-turn");

    var startButton = document.getElementById("start-button");
    var wrapper = document.getElementById("wrapper");

    var fillSquare = function(event) {

        if (event.target.innerText === ""){
            if (numOfTurns%2 === 0){
                event.target.innerText = xTurn;
                displayMsg.innerText = `${xTurn} player's turn`;
            }
            else {
                event.target.innerText = oTurn;
                displayMsg.innerText = `${oTurn} player's turn`;
            }
            numOfTurns++
        }

        if (numOfTurns>=9){
            displayMsg.innerText = "Game Draw!";
        }
    }
    var createBoard = function(event) {
        if (!gameStarted) {
            displayMsg.innerText = `${xTurn} player's turn`;
            wrapper.appendChild(displayMsg);

            var board = document.createElement("div");
            board.setAttribute("id","board");

            var gameRow = document.createElement("div");
            gameRow.setAttribute("class","game-row");

            var gameSquare = document.createElement("span");
            gameSquare.setAttribute("class","game-square");
            for (var i=0;i<3;i++){
                let clonedSquare = gameSquare.cloneNode(true);
                //clonedSquare.addEventListener("onclick",function(){console.log("YTA")});
                gameRow.appendChild(clonedSquare);
            }
            for (var i=0;i<3;i++){
                let clonedRow = gameRow.cloneNode(true);
                board.appendChild(clonedRow);
            }
            wrapper.appendChild(board);
            let squares = document.querySelectorAll(".game-square");
            for (var i=0;i<squares.length;i++){
                squares[i].addEventListener("click",fillSquare);
            }
            gameStarted = true;
        }
    }
    startButton.addEventListener("click",createBoard);
}