var board = document.querySelector("table");

var turn = -1;
var current = null;

var playerTile = 0;

var player1 = [];
var player2 = [];

var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

function checkCurrentPlayer (player1, player2) {
	if (turn%2 === 1) {
		current = player1;
		playerChoice = playerTile;
	} else {
		current = player2;
		playerChoice = playerTile;
	}
}

function newChoice() {
	if (event.target.tagName === "td" && event.target.innerText === "") {
		turn++;
		checkCurrentPlayer("player1", "player2");
		playerTile = document.getElementById(event.target.id);
		console.log(current + "is playing his " + current + "turn.");
		if (current%2 === 1) {
			playerTile.innerHTML = "<p>X</p>";
		} else {
			playerTile.innerHTML = "<p>O</p>";
		}
		playerChoice.push(parseInt(playerTile.id));
	}
	console.log(current + "has played " + playerChoice);
}
if (turn >=5) {
	console.log(gameWon);
}

// checkCurrentPlayer();

function begin() {
	button1.style.visibility = "hidden";
    turn++;
    console.log("Begin playing!");
    gameBoard.addEventListener('click', newChoice)
}

function reset() {
	var clear = document.getElementsByTagName("td");
	for (var j=clear.length - 1; i>=0;i--) {
		clear.innerHTML = "";
	}
	turn = -1;
	current = null;
	playerTile = 0;
	player1 = [];
	player2 = [];
	button1.style.visibility = "visible";
	board.removeEventListener('click', begin);
}

function gameWon() {
	for (let set of winningCombos) {
		let winningSet = [];
		for (var i=0; i < set.length; i++) {
			if (playerChoice.includes(set[i])) {
			winningSet.push(set[i]);
				if (winningSet === 3);
				console.log("This is the winning set!");
				return true;
				}
			}
		}
		console.log("This is not the winning set!");
	}

// gameWon();


