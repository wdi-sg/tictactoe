/*Pseudo-code
1)Build the board - Use HTML
2)Play the game
3)Keep track of whose turn
4)Create players
5)Win algorithmn
6)Reset the game*/

//Create players
var players = [];
var markers = ["X", "O"]; //markers[0] will be "X"; markers[1] will be "O"

//Players name
players[0] = "Ron"; //players[O] = player1;
players[1] = "Jack"; //players[1] = player2;
//var player1 = prompt("Enter first player's name:");
//var player2 = prompt("Enter second player's name:");

//Win Condition
var winArray = [7, 56, 73, 84, 146, 273, 292, 448];
var playerValues = [0, 0];
var gameOver = false;

var turn = 0;
//Play the game
var play = function(click, divValue){
  if(gameOver !== true){
    click.onclick = "";
    cellValueCount(divValue);
    click.innerText = markers[turn];
    checkForWin();
    if(gameOver !== true){
      togglePlayer();
    }
  }
}

//Keep track of whose turn
var togglePlayer = function(){
  if(turn === 0){
    turn = 1;
  }
  else{
    turn = 0;
  }
  document.getElementById("gameMessage").innerText = players[turn] + "'s turn'"
}

//Win algorithmn - Check for the win
//  1  2   4    => 7
//  8  16  32   => 56
// 64 128 256   => 73

// 84 146 273    292, 448   Total num value is:  511.

//Wherever player clicks he scores a value and it adds up
var cellValueCount = function(divValue){
  playerValues[turn] += divValue;
}

var checkForWin = function(){
  for(var i = 0; i < winArray.length; i++){
    if((winArray[i] & playerValues[turn]) === winArray[i]){
      gameOver = true;
      document.getElementById("gameMessage").innerText = players[turn] + " wins!";
    }
  }
  if(((playerValues[0] + playerValues[1]) === 511) && (gameOver === false)){
    gameOver = true;
    document.getElementById("gameMessage").innerText = "It's a draw!";
  }
}
