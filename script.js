var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

a1.addEventListener('click', function() {
	if(a1.innerText = '1') {
		a1.innerText = 'X';
	} else if (a1.innerText = "X") {
		a1.innerText = "O";
	} else if (a1.innerText = "O") {
		a1.innerText = 'X';
	}
})

a2.addEventListener('click', function() {
	if(a2.innerText = '2') {
		a2.innerText = 'X';
	} else if (a2.innerText = "X") {
		a2.innerText = "O";
	} else if (a2.innerText = "O") {
		a2.innerText = 'X';
	}
})

a3.addEventListener('click', function() {
	if(a3.innerText = '3') {
		a3.innerText = 'X';
	} else if (a3.innerText = "X") {
		a3.innerText = "O";
	} else if (a3.innerText = "O") {
		a3.innerText = 'X';
	}
})

b1.addEventListener('click', function() {
	if(b1.innerText = '4') {
		b1.innerText = 'X';
	} else if (b1.innerText = "X") {
		b1.innerText = "O";
	} else if (b1.innerText = "O") {
		b1.innerText = 'X';
	}
})

b2.addEventListener('click', function() {
	if(b2.innerText = '5') {
		b2.innerText = 'X';
	} else if (b2.innerText = "X") {
		b2.innerText = "O";
	} else if (b2.innerText = "O") {
		b3.innerText = 'X';
	}
})

b3.addEventListener('click', function() {
	if(b3.innerText = '6') {
		b3.innerText = 'X';
	} else if (b3.innerText = "X") {
		b3.innerText = "O";
	} else if (b3.innerText = "O") {
		b3.innerText = 'X';
	}
})


c1.addEventListener('click', function() {
	if(c1.innerText = '7') {
		c1.innerText = 'X';
	} else if (c1.innerText = "X") {
		c1.innerText = "O";
	} else if (c1.innerText = "O") {
		c1.innerText = 'X';
	}
})

c2.addEventListener('click', function() {
	if(c2.innerText = '8') {
		c2.innerText = 'X';
	} else if (c2.innerText = "X") {
		c2.innerText = "O";
	} else if (c2.innerText = "O") {
		c2.innerText = 'X';
	}
})

c3.addEventListener('click', function() {
	if(c3.innerText = '9') {
		c3.innerText = 'X';
	} else if (c3.innerText = "X") {
		c3.innerText = "O";
	} else if (c3.innerText = "O") {
		c3.innerText = 'X';
	}
})

if (a1.innerText == 'X' && b2.innerText == 'X' && c3.innerText == 'X')||(c1.innerText == 'X' && b2.innerText == 'X' && a3.innerText == 'X')||
	(a1.innerText == 'X' && a2.innerText == 'X' && a3.innerText == 'X')||(b1.innerText == 'X' && b2.innerText == 'X' && b3.innerText == 'X')||
	(c1.innerText == 'X' && c2.innerText == 'X' && c3.innerText == 'X')||(a1.innerText == 'X' && b1.innerText == 'X' && c1.innerText == 'X')||
	(a2.innerText == 'X' && b2.innerText == 'X' && c2.innerText == 'X')||(c1.innerText == 'X' && c2.innerText == 'X' && c3.innerText == 'X'){
		alert('Player X Wins!')
	} else if (a1.innerText == 'O' && b2.innerText == 'O' && c3.innerText == 'O')||(c1.innerText == '0' && b2.innerText == 'O' && a3.innerText == 'O')||
	(a1.innerText == 'O' && a2.innerText == 'O' && a3.innerText == 'O')||(b1.innerText == '0' && b2.innerText == 'O' && b3.innerText == 'O')||
	(c1.innerText == 'O' && c2.innerText == 'O' && c3.innerText == 'O')||(a1.innerText == '0' && b1.innerText == 'O' && c1.innerText == 'O')||
	(a2.innerText == 'O' && b2.innerText == 'O' && c2.innerText == 'O')||(c1.innerText == '0' && c2.innerText == '0' && c3.innerText == 'O') {
		alert('Player 0 Wins!')
	}

// console.log(game)