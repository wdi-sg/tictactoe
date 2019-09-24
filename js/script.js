console.log("start game");
// log clicks in blocks


var currentPlayer = "player1";


var boxClicked = function (event) {
		console.log("pressed:" + event);

if (currentPlayer === "player1") {
	currentPlayer = "player2";
} else {
	currentPlayer = "player1"
}
console.log(currentPlayer)
}



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