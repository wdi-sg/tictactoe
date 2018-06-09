var turnCheck = document.getElementById('whosTurn');
var turnMessage = document.getElementById('status');

var a1 = document.getElementsByClassName('a1')[0];
var a2 = document.getElementsByClassName('a2')[0];
var a3 = document.getElementsByClassName('a3')[0];

var b1 = document.getElementsByClassName('b1')[0];
var b2 = document.getElementsByClassName('b2')[0];
var b3 = document.getElementsByClassName('b3')[0];

var c1 = document.getElementsByClassName('c1')[0];
var c2 = document.getElementsByClassName('c2')[0];
var c3 = document.getElementsByClassName('c3')[0];

window.onload = function() {
	toggleturn();
}

var toggleturn = function() {
	if(turnCheck.innerText == 'x'){
		turnCheck.innerText = 'o';
	} else {
		turnCheck.innerText = 'x';
	}
	turnMessage.innerText = turnCheck.innerText+ "'s turn!";
}

var checkIfWon = function() {
	if((a1.innerText == a2.innerText) && (a2.innerText == a3.innerText) && a1.innerText !== "") {
		alert(a1.innerText+ " won!");
	} else if((b1.innerText == b2.innerText) && (b2.innerText == b3.innerText) && b1.innerText !== "") {
		alert(b1.innerText+ " won!");
	} else if((c1.innerText == c2.innerText) && (c2.innerText == c3.innerText) && c1.innerText !== "") {
		alert(c1.innerText+ " won!");
	} else if((a1.innerText == b1.innerText) && (b1.innerText == c1.innerText) && a1.innerText !== "") {
		alert(a1.innerText+ " won!");
	} else if((a2.innerText == b2.innerText) && (b2.innerText == c2.innerText) && a2.innerText !== "") {
		alert(a2.innerText+ " won!");
	} else if((a3.innerText == b3.innerText) && (b3.innerText == c3.innerText) && a3.innerText !== "") {
		alert(a3.innerText+ " won!");
	} else if((a1.innerText == b2.innerText) && (b2.innerText == c3.innerText) && a1.innerText !== "") {
		alert(a1.innerText+ " won!");		
	} else if((a3.innerText == b2.innerText) && (b2.innerText == c1.innerText) && a3.innerText !== "") {
		alert(a3.innerText+ " won!");		
	} 
}

var processTurn = function(divs) {
	if(divs.innerText === '') {
		divs.innerText = turnCheck.innerText;
		toggleturn();
		checkIfWon();
	}
}
