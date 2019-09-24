var gameState = 0;
var allSquares = document.querySelectorAll(".game-square");
//create array of objects for board
var board = [
  rowOne = [null, null, null],
  rowTwo = [null, null, null],
  rowThree = [null, null, null]
];

//create a function add event listener to each div
var addEventToSquares = function() {
  for (var i = 0; i < allSquares.length; i++) {
    var square = allSquares[i];
    square.addEventListener("click", changeText);
  }
}

//create a function to change the text in the div for the boxes that are clicked
var changeText = function(event) {
  if (gameState === 0) {
    if (event.target.classList.contains("fill")) {
    } else {
      event.target.innerHTML = "x";
      event.target.classList.add("fill");
      gameState++;
    } 
  } else if (gameState === 1) {
    if (event.target.classList.contains("fill")) {
    } else {
      event.target.innerHTML = "o";
      event.target.classList.add("fill");
      gameState++;
    } 
  } else if (gameState === 2) {
    if (event.target.classList.contains("fill")) {
    } else {
      event.target.innerHTML = "x";
      event.target.classList.add("fill");
      gameState++;
    } 
  } else if (gameState === 3) {
    if (event.target.classList.contains("fill")) {
    } else {
      event.target.innerHTML = "o";
      event.target.classList.add("fill");
      gameState++;
    } 
  } else if (gameState === 4) {
    if (event.target.classList.contains("fill")) {
    } else {
      event.target.innerHTML = "x";
      event.target.classList.add("fill");
      gameState++;
    } 
  } else if (gameState === 5) {
    if (event.target.classList.contains("fill")) {
    } else {
      event.target.innerHTML = "o";
      event.target.classList.add("fill");
      gameState++;
    } 
  } else if (gameState === 6) {
    if (event.target.classList.contains("fill")) {
    } else {
      event.target.innerHTML = "x";
      event.target.classList.add("fill");
      gameState++;
    } 
  } else if (gameState === 7) {
    if (event.target.classList.contains("fill")) {
    } else {
      event.target.innerHTML = "o";
      event.target.classList.add("fill");
      gameState++;
    } 
  } else if (gameState === 8) {
    if (event.target.classList.contains("fill")) {
    } else {
      event.target.innerHTML = "x";
      event.target.classList.add("fill");
      gameState++;
    } 
  } else if (gamState === 9) {
    if (event.target.classList.contains("fill")) {
    } else {
      event.target.innerHTML = "o";
      event.target.classList.add("fill");
      gameState++;
    } 
  }
  //change square value to either x or o
  //change square state to selected after one click
}
//text in div depends on game state
//when game state reaches 9, game do nothing
//when box has been clicked, prevent value from changing
addEventToSquares();