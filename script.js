
var player = 1;
var playerOne = 0;
var playerTwo = 0;
var board = [];

document.getElementById("playerOne").innerHTML = "Player 1: "+playerOne;
document.getElementById("playerTwo").innerHTML = "Player 2: "+playerTwo;

//find a way to use input value to create the board
function createBoard(a){
	for (var i=0;i<a;i++){
		var newDiv = document.createElement("p");
		for (var j=0;j<a;j++){
			var newBut = document.createElement("span");
			newBut.setAttribute("id",i.toString()+j.toString());
			//if empty boxes, then when i add a "x" or "o", the css alightment wont work
			newBut.innerHTML="&nbsp;";
			newDiv.appendChild(newBut);
		}
		document.getElementsByTagName("body")[0].appendChild(newDiv);
	}
	var buttonList = document.querySelectorAll("span");
	for (var i = 0; i<buttonList.length;i++){
	buttonList[i].addEventListener("click",buttonClick);
	}
	createArray(a);
}
//create array of certain size
function createArray(a){
	for (var i=0;i<a;i++){
		var array = [];
		for (var j=0;j<a;j++){
			array.push(" ");
		}
		board.push(array);
	}
	return board;
}

function playerTurn(player) {
	if (player%2!=0){
		return "o";
	}
	else if (player%2==0){
		return "x";
	}
}
//let b be the winning condition
function checkGame(b){
	var x = "x"
	var o = "o"
	var leftArray = [];
	var rightArray = [];
	var reverseCount = board.length-1;
	for (var i=0;i<board.length;i++){
		if (board[i].join('').includes(x.repeat(b))||board[i].join('').includes(o.repeat(b))){
			winGame(player);
			createBoard(board.length);
			break;
		}
		var array = [];
		for (var j=0;j<board.length;j++){
			array.push(board[j][i]);
			if (array.join('').includes(x.repeat(b))||array.join('').includes(o.repeat(b))){
			winGame(player);
			createBoard(board.length);
			break;
			}
		}
		//make diagonal to the left
		leftArray.push(board[i][i]);
		if (leftArray.join('').includes(x.repeat(b))||leftArray.join('').includes(o.repeat(b))){
			winGame(player);
			createBoard(board.length);
			break;
		}
		rightArray.push(board[i][reverseCount]);
		if (rightArray.join('').includes(x.repeat(b))||rightArray.join('').includes(o.repeat(b))){
			winGame(player);
			createBoard(board.length);
			break;
		}
		reverseCount --;
	}
}

function buttonClick(event){
	this.innerHTML = playerTurn(player);
	var move = this.innerHTML;
	var id = this.id;
	player += 1;
	board[parseInt(id.charAt(0))][parseInt(id.charAt(1))] = move;
	checkGame(3);
}

function winGame(player){
	if (player%2==0){
		alert("First player wins!")	
		playerOne += 1;
		document.getElementById("playerOne").innerHTML = "Player 1: "+playerOne;
	}
	else if (player%2!=0){
		alert("Second player wins!");
		playerTwo +=1;
		document.getElementById("playerTwo").innerHTML = "Player 2: "+playerTwo;
	}
}
//buttonList not defined anymore
