var gameBox = document.getElementsByClassName("game-box");
// Initialized moveNumber variable
var moveNumber = 0;

// Setting the addEventListener to change the value inside the box when clicked
for (var i = 0; i < gameBox.length; i++) {
  gameBox[i].addEventListener("click", function(event) {

    // Setting the box value to be O or X depending on whose turn it is.
    // Had to put this logic inside here otherwise the boxValue would not change.
    if (moveNumber % 2 == 0) {
      var boxValue = "O";
    } else {
      var boxValue = "X";
    }
    this.textContent = boxValue;
    moveNumber++;
    document.getElementById("score").textContent = moveNumber;
  });
}
