
//Create a div
//try click and change function on it, make it work
//multiply the div and do css on it
//When a user clicks a square on the board, the square(childDiv)
//is assigned with the var noughts or crosses.
// on every click, the clickHandler must switch to either noughts if crosses and vice versa.
// How to track the clicks on the board?
// how to track which square was clicked last?
//create player A and player B, will be assigned or allowed to choose either noughts or crosses on click.

//create a board

function createBoard() {
  for(let i = 0; i < 3; i ++) {
    let gameRow = document.createElement('div');
    gameRow.classList.add("game-row");
    document.querySelector('#board').appendChild(gameRow);
    for(let i = 0; i < 3; i ++) {
      let gameSquare = document.createElement('span');
      gameSquare.classList.add("game-square");
      document.querySelector('.game-row').appendChild(gameSquare);
    }
  }
}
createBoard();

var i = 0;
// A working demo of a click handler, it assigns a variable noughts with its own attributes
var clickHandler = function(event){
//for now I have used it under the span tag
var noughts = document.createElement('span');
// name the item inside
noughts.setAttribute("name", "noughts");
// using data-id to track, which can be linked to the clicks counter
noughts.setAttribute("data-id", i);
//created a class list to css the outcome
noughts.classList.add("noughts-board");
//added the content "O"
noughts.textContent = "O";
console.log(noughts)
document.getElementsByTagName('span')[i].appendChild(noughts);
};


//var toggle = document.getElementsByTagName('span')[i];
//toggle.addEventListener('click', clickHandler);


//document.getElementsByTagName('span')[0].addEventListener('click', function(event){
//  console.log("click happened");
//});
//create variables for noughts and crosses


var noughts = document.createElement('div');
  noughts.setAttribute("name", "noughts");
  noughts.setAttribute("data-id", i);
  noughts.id = i;
  noughts.classList.add("noughts-board");
  noughts.textContent = "O";
  console.log(noughts)

var crosses = document.createElement('div');
  crosses.setAttribute("name", "crosses");
  crosses.setAttribute("data-id", i);
  crosses.textContent = "X";
  console.log(crosses)





