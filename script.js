// Start the HTML body with no elements
document.body.innerHTML = "";

var container = document.createElement('div');
container.classList.add('wrapper');

document.body.appendChild(container);

// Create div: board
var board = document.createElement('div');
board.classList.add('board');

container.appendChild(board);

for(var row = 0; row < 3; row++) {

    // Create div: game-row
    var gameRow = document.createElement('div');
    gameRow.classList.add('game-row');

    board.appendChild(gameRow);

    for(var square = 0; square < 3; square++) {
        // Create span: game-square
        var gameSquare = document.createElement('div');
        gameSquare.classList.add('game-square');

        gameRow.appendChild(gameSquare);

    }
}

var userClickCount = 1;

// Function to display X or O to user on the game square
var showNumber = function(event) {

    console.log("User click count is " + userClickCount);

    // If count is odd number, show X
    // If count is even number, show O
    if (userClickCount % 2 !== 0) {
        this.innerHTML = "X";
    } else {
        this.innerHTML = "O";
    }

    // Increase user click count after the player clicks a box
    userClickCount = userClickCount + 1;

};

// select a set of elements
var squareBoxes = document.querySelectorAll(".game-square");

// set an event listener on each element
for(var i = 0; i < squareBoxes.length; i++) {

    squareBoxes[i].addEventListener("click",showNumber);
}