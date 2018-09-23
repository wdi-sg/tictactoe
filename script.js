//Define variable for current turn.
var currentTurn = "player 1";

//Define var for getting box id from document.
var boxOne = document.getElementById("1");
var boxTwo = document.getElementById("2");
var boxThree = document.getElementById("3");
var boxFour = document.getElementById("4");
var boxFive = document.getElementById("5");
var boxSix = document.getElementById("6");
var boxSeven = document.getElementById("7");
var boxEight = document.getElementById("8");
var boxNine = document.getElementById("9");

 //Add event listener and function to run when click is heard.
boxOne.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxOne.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxOne.textContent = "O";
	currentTurn = "player 1";
	};
	checkWins();
})

//Box 2 event listener
boxTwo.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxTwo.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxTwo.textContent = "O";
	currentTurn = "player 1";
	};
	checkWins();
})

//Box 3 event listener
boxThree.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxThree.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxThree.textContent = "O";
	currentTurn = "player 1";
	};
	checkWins();
})

// //Box 4 event listener.
boxFour.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxFour.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxFour.textContent = "O";
	currentTurn = "player 1";
	};
	checkWins();
})

// //Box 5 event listener.
boxFive.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxFive.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxFive.textContent = "O";
	currentTurn = "player 1";
	};
	checkWins();
})

//Box 6 event listener.
boxSix.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxSix.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxSix.textContent = "O";
	currentTurn = "player 1";
	};
	checkWins();
})

//box 7 event listener
boxSeven.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxSeven.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxSeven.textContent = "O";
	currentTurn = "player 1";
	};
	checkWins();
})

//box 8 event listener
boxEight.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxEight.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxEight.textContent = "O";
	currentTurn = "player 1";
	};
	checkWins();
})

//box 9 event listener
boxNine.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxNine.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxNine.textContent = "O";
	currentTurn = "player 1";
	};
	checkWins();
})

//Check for all hard coded wins.
var winningCombos = [ 
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7]
];

//Check wins against the hardcoded options above.
var checkWins = function() {
	if ((boxOne.textContent !== "") && (boxOne.textContent === boxTwo.textContent) && (boxTwo.textContent === boxThree.textContent)) {
		alert("You win this game!");
		// clearBoard();
	} else if ((boxFour.textContent !== "") && (boxFour.textContent === boxFive.textContent) && (boxFive.textContent === boxSix.textContent)) {
		alert("You win this game!");
		// clearBoard();
	} else if ((boxSeven.textContent !== "") &&(boxSeven.textContent === boxEight.textContent) && (boxEight.textContent === boxNine.textContent)) {
		alert("You win this game!");
		// clearBoard();
	} else if ((boxOne.textContent !== "") && (boxOne.textContent === boxFour.textContent) && (boxFour.textContent === boxSeven.textContent)) {
		alert("You win this game!");
		// clearBoard();
	} else if ((boxTwo.textContent !== "") && (boxTwo.textContent === boxFive.textContent) && (boxFive.textContent === boxEight.textContent)) {
		alert("You win this game!");
		// clearBoard();
	} else if ((boxThree.textContent !== "") && (boxThree.textContent === boxSix.textContent) && (boxSix.textContent === boxNine.textContent)) {
		alert("You win this game!");
		// clearBoard();
	} else if ((boxOne.textContent !== "") && (boxOne.textContent === boxFive.textContent) && (boxFive.textContent === boxNine.textContent)) {
		alert("You win this game!");
		// clearBoard();
	} else if ((boxThree.textContent !== "") && (boxThree.textContent === boxFive.textContent) && (boxFive.textContent === boxSeven.textContent)) {
		alert("You win this game!");
		// clearBoard();
	} 
};

//clear board to start next game
var clearBoard = function() {
	boxOne.textContent = "";
	boxTwo.textContent = "";
	boxThree.textContent = "";
	boxFour.textContent = "";
	boxFive.textContent = "";
	boxSix.textContent = "";
	boxSeven.textContent = "";
	boxEight.textContent = "";
	boxNine.textContent = "";
};

//add event listener to reset button to clear board.
var reset = document.getElementById("reset");
reset.addEventListener("click", clearBoard);






