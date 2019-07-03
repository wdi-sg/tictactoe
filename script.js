// ensure that the entire document is loaded before executing any function
window.onload = function() {
    var numOfTurns = 0;
    var xTurn = "✕";
    var oTurn = "◯";
    var gameStarted = false;
    var displayMsg = document.getElementById("current-turn");
    var boardTracker = [
      [ 0, 0, 0 ],
      [ 0, 0, 0 ],
        [ 0, 0, 0 ]
    ]; //1 is ✕ player, -1 is ◯ player
    var numOfSquares = boardTracker.length;
    var winner = null;
    var loser = null;
    var startButton = document.getElementById("start-button");
    var wrapper = document.getElementById("wrapper");

    var createBoard = function(event) {
        if (document.getElementById("board") != null){
            wrapper.removeChild(document.getElementById("board"));
        }
        startButton.style.display = "none";
        displayMsg.innerText = `${xTurn} player's turn`;
        wrapper.appendChild(displayMsg);
        var board = document.createElement("div");
        board.setAttribute("id","board");

        var gameRow = document.createElement("div");
        gameRow.setAttribute("class","game-row");

        var gameSquare = document.createElement("span");
        gameSquare.setAttribute("class","game-square");

        let row = 0;
        let col = 0;
        for (var i=0;i<3;i++){
            let clonedSquare = gameSquare.cloneNode(true);
            clonedSquare.setAttribute("data-col",col);
            gameRow.appendChild(clonedSquare);
            col++;
        }
        for (var i=0;i<3;i++){
            let clonedRow = gameRow.cloneNode(true);
            clonedRow.setAttribute("data-row",row);
            board.appendChild(clonedRow);
            row++
        }
        wrapper.appendChild(board);
        let squares = document.querySelectorAll(".game-square");
        for (var i=0;i<squares.length;i++){
            squares[i].addEventListener("click",fillSquare);
        }
        gameStarted = true;
    }
    startButton.addEventListener("click",createBoard);

    var fillSquare = function(event) {
        if (!winner){
            if (event.target.innerText === ""){
                if (numOfTurns%2 === 0){
                    event.target.innerText = xTurn;
                    displayMsg.innerText = `${oTurn} player's turn`;
                    trackBoard(this.parentNode,this, 1);
                }
                else {
                    event.target.innerText = oTurn;
                    displayMsg.innerText = `${xTurn} player's turn`;
                    trackBoard(this.parentNode,this, -1);
                }
                numOfTurns++
            }
            if (numOfTurns>2) {
                if (checkGame()) {
                    startButton.innerText = "Restart Game";
                    startButton.style.display = "inline-block";
                    displayMsg.innerText = `${winner} player wins!\n${loser} player have to treat ${winner} player a drink.`;
                    winner = null;
                    loser = null;
                    boardTracker = [
                      [ 0, 0, 0 ],
                      [ 0, 0, 0 ],
                        [ 0, 0, 0 ]
                    ];
                    numOfTurns = 0;
                }
                else if (numOfTurns>8){
                    displayMsg.innerText = "Game Draw!";
                }
            }
        }
    }
    var trackBoard = function(rowEl,squareEl, value){
        let row = rowEl.dataset.row;
        let col = squareEl.dataset.col;
        boardTracker[row][col] = value;
    }
    var checkGame = function() {
        let totalValue = 0 //if total is -3 or 3, means a player won
        //check horizontally
        //loop through rows
        for (var i=0;i<numOfSquares;i++){
            //loop through squares
            for (var j=0;j<boardTracker[i].length;j++){
                totalValue = totalValue + boardTracker[i][j];
                if (totalValue === 3) {
                    winner = xTurn;
                    loser = oTurn;
                    return true;
                }
                else if (totalValue === -3){
                    winner = oTurn;
                    loser = xTurn;
                    return true;
                }
            }
            totalValue = 0;
        }
        //check vertically
        //loop through rows
        let currentCol = 0;
        for (var i=0;i<numOfSquares;i++){
            //loop through squares
            for (var j=0;j<boardTracker[i].length;j++){
                totalValue = totalValue + boardTracker[j][currentCol];
                if (totalValue === 3) {
                    winner = xTurn;
                    loser = oTurn;
                    return true;
                }
                else if (totalValue === -3){
                    winner = oTurn;
                    loser = xTurn;
                    return true;
                }
            }
            currentCol++;
            totalValue = 0;
        }
        //check diagonally
        for (var i=0;i<numOfSquares;i++){
            totalValue = totalValue + boardTracker[i][i];
            //console.log(totalValue);
            if (totalValue === 3) {
                winner = xTurn;
                loser = oTurn;
                return true;
            }
            else if (totalValue === -3){
                winner = oTurn;
                loser = xTurn;
                return true;
            }
            totalValue = 0;
        }
        // check reverse diagonally
        for (var i=0;i<numOfSquares;i++){
            totalValue = totalValue + boardTracker[i][numOfSquares-(i+1)];
            if (totalValue === 3) {
                winner = xTurn;
                loser = oTurn;
                return true;
            }
            else if (totalValue === -3){
                winner = oTurn;
                loser = xTurn;
                return true;
            }
        }
        return false;
    }
}