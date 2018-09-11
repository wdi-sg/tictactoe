

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

    if (row1 === "xxx" || row2 === "xxx" || row3 === "xxx" || col1 === "xxx" || col2 === "xxx" || col3 === "xxx" || dia1 === "xxx" || dia2 === "xxx") {
        alert ("Player 'x' wins!");
    } else if (row1 === "ooo" || row2 === "ooo" || row3 === "ooo" || col1 === "ooo" || col2 === "ooo" || col3 === "ooo" || dia1 === "ooo" || dia2 === "ooo") {
        alert ("Player 'o' wins!");
    } else alert ("Game is drawn.");
}

for(var i = 0; i < allButtons.length; i++){

    allButtons[i].addEventListener("click", function() {
        changePlayer();
        this.textContent = currentPlayer;
        winCheck();
    } );
};











