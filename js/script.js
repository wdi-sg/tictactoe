console.log("start game");
// log clicks in blocks


var currentPlayer = "Player 1";
var playerId = 0;

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