// window.onload = function() {
// };
var body = document.body;

var totalRows = 5;
var totalColumns = 3;


for (var i = totalRows; i > 0; i--) {
    var newDiv = document.createElement("div");
    newDiv.id = "row " + i;
    newDiv.class = "row";
    body.appendChild(newDiv);

    var newRow = document.getElementById(`row ${i}`);

    for (var j = 1; j <= totalColumns; j++) {
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


function winCheck () {

    //

};



var allButtons = document.querySelectorAll(".button");

for (var i = 0; i < allButtons.length; i++){

    allButtons[i].addEventListener("click", function() {
        changePlayer();
        this.textContent = currentPlayer;
        // winCheck();
    } );
};


// var positionInArray = event.target.id;
// var coordinates = positionInArray.split("");

// var row = coordinates[0];
// var column = coordinates[1];

// currentBoard[row][column] = currentPlayer;







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





