// window.onload = function() {
// };
var body = document.body;

var totalRows = 8;
var totalColumns = 6;


for (var i = 0; i < totalRows; i++) {
    var newDiv = document.createElement("div");
    newDiv.id = "row " + i;
    newDiv.class = "row";
    body.appendChild(newDiv);

    var newRow = document.getElementById(`row ${i}`);

    for (var j = 0; j < totalColumns; j++) {
        var newButton = document.createElement("button");
        newButton.className = "button";
        newButton.textContent = '\xa0';
        newButton.id = `${i}${j}`;
        // newButton.style.width = `${80/totalRows}%`;
        // newButton.style.paddingTop = "8%";
        // newButton.style.margin = `${totalRows/10}%`;
        newRow.appendChild(newButton);
    };
};


var currentBoard = [];

for (i = 0; i < totalRows; i++) {
    var emptyRow = [];

    for (j = 0; j < totalColumns; j++) {
        emptyRow.push("");
    };
    currentBoard.push(emptyRow);
};


var currentPlayer = null;
function changePlayer() {
    if (currentPlayer === null || currentPlayer === "o") {
        currentPlayer = "x";
    } else {
        currentPlayer = "o";
    };
};


var winInARow = 4;


function winCheckH () {

    for (i = 0; i < totalRows; i++){

        for (j = 0; j < totalColumns; j++) {

            var count = 0;

            for (k = 0; k < winInARow; k++) {

                if (currentBoard[i][j+k] === currentPlayer) {
                    count++;
                }
            }

            if (count === winInARow) {
                return true;
            }
        }
    }
};

function winCheckV () {

    for (i = 0; i < totalColumns; i++){

        for (j = 0; j < totalRows; j++) {

            var count = 0;

            for (k = 0; k < winInARow; k++) {

                if (i + k <= totalRows - 1 && currentBoard[i+k][j] === currentPlayer) {
                    count++;
                }
            }

            if (count === winInARow) {
                return true;
            }
        }
    }
};

function winCheckD1 () {

    for (i = 0; i < totalRows; i++){

        for (j = 0; j < totalColumns; j++) {

            var count = 0;

            for (k = 0; k < winInARow; k++) {

                if (i + k <= totalRows - 1 && currentBoard[i+k][j+k] === currentPlayer) {
                    count++;
                }
            }

            if (count === winInARow) {
                return true;
            }
        }
    }
};

function winCheckD2 () {

    for (i = 0; i < totalRows; i++){

        for (j = totalColumns - 1; j >= 0; j--) {

            var count = 0;

            for (k = 0; k < winInARow; k++) {

                if (i + k <= totalRows - 1 && currentBoard[i+k][j-k] === currentPlayer) {
                    count++;
                }
            }

            if (count === winInARow) {
                return true;
            }
        }
    }
};


var allButtons = document.querySelectorAll("button");

for (var i = 0; i < allButtons.length; i++){

    allButtons[i].addEventListener("click", function() {
        changePlayer();
        this.textContent = currentPlayer;

        console.log(this.id);
        var coordinates = this.id.split("");
        var row = coordinates[0];
        var column = coordinates[1];

        currentBoard[row][column] = currentPlayer;

        console.log("Horizontal win = " + winCheckH());
        console.log("Vertical win = " + winCheckV());
        console.log("Diagonal1 win = " + winCheckD1());
        console.log("Diagonal2 win = " + winCheckD2());

    } );
};



// OLD WINCHECK:
// function winCheck() {

//     var row1 = allButtons[0].textContent + allButtons[1].textContent + allButtons[2].textContent;
//     var row2 = allButtons[3].textContent + allButtons[4].textContent + allButtons[5].textContent;
//     var row3 = allButtons[6].textContent + allButtons[7].textContent + allButtons[8].textContent;
//     var col1 = allButtons[0].textContent + allButtons[3].textContent + allButtons[6].textContent;
//     var col2 = allButtons[1].textContent + allButtons[4].textContent + allButtons[7].textContent;
//     var col3 = allButtons[2].textContent + allButtons[5].textContent + allButtons[8].textContent;
//     var dia1 = allButtons[0].textContent + allButtons[4].textContent + allButtons[8].textContent;
//     var dia2 = allButtons[2].textContent + allButtons[4].textContent + allButtons[6].textContent;

//     var trios = [row1, row2, row3, col1, col2, col3, dia1, dia2];

//     for (i in trios) {

//         if (trios[i] === "xxx") {
//             alert ("Player 'x' wins!");
//         } else if (trios[i] === "ooo") {
//             alert ("Player 'o' wins!");
//         };
//     };
// };