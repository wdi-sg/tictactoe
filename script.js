//1. set up variales, show a mark
//2. determine winner and show win counts
//3. basic AI and winner notification
//4. minmax algorithm
var originBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
]
const cells = document.querySelectorAll('.cell');
startGame();
function startGame(){
//whenever the browser loads the web page, the 'endgame' class div window would not be visible since display is set to none;
  document.querySelector(".endgame").style.display = "none";
//after game ends, the display--we will create eventually, will set to appear. but once the startgame function is run, this will go off agin.
  originBoard = Array.from(Array(9).keys());
//in the above, we are creating an array with nine values. Array.from creates an array from array-like objects. While .keys returns the enumerable properties of an array;
  console.log("Printing the array originBoard");
  console.log(originBoard);
//going to remove all the 'X's and 'O's whenever the startGame is called, i.e. when the game restarts...
//cells has already been declared above, before the starGame function
  for (var i = 0; i<cells.length; i++){
    cells[i].innerText = '';
    cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click',turnClick, false);
  }
}
//then define the turnClick function here...
function turnClick(square){
  //console.log(square.target.id)
  turn(square.target.id, huPlayer);
}
//then define the turn function here:
function turn(squareId, player){
  originBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
}
//determine winner function here:
