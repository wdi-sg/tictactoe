// var board = document.querySelector("table");

// var turn = -1;
// var current = null;

// var playerTile = 0;

// var player1 = [];
// var player2 = [];

// var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

// function checkCurrentPlayer (player1, player2) {
// 	if (turn%2 === 1) {
// 		current = player1;
// 		playerChoice = playerTile;
// 	} else {
// 		current = player2;
// 		playerChoice = playerTile;
// 	}
// }

// function newChoice() {
// 	if (event.target.tagName === "td" && event.target.innerText === "") {
// 		turn++;
// 		checkCurrentPlayer("player1", "player2");
// 		playerTile = document.getElementById(event.target.tagName);
// 		console.log(current + "is playing his " + current + "turn.");
// 		if (current%2 === 1) {
// 			playerTile.innerHTML = "<p>X</p>";
// 		} else {
// 			playerTile.innerHTML = "<p>O</p>";
// 		}
// 		playerChoice.push(parseInt(playerTile.tagName));
// 	}
// 	console.log(current + "has played " + playerChoice);
// }
// if (turn >=5) {
// 	console.log(gameWon);
// }

// // checkCurrentPlayer();

// function begin() {
// 	button1.style.visibility = "hidden";
//     turn++;
//     console.log("Begin playing!");
//     gameBoard.addEventListener('click', newChoice)
// }

// function reset() {
// 	var clear = document.getElementsByTagName("td");
// 	for (var j=clear.length - 1; i>=0;i--) {
// 		clear.innerHTML = "";
// 	}
// 	turn = -1;
// 	current = null;
// 	playerTile = 0;
// 	player1 = [];
// 	player2 = [];
// 	button1.style.visibility = "visible";
// 	board.removeEventListener('click', begin);
// }

// function gameWon() {
// 	for (let set of winningCombos) {
// 		let winningSet = [];
// 		for (var i=0; i < set.length; i++) {
// 			if (playerChoice.includes(set[i])) {
// 			winningSet.push(set[i]);
// 				if (winningSet === 3);
// 				console.log("This is the winning set!");
// 				return true;
// 				}
// 			}
// 		}
// 		console.log("This is not the winning set!");
// 	}

// // gameWon();

// var board = document.querySelector("table");
var tile = document.querySelectorAll("td");
// var row = document.querySelector("tr");

// var turn = 0;
var currentPlayer = 1;

// var player1 = [];
// var player2 = [];

var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

function checkWinner() {
	if (currentPlayer = winningCombos[0]) {
	console.log("You won!")
	} else if (currentPlayer = winningCombos[1]) {
	console.log("You won!")
	} else if (currentPlayer = winningCombos[2]) {
	console.log("You won!")
	} else if (currentPlayer = winningCombos[3]) {
	console.log("You won!")
	} else if (currentPlayer = winningCombos[4]) {
	console.log("You won!")
	} else if (currentPlayer = winningCombos[5]) {
	console.log("You won!")
	} else if (currentPlayer = winningCombos[6]) {
	console.log("You won!")
	} else if (currentPlayer = winningCombos[7]) {
	console.log("You won!")
	} else {
	console.log("It's a draw!")
	}
}
checkWinner();

function playGame() {
	for (var i = 0; i < tile.length; i++) {
       tile[i].addEventListener('click', function(event) {
           if (currentPlayer % 2 == 1) {
               event.target.innerHTML = "X";
               currentPlayer++;
               checkWinner();
   			} else if (currentPlayer % 2 == 0) {
       			event.target.innerHTML = "O";
       			currentPlayer++;
       			 checkWinner();
   			}
   		});
   	}
}

playGame();

