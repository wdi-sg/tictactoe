var board = document.querySelector('body');
var count=0;
var symbol= "O";
place = 0;
var results = [null,null,null,null,null,null,null,null,null];
var winLose = "";
var win = function (results) {
	for (i=0;i<3;i++) {
		if ((results[i]!=null && results[i]==results[i+3] && results[i]==results[i+6])||(results[i*3]!=null && results[i*3]==results[i*3+1] && results[i*3]==results[i*3+2]) || (results[4]!=null && results [4]==results[0] && results [4] == results [8])|| (results[4]!=null && results [4]==results[2] && results [4] == results [6])) {
			winLose = "Win";
		}
	}
}
var lose = function(count) {
	if(count==9) {
		winLose = "Lose";
	}
}
var placeSymbol = function (event) {
	if (count%2==0) {
		symbol = "X";
	} else {
		symbol = "O";
	}
	this.style.color="green"
	this.innerHTML=symbol;
	place = parseInt(this.id.split("-")[1]);
	results[place]=symbol;
	console.log(results);
	count++;
	win(results);
	lose(count);
	console.log(winLose);
}

for (i=0; i<9; i++) {
	var part = document.createElement('div');
	part.id = "box-"+i;
	part.style.color="yellow";
	part.style.backgroundColor="yellow";
	part.style.border="thin solid #0000FF";
	part.style.borderColor="red";
	part.innerHTML="O";
	part.style.width="30%";
	part.style.height="60px";
	part.style.fontSize="60px";
	part.style.display="inline-block";
	part.style.margin="0px";
	part.style.padding="0px"
	part.addEventListener('click',placeSymbol);
	board.appendChild(part)
	console.log(i);
}
