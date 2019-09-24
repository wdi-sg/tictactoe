//to check result
var stateOfBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

//to alternate entry
var player = 1;
var tictac;

//add event listener to squares
//when click, will give content
var k = 0;
var entry;

// var toFill = function(event) {
//         event.target.innerHTML = "test";

var toFill = function() {
    if (player%2 === 0) {
        tictac = "O";
    } else {
        tictac = 'X';
    }
    this.innerHTML = tictac;
    player++;
}

function addEvent() {
  for (var i = 0; i < stateOfBoard.length; i++) {

    for (var j = 0; j < stateOfBoard[i].length; j++) {

      entry = document.querySelector('#square'+[k]);
      entry.addEventListener("click", toFill);
      console.log(entry);
      k++;
    }
  }
}
addEvent();



//note for DOM
//use iteration over to create 3x3
//squares will still be id named same sequence
//CSS will need to update:
//1 main container inline block
//refer to css-iOS