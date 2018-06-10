window.onload = function() {
var gameBox = document.getElementsByClassName("game-box");    // get all gamebox in an ARRAY.

var startButton = document.getElementById("clear-board");

var players = {    // object to keep track of individual Player's SELECTED gamebox
	0: "",		// array index [0]
	1: ""		// array index [1]
};

var gameTurn = 0;  // determine which Player's TURN
};

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
	var notFull = "Game continues"

	for(var i = 0; gameBox.length; i++) {
		if(gameBox[i].textContent === "") {
			console.log(notFull);
		} 
		else {
			alert("Game is a DRAW!");
		}
	}
};

// check if Player's STRING has 3 selected gameboxes

var completeSet = function(str, action1, action2, action3) {	// check if OBJECT keys string contain min. of 3 element.
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
		str = players[keys]		// loop through keys in OBJECT and place it in a variable
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
	var selectBox = element.getAttribute("id"); 
	players[gameTurn] += selectBox	// add selected gamebox Id into Player's STRING based on GAMETURN
	checkDraw();	// check for draw before check for win
	checkWin();
	changeTurn();	// change to next Player's turn
};

// check if game box is empty or occupied.

for(var i = 0; i < gameBox.length; i++) {	// loop through gameBox array
	gameBox[i].addEventListener("click", function() {     //note gameBox is in array; add event listender to every gamebox
		if(box.textContent !== "") {
			console.log("Please select an empty box");
			alert("Please select an empty box");
		}
		if(gameTurn === 0) {
			playerAction(gameBox, "X", "green");   // Player 0 is symbol "X"
		}
		else if(gameTurn === 1) {
			playerAction(gameBox, "O", "orange");	// Player 1 is symbol "O"
		}
	});
};

