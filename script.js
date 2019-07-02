// Step-1. start the game
// Step-2. make squares appear
// Step-3. user clicks a box (x)
// Step-4. user clicks another box (o)
// Step-5. go back to step 3.

// user clicks on game-square, text of element changes to X

// start the game
console.log("Hello");

// create function to check for click event
var squareClick = function (event) {
    console.log('clicked ' + event.target.innerText);
    this.innerText = 'X';
}

// create a button element
var box = document.getElementsByClassName('game-square');

for (var i = 0; i < box.length; i++ ) {
    // when button clicked run squareClick function;
    box[i].addEventListener('click', squareClick);
}

var changeContent = function (event) {
    this.style.backgroundColor = '#ff0000';
}