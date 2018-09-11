//Define variable for current turn.
var currentTurn = "player 1";

//Define var for getting box id from document.
var boxOne = document.getElementById("1");

 //Add event listener and function to run when click is heard.
boxOne.addEventListener("click", function () {
	if (currentTurn === "player 1") {
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
	if (currentTurn === "player 1") {
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
	if (currentTurn === "player 1") {
	boxThree.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxThree.textContent = "O";
	currentTurn = "player 1";
	}
})

// //Box 4 event listener.
var boxFour = document.getElementById("4");
boxFour.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxFour.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxFour.textContent = "O";
	currentTurn = "player 1";
	}
})

// //Box 5 event listener.
var boxFive = document.getElementById("5");
boxFive.addEventListener("click", function () {
	if (currentTurn === "player 1") {
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
	if (currentTurn === "player 1") {
	boxSix.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxSix.textContent = "O";
	currentTurn = "player 1";
	}
})

//box 7 event listener
var boxSeven = document.getElementById("7");
boxSeven.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxSeven.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxSeven.textContent = "O";
	currentTurn = "player 1";
	}
})

//box 8 event listener
var boxEight = document.getElementById("8");
boxEight.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxEight.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxEight.textContent = "O";
	currentTurn = "player 1";
	}
})

//box 9 event listener
var boxNine = document.getElementById("9");
boxNine.addEventListener("click", function () {
	if (currentTurn === "player 1") {
	boxNine.textContent = "X";
	currentTurn = "player 2";
	} else {
	boxNine.textContent = "O";
	currentTurn = "player 1";
	}
})







