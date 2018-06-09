var box0 = document.getElementById('a0');
var box1 = document.getElementById('a1');
var box2 = document.getElementById('a2');
var box3 = document.getElementById('a3');
var box4 = document.getElementById('a4');
var box5 = document.getElementById('a5');
var box6 = document.getElementById('a6');
var box7 = document.getElementById('a7');
var box8 = document.getElementById('a8');
var all = document.getElementsByClassName('box');
var all2 = document.getElementsByClassName('abc');

	var turn = 0;
	
	var change = function() {
	
	var who = function() {
		if (turn % 2 == 0) {
			alert('O is the winner!');
		} else {
			alert('X is the winner!');
		};
	};		

	var draw = function() {
		alert('IT\'S A DRAW');
	};

	var winCheck = function() {
		if (box0.textContent == box1.textContent && box1.textContent == box2.textContent) {
			setTimeout(who, 250);
		} else if (box3.textContent == box4.textContent && box4.textContent == box5.textContent) {
			setTimeout(who, 250);
		} else if (box6.textContent == box7.textContent && box7.textContent == box8.textContent) {
			setTimeout(who, 250);
		} else if (box0.textContent == box3.textContent && box3.textContent == box6.textContent) {
			setTimeout(who, 250);
		} else if (box1.textContent == box4.textContent && box4.textContent == box7.textContent) {
			setTimeout(who, 250);
		} else if (box2.textContent == box5.textContent && box5.textContent == box8.textContent) {
			setTimeout(who, 250);
		} else if (box0.textContent == box4.textContent && box4.textContent == box8.textContent) {
			setTimeout(who, 250);
		} else if (box2.textContent == box4.textContent && box4.textContent == box6.textContent) {	
			setTimeout(who, 250);
		} else if (turn == 9) {
			setTimeout(draw, 250);
		};
	};

		if ((this.innerHTML != '<h1>X</h1>') && (this.innerHTML != '<h1>O</h1>')) {
			if ((turn == 0) || (turn %2 == 0)) {
				this.innerHTML = "<h1>X</h1>";
				turn += 1;
				winCheck();
			} else {
				this.innerHTML = "<h1>O</h1>";
				turn += 1;
				winCheck();
			};
		};	
	};
	
	
	
	for (var i = 0; i < all.length; i++) {
		all[i].addEventListener('click', change);
	};