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

function showGame() {
  if (game.style.display = "none") {
      game.style.display = "block";
  } else {
      game.style.display = "none";
  }
}

document.querySelector("#start").addEventListener('click', () => {
    showGame();
    hideButton();
});

//defining positions on board
var board = {
  top: ["X","X","O"],
  middle: ["O","X","O"],
  bottom: ["O","X","O"]
};

board.top[0] = document.querySelector("#box1");
board.top[1] = document.querySelector("#box2");
board.top[2] = document.querySelector("#box3");
board.middle[0] = document.querySelector("#box4");
board.middle[1] = document.querySelector("#box5");
board.middle[2] = document.querySelector("#box6");
board.bottom[0] = document.querySelector("#box7");
board.bottom[1] = document.querySelector("#box8");
board.bottom[2] = document.querySelector("#box9");


//identifying player's turn
var playerOne = 1;
var playerTwo = 0;
var turns = 0;

var playerTurn = document.createElement('span');
    playerTurn.innerHTML = "Player A's turn";
    game.appendChild(playerTurn);

function updateTurn() {
if (playerOne == 1 && playerTwo == 0) {
    playerTurn.innerHTML = "Player A's turn";
  } else if
    (playerOne == 0 && playerTwo == 1)
    playerTurn.innerHTML = "Player B's turn";
}

//function to call when a box is clicked
function boxClicked() {
  var thisBox = document.querySelector('#' + event.target.id);

  if (playerOne == 1 && playerTwo == 0) {
      thisBox.innerHTML = "O";
      playerOne = 0;
      playerTwo = 1;
  } else if
      (playerOne == 0 && playerTwo == 1) {
      thisBox.innerHTML = "X";
      playerOne = 1;
      playerTwo = 0;
      }
      updateTurn();
}

//attaching onclick listener
board.top[0].addEventListener('click', boxClicked, {once:true});
board.top[1].addEventListener('click', boxClicked, {once:true});
board.top[2].addEventListener('click', boxClicked, {once:true});
board.middle[0].addEventListener('click', boxClicked, {once:true});
board.middle[1].addEventListener('click', boxClicked, {once:true});
board.middle[2].addEventListener('click', boxClicked, {once:true});
board.bottom[0].addEventListener('click', boxClicked, {once:true});
board.bottom[1].addEventListener('click', boxClicked, {once:true});
board.bottom[2].addEventListener('click', boxClicked, {once:true});



