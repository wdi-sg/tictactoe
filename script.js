
var gameEnd = false;
var button = document.querySelector(".button");

// text location for all boxes
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var b3 = document.querySelector("#b3");
var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");

// position of squarebox
var square = document.querySelectorAll(".square");


var game = {
	playerOne: "X",
	playerTwo: "O",
	turn: 1,
};

var click = "";

var checkTurn = function() {
	if (game.turn % 2 == 1) {
		click = "X";
	} else {
		click = "O";
	}
};

// every click increase game.turn function
for (i=0; i<square.length; i++) {
square[i].onclick = function() {
	checkTurn(game.turn);
	console.log("Game turn is " + game.turn);
	game.turn++;
	if (game.turn == 10) {
		alert("Draw game.");
		gameEnd = true;
	};
}
};

// check for win condition

var checkForWin = function() {
	// column
	if (a1.innerText == "X" && a2.innerText == "X") {
		if(a3.innerText == "X") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (a1.innerText == "O" && a2.innerText == "O") {
		if(a3.innerText == "O") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (b1.innerText == "X" && b2.innerText == "X") {
		if(b3.innerText == "X") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (b1.innerText == "O" && b2.innerText == "O") {
		if(b3.innerText == "O") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (c1.innerText == "X" && c2.innerText == "X") {
		if(c3.innerText == "X") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (c1.innerText == "O" && c2.innerText == "O") {
		if(c3.innerText == "O") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	// rows
	if (a1.innerText == "X" && b1.innerText == "X") {
		if(c1.innerText == "X") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (a1.innerText == "O" && b1.innerText == "O") {
		if(c1.innerText == "O") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (a2.innerText == "X" && b2.innerText == "X") {
		if(c2.innerText == "X") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (a2.innerText == "O" && b2.innerText == "O") {
		if(c2.innerText == "O") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (a3.innerText == "X" && b3.innerText == "X") {
		if(c3.innerText == "X") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (a3.innerText == "O" && b3.innerText == "O") {
		if(c3.innerText == "O") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	// diagionals
	if (a1.innerText == "X" && b2.innerText == "X") {
		if(c3.innerText == "X") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (a1.innerText == "O" && b2.innerText == "O") {
		if(c3.innerText == "O") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (a3.innerText == "X" && b2.innerText == "X") {
		if(c1.innerText == "X") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
	if (a3.innerText == "O" && b2.innerText == "O") {
		if(c1.innerText == "O") {
			alert("Game has ended.");
			gameEnd = true;
			}	
		}
};

// Do not know why went wrong. gameEnd always true when i run the page.
// if (gameEnd = true) {
// 	var prompt = prompt("Do you want to restart the game?\n If yes, enter true, if no enter false.");
// 	if (prompt == "true") {
// 		document.location.reload();
// 	}
// };



document.addEventListener('DOMContentLoaded',function(){
  // all yur code goes here

// click target is square[i]
// need to change square[i].innerText to "X" or "O"

square[0].addEventListener("click", function() {
	square[0].innerText = click;
	checkForWin();
});

square[1].addEventListener("click", function() {
	square[1].innerText = click;
	checkForWin();
});

square[2].addEventListener("click", function() {
	square[2].innerText = click;
	checkForWin();
});

square[3].addEventListener("click", function() {
	square[3].innerText = click;
	checkForWin();
});

square[4].addEventListener("click", function() {
	square[4].innerText = click;
	checkForWin();
});

square[5].addEventListener("click", function() {
	square[5].innerText = click;
	checkForWin();
});

square[6].addEventListener("click", function() {
	square[6].innerText = click;
	checkForWin();
});

square[7].addEventListener("click", function() {
	square[7].innerText = click;
	checkForWin();
});

square[8].addEventListener("click", function() {
	square[8].innerText = click;
	checkForWin();
});

// start game when button is pressed
button.addEventListener("click", function() {
	button.style.display = "none";
	gameStart = true;
})

});







