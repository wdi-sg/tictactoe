

var body = document.body;
var allButtons = document.querySelectorAll(".button");

var currentPlayer = null;
function changePlayer() {
    if (currentPlayer === null || currentPlayer === "o") {
        currentPlayer = "x";
    } else {
        currentPlayer = "o";
    };
};

function winCheck() {

    var row1 = allButtons[0].textContent + allButtons[1].textContent + allButtons[2].textContent;
    var row2 = allButtons[3].textContent + allButtons[4].textContent + allButtons[5].textContent;
    var row3 = allButtons[6].textContent + allButtons[7].textContent + allButtons[8].textContent;
    var col1 = allButtons[0].textContent + allButtons[3].textContent + allButtons[6].textContent;
    var col2 = allButtons[1].textContent + allButtons[4].textContent + allButtons[7].textContent;
    var col3 = allButtons[2].textContent + allButtons[5].textContent + allButtons[8].textContent;
    var dia1 = allButtons[0].textContent + allButtons[4].textContent + allButtons[8].textContent;
    var dia2 = allButtons[2].textContent + allButtons[4].textContent + allButtons[6].textContent;

    var trios = [row1, row2, row3, col1, col2, col3, dia1, dia2];

    for (i in trios) {

        if (trios[i] === "xxx") {
            alert ("Player 'x' wins!");
        } else if (trios[i] === "ooo") {
            alert ("Player 'o' wins!");
        };
    };
};


for (var i = 0; i < allButtons.length; i++){

    allButtons[i].addEventListener("click", function() {
        changePlayer();
        this.textContent = currentPlayer;
        winCheck();
    } );
};











