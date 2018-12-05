var count = 1;
var arrayOfResult = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var isWinning = false;

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
        alert("Player " + playerNum + " is the winner");
    }

    else if (checkForRow(playerNum)) {
        alert("Player " + playerNum + " is the winner");
    }

    else if (checkForDiagonal(playerNum)) {
        alert("Player " + playerNum + "is the winner");
    }

    else if (count === 9) {
        alert("It is a draw");
    }
}

var changeImg = function() {
    if (count % 2 !== 0) {
        var idNum = parseInt(this.id);
        var row = Math.floor(idNum / 3);
        var column = idNum % 3;
        if (arrayOfResult[row][column] === 0) {
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
        if (arrayOfResult[row][column] === 0) {
            this.style.backgroundImage = "url(tick.png)";
            arrayOfResult[row][column] = 2;
            checkWinning();
            count = count + 1;
        }
    }
}

for (i = 0; i < 9; i++) {
    var button = document.querySelectorAll("button")[i];

    button.addEventListener("click", changeImg);
}

