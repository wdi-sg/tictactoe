//start button
var start = document.querySelector("#start");
var game = document.querySelector("#tictactoe");

function hideButton() {
  if (start.style.display = "block") {
      start.style.display = "none";
  } else {
      start.style.display = "block";
  }
}

function showBoard() {
  if (game.style.display = "none") {
      game.style.display = "block";
  } else {
      game.style.display = "none";
  }
}

document.querySelector("#start").addEventListener('click', () => {
    showBoard();
    hideButton();
});

var board = {
  top: [null,"X",null],
  middle: [null,null,null],
  bottom: ["O","X","O"]
}