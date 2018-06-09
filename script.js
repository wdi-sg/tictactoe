var gameBox = document.getElementsByClassName("game-box");    // get all gamebox in an ARRAY.

var startButton = document.getElementById("clear-board");

var players = {    // object to keep track of individual Player's SELECTED gamebox
	0: "",		// array index [0]
	1: ""		// array index [1]
};

var gameTurn = 1;  // determine which Player's TURN


//**Clears board for new game**

// var clearBoard = function() {
// 	for(var i = 0; i < gameBox.length; i++) {
// 		gameBox[i].textContent = ""
// 	}
// 	console.log("Start Game");
// 	alert("Game Starts!");
// 	players[0] = "";
// 	players[1] = "";
// 	console.log(players);
// };

// startButton.addEventListener("click", clearBoard);

//**Functions to create**

// change Player's TURN after a player completes and action.

var changeTurn = function() {
	if(gameTurn === 0) {
		gameTurn += 1
	}

	else {
		gameTurn -= 1
	}
	return gameTurn;
};

// check for DRAW

var checkDraw = function() {
	var fullBoard = "Game continues"

	for(var i = 0; gameBox.length; i++) {
		if(gameBox[i].textContent === "") {
			console.log(fullBoard);
		} 
		else {
			alert("Game is a DRAW!");
		}
	}
};

// check if Player's STRING has 3 selected gameboxes

var completeSet = function(str, action1, action2, action3) {
	if(str.includes(action1) && str.includes(action2) && str.includes(action3)) {
		return true
	}
	else {
		return false
	}
};

//check for WIN

var checkWin = function() {
	for(keys in players) {
		str = players[key]
		if(completeSet(str, "a1", "a2", "a3") || completeSet(str, "b1", "b2", "b3") || completeSet(str, "c1", "c2", "c3") || completeSet(str, "a1", "b1", "c1") || completeSet(str, "a2", "b2", "c2") || completeSet(str, "a3", "b3", "c3") || completeSet(str, "a1", "b2", "c3") || completeSet(str, "a3", "b2", "c1")) {
			console.log("Player" + gameTurn + 1 + "wins the game!");
			alert("Player" + gameTurn + 1 + "wins the game!");
		}

	}
};


// **When Player performs an action on an individual game box.**

var playerAction = function(element, symbol, inputColor) {     
	element.textContent = symbol;	// input X or O symbol into gameBox
	element.setAttribute = ("style", "color: " + inputColor); // change text color
	var selectBox = getAttribute("id"); 
	players[gameTurn] += selectBox	// add selected gamebox into Player's STRING of ACTIONS based on GAMETURN
	checkDraw();	// check for draw before check for win
	checkWin();
	changeTurn();	// change to next Player's turn
};

// check if game box is empty or occupied.

for(var i = 0; i < gameBox.length; i++) {
	gameBox[i].addEventListener("click", function() {     //note gamebox is in array; add event listender to every gamebox
		if(gameBox.textContent !== "") {
			console.log("Please select an empty box");
			alert("Please select an empty box");
		}
		if(gameTurn === 1) {
			playerAction(gameBox, "X", "green");   // Player 1 is symbol "X"
		}
		else if(gameTurn === 2) {
			playerAction(gameBox, "O", "orange");	// Player 2 is symbol "O"
		}
	});
};

