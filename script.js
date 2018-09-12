
var player = 1;
var playerOne = 0;
var playerTwo = 0;

document.getElementById("playerOne").innerHTML = "Player 1: "+playerOne;
document.getElementById("playerTwo").innerHTML = "Player 2: "+playerTwo;

function playerTurn(player) {
	if (player%2!=0){
		return "o";
	}
	else if (player%2==0){
		return "x";
	}
}

function buttonClick(event){
	this.innerHTML = playerTurn(player);
	player += 1;
	if ((one.innerHTML == two.innerHTML)&&(two.innerHTML == three.innerHTML)){
		winGame(player);
		restart();
	}
	if ((four.innerHTML == five.innerHTML)&&(five.innerHTML == six.innerHTML)){
		winGame(player);
		restart();
	}
	if ((seven.innerHTML == eight.innerHTML)&&(eight.innerHTML == nine.innerHTML)){
		winGame(player);
		restart();
	}
	if ((one.innerHTML == two.innerHTML)&&(two.innerHTML == three.innerHTML)){
		winGame(player);
		restart();
	}
	if ((two.innerHTML == five.innerHTML)&&(five.innerHTML == eight.innerHTML)){
		winGame(player);
		restart();
	}
	if ((one.innerHTML == four.innerHTML)&&(four.innerHTML == seven.innerHTML)){
		winGame(player);
		restart();
	}
	if ((three.innerHTML == six.innerHTML)&&(six.innerHTML == nine.innerHTML)){
		winGame(player);
		restart();
	}
	if ((one.innerHTML == five.innerHTML)&&(five.innerHTML == nine.innerHTML)){
		winGame(player);
		restart();
	}
	if ((three.innerHTML == five.innerHTML)&&(five.innerHTML == seven.innerHTML)){
		winGame(player);
		restart();
	}
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

function restart(){
	for (var i =0;i<buttonList.length;i++){
		buttonList[i].innerHTML = i+1;
		player = 1;
	}
}

var buttonList = document.getElementsByTagName("button");

for (var i = 0; i<buttonList.length;i++){
	buttonList[i].addEventListener("click",buttonClick);
}

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

