console.log("start game");
// log clicks in blocks


var currentPlayer = "Player 1";
var playerId = 0;
var playCount = 0;

//set number of seconds to countdown
const timerDefault = 5;
var timerChange = timerDefault;
var tt;
var players = [
{
	player: "player1",
	name: "",
	score: null,
	row1: [null,null,null],
	row2: [null,null,null],
	row3: [null,null,null]
},
{
	player: "player2",
	name: "",
	score: null,
	row1: [null,null,null],
	row2: [null,null,null],
	row3: [null,null,null]
},
{
	player: "computer",
	name: "",
	score: null,
	row1: [null,null,null],
	row2: [null,null,null],
	row3: [null,null,null]
}
];

var winArray = [];
// computer random selects...
var autoPlay = function () {
console.log ("autoplay executed");
winArray = []
	// find the nulls in the computers stored info stick in a new array with nested
 // eg [[0,0], [2,2]]
  for (var i = 0; i <= 2; i++) {
	 for (var j = 0; j <= 2; j++) {
	 	var key = "row" + (i+1);
		if (players[2][key][j]===null){
		winArray.push(i +"," + j);	
			} 
		}
	}
console.log (winArray);
	// var roll1 = Math.floor( Math.random() * 3 );

}



var countDown = function () {
	tt = setInterval(countDisplay, 1000); 
}

var countDisplay = function () {
if (timerChange >= 0 ) {
	// console.log ('counter' + timerChange)
	document.getElementById('theTimer').innerHTML = timerChange;
}
	timerChange--;

	if (timerChange ===0 ){ 
autoPlay();
	}
}
var boxClicked = function (event) {
	clearInterval(tt);
	console.log("pressed:" + event);
	playCount++;

if (currentPlayer === "Player 1") {
	currentPlayer = "Player 2";
	playerId = 0;
} else {
	playerId = 1;
	currentPlayer = "Player 1"
}

timerChange =timerDefault;
countDown();
console.log(currentPlayer)
var location = event.target.id;
console.log(location)
recordPosition(playerId, location);
changeBox (playerId, location)
// change the player
document.querySelector('h2').innerHTML = "Your turn "+ currentPlayer + "\n<br>Good Luck!";
checkForWinner();
// game over
}

var gameOver = function (winner) {
	var score = players[winner].score;
	score ++;
	players[winner].score = score;
	winner++;
	console.log ("winner player: " +winner  +" score:"+ score)
		document.querySelector('h2').innerHTML = "WINNER, WINNER, CHICKEN DINNER!\n<br>Player " + winner + " has won";
 /// lock up the board
 	document.getElementsByClassName('board')[0].style.pointerEvents = 'none';
 	clearInterval(countDown);
 return true;
}

var changeBox = function (playerId, location) {
// switch off ability to click again
	document.getElementById(location).style.pointerEvents = 'none';
	if (playerId===0){
	document.getElementById(location).innerHTML = "X";
	// change it so it can't be clicked
	// document.getElementById(location).setAttribute("id", "chosen");
	} else {
	document.getElementById(location).innerHTML = "O";	
	// document.getElementById(location).setAttribute("id", "chosen");
	}


}

// var changePlayer = function (currentPlayer) {
// 	document.querySelector('h2').innerHTML = "Your turn "+ currentPlayer;
// }

var recordPosition = function (playerId, location) {
// update object for the player
console.log("PlayerId:" + playerId);
if (location === 'box1') {
	players[playerId].row1[0] = 'X'; 
// add to computer array too
	players[2].row1[0] = 'X';	
}
if (location === 'box2') {
	players[playerId].row1[1] = 'X'; 
	// add to computer array too
	players[2].row1[1] = 'X';
}
if (location === 'box3') {
	players[playerId].row1[2] = 'X'; 
	// add to computer array too
	players[2].row1[2] = 'X';
}
if (location === 'box4') {
	players[playerId].row2[0] = 'X'; 
	// add to computer array too
	players[2].row2[0] = 'X';
}
if (location === 'box5') {
	players[playerId].row2[1] = 'X';
	// add to computer array too
	players[2].row2[1] = 'X'; 
}
if (location === 'box6') {
	players[playerId].row2[2] = 'X'; 
	// add to computer array too
	players[2].row2[2] = 'X';
}
if (location === 'box7') {
	players[playerId].row3[0] = 'X'; 
	// add to computer array too
	players[2].row3[0] = 'X';
}
if (location === 'box8') {
	players[playerId].row3[1] = 'X';
	// add to computer array too
	players[2].row3[1] = 'X'; 
}
if (location === 'box9') {
	players[playerId].row3[2] = 'X'; 
	// add to computer array too
	players[2].row3[2] = 'X';
}
};


var box1 = document.querySelector('#box1');
box1.addEventListener('click', boxClicked );

var box2 = document.querySelector('#box2');
box2.addEventListener('click', boxClicked );

var box3 = document.querySelector('#box3');
box3.addEventListener('click', boxClicked );

var box4 = document.querySelector('#box4');
box4.addEventListener('click', boxClicked );

var box5 = document.querySelector('#box5');
box5.addEventListener('click', boxClicked );

var box6 = document.querySelector('#box6');
box6.addEventListener('click', boxClicked );

var box7 = document.querySelector('#box7');
box7.addEventListener('click', boxClicked );

var box8 = document.querySelector('#box8');
box8.addEventListener('click', boxClicked );

var box9 = document.querySelector('#box9');
box9.addEventListener('click', boxClicked );





var checkForWinner = function (){

	//loop through the 2 players
	for (var i = 0; i <= 1; i++) {
		// check horizontals
		if (players[i].row1[0] === "X" && players[i].row1[1] === "X" && players[i].row1[2] === "X"){
			console.log("player " + i + " won horizontal")
			// add to winner score and end game...
			return gameOver(i);

		} else if (players[i].row2[0] === "X" && players[i].row2[1] === "X" && players[i].row2[2] === "X"){
			console.log("player " + i + " won horizontal")
			return gameOver(i);
		} else if (players[i].row3[0] === "X" && players[i].row3[1] === "X" && players[i].row3[2] === "X"){
			console.log("player " + i + " won horizontal")
			return gameOver(i);
		}
		// check verticals
		 else if (players[i].row1[0] === "X" && players[i].row2[0] === "X" && players[i].row3[0] === "X"){
			console.log("player " + i + " won vertical")
			return gameOver(i);
		}  else if (players[i].row1[1] === "X" && players[i].row2[1] === "X" && players[i].row3[1] === "X"){
			console.log("player " + i + " won vertical")
			return gameOver(i);
		}  else if (players[i].row1[2] === "X" && players[i].row2[2] === "X" && players[i].row3[2] === "X"){
			console.log("player " + i + " won vertical")
			return gameOver(i);
		} 
		// check diagonals
		else if (players[i].row1[0] === "X" && players[i].row2[1] === "X" && players[i].row3[2] === "X"){
			console.log("player " + i + " won diagonal")
			return gameOver(i);
		} else if (players[i].row1[2] === "X" && players[i].row2[1] === "X" && players[i].row3[0] === "X"){
			console.log("player " + i + " won diagonal")
			return gameOver(i);
		} else if (playCount=== 9){
	// finalize
		document.querySelector('h2').innerHTML = "Tied - Game Over<br>\nTry Again!";
}

	}

}