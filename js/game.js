//In response to player1 click
var player1 = function (boxId) {
    var box = document.getElementById('boxId');

    //add the X
    addMarker(boxId, "X");
    play1.push(boxId);
    console.log(play1);

    //check if player 1 won
    if (checkIfWin(play1)) {
        alert('player1 won!');
    }

}

//In response to player2 click
var player2 = function (boxId) {
    var box = document.getElementById('boxId');

    //add the O
    addMarker(boxId, "O");

    play2.push(boxId);

    //check if player 2 won
    if (checkIfWin(play2)) {
        alert('player2 won!');
    }
}




