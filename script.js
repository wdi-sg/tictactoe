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
  // add logic of not being able to click at a place if it has already been clicked:
  if (typeof originBoard[square.target.id] == 'number'){
    //recall that the initial squareId has a number value. once a player has clicked on the cell, it should turn into either an 'O' or an "X" letter.
    //therefore, if the squareId is still a number, then it follows that no player has yet clicked on that spot.
    turn(square.target.id, huPlayer);
    //before the AI player takes a turn, we are going to check if the game is a draw. A draw is defined as all the cells being filled.
    //if there is not a tie, then the computer will take a turn;
    if(!checkTie()) turn(bestSpot(),aiPlayer);
  }
}
//then define the turn function here:
function turn(squareId, player){
  originBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
//determine win outcome here, want to check if a certain player has won:
  let gameWon = checkWin(originBoard, player);
//if game has been won, call the game over function with the game won variable.
  if (gameWon) gameOver (gameWon)
}
//we have to pass in the originBoard array into the board array here. The board array may not necessarily be the same as origin board.
function checkWin(board, player){
  let plays = board.reduce((a,e,i)=>
  (e === player) ? a.concat(i) : a,[])
  let gameWon = null;
  for (let [index,win]of winCombos.entries()){
    if(win.every(elem=>plays.indexOf(elem)>-1)){
//gameWon defined up here...
      gameWon = {index: index, player: player};
      break;
    }
  }
  return gameWon;
}
//Now we define the "Game Over" function...with two for loops

function gameOver(gameWon){
  for (let index of winCombos[gameWon.index]){
    document.getElementById(index).style.backgroundColor =
      gameWon.player == huPlayer ? "blue" : "red";
  }
  for (var i =1; i < cells.length; i++){
    cells[i].removeEventListener('click',turnClick,false)
  }
}
//We are going to include a basic AI player here (w/o the minMax algorithm)...
function emptySquares(){
  //filter every element in the original board to see if the type of is a number, if it is still a number, it means no player has yet played there and is empty.
  return originBoard.filter(s => typeof s == 'number');
}

function bestSpot(){
  return emptySquares()[0];
}

function checkTie(){
//means every square is filled up, and no body has won yet because everytime someone plays a turn, we had created a fucntion to check if there has been a win.
  if emptySquares().length == 0)
    for (var i =0;i<cells.length; i++){
      cells.[i].style.backgroundColor = 'green';
      cells.[i]removeEventListener('click',turnClick, false);
    }
    declareWinner()
}
