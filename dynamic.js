// Ask for what kind of board player wants to play

var askForBoard = prompt("How many columns do you want the tic-tac-toe table to have? ");

while (isNaN(askForBoard) || askForBoard < 3) {

    askForBoard = prompt("How many columns do you want the tic-tac-toe table to have? ");

}

var editedPrompt = parseInt(askForBoard);
var gameboard = document.getElementById("gameboard");
var dynamicBoard = [];

// creating the board
for (var i = 0; i < editedPrompt; i++) {

    var tableRow = document.createElement("tr");
    tableRow.id = "r" + i;
    gameboard.appendChild(tableRow);
    var rowArray = [];
    for (var j = 0; j < editedPrompt; j++) {

        var tableColumn = document.createElement("td");
        tableColumn.id = "c" + j;
        tableRow.appendChild(tableColumn);
        var insertBlank = " ";
        rowArray.push(insertBlank);
    }
    dynamicBoard.push(rowArray);
}

// starting game function
var game = function() {

    var columnId = this.id;
    var columnGrid = columnId.split("")[1];
    var rowId = this.parentNode.id;
    var rowGrid = rowId.split("")[1];

    if (dynamicBoard[rowGrid][columnGrid] === " ") {

        dynamicBoard[rowGrid][columnGrid] = "X";
        this.textContent = "X";
        if (check()) {

            return;
        }


        // check if there is more than 1 blank space
        count = 0;

        for(var i = 0; i < dynamicBoard.length; i++){

            for(var j = 0; j < dynamicBoard[i].length; j++) {

                 if (dynamicBoard[i][j] === " ") {

                    count += 1;
                 }
            }
        }

        if (count > 1) {

            var randomR = Math.floor(Math.random() * editedPrompt);
            var randomC = Math.floor(Math.random() * editedPrompt);

            while (dynamicBoard[randomR][randomC] !== " ") {

                randomR = Math.floor(Math.random() * editedPrompt);
                randomC = Math.floor(Math.random() * editedPrompt);
            }

            setTimeout(function(){

                var findBox = "#r" + randomR + " #c" + randomC;
                dynamicBoard[randomR][randomC] = "O";
                document.querySelector(findBox).textContent = "O";

                if (check()) {
                    return;
                }

            }, 300);
        }

    }

};


//Adding event listener to start gamebplay
var grid = document.getElementsByTagName("td");

for (var i = 0; i < grid.length; i++) {

    grid[i].addEventListener("click", game);

}

// Checking for win/lose condition

var check = function() {

    //check for horizontal win/lose

    var checkHorizontal = [];

    dynamicBoard.forEach(function(element) {

        checkHorizontal.push(element.join(""));
    });

    for (var i = 0; i < checkHorizontal.length; i++) {

        if (checkHorizontal[i].includes("XXX")) {

            alert("win");
            stopGame();
            return true;

        } else if (checkHorizontal[i].includes("OOO")) {

            alert("lose");
            stopGame();
            return true;
        }
    }

    //check for vertical win/lose
    var checkVertical = [];

    for (var i = 0; i < dynamicBoard.length; i++) {

        var stringV = "";

        for(var j = 0; j < dynamicBoard.length; j++) {

            stringV += dynamicBoard[j][i];
        }

        checkVertical.push(stringV);
    }

    for (var i = 0; i < checkHorizontal.length; i++) {

        if (checkVertical[i].includes("XXX")) {

            alert("win");
            stopGame();
            return true;

        } else if (checkVertical[i].includes("OOO")) {

            alert("lose");
            stopGame();
            return true;
        }
    }

    // Check diagonal - down
    var checkDiagonalD = [];
    var stringDM = "";
    for (var i = 0; i < dynamicBoard.length; i++) {

        stringDM += dynamicBoard[i][i];

    }

    checkDiagonalD.push(stringDM);

    if (editedPrompt !== 3 ) {

        var totalDiagonalWins = ((editedPrompt + (-2 + (editedPrompt - 3))) -1)/2;

        for (var i = 0; i < totalDiagonalWins; i++) {

            var stringDMU = "";

            for (var j = 0; j < (dynamicBoard.length - (i+1)); j++) {

                    stringDMU += dynamicBoard[j][j+( i + 1)];
            }

            checkDiagonalD.push(stringDMU);

        }

        for (var i = 0; i < totalDiagonalWins; i++) {

            var stringDMD = "";

            for (var j = 0; j < (dynamicBoard.length - (i+1)); j++) {

                    stringDMD += dynamicBoard[j+( i + 1)][j];
            }

            checkDiagonalD.push(stringDMD);

        }

    }

    for (var i = 0; i < checkDiagonalD.length; i++) {

        if (checkDiagonalD[i].includes("XXX")) {

            alert("win");
            stopGame();
            return true;

        } else if (checkDiagonalD[i].includes("OOO")) {

            alert("lose");
            stopGame();
            return true;
        }
    }

    //Check for diagonal up
    var checkDiagonalU = [];
    var stringDM2 = "";

    for (var i = 0; i < dynamicBoard.length; i++) {

        stringDM2 += dynamicBoard[dynamicBoard.length - 1 - i][i];
    }

    checkDiagonalU.push(stringDM2);

    if (editedPrompt !== 3 ) {

        var totalDiagonalWins = ((editedPrompt + (-2 + (editedPrompt - 3))) -1)/2;

        for (var i = 0; i < totalDiagonalWins; i++) {

            var stringDMU2 = "";

            for (var j = 0; j < (dynamicBoard.length - (i+1)); j++) {

                    stringDMU2 += dynamicBoard[(dynamicBoard.length - (i+1)) - 1 - j][j];
            }

            checkDiagonalU.push(stringDMU2);

        }

        for (var i = 0; i < totalDiagonalWins; i++) {

            var stringDMD2 = "";

            for (var j = 0; j < (dynamicBoard.length - (i+1)); j++) {

                    stringDMD2 += dynamicBoard[(dynamicBoard.length - (j+1))][j+1+i];
            }

            checkDiagonalU.push(stringDMD2);

        }

    }

    for (var i = 0; i < checkDiagonalU.length; i++) {

        if (checkDiagonalU[i].includes("XXX")) {

            alert("win");
            stopGame();
            return true;

        } else if (checkDiagonalU[i].includes("OOO")) {

            alert("lose");
            stopGame();
            return true;
        }
    }

};


var stopGame = function() {

    for (var i = 0; i < grid.length; i++) {

        grid[i].removeEventListener("click", game);

    }
}













