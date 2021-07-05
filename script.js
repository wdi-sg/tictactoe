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
var xResult = [];
var oResult = [];

// Function to display X or O to user on the game square based on which square the user clicked on
var displayResult = function(event) {

    console.log("User click count is " + userClickCount);

    // If count is odd number, show X
    // If count is even number, show O
        if (userClickCount % 2 !== 0) {

            this.innerHTML = "X";

            xResult.push(gameSquareLocation.indexOf(this));
            xResult.sort();

            console.log("X: This box in position " + gameSquareLocation.indexOf(this));

        } else {
            this.innerHTML = "O";

            oResult.push(gameSquareLocation.indexOf(this));
            oResult.sort();

            console.log("O: This box in position " + gameSquareLocation.indexOf(this));
        }

    // Increase user click count after the player clicks a box
    userClickCount = userClickCount + 1;

    // Call the function to check for winning player only if there is 3 items in result array
    if(xResult.length === 3 || oResult.length === 3) {
        winningConditions();
    }


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

// Function to determine win/lose
var winningConditions = function() {

    if(gameSquareLocation[0].innerHTML === gameSquareLocation[1].innerHTML && gameSquareLocation[1].innerHTML === gameSquareLocation[2].innerHTML) {
        alert("Win");
    }

};