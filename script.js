//create a start button
console.log("hello");
let button = document.createElement('button');
button.innerHTML = "Start";
button.className = "btn";

var timer =0;

console.log(timer);
function startTimer () {
	
	timer +=1;
document.getElementById('gameTimer').innerHTML = timer;
console.log(timer);
};
// setInterval(startTimer, 1000);



document.body.prepend(button);
//when the button is clicked, the button disapears
//the board appears
//add event to the button
button.addEventListener("click", function() {
	button.style.display = "none";
	document.getElementById("input").style.display = 'none';
	document.getElementById("boardHere").style.display = 'block';
	setInterval(startTimer, 1000);
	});




document.getElementById('gameTimer').innerHTML = timer;

//create table
var table = document.createElement('table');
table.setAttribute("id","board");

//create table rows

for(let i = 0; i < 3; i ++) {
	let row = document.createElement("tr");
	row.className += "rowGame";
	row.innerHTML ="<td class = 'square'></td><td class = 'square'></td><td class = 'square'></td>";

	table.append(row);

};
document.querySelector("#boardHere").appendChild(table);

var numOfClick = 0;
var makeMove = function(event){
	numOfClick += 1;
	let move = event.target;
	if(numOfClick % 2 ===0){
		move.innerHTML = "O";
		console.log (move.innerHTML);
	} else {
		move.innerHTML = "X";
		console.log (move.innerHTML);
	};
	// move.style.poiterEvents = "none";
	
}
var square = document.querySelectorAll(".square");
for(let i=0; i < square.length; i++){
	square[i].setAttribute("id",i);
	console.log(square[i]);
	square[i].addEventListener("click", makeMove);


};
//create a function that count the number the input change
document.querySelector('#input').addEventListener("change", addName);
var numOfChange = 0;
function addName(event){

var name = event.target.value;
console.log(name);
if(numOfChange ===0){
document.querySelector("#nameOne").innerHTML = name;

	}else {
		document.querySelector("#nameTwo").innerHTML = name;

	}
numOfChange +=1;	
} ;

//checking for a winner
//if there's a winner: board disappears, gameOver appears, then congratulation winner appears
var gameMove = {
	top: [],
	middle: [],
	bottom: [],

}



var winner = function() {
if( winner===true){
	document.getElementById("boardHere").style.display = 'none';
	document.getElementById("gameOver").style.display ="block";
	setTimeout(congrat,1000);
}
}





