//document.addEventListener("DOMContentLoaded", function() {

console.log("working");

const PLAYER_TOKEN = "X";
const COM_TOKEN = "O";

player1win = "";
player2win = "";

var board = [];

var rows;
var columns;

var player1name = "";
var player2name = "";

var player1score = 0;
var player2score = 0;

// Function to remove the forms and add player names + score
var goodLuckHaveFun = function() {
    stuff = document.getElementsByClassName("stuff");
    for (var i = 0; i < stuff.length; i++) {
        stuff[i].parentNode.removeChild(stuff[i]);
    };

    stuff = document.getElementsByClassName("stuff");
    for (var i = 0; i < stuff.length; i++) {
        stuff[i].parentNode.removeChild(stuff[i]);
    };

    player1name = document.getElementById("player1").value;
    player2name = document.getElementById("player2").value;

    document.getElementById("readyplayer1").textContent = player1name + ": " + player1score;
    document.getElementById("readyplayer2").textContent = player2name + ": " + player2score;

    names = document.getElementsByClassName("names");
    for (var i = 0; i < names.length; i++) {
        names[i].parentNode.removeChild(names[i]);
    };

    for (var i = 0; i < names.length; i++) {
        names[i].parentNode.removeChild(names[i]);
    };

    title = document.getElementById("title");
    title.textContent = "Good Luck & Have Fun!";

};

var player1won = function() {
    player1score++
    document.getElementById("readyplayer1").textContent = player1name + " " + player1score;
};

var player2won = function() {
    player2score++
    document.getElementById("readyplayer2").textContent = player2name + ": " + player2score;
};

// Creating a Play Again button
var makeReplayButton = function() {
    var replayButton = document.createElement("button");
    replayButton.setAttribute("id", "replay-button");
    replayButton.textContent = "Play Again!";
    document.documentElement.appendChild(replayButton);
    replayButton.addEventListener("click", clearBoard);
};

var turn = 0;

// Changing text to X / O when box is clicked. Removing the event listener after it is clicked
var hit = function(event) {
    console.log(this);

    if ( turn % 2 == 0 ) {
        this.textContent = PLAYER_TOKEN;
        this.removeEventListener("click", hit);
        this.style.cursor = "default";
    }

    else if ( turn % 2 != 0 ) {
        this.textContent = COM_TOKEN;
        this.removeEventListener("click", hit);
        this.style.cursor = "default";
    } turn++;
    checkWin();
};

var clearBoard = function() {
    // Making an array of the current board
    numberOfRows = parseInt(rows);
    numberOfColumns = parseInt(columns);
    board = [];

    for (var i = 0; i < numberOfRows ; i++) {
        var yAxis = i.toString();

        for (var j = 0; j < numberOfColumns; j++) {

            var xAxis = j.toString();

            // Clearing the board
            document.getElementById(yAxis+"/"+xAxis).textContent = " ";

            // Clearing the board Array
            board.push(" ");

            // Adding event listener
            document.getElementById(yAxis+"/"+xAxis).addEventListener("click", hit);

            // Changing cursor style to clickable boxes
            document.getElementById(yAxis+"/"+xAxis).style.cursor = "crosshair";
        };
    };
};

var startGame = function() {

    // Get rows and columns
    rows = document.getElementById("rows").value;
    columns = document.getElementById("columns").value;
    win = document.getElementById("winning-condition").value;

    console.log("rows: " + rows);
    console.log("columns: " + columns);

    // Creating table code here
    var table = document.getElementById("table");

    if ( win > rows && win > columns ) {
        alert("That winning condition is not possible! Please pick a lower winning condition or increase the number or rows and columns!");
        return;
    };

    if ( win < 3 ) {
        alert("Game would be too easy!");
        return;
    };

    numberOfBoxes = 0;

        // Creating rows
        for ( var i = 0; i < rows; i++ ) {
            var tr = table.insertRow();

            // Creating columns
            for ( var j = 0; j < columns; j++ ) {
                var td = tr.insertCell();

                // IDing each box with coordinates row/column
                coordinates = document.getElementsByTagName("td");
                coordinates[numberOfBoxes].setAttribute("id", i + "/" + j);
                numberOfBoxes++;
            };
    winningCondition();
};

    // Removing the Rows & Columns selector
    goodLuckHaveFun();

    clearBoard();

    makeReplayButton();

}

// Adding event listener to the start button
var start = document.getElementById("start-button");

start.addEventListener('click', startGame);

var currentBoard = function() {
    // Making an array of the current board
    board = [];
    numberOfRows = parseInt(rows);
    numberOfColumns = parseInt(columns);

    for (var i = 0; i < numberOfRows ; i++) {
        var yAxis = i.toString();

        for (var j = 0; j < numberOfColumns; j++) {

            var xAxis = j.toString();

            if ( document.getElementById(yAxis+"/"+xAxis).textContent != "" ) {
                board.push(document.getElementById(yAxis+"/"+xAxis).textContent);
            };
        };
    };
};

var checkWin = function() {
    vertical = [];
    horizontal = [];
    diagonal1 = [];
    diagonal2 = [];

    // Check horizontal possible winning combinations
    for ( var j = 0; j < numberOfColumns ; j++) {
            horizontal.push(",");
        for ( var i = 0; i < numberOfRows ; i++ ) {

            horizontal.push(document.getElementById( i + "/" + j).textContent);

            horizontalString = horizontal.join("");
            if ( horizontalString.includes(player1win) ) {
                player1won();
                alert(player1name + " has won the game!");
                removeAll();
                return;
            };

            if ( horizontalString.includes(player2win) ) {
                player2won();
                alert(player2name + " has won the game!");
                removeAll();
                return;
            };
        };
    };
    // Check vertical possible winning combinations
    for ( var i = 0; i < numberOfRows ; i++) {
            vertical.push(",");
        for ( var j = 0; j < numberOfColumns ; j++ ) {

            // Making arrays of all the rows
            vertical.push(document.getElementById( i + "/" + j ).textContent);

            // Combining array into a string to be able to check for winning combination
            verticalString = vertical.join("");
            if ( verticalString.includes(player1win) ) {
                player1won();
                alert(player1name + " has won the game!");
                removeAll();
                return;
            };

            if ( verticalString.includes(player2win) ) {
                player2won();
                alert(player2name + " has won the game!");
                removeAll();
                return;
            };
        };
    };
    // Check diagonal possible winning combinations

    // 0/0 0/1 0/2

    // 1/0 1/1 1/2

    // 2/0 2/1 2/2

    for (var i = 0; i < numberOfRows; i++) {

        for ( var c = i, r = 0; r < numberOfRows, c < numberOfColumns; r++, c++ ) {
            diagonal1.push(document.getElementById( r + "/" + c ).textContent);
        } diagonal1.push(",");
    };

    for (var i = 0; i < numberOfRows; i++) {

        for ( var c = i, r = 0; r < numberOfRows, c < numberOfColumns; r++, c++ ) {
            diagonal1.push(document.getElementById( c + "/" + r ).textContent);
        } diagonal1.push(",");
    } diagonalString1 = diagonal1.join("");

    if ( diagonalString1.includes(player1win) ) {
        player1won();
        alert(player1name + " has won the game!");
        removeAll();
        return;
    };

    if ( diagonalString1.includes(player2win) ) {
        player2won();
        alert(player2name + " has won the game!");
        removeAll();
        return;
    };

    for (var i = numberOfRows; i > -1; i--) {

        for ( var c = i, r = 0; r < numberOfRows, c < numberOfColumns; r++, c++ ) {
            diagonal2.push(document.getElementById( r + "/" + c ).textContent);
        } diagonal2.push(",");
    };

    for (var i = numberOfRows; i > -1; i--) {

        for ( var c = i, r = 0; r < numberOfRows, c < numberOfColumns; r++, c++ ) {
            diagonal2.push(document.getElementById( c + "/" + r ).textContent);
        } diagonal2.push(",");
    } diagonalString2 = diagonal2.join("");

    if ( diagonalString2.includes(player1win) ) {
        player1won();
        alert(player1name + " has won the game!");
        removeAll();
        return;
    };

    if ( diagonalString2.includes(player2win) ) {
        player2won();
        alert(player2name + " has won the game!");
        removeAll();
        return;
    };

    // if ( numberOfRows > numberOfColumns ) {
    //     for (var i = 0; i < numberOfColumns; i++) {
    //         for (var r = 0, c = 0; r < numberOfRows, c < numberOfColumns; r++, c++ ) {
    //             diagonal1.push(document.getElementById(r+"/"+c).textContent);
    //             diagonalString1 = diagonal1.join("");
    //         };
    //     };
    // } if ( diagonalString1.includes(player1win) ) {
    //             player1won();
    //             alert(player1name + " has won the game!");
    //             removeAll();
    //             return;
// };
};

var winningCondition = function() {
    win = parseInt(win);
    player1win = "";
    player2win = "";

    for ( var i = 0; i < win; i++ ) {
        player1win = player1win + PLAYER_TOKEN;
    };

    for ( var j = 0; j < win; j++ ) {
        player2win = player2win + COM_TOKEN;
    };
};

var removeAll = function() {
    var allBoxes = document.getElementsByTagName("td");
    for (var i = 0; i < allBoxes.length; i++) {
        allBoxes[i].removeEventListener("click", hit);
        allBoxes[i].style.cursor = "default";
    };
}














//})