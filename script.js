//Track player turn;
var playerTurn = 0;
var playerX;
var playerO;

//
const state = {
	current: 0,
	inputName: 0,
	inputName1: 1,
	game: 2

}

//Declare

document.querySelector('#input').
	addEventListener('change', function(event){
        var currentInput = event.target.value;
        var output = inputHappened(currentInput);
        display( output );
      });

var display = function( data ){
	var output = document.querySelector('#output');
	output.innerText = data;
}

var inputHappened = function(currentInput){
	switch(state.current){
		case state.inputName:
			var playerX = currentInput;
			document.querySelector('#input').value = "";
			state.current = state.inputName1
			return "Player X is "+playerX+" Please enter name of Player O."
		
		case state.inputName1:
			var playerO = currentInput;
			document.querySelector('#input').value = "";
			state.current = state.game;
			destroyStartScreen();
			return "Player O is "+playerO+"Enter s to start"
			
			

		case state.game:  
			makeBoard();
			



	};
}//end input happened




function makeStartScreen(){
	//input
	var input = document.createElement("input");
	input.id = "input"
	input.setAttribute('placeholder', 'input');
	input.classList.add("starter");
	document.body.appendChild(input)
	//output
	var output = document.createElement("p");
	output.id = "output"
	output.classList.add("starter");
	document.body.appendChild(output)
}

function destroyStartScreen(){
	for (let i = 0; i < 2; i++){
		document.body.removeChild(document.querySelectorAll(".starter")[0])
	}

}

function destroyBoard(){
	document.body.removeChild(document.querySelector('#board'))
}




//This function makes the board.
var makeBoard = function(){

	//This is created so that we can remove the board as one unit.
	var board = document.createElement('div');
	board.id = "board";

	//There are 3 rows in the board
	for(let i = 0; i < 3; i++){
		var row = document.createElement('div');
		row.classList.add("row");
		row.id = "row-"+i;
		//Within each row, create 3 divs
		for(let j = 0; j < 3; j++){
			var col = document.createElement('div');
			col.classList.add("col");
			col.id = "col-"+i+j;
			// col.innerHTML = "<div class=\"move\"></div>"
			//append each col into row i
			row.appendChild(col);
		}

		//append each row i into board
		board.appendChild(row);
	}
	//attach the board to the body
	document.body.appendChild(board);
	addListeners();
}



function addListeners() {

	//The variable "boxes" gets all boxes through their class "col".
	var boxes = document.querySelectorAll(".col");
		
	for (let i = 0; i < boxes.length; i++){

		boxes[i].addEventListener('click',function(event){
			if(playerTurn == 0) {
				this.innerText = "X";
				playerTurn = 1;
			} else {
				this.innerText = "O";
				playerTurn = 0;
			}

			//After a move, check if there are any matches
			checkDiagonalDownMatch();
			checkVerticalMatch();
			checkHorizontalMatch();
			checkDiagonalUpMatch()



		});//close EventListener

	}//close for loop
}
			

	
function checkDiagonalDownMatch(){
 
	var count = 0;

	for (let i = 0; i < 2; i++){

		var obj1 = document.querySelector("#col-"+i+i);
		var obj2 = document.querySelector("#col-"+(i+1)+(i+1));

		if(obj1.innerText != "" && obj1.innerText == obj2.innerText){
			count++
		}
	}// end for 

	if(count == 2){
		alert(obj1.innerText+" player wins!")
	}

}

function checkDiagonalUpMatch(){

	var count = 0;

	for (let i = 0; i < 2; i++){

		var obj1 = document.querySelector("#col-"+(2-i)+i);
		var obj2 = document.querySelector("#col-"+(2-i-1)+(i+1));

		if(obj1.innerText != "" && obj1.innerText == obj2.innerText){
			count++
		}
	}// end for 

	if(count == 2){
		alert(obj1.innerText+" player wins!")
	}
 
	

}

function checkVerticalMatch(){

	var count = 0 

	for(let j = 0; j < 2; j++){
		for(let i= 0; i < 2; i++){
			//obj1 refers to the current object
			var obj1 = document.querySelector("#col-"+i+j);
			//obj2 refers to the object below
			var obj2 = document.querySelector("#col-"+(i+1)+j);
			//If they match up the count
			if(obj1.innerText != "" && obj1.innerText == obj2.innerText){
				count++;

			} 
		}//End one column iteraton

		//Count = 2 means that the boxes down the column are identical 
		if(count == 2){
			console.log("x")
			alert(obj1.innerText+" player wins!");
		} 
		// if they are not, proceed to the next column, count = 0;
		count = 0;
		

	}//End all 3 column iterations

}

function checkHorizontalMatch(){

	var count = 0 

	for(let i = 0; i < 2; i++){
		for(let j = 0; j < 2; j++){
			//obj1 refers to the current object
			var obj1 = document.querySelector("#col-"+i+j);
			//obj2 refers to the object below
			var obj2 = document.querySelector("#col-"+i+(j+1));
			//If they match up the count
			if(obj1.innerText != "" && obj1.innerText == obj2.innerText){
				count++;

			} 
		}//End one column iteraton

		//Count = 2 means that the boxes down the column are identical 
		if(count == 2){
			console.log("x")
			alert(obj1.innerText+" player wins!");
		} 
		// if they are not, proceed to the next column,reset count = 0;
		count = 0;
		

	}//End all 3 column iterations

}





















/*
document.querySelector("#col-00")
        .addEventListener('click',function(event){

          event is the DOM context for the event
          console.log(event.target);
          In this instance, event.target is the
        });
*/