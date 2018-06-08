

var turn = "player one";

var game = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

function init() {
    for (var i = 0; i < 9; i++) {
        document.getElementById('' + i).addEventListener('click', function(event) {  interceptSquareClick(event.target); });
    } 
}


function interceptSquareClick(square) {
    var id = square.id;
    if (game[id] == undefined) {
        game[id] = turn;
        if (turn === "player one") {
            square.style.backgroundColor = 'green';
            turn = "player two";
        } else {
            square.style.backgroundColor = 'red';
            turn = "player one";
        }
        checkGameOver();
    } else {
        alert("square already taken");
    }

}

function checkGameOver() {
    if (game[0] === game[1] && game[1] === game[2] && game[2] != undefined) {
        alert(game[2] + " wins!");
    } else if (game[3] === game[4] && game[4] === game[5] && game[5] != undefined) {
        alert(game[5] + " wins!");
    } else if (game[6] === game[7] && game[7] === game[8] && game[8] != undefined) {
        alert(game[8] + " wins!");
    } else if (game[0] === game[3] && game[3] === game[6] && game[6] != undefined) {
        alert(game[6] + " wins!");
    } else if (game[1] === game[4] && game[4] === game[7] && game[7] != undefined) {
        alert(game[7] + " wins!");
    } else if (game[2] === game[5] && game[5] === game[8] && game[8] != undefined) {
        alert(game[8] + " wins!");
    } else if (game[0] === game[4] && game[4] === game[8] && game[8] != undefined) {
        alert(game[8] + " wins!");
    } else if (game[2] === game[4] && game[4] === game[6] && game[6] != undefined) {
        alert(game[6] + " wins!");
    }
}    









