
var ticTacPole = document.querySelectorAll('div');
var test = document.getElementsByTagName('button');


var turn = true;

function announceTurn() {
    if (turn === true) {
        alert('its player 1 turn');
    } else {
        alert('its player 2 turn');
    }
};


idArray = [];

var winConditionCheck = function() {
    if ((test[0].innerHTML === "X") && (test[1].innerHTML === "X") && (test[2].innerHTML === "X")) {
    alert("player 1 has won");

    } else if ((test[3].innerHTML === "X") && (test[4].innerHTML === "X") && (test[5].innerHTML === "X")) {
    alert("player 1 has won");

    } else if ((test[6].innerHTML === "X") && (test[7].innerHTML === "X") && (test[8].innerHTML === "X")) {
    alert("player 1 has won");

    } else if ((test[0].innerHTML === "X") && (test[3].innerHTML === "X") && (test[6].innerHTML === "X")) {
    alert("player 1 has won");

    } else if ((test[1].innerHTML === "X") && (test[4].innerHTML === "X") && (test[7].innerHTML === "X")) {
    alert("player 1 has won");

    } else if ((test[2].innerHTML === "X") && (test[5].innerHTML === "X") && (test[8].innerHTML === "X")) {
    alert("player 1 has won");

    } else if ((test[2].innerHTML === "X") && (test[4].innerHTML === "X") && (test[6].innerHTML === "X")) {
    alert("player 1 has won");

    } else if ((test[0].innerHTML === "X") && (test[4].innerHTML === "X") && (test[8].innerHTML === "X")) {
    alert("player 1 has won");

    } else if ((test[0].innerHTML === "O") && (test[1].innerHTML === "O") && (test[2].innerHTML === "O")) {
    alert("player 1 has won");

    } else if ((test[3].innerHTML === "O") && (test[4].innerHTML === "O") && (test[5].innerHTML === "O")) {
    alert("player 1 has won");

    } else if ((test[6].innerHTML === "O") && (test[7].innerHTML === "O") && (test[8].innerHTML === "O")) {
    alert("player 1 has won");

    } else if ((test[0].innerHTML === "O") && (test[3].innerHTML === "O") && (test[6].innerHTML === "O")) {
    alert("player 1 has won");

    } else if ((test[1].innerHTML === "O") && (test[4].innerHTML === "O") && (test[7].innerHTML === "O")) {
    alert("player 1 has won");

    } else if ((test[2].innerHTML === "O") && (test[5].innerHTML === "O") && (test[8].innerHTML === "O")) {
    alert("player 1 has won");

    } else if ((test[2].innerHTML === "O") && (test[4].innerHTML === "O") && (test[6].innerHTML === "O")) {
    alert("player 1 has won");

    } else if ((test[0].innerHTML === "O") && (test[4].innerHTML === "O") && (test[8].innerHTML === "O")) {
    alert("player 1 has won");

    } else if ((test[0].id === 'clicked') && (test[1].id === 'clicked') && (test[2].id === 'clicked') && (test[3].id === 'clicked') && (test[4].id === 'clicked') && (test[5].id === 'clicked') && (test[6].id === 'clicked') && (test[7].id === 'clicked') && (test[8].id === 'clicked')) {
        alert("It's a draw!");
    }
};








announceTurn();

    clickOne = function () {

        if (turn === true) {
        test[0].innerHTML = "X"
        turn = false;
        } else {
        test[0].innerHTML = "O"
        turn = true;
        }

        test[0].id = "clicked";
        winConditionCheck();
        announceTurn();


};

    clickTwo = function () {

        if (turn === true) {
        test[1].innerHTML = "X"
        turn = false;
        } else {
        test[1].innerHTML = "O"
        turn = true;
        }
        test[1].id = "clicked";
        winConditionCheck();
        announceTurn();
    };

    clickThree = function () {

        if (turn === true) {
        test[2].innerHTML = "X"
        turn = false;
        } else {
        test[2].innerHTML = "O"
        turn = true;
        }
        test[2].id = "clicked";
        winConditionCheck();
        announceTurn();
    };

    clickFour = function () {

        if (turn === true) {
        test[3].innerHTML = "X"
        turn = false;
        } else {
        test[3].innerHTML = "O"
        turn = true;
        }
        test[3].id = "clicked";
        winConditionCheck();
        announceTurn();
    };

    clickFive = function () {

        if (turn === true) {
        test[4].innerHTML = "X"
        turn = false;
        } else {
        test[4].innerHTML = "O"
        turn = true;
        }
        test[4].id = "clicked";
        winConditionCheck();
        announceTurn();
    };

    clickSix = function () {

        if (turn === true) {
        test[5].innerHTML = "X"
        turn = false;
        } else {
        test[5].innerHTML = "O"
        turn = true;
        }
        test[5].id = "clicked";
        winConditionCheck();
        announceTurn();
    };

    clickSeven = function () {

        if (turn === true) {
        test[6].innerHTML = "X"
        turn = false;
        } else {
        test[6].innerHTML = "O"
        turn = true;
        }
        test[6].id = "clicked";
        winConditionCheck();
        announceTurn();
    };

    clickEight = function () {

        if (turn === true) {
        test[7].innerHTML = "X"
        turn = false;
        } else {
        test[7].innerHTML = "O"
        turn = true;
        }
        test[7].id = "clicked";
        winConditionCheck();
        announceTurn();
    };
    clickNine = function () {

        if (turn === true) {
        test[8].innerHTML = "X"
        turn = false;
        } else {
        test[8].innerHTML = "O"
        turn = true;
        }
        test[8].id = "clicked";
        winConditionCheck();
        announceTurn();
    };






/*
var actionClick = function () {
    for (var i = 0; i < test.length; i++) {

    test[i].addEventListener("click", xxx);
    test[i].id = 'clicked';

    }

};
*/



