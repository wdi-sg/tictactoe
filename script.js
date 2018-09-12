document.turn = "X";

function nextPlayer(symbol) {
	if (symbol.textContent == ""){
	symbol.textContent = document.turn;
	switchTurn();
	}
}

function switchTurn(symbol) {
	if (checkForWinner(document.turn)) {
		alert("Congrats, you have won!");
		for (var i =1; i <= 9; i++) { 
		document.getElementById("s" + i).textContent = "";
		}
	}
	else if (document.turn == "X") {
		document.turn = "O";
	} 
	else {
		document.turn = "X"
	}
}

function getBox(num){
	return document.getElementById("s" + num).textContent;
}

function checkRow(a, b, c, move) {
	var result = false;
	if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
		result = true;
	}
	return result;
}

function checkForWinner(move) {
	var result = false;
	if (checkRow(1, 2, 3, move) ||
		checkRow(4, 5, 6, move) ||
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)){
		result = true;
		}
	return result;
}

