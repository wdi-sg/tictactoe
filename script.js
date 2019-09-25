
//retrieve all spans from HTML and assign it variable square; the large game board
var square = document.querySelectorAll('.game-square');
console.log(square);
//tracks no.of player clicks
var counter = 0;

//Assign click event target to individual spans
function checked(event){
    console.log(event.target);
    var squareIndividual = event.target;
    //checks counter for even or odd clicks
    console.log("before conditional" , counter);
    //if click is even, insert text to span as 'X'
    if (counter % 2 === 0) {
        squareIndividual.textContent = "X";
    //if click is odd insert text to span as 'O'
    }   else if (counter % 2 !== 0) {
        squareIndividual.textContent = "O";
    }
    counter++;
    console.log("after conditional" , counter);
};

//loops through the whole var square array and assign event lister & 'checked' function to it
var i = 0;
while (i<square.length){
    var board = square[i];
    console.log(board);
    board.addEventListener('click', checked);
    i++;
}