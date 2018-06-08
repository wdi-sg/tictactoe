document.addEventListener('DOMContentLoaded',function(event){

allBoxes = document.querySelectorAll('span');

var a1 = document.querySelector('#a1');
var a2 = document.querySelector('#a2');
var a3 = document.querySelector('#a3');
var b1 = document.querySelector('#b1');
var b2 = document.querySelector('#b2');
var b3 = document.querySelector('#b3');
var c1 = document.querySelector('#c1');
var c2 = document.querySelector('#c2');
var c3 = document.querySelector('#c3');

var clickCount = 0;
if (clickCount === 0) {
	document.querySelector('.turn').innerHTML = "It is player 1's turn"
}

// hide reset button
hideBtn()

// when clickCount is even, (this.id)innerHTML = X, 
// when clickCount is odd, (this.id)innerHTML = O 
var displayStuff = function() {

	if (clickCount % 2 === 0) {
		this.innerHTML = 'X'
		document.querySelector('.turn').innerHTML = "It is player 2's turn"
	} else if (clickCount % 2 === 1) {
		this.innerHTML = 'O'
		document.querySelector('.turn').innerHTML = "It is player 1's turn"
	}
	clickCount = clickCount + 1;

	this.removeEventListener('click', displayStuff);	// stops the span box from recieving any more click displayStuff events

}

var checkSquares = function () {

	// getting values of elements
	var a1Val = a1.innerHTML;
	var a2Val = a2.innerHTML;
	var a3Val = a3.innerHTML;
	var b1Val = b1.innerHTML;
	var b2Val = b2.innerHTML;
	var b3Val = b3.innerHTML;
	var c1Val = c1.innerHTML;
	var c2Val = c2.innerHTML;
	var c3Val = c3.innerHTML;

	// comparing the values
	if ((a1Val ===  "X" || a1Val ===  "O") && a2Val === a1Val && a3Val === a1Val) {
		if (a1Val === "X") {
			console.log("Player 1 won")
		} else {
			console.log("Player 2 won")
		}
		gameOver();
	} else if ((b1Val ===  "X" || b1Val ===  "O") && b2Val === b1Val && b3Val === b1Val) {
		if (b1Val === "X") {
			console.log("Player 1 won")
		} else {
			console.log("Player 2 won")
		}
		gameOver();
	} else if ((c1Val ===  "X" || c1Val ===  "O") && c2Val === c1Val && c3Val === c1Val) {
		if (c1Val === "X") {
			console.log("Player 1 won")
		} else {
			console.log("Player 2 won")
		}
		gameOver();
	} else if ((a1Val ===  "X" || a1Val ===  "O") && b1Val === a1Val && c1Val === a1Val) {
		if (a1Val === "X") {
			console.log("Player 1 won")
		} else {
			console.log("Player 2 won")
		}
		gameOver();
	} else if ((a2Val ===  "X" || a2Val ===  "O") && b2Val === a2Val && c2Val === a2Val) {
		if (a2Val === "X") {
			console.log("Player 1 won")
		} else {
			console.log("Player 2 won")
		}
		gameOver();
	} else if ((a3Val ===  "X" || a3Val ===  "O") && b3Val === a3Val && c3Val === a3Val) {
		if (a3Val === "X") {
			console.log("Player 1 won")
		} else {
			console.log("Player 2 won")
		}
		gameOver();
	} else if ((a1Val ===  "X" || a1Val ===  "O") && b2Val === a1Val && c3Val === a1Val) {
		if (a1Val === "X") {
			console.log("Player 1 won")
		} else {
			console.log("Player 2 won")
		}
		gameOver();
	} else if ((a3Val ===  "X" || a3Val ===  "O") && b2Val === a3Val && c1Val === a3Val) {
		if (a3Val === "X") {
			console.log("Player 1 won")
		} else {
			console.log("Player 2 won")
		}
		gameOver();
	} else if (clickCount >= 9) {
		console.log("Nobody won")
		gameOver();
	}

}


var gameOver = function() {

	document.querySelector('.btn').setAttribute("style", "display: block"); // turn on reset button to reset game
	document.querySelector('.turn').setAttribute("style", "display: none"); // turn off turn display
	
	document.querySelector('.btn').addEventListener('click', resetGame); // when button is click, loads reset game functions

	for (var i = 0; i < allBoxes.length; i++) {
		allBoxes[i].removeEventListener('click', displayStuff)	// removes all eventslistener
	}

	for (var i = 0; i < allBoxes.length; i++) {
		allBoxes[i].removeEventListener('click', checkSquares)	// removes all eventslistener
	}

}

function hideBtn() {

	document.querySelector('.btn').setAttribute("style", "display: none");
}


var resetGame = function() {

	clickCount = 0;

	hideBtn (); // hide button
	document.querySelector('.turn').setAttribute("style", "display: block"); // turn on turn display

	for (var i = 0; i < allBoxes.length; i++) {
		allBoxes[i].innerHTML = ""
	}
	for (var i = 0; i < allBoxes.length; i++) {
		allBoxes[i].addEventListener('click', displayStuff)
	}
		for (var i = 0; i < allBoxes.length; i++) {
		allBoxes[i].addEventListener('click', checkSquares)
	}

	return clickCount;

}


// add eventlistener to all boxes
for (var i = 0; i < allBoxes.length; i++) {
	allBoxes[i].addEventListener('click', displayStuff)
}

for (var i = 0; i < allBoxes.length; i++) {
	allBoxes[i].addEventListener('click', checkSquares)
}


});
