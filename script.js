
var board;
var humanPlyr = 'O';
var aiPlyr = 'X';
var winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

var box = document.querySelectorAll('.box');
startGame();

function startGame() {
	board = Array.from(Array(9).keys());
	for (var i = 0; i < box.length; i++) {
		box[i].addEventListener('click', turnClick, false);
	}
}
