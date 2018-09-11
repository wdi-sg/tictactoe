
var ticTacPole = document.querySelectorAll('div');
var test = document.getElementsByTagName('button');
console.log(test);

var turn = true;

function announceTurn() {
    if (turn === true) {
        alert('its player 1 turn');
    } else {
        alert('its player 2 turn');
    }
};

test[0] = 1;
test[1] = 2;
test[2] = 3;
test[3] = 4;
test[4] = 5;
test[5] = 6;
test[6] = 7;
test[7] = 8;
test[8] = 9;

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
}
};


test[0] = 1;
test[1] = 2;
test[2] = 3;
test[3] = 4;
test[4] = 5;
test[5] = 6;
test[6] = 7;
test[7] = 8;
test[8] = 9;

announceTurn();

    clickOne = function () {
        if (turn === true) {
        test[0].innerHTML = "X"
        turn = false;
        } else {
        test[0].innerHTML = "O"
        turn = true;
        }
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



