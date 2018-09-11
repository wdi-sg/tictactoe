//Define variable for current turn.
var currentTurn = "playerOne";

//Define var for getting box id from document.
var boxOne = document.getElementById("1");

 //Add event listener and function to run when click is heard.
boxOne.addEventListener("click", function () {
	if (currentTurn === "playerOne") {
	boxOne.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxOne.textContent = "O";
	currentTurn = "player 1";
	}
})

//Box 2 event listener
var boxTwo = document.getElementById("2");
boxTwo.addEventListener("click", function () {
	if (currentTurn === "playerOne") {
	boxTwo.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxTwo.textContent = "O";
	currentTurn = "player 1";
	}
})

//Box 3 event listener
var boxThree = document.getElementById("3");
boxThree.addEventListener("click", function () {
	var boxThree = document.getElementById("3");
		if (currentTurn === "playerOne") {
		boxThree.textContent = "X";
		currentTurn = "player 2";
		} else {
		boxThree.textContent = "O";
		currentTurn = "player 1";
		}
})

//Box 4 event listener.
var boxFour = document.getElementById("4");
boxFour.addEventListener("click", function () {
	var boxFour = document.getElementById("4");
		if (currentTurn === "playerOne") {
		boxFour.textContent = "X";
		currentTurn = "player 2";
		} else {
		boxFour.textContent = "O";
		currentTurn = "player 1";
		}
})

//Box 5 event listener.
var boxFive = document.getElementById("5");
boxFive.addEventListener("click", function () {
	var boxFive = document.getElementById("5");
		if (currentTurn === "playerOne") {
		boxFive.textContent = "X";
		currentTurn = "player 2";
		} else {
		boxFive.textContent = "O";
		currentTurn = "player 1";
		}
})

//Box 6 event listener.
var boxSix = document.getElementById("6");
boxSix.addEventListener("click", function () {
	var boxSix = document.getElementById("6");
		if (currentTurn === "playerOne") {
		boxSix.textContent = "X";
		currentTurn = "player 2";
		} else {
		boxSix.textContent = "O";
		currentTurn = "player 1";
		}
})

var boxSeven = document.getElementById("7");
boxSeven.addEventListener("click", function () {
	var boxSeven = document.getElementById("7");
		if (currentTurn === "playerOne") {
		boxSeven.textContent = "X";
		currentTurn = "player 2";
		} else {
		boxSeven.textContent = "O";
		currentTurn = "player 1";
		}
})

var boxEight = document.getElementById("8");
boxEight.addEventListener("click", function () {
	var boxEight = document.getElementById("8");
		if (currentTurn === "playerOne") {
		boxEight.textContent = "X";
		currentTurn = "player 2";
		} else {
		boxEight.textContent = "O";
		currentTurn = "player 1";
		}
})

var boxNine = document.getElementById("9");
boxNine.addEventListener("click", function () {
	var boxNine = document.getElementById("9");
		if (currentTurn === "playerOne") {
		boxNine.textContent = "X";
		currentTurn = "player 2";
		} else {
		boxNine.textContent = "O";
		currentTurn = "player 1";
		}
})







