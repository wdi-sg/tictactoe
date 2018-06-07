// the main board
var board = document.getElementById("board");
// array of 9 div boxes
var boxes = document.querySelectorAll(".box");
// set the initial turn to player one
var turn = document.querySelector("#turn");
turn.textContent = "Turn: Player One";

// prompt the user for symbols
var playerOneSymbol = prompt("Player One: Choose Your Symbol");
var playerTwoSymbol = prompt("Player Two: Choose Your Symbol");
while (playerOneSymbol == playerTwoSymbol) {
    playerTwoSymbol = prompt("Player Two: Choose Your Symbol Again");
}

// create two player objects, to store and access useful info
var playerOne = {
    symbol: playerOneSymbol,
    name: "playerOne",
    selectedBoxes: [] // an array of box objects that player clicked on
}

var playerTwo = {
    symbol: playerTwoSymbol,
    name: "playerTwo",
    selectedBoxes: [] // an array of box objects that player clicked on
}

// initially, set the current user as playerOne
var currentPlayer = playerOne;

// to check for winning condition, give each box an identifier as a row-column property
// this function retrieves the row and column integers (eg. row: 1, column: 2) from the div.id (which is a string, eg. "12")
// returns as an object (to be stored in currentPlayer.selectedBoxes)
var parseBox = function(idString) {
    return {
        row: parseInt(idString[0]),
        column: parseInt(idString[1])
    };
}

// a callback corresponds to a turn of the game
var clickEvent = function() {

    if (currentPlayer.name == playerOne.name) {

        // do nothing and stop callback if box is already filled
        if (this.textContent) {
            return;
        }

        // otherwise, fill the box with player's symbol
        this.textContent = playerOne.symbol;
        // then add the current box's object (row and column) to the selectedBox array of the current player
        playerOne.selectedBoxes.push(parseBox(this.id));

        // if noone wins, switch to next player
        if (!checkEnd(currentPlayer)) {
            currentPlayer = playerTwo;
            turn.textContent = "Turn: Player Two";
        }

    } else if (currentPlayer.name == playerTwo.name) {

        if (this.textContent) {
            return;
        }
        this.textContent = playerTwo.symbol;
        playerTwo.selectedBoxes.push(parseBox(this.id));

        if (!checkEnd(currentPlayer)) {
            currentPlayer = playerOne;
            turn.textContent = "Turn: Player One";
        }
    }
}

// eg. selectedBoxes = [{row:2, column: 2}, {row:1, column: 3}]
boxes.forEach(function(box) {
    box.addEventListener("click", clickEvent);
})

// the parameter is a list of boxes (in this case, currentPlayer.selectedBoxes)
var checkRow = function(boxes) {
    // declare a temporary var to hold the filtered array
    var tmp;
    // for each row 1,2,3, filter out the boxes that are not in the current row
    for (i = 1; i <= 3; i++) {
        // put the filtered boxes in the tmp array
        tmp = boxes.filter(function(currentBox) {
            return currentBox.row == i;
        });

        // if tmp array has 3, means 3 same symbols in the current row (= win)
        if (tmp.length == 3) {
            return true;
        }
    }
    return false;
}

var checkColumn = function(boxes) {
    var tmp;
    for (i = 1; i <= 3; i++) {
        tmp = boxes.filter(function(currentBox) {
            return currentBox.column == i;
        });
        if (tmp.length == 3) {
            return true;
        }
    }
    return false;
}

var checkDiagonal = function(boxes) {
    // for 11 22 33
    var tmp = boxes.filter(function(currentBox) {
        return currentBox.row == currentBox.column;
    });
    if (tmp.length == 3) {
        return true;
    }
    // for 13 22 31
    tmp = boxes.filter(function(currentBox) {
        return currentBox.row + currentBox.column == 4;
    });
    if (tmp.length == 3) {
        return true;
    }
    return false;
}

var reset = function() {
    playerOne.selectedBoxes = [];
    playerTwo.selectedBoxes = [];
    currentPlayer = playerOne;
    turn.textContent = "Turn: Player One";
    boxes.forEach(function(box) {
        box.textContent = "";
    })
}

var checkEnd = function(player) {
    if (checkRow(player.selectedBoxes) || checkColumn(player.selectedBoxes) || checkDiagonal(player.selectedBoxes)) {

        if (confirm("You've won! Replay?")) {
            reset();
        }
        return true;

    } else if (playerOne.selectedBoxes.length + playerTwo.selectedBoxes.length == 9) {

        if (confirm("Nobody wins! Replay?")) {
            reset();
        }
        return true;

    }

    return false;
}