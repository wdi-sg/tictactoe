// var board;
// const first = 'o';
// const other = 'x';
// const wincombo = [
// [0 ,1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6],
// ]
// const cell = document.querySelectorAll('.box');
// startGame();
// function startGame() {
// 	board = Array.from(Array(9).keys());
// 	for (var i = 0; i<cell.length; i++) {
// 		cell[i].innerText = '';
// 		cell[i].style.removeProperty('background-color');
// 		cell[i].addEventListener('click', turnClick, false);
// 	}
// }
// function turnClick(square) {
// 	console.log(square.target.id)
// }

// declaring functions for nought and cross//

var a = function () {

document.getElementById(1).innerText= turn;

};


var turn = "o";

var c = document.getElementsByTagName("div");
console.log(c);

for (i=1; i<10; i++) {

	if (i%2 == 0){
		turn = "x"
	} else {
		turn = "o"
	};

	document.getElementById(1).addEventListener("click", a);


	





	
