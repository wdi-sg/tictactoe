// window.onload = function() {
	var col = document.getElementsByClassName("col");
	var spots = document.getElementsByClassName("grid");
	var button = document.getElementsByClassName("button")[0];
	var playing = 0;
	var player = {
		0: "",
		1: ""
	};


	// Change player

	var changePlayer = function() {
		if (playing === 0) {
			playing = 1;
		} else {
			playing = 0;
		}
	}

	// Check if all grids are clicked

	var checkEnd = function() {
		var carryOn = false;
		for (var i = 0; i < spots.length; i++) {
			if (spots[i].textContent === "") {
				carryOn = true;
			}
		}
		if (carryOn === false) {
			alert("Game has ended.");
		}
	}

	// Check if string has all 3 numbers

	var haveNum = function(str, a, b, c) {
		if (str.includes(a) && str.includes(b) && str.includes(c)) {
			return true;
		} else {
			return false;
		}
	}

	// Check if any player has won

	var checkWin = function() {
		for (chars in player) {
			str = player[chars];
			switch(true) {
				case (haveNum(str, "1", "2", "3") || haveNum(str, "4", "5", "6") || haveNum(str, "7", "8", "9") || haveNum(str, "1", "4", "7") || haveNum(str, "2", "5", "8") || haveNum(str, "3", "6", "9") || haveNum(str, "1", "5", "9") || haveNum(str, "3", "5", "7")):
					console.log("Player " + playing + " has won!");
					break;
				default:
					break;
			}
		}
	}

	// When player clicks...

	var doThis = function(el, text, color) {
		el.textContent = text;
		el.setAttribute("style", "color: " + color);
		var spot = el.getAttribute("id");
		player[playing] += spot;
		checkWin();
		checkEnd();
		changePlayer();
	}

	// Clear board and start game

	var clearBoard = function() {
		for (var i = 0; i < spots.length; i++) {
			spots[i].textContent = "";
		}
		console.log("game start");
		player[0] = "";
		player[1] = "";
		console.log(player);
	}

	



	button.addEventListener("click", clearBoard);

	for (var i = 0; i < col.length; i++) {
		col[i].addEventListener("click", function() {
			var grid = this.children[0];
			switch(true) {
				case (grid.textContent !== ""):
					alert("Please click on an empty grid.");
					break;
				case (playing === 0):
					doThis(grid, "X", "red");
					break;
				case (playing === 1):
					doThis(grid, "O", "green");
					break;
				default:
					break;
			}
		});
	}

// }
