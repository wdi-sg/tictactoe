var count = 1;
var arrayOfResult = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var isWinning = false;
var playOnePoint = 0;
var playTwoPoint = 0;

var updateScore = function(playerNum) {
    if (playerNum === 1) {
        playOnePoint = playOnePoint + 1;
    }

    else {
        playTwoPoint = playTwoPoint + 1;
    }

}

var checkForRow = function(num) {
    for (i = 0; i < 3; i++) {
        if(arrayOfResult[i][0] === num && arrayOfResult[i][1] === num && arrayOfResult[i][2] === num) {
            isWinning = true;
        }
    }

    return isWinning;
}

var checkForColumn = function(num) {
    for (j = 0; j < 3; j++) {
        if(arrayOfResult[0][j] === num && arrayOfResult[1][j] === num && arrayOfResult[2][j] === num) {
            isWinning = true;
        }
    }

    return isWinning;
}

var checkForDiagonal = function(num) {
    if(arrayOfResult[0][0] === num && arrayOfResult[1][1] === num && arrayOfResult[2][2] === num) {
        isWinning = true;
    }

    else if (arrayOfResult[0][2] === num && arrayOfResult[1][1] === num && arrayOfResult[2][0] === num) {
        isWinning = true;
    }

    else {
        isWinning = false;
    }

    return isWinning;
}

var checkWinning = function() {
    var playerNum = 0;

    if (count % 2 !== 0) {
        playerNum = 1;
    }

    else {
        playerNum = 2;
    }

    if (checkForColumn(playerNum)) {
        updateScore(playerNum);
        alert("Player " + playerNum + " is the winner.\n"
            + "Player 1 score: " + playOnePoint + ".\n"
            + "Player 2 score: " + playTwoPoint + ".");
    }

    else if (checkForRow(playerNum)) {
        updateScore(playerNum);
        alert("Player " + playerNum + " is the winner.\n"
            + "Player 1 score: " + playOnePoint + ".\n"
            + "Player 2 score: " + playTwoPoint + ".");
    }

    else if (checkForDiagonal(playerNum)) {
        updateScore(playerNum);
        alert("Player " + playerNum + " is the winner.\n"
            + "Player 1 score: " + playOnePoint + ".\n"
            + "Player 2 score: " + playTwoPoint + ".");
    }

    else if (count === 9) {
        alert("It is a draw .\n"
            + "Player 1 score: " + playOnePoint + ".\n"
            + "Player 2 score: " + playTwoPoint + ".");
    }
}

var changeImg = function() {
    if (count % 2 !== 0) {
        var idNum = parseInt(this.id);
        var row = Math.floor(idNum / 3);
        var column = idNum % 3;
        if (arrayOfResult[row][column] === 0 && !isWinning) {
            this.style.backgroundImage = "url(cross.png)";
            arrayOfResult[row][column] = 1;
            checkWinning();
            count = count + 1;
        }
    }

    else {
        var idNum = parseInt(this.id);
        var row = Math.floor(idNum / 3);
        var column = idNum % 3;
        if (arrayOfResult[row][column] === 0 && !isWinning) {
            this.style.backgroundImage = "url(tick.png)";
            arrayOfResult[row][column] = 2;
            checkWinning();
            count = count + 1;
        }
    }
}

var refresh = function () {
    var buttonArray = document.querySelectorAll(".normal")
    for (i = 0; i < buttonArray.length; i++) {
        var button = buttonArray[i];
        button.style.backgroundImage = "url(blank.png)";
        button.addEventListener("click", changeImg);
    }
    count = 1;
    arrayOfResult = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    isWinning = false;
}

for (i = 0; i < 9; i++) {
    var button = document.querySelectorAll(".normal")[i];

    button.addEventListener("click", changeImg);
}

var refreshButton = document.querySelector("#refresh");
refreshButton.addEventListener("click", refresh);



