console.log("Hello");

var marker = ["X", "O"];
var turnNumber = 0;

//get element by class name always return an array of elements
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
        //it is an array
        clickBox[i].addEventListener('click', markedBox);
    }
};

var initializeGame = function() {
    var gameBoard = document.createElement("div");
    //create an ID to element. For ID only
    gameBoard.setAttribute("id", "board");
    //create 9 boxes
    for (var i = 0; i < 9; i++) {
        //for each loop, it creates one box
        var box = document.createElement("div");
        box.classList.add("game-field");
        // box.addEventListener('click', markedBox);
        gameBoard.appendChild(box);
    };

    document.body.appendChild(gameBoard);
    addListener(); //or use box.addEventListener('click', markedBox);
}

document.addEventListener('DOMContentLoaded', initializeGame);