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
  for 
}
