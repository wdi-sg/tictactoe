
var gameChildren = document.getElementById("game").children;
var countBlue = 0;
var countYellow = 0;
// var countRed = document.getElementsByClassName('.red').length;
// var counter = function () {
//     for (i=0; i < gameChildren.length; i++) {
//         if (gameChildren[i].classList.contains("blue")) {
//             countBlue++;
//         } else if (gameChildren[i].classList.contains("blue")) {
//             countRed++;
//         }
//         return countRed;
//         return countBlue;
//     }
// }
// counter();

// if (!(chosenPiece.classList.contains('blue')) || !(chosenPiece.classList.contains('blue'))) {

// }


// win conditions

var TL = document.getElementById("game").children[0];
var TC = document.getElementById("game").children[1];
var TR = document.getElementById("game").children[2];
var ML = document.getElementById("game").children[3];
var MC = document.getElementById("game").children[4];
var MR = document.getElementById("game").children[5];
var BL = document.getElementById("game").children[6];
var BC = document.getElementById("game").children[7];
var BR = document.getElementById("game").children[8];

var blueWins = function() {
    alert("Congratulations to blue player!");

}

var yellowWins = function () {
    alert("Congratulations to yellow player!");
}

var tieBreaker = function () {
    alert("It's a tie!");
}

// game logic

var choosePiece = document.addEventListener('click', function(e){
    var chosenId = e.target.id;
    var chosenPiece = document.getElementById(chosenId);
    // console.log(chosenPiece);
    // console.log(chosenPiece.classList.contains('blue'));

var turnBlue = function () {
    chosenPiece.classList.add('blue');
}

var turnYellow = function () {
    chosenPiece.classList.add('yellow')
}

    if ((countBlue == countYellow) && (chosenPiece.classList.length == 1)) {
        turnBlue();
    } else if ((countBlue > countYellow) && (chosenPiece.classList.length == 1)) {
        turnYellow();
    }

            countBlue = 0;
            countYellow = 0;

    for (i=0; i < gameChildren.length; i++) {
        if (gameChildren[i].classList.contains("blue")) {
            countBlue++;
        } else if (gameChildren[i].classList.contains("yellow")) {
            countYellow++;
        }
    }

    if (TL.classList.contains('blue') && TC.classList.contains('blue') && TR.classList.contains('blue')) {
        setTimeout(blueWins, 100);
    } else if (TL.classList.contains('yellow') && TC.classList.contains('yellow') && TR.classList.contains('yellow')) {
        setTimeout(yellowWins, 100);
    } else if (ML.classList.contains('blue') && MC.classList.contains('blue') && MR.classList.contains('blue')) {
        setTimeout(blueWins, 100);
    } else if (ML.classList.contains('yellow') && MC.classList.contains('yellow') && MR.classList.contains('yellow')) {
        setTimeout(yellowWins, 100);
    } else if (BL.classList.contains('blue') && BC.classList.contains('blue') && BR.classList.contains('blue')) {
        setTimeout(blueWins, 100);
    } else if (BL.classList.contains('yellow') && BC.classList.contains('yellow') && BR.classList.contains('yellow')) {
        setTimeout(yellowWins, 100);
    } else if (TL.classList.contains('blue') && ML.classList.contains('blue') && BL.classList.contains('blue')) {
        setTimeout(blueWins, 100);
    } else if (TL.classList.contains('yellow') && ML.classList.contains('yellow') && BL.classList.contains('yellow')) {
        setTimeout(yellowWins, 100);
    } else if (TC.classList.contains('blue') && MC.classList.contains('blue') && BC.classList.contains('blue')) {
        setTimeout(blueWins, 100);
    } else if (TC.classList.contains('yellow') && BC.classList.contains('yellow') && MC.classList.contains('yellow')) {
        setTimeout(yellowWins, 100);
    } else if (TR.classList.contains('blue') && MR.classList.contains('blue') && BR.classList.contains('blue')) {
        setTimeout(blueWins, 100);
    } else if (TR.classList.contains('yellow') && MR.classList.contains('yellow') && BR.classList.contains('yellow')) {
        setTimeout(yellowWins, 100);
    } else if (TL.classList.contains('blue') && MC.classList.contains('blue') && BR.classList.contains('blue')) {
        setTimeout(blueWins, 100);
    } else if (TL.classList.contains('yellow') && MC.classList.contains('yellow') && BR.classList.contains('yellow')) {
        setTimeout(yellowWins, 100);
    } else if (TR.classList.contains('blue') && MC.classList.contains('blue') && BL.classList.contains('blue')) {
        setTimeout(blueWins, 100);
    } else if (TR.classList.contains('yellow') && MC.classList.contains('yellow') && BL.classList.contains('yellow')) {
        setTimeout(yellowWins, 100);
    } else if (TL.classList.length == 2 && TC.classList.length == 2 && TR.classList.length == 2 && ML.classList.length == 2 && MC.classList.length == 2 && MR.classList.length == 2 && BL.classList.length == 2 && BC.classList.length == 2 && BR.classList.length == 2 && !blueWins.isRunning && !yellowWins.isRunning) {
        setTimeout(tieBreaker, 100);
    }
})