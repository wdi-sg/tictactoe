var gameState = 1;
var allSquares = document.querySelectorAll(".game-square");

//create array of objects for board
// var board = [
//   rowOne = [null, null, null],
//   rowTwo = [null, null, null],
//   rowThree = [null, null, null]
// ];

//create a function to add event listener to each div
var addEventToSquares = function() {
  for (var i = 0; i < allSquares.length; i++) {
    var square = allSquares[i];
    square.addEventListener("click", changeText);
  }
}

//create a function to change the text in the div for the boxes that are clicked
var changeText = function(event) {
  if (event.target.classList.contains("empty")) {
    if (gameState%2 != 0) {
      //change square value to either x or o
        event.target.innerHTML = "x";
      //when box has been clicked, prevent value from changing
        event.target.classList.remove("empty");
        event.target.style.color = "black";
        checkWinner();
        gameState++;
      } else if (gameState%2 === 0) {       
        event.target.innerHTML = "o";
        event.target.classList.remove("empty");
        event.target.style.color = "black";
        checkWinner();
        gameState++;
      }
  } 
    
    //change square state to selected after one click
  }
  //text in div depends on game state


addEventToSquares();

var checkWinner = function() {
  var boxOne = document.querySelector(".box-1");
  var boxTwo = document.querySelector(".box-2");
  var boxThree = document.querySelector(".box-3");
  var boxFour = document.querySelector(".box-4");
  var boxFive = document.querySelector(".box-5");
  var boxSix = document.querySelector(".box-6");
  var boxSeven = document.querySelector(".box-7");
  var boxEight = document.querySelector(".box-8");
  var boxNine = document.querySelector(".box-9"); 

  if (boxOne.innerHTML != "0" && boxOne.innerHTML === boxTwo.innerHTML && boxOne.innerHTML === boxThree.innerHTML) {
    declareWinner();
  } else if (boxOne.innerHTML != "0" && boxOne.innerHTML === boxTwo.innerHTML && boxOne.innerHTML === boxThree.innerHTML) {
    declareWinner();
  } else if (boxOne.innerHTML != "0" && boxOne.innerHTML === boxFour.innerHTML && boxOne.innerHTML === boxSeven.innerHTML) {
    declareWinner();
  } else if (boxOne.innerHTML != "0" && boxOne.innerHTML === boxFive.innerHTML && boxOne.innerHTML === boxNine.innerHTML) {
    declareWinner();
  } else if (boxFour.innerHTML != "0" && boxFour.innerHTML === boxFive.innerHTML && boxFour.innerHTML === boxSix.innerHTML) {
    declareWinner();
  } else if (boxSeven.innerHTML != "0" && boxSeven.innerHTML === boxEight.innerHTML && boxSeven.innerHTML === boxNine.innerHTML) {
    declareWinner();
  } else if (boxTwo.innerHTML != "0" && boxTwo.innerHTML === boxFive.innerHTML && boxTwo.innerHTML === boxEight.innerHTML) {
    declareWinner();
  } else if (boxThree.innerHTML != "0" && boxThree.innerHTML === boxSix.innerHTML && boxThree.innerHTML === boxNine.innerHTML) {
    declareWinner();
  } else if (boxTwo.innerHTML != "0" && boxTwo.innerHTML === boxFive.innerHTML && boxTwo.innerHTML === boxEight.innerHTML) {
    declareWinner();
  } else if (boxThree.innerHTML != "0" && boxThree.innerHTML === boxFive.innerHTML && boxThree.innerHTML === boxSeven.innerHTML) {
    declareWinner();
  } else {}
}

var declareWinner = function() {
  var output = document.querySelector("#output");
  if (gameState%2 != 0) {
    output.innerHTML = "Player 1 Wins.";
    // setTimeOut(resetGame, 3000);
    resetGame();
  } else if (gameState%2 === 0) { 
    output.innerHTML = "Player 2 Wins.";
    resetGame();
    // setTimeOut(resetGame, 3000);
  }
}

var resetGame = function() {
  for (var i = 0; i < allSquares.length; i++) {
    var square = allSquares[i];
    square.style.color = "transparent";
    square.innerHTML = "0";
    square.classList.add("empty");
    gameState = 0;
    // output.innerHTML= "";
  }
}

