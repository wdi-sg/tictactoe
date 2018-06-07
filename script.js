// STUCK! First round works fine, but after clicking reset btn, the player is required to click once more to show reset button


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

// hide reset button
hideBtn()

// when clickCount is even, (this.id)innerHTML = X, 
// when clickCount is odd, (this.id)innerHTML = O 
var displayStuff = function() {

	if (clickCount % 2 === 0) {
		this.innerHTML = 'X'
	} else if (clickCount % 2 === 1) {
		this.innerHTML = 'O'
	}
	clickCount = clickCount + 1;

	this.removeEventListener('click', displayStuff);
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
		gameOver();
	} else if ((b1Val ===  "X" || b1Val ===  "O") && b2Val === b1Val && b3Val === b1Val) {
		gameOver();
	} else if ((c1Val ===  "X" || c1Val ===  "O") && c2Val === c1Val && c3Val === c1Val) {
		gameOver();
	} else if ((a1Val ===  "X" || a1Val ===  "O") && b1Val === a1Val && c1Val === a1Val) {
		gameOver();
	} else if ((a2Val ===  "X" || a2Val ===  "O") && b2Val === a2Val && c2Val === a2Val) {
		gameOver();
	} else if ((a3Val ===  "X" || a3Val ===  "O") && b3Val === a3Val && c3Val === a3Val) {
		gameOver();
	} else if ((a1Val ===  "X" || a1Val ===  "O") && b2Val === a1Val && c3Val === a1Val) {
		gameOver();
	} else if ((a3Val ===  "X" || a3Val ===  "O") && b2Val === a3Val && c1Val === a3Val) {
		gameOver();
	} else if (clickCount >= 9) {
		gameOver();
	}

}


var gameOver = function() {
	
	console.log("game over");

	document.querySelector('.btn').setAttribute("style", "display: block");
	
	document.querySelector('.btn').addEventListener('click', resetGame);

	for (var i = 0; i < allBoxes.length; i++) {
		allBoxes[i].removeEventListener('click', displayStuff)
	}

	for (var i = 0; i < allBoxes.length; i++) {
		allBoxes[i].removeEventListener('click', checkSquares)
	}

}

function hideBtn() {

	document.querySelector('.btn').setAttribute("style", "display: none");
}


var resetGame = function() {

	clickCount = 0;

	hideBtn ()

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
