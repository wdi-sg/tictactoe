console.log("Hello");

var marker = ["X", "O"];
var turnNumber = 0;

var clickBox = document.getElementsByClassName("game-field");

// set marker to divs
var markedBox = function(event) {
    // console.log("original turn number", turnNumber);
    //if turnNumber is even, playerOne turn
    if (turnNumber % 2 === 0) {
        //since it is playerOne turn, marker is X
        event.target.innerHTML = marker[0];
    }
    //else is playerTwo turn
    else {
        //since it is playerTwo turn, marker is O
        event.target.innerHTML = marker[1];
    };

    //after setting the marker, update turnNumber
    turnNumber++;
    console.log("new turn number", turnNumber);
};

    // Add event listener to the boxes to track players click
var addListener = function(){
    for (var i = 0; i < clickBox.length; i++) {
        clickBox[i].addEventListener('click', markedBox);
    }
};

document.addEventListener('DOMContentLoaded', addListener);