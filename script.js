console.log('ToeTacTic');

var clickCount = 0;
var lastClick = 9;

var currentPlayer = "X";
var selectedButton;
var buttonText = "";

var outputDisplay = document.getElementById("output-display");

// function gameOver(clickCount) {
//   if (clickCount == lastClick) {
//     outputDisplay.textContent = "Game Over!";
//   };
// };

var playerTurn = function (clickCount) {
  if (clickCount % 2 == 0) {
    outputDisplay.textContent = "Player X's turn";
    console.log(outputDisplay.textContent);
    return 'O';
  } else {
    outputDisplay.textContent = "Player O's turn";
    console.log(outputDisplay.textContent);
    return 'X';
  };
};

function onClick(buttonId) {
  if (clickCount < lastClick) {
    console.log(clickCount);
    currentPlayer = playerTurn(clickCount);
    console.log(currentPlayer.toString());
    selectedButton = document.querySelector("#" + buttonId);
    console.log(selectedButton + " was clicked");
    // gameOver(clickCount);
    selectedButton.textContent = currentPlayer;
    console.log(selectedButton.textContent);
    clickCount++;
  } else {
    outputDisplay.textContent = "Game Over!";
  };
};
