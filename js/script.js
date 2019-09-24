console.log("start game");
// log clicks in blocks


var currentPlayer = "Player 1";
var playerId = 0;
var playCount = 0;

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
}
];




var boxClicked = function (event) {
		console.log("pressed:" + event);
		playCount++;

if (currentPlayer === "Player 1") {
	currentPlayer = "Player 2";
	playerId = 0;
} else {
	playerId = 1;
	currentPlayer = "Player 1"
}
console.log(currentPlayer)
var location = event.target.id;
console.log(location)
recordPosition(playerId, location);
changeBox (playerId, location)
changePlayer (currentPlayer);
// game over
if (playCount=== 9){
	// finalize
		document.querySelector('h2').innerHTML = "Game Over";
}
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

var changePlayer = function (currentPlayer) {
	document.querySelector('h2').innerHTML = "Your turn "+ currentPlayer;
}

var recordPosition = function (playerId, location) {
// update object for the player
console.log("PlayerId:" + playerId);
if (location === 'box1') {
	players[playerId].row1[0] = 'X'; 
}
if (location === 'box2') {
	players[playerId].row1[1] = 'X'; 
}
if (location === 'box3') {
	players[playerId].row1[2] = 'X'; 
}
if (location === 'box4') {
	players[playerId].row2[0] = 'X'; 
}
if (location === 'box5') {
	players[playerId].row2[1] = 'X'; 
}
if (location === 'box6') {
	players[playerId].row2[2] = 'X'; 
}
if (location === 'box7') {
	players[playerId].row3[0] = 'X'; 
}
if (location === 'box8') {
	players[playerId].row3[1] = 'X'; 
}
if (location === 'box9') {
	players[playerId].row3[2] = 'X'; 
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



var winningCombos = {

	// HORIZONTAL
	//  R0,0 R0,1 R0,2
	//  R1,0 R1,1 R1,2
	//  R2,0 R2,1 R2,2

	// VERTICAL
	//  R0,0 R1,0 R2,0
	//  R0,1 R1,1 R2,1
	//  R0,2 R1,2 R2,2

	// DIAGONAL
	//  R0,0 R1,1 R2,2
	//  R0,2 R1,1 R2,0

}