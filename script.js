var board = document.querySelector("table");

var turn = -1;
var current = null;

var playerTile = 0;

var player1 = [];
var player2 = [];

var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

function check

function checkCurrentPlayer (player1, player2) {
	if (turn%2 === 1) {
		current = player1;
		playerChoice = playerTile;
	} else {
		current = player2;
		playerChoice = playerTile;
	}
}

// checkCurrentPlayer();

function gameWon() {
	for (let set of winningCombos) {
		let winningSet = [];
		for (var i=0; i < set.length; i++) {
			if (playerChoice.includes(set[i]));
			
		}

	}
}

gameWon();
