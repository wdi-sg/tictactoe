// ensure that the entire document is loaded before executing any function
window.onload = function() {
    var numOfTurns = 0;
    var p1Symbol = "✕";
    var p2Symbol = "◯";
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
    var playerInfo = document.getElementById("player-info");
    var p1Input = document.getElementById("p1-input");
    var p2Input = document.getElementById("p2-input");
    var p1 = null;
    var p2 = null;
    var wrapper = document.getElementById("wrapper");

    var createBoard = function(event) {
        if (document.getElementById("board") != null){
            wrapper.removeChild(document.getElementById("board"));
        }
        if (p1Input.value.trim() === "" || p2Input.value.trim() === "") {
            displayMsg.style.color = "red";
            displayMsg.innerText = `Please fill in the names before starting.`
        }
        else {
            startButton.style.display = "none";
            playerInfo.style.display = "none";
            p1 = p1Input.value.trim();
            p2 = p2Input.value.trim();
            displayMsg.style.color = "black";
            displayMsg.innerText = `${p1}'s turn`;
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
        }
    }
    startButton.addEventListener("click",createBoard);

    var fillSquare = function(event) {
        if (!winner){
            if (event.target.innerText === ""){
                if (numOfTurns%2 === 0){
                    event.target.innerText = p1Symbol;
                    displayMsg.innerText = `${p2}'s turn`;
                    trackBoard(this.parentNode,this, 1);
                }
                else {
                    event.target.innerText = p2Symbol;
                    displayMsg.innerText = `${p1}'s turn`;
                    trackBoard(this.parentNode,this, -1);
                }
                numOfTurns++
            }
            if (numOfTurns>2) {
                if (checkGame()) {
                    startButton.innerText = "Restart Game";
                    startButton.style.display = "inline-block";
                    displayMsg.innerText = `${winner} wins!\n${loser} have to treat ${winner} a drink.`;
                    winner = null;
                    loser = null;
                    boardTracker = [
                      [ 0, 0, 0 ],
                      [ 0, 0, 0 ],
                        [ 0, 0, 0 ]
                    ];
                    numOfTurns = 0;
                }
                else {
                    if (numOfTurns>8){
                        startButton.innerText = "Restart Game";
                        startButton.style.display = "inline-block";
                        displayMsg.innerText = "Game Draw!";
                        winner = null;
                        loser = null;
                        boardTracker = [
                          [ 0, 0, 0 ],
                          [ 0, 0, 0 ],
                            [ 0, 0, 0 ]
                        ];
                        numOfTurns = 0;
                    }
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
                    winner = p1;
                    loser = p2;
                    return true;
                }
                else if (totalValue === -3){
                    winner = p2;
                    loser = p1;
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
                    winner = p1;
                    loser = p2;
                    return true;
                }
                else if (totalValue === -3){
                    winner = p2;
                    loser = p1;
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
                winner = p1;
                loser = p2;
                return true;
            }
            else if (totalValue === -3){
                winner = p2;
                loser = p1;
                return true;
            }
        }
        totalValue = 0;
        // check reverse diagonally
        for (var i=0;i<numOfSquares;i++){
            totalValue = totalValue + boardTracker[i][numOfSquares-(i+1)];
            if (totalValue === 3) {
                winner = p2;
                loser = p1;
                return true;
            }
            else if (totalValue === -3){
                winner = p2;
                loser = p1;
                return true;
            }
        }
        return false;
    }
}