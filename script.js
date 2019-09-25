// Start the HTML body with no elements
document.body.innerHTML = "";

var container = document.createElement('div');
container.classList.add('wrapper');

document.body.appendChild(container);

/*Use DOM manipulation to create the game board*/

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

/*Event listener for user's click on each box*/
var userClickCount = 1;

// Function to display X or O to user on the game square
var displayResult = function(event) {

    /*Identify each game squares in the game board array*/
    // Check if this is the element that is clicked on
    /*gameSquareLocation[0][0] = "Row 1 Column 1";
    gameSquareLocation[0][1] = "Row 1 Column 2";
    gameSquareLocation[0][2] = "Row 1 Column 3";

    gameSquareLocation[1][0] = "Row 2 Column 1";
    gameSquareLocation[1][1] = "Row 2 Column 2";
    gameSquareLocation[1][2] = "Row 2 Column 3";

    gameSquareLocation[2][0] = "Row 3 Column 1";
    gameSquareLocation[2][1] = "Row 3 Column 2";
    gameSquareLocation[2][2] = "Row 3 Column 3";*/

    console.log("User click count is " + userClickCount);

    // If count is odd number, show X
    // If count is even number, show O
        if (userClickCount % 2 !== 0) {
            this.innerHTML = "X: This box in position " + gameSquareLocation.indexOf(this);
        } else {
            this.innerHTML = "O: This box in position " + gameSquareLocation.indexOf(this);
        }

    // Increase user click count after the player clicks a box
    userClickCount = userClickCount + 1;

};

// select a set of elements
var squareBoxes = document.querySelectorAll(".game-square");
var gameSquareLocation = [];

// set an event listener on each element
for(var i = 0; i < squareBoxes.length; i++) {

    // For every square box that the loop goes through, push it into an array
    gameSquareLocation.push(squareBoxes[i]);

    squareBoxes[i].addEventListener("click",displayResult);
}