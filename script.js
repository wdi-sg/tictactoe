window.onload = function() {
    var currentPlayer = 2;
    var gameBoard = document.createElement("div");
    gameBoard.className = "gameBoard";

    var currentPlayerDisplay = document.createElement("div");
    currentPlayerDisplay.className = "currentPlayerDisplay";
    currentPlayerDisplay.innerHTML = "Current Player: Circles";

    var playerCircleScore = 0;
    var playerCrossScore = 0;

    var playerCircleScoreDisplay = document.createElement("div");
    playerCircleScoreDisplay.className = "playersScoreDisplay";

    var playerCrossScoreDisplay = document.createElement("div");
    playerCrossScoreDisplay.className = "playersScoreDisplay";

    var updatePlayersScore = function() {
        playerCircleScoreDisplay.innerHTML = `Player Circle Score is: ${playerCircleScore}`;
        playerCrossScoreDisplay.innerHTML = `Player Cross Score is: ${playerCrossScore}`;
    }

    updatePlayersScore();

    var playersMove = function() {
        if (currentPlayer % 2 == 0 && !(this.innerHTML == "X" || this.innerHTML == "O")) {
            this.innerHTML = "O";
        } else if (!(this.innerHTML == "X" || this.innerHTML == "O")) {
            this.innerHTML = "X";
        }
        checkWins();
        currentPlayer++;
        if (currentPlayer % 2 == 0) {
            currentPlayerDisplay.innerHTML = "Current Player: Circles";
        } else {
            currentPlayerDisplay.innerHTML = "Current Player: Crosses";
        }
    };

    for (var i = 0; i < 9; i++) {
        var box = document.createElement("div");
        box.className = "box";
        box.addEventListener('click', playersMove);
        gameBoard.appendChild(box);
    }

    var checkWins = function() {
        var allBoxes = document.querySelectorAll("div.box");
        if (
            ((allBoxes[0].textContent == allBoxes[1].textContent) && (allBoxes[1].textContent == allBoxes[2].textContent) && !allBoxes[1].textContent == "")
            ||
            ((allBoxes[0].textContent == allBoxes[3].textContent) && (allBoxes[3].textContent == allBoxes[6].textContent) && !allBoxes[3].textContent == "")
            ||
            ((allBoxes[0].textContent == allBoxes[4].textContent) && (allBoxes[4].textContent == allBoxes[8].textContent) && !allBoxes[4].textContent == "")
            ||
            ((allBoxes[2].textContent == allBoxes[4].textContent) && (allBoxes[4].textContent == allBoxes[6].textContent) && !allBoxes[4].textContent == "")
            ||
            ((allBoxes[2].textContent == allBoxes[5].textContent) && (allBoxes[5].textContent == allBoxes[8].textContent) && !allBoxes[5].textContent == "")
            ||
            ((allBoxes[3].textContent == allBoxes[4].textContent) && (allBoxes[4].textContent == allBoxes[5].textContent) && !allBoxes[4].textContent == "")
            ||
            ((allBoxes[6].textContent == allBoxes[7].textContent) && (allBoxes[7].textContent == allBoxes[8].textContent) && !allBoxes[7].textContent == "")
            ||
            ((allBoxes[1].textContent == allBoxes[4].textContent) && (allBoxes[4].textContent == allBoxes[7].textContent) && !allBoxes[4].textContent == "")
            ) {

            for (var i = 0; i < 9; i++) {
                allBoxes[i].innerHTML = "";
            }

            if (currentPlayer % 2 == 0) {
                playerCircleScore++;
            } else {
                playerCrossScore++;
            }
            updatePlayersScore();
        }
    }

    document.querySelector('body').appendChild(currentPlayerDisplay);
    document.querySelector('body').appendChild(playerCircleScoreDisplay);
    document.querySelector('body').appendChild(playerCrossScoreDisplay);
    document.querySelector('body').appendChild(gameBoard);
}