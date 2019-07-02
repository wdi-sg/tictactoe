var board;
//var playerOne = 'o';
//var playerTwo = 'x';
var playerTurn = null;
//const winPatterns;

var btnReplay = document.getElementById("id-btn-replay");
const cells = document.querySelectorAll(".class-button");

var startGame = function() {
  console.log("Game Started");
  btnReplay.style.display = "none";
    board = Array.from(Array(9).keys());
    for(var i = 0; i <cells.length; i++){
        cells[i].innerText = '';
        cells[i].addEventListener('click', turnclick);
    }
};
var turnclick = function(square){
    //console.log(square.target.id);
    if (playerTurn == null || playerTurn == "○") {
      playerTurn = "✕";
    } else {
      playerTurn = "○";
    };
    turn(square.target.id, playerTurn);
};

var turn = function(cellId, player) {
    board[cellId] = player;
    document.getElementById(cellId).innerHTML = player;
}


//Run StartGame once when program starts
startGame();

