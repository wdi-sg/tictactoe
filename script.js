// Start the HTML body with no elements
// document.body.innerHTML = "";

var container = document.createElement('div');
container.classList.add('wrapper');

document.body.appendChild(container);

// Create div: board
var board = document.createElement('div');
board.classList.add('board');

container.appendChild(board);

console.log(board);

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

// Add the for loop to generate the numbers in a function
// Create counter that loops through 9 times
    // If counter is odd number, show X
    // If counter is even number, show O

var showNumber = function() {
    for(var i = 1; i <= 9; i++) {
        if(i % 2 !== 0) {
            console.log("Odd Number: X " + i);
        } else {
            console.log("Even Number: O " + i);
        }
    }
};


// Select button
var myButton = document.querySelector('button');

// Add event listener to the button
    // Click on button, show number in each box
myButton.addEventListener('click', showNumber);