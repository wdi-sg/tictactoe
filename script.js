/*Own notes: 




*/

//Change your condition win conditional


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

//So that the variable will come out when game is over. 

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
			playerX = currentInput;
			document.querySelector('#input').value = "";
			state.current = state.inputName1
			return "Player X is "+playerX+". Please enter name of Player O."
		
		case state.inputName1:
			playerO = currentInput;
			document.querySelector('#input').value = "";
			state.current = state.game;
			
			return "Player O is "+playerO+". Enter s to start"
			
		case state.game:
			if(currentInput=='s'){
				destroyInput();
				//Display who start in the beginning
				makeBoard(3);
				
				if(playerTurn == 0){
					return "It is "+playerX+"'s turn!"
				} else if(playerTurn == 1) {
					return "It is "+playerO+"'s turn!"
				}
			} else {
				return "Wrong input. Enter s to begin"
			}
			
			



	};
}//end input happened

function displayWhoseTurn(){
	var output = document.querySelector('#output'); 
	if(playerTurn == 0){
		output.innerText = "It is "+playerX+"'s turn!"
	} else if(playerTurn == 1){
		output.innerText = "It is "+playerO+"'s turn!"
	}


}






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

function destroyInput() {
	document.body.removeChild(document.querySelector("#input"));
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
var makeBoard = function(n){

	//This is created so that we can remove the board as one unit.
	var board = document.createElement('div');
	board.id = "board";

	//There are 3 rows in the board
	for(let i = 0; i < n; i++){
		var row = document.createElement('div');
		row.classList.add("row");
		row.id = "row-"+i;
		//Within each row, create 3 divs
		for(let j = 0; j < n; j++){
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

			displayWhoseTurn();
			//After a move, check if there are any matches
			checkDiagonalDownMatch();
			checkVerticalMatch();
			checkHorizontalMatch();
			checkDiagonalUpMatch()



		});//close EventListener

	}//close for loop
}

function checkWhoWins(x) {
	if(x == "X"){
		return playerX;
	} else if(x == "O") {
		return playerO;
	} else {
		return "error"
	}
}
			

	
function checkDiagonalDownMatch(){
 
	var count = 0;
		var obj1;
		var obj2;

	for (let i = 0; i < 2; i++){

		 obj1 = document.querySelector("#col-"+i+i);
		 obj2 = document.querySelector("#col-"+(i+1)+(i+1));

		if(obj1.innerText != "" && obj1.innerText == obj2.innerText){
			count++
			// if it is false, break//continue.
		}
	}// end for 

	if(count == 2){

		alert(checkWhoWins(obj1.innerText)+" wins!");
		//End the game:
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
		alert(checkWhoWins(obj1.innerText)+" wins!")
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
			alert(checkWhoWins(obj1.innerText)+" wins!");
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
			alert(checkWhoWins(obj1.innerText)+" wins!")
		} 
		// if they are not, proceed to the next column,reset count = 0;
		count = 0;
		

	}//End all 3 column iterations

}










/*for(  ){
	while(){
	
	}

}










/*
document.querySelector("#col-00")
        .addEventListener('click',function(event){

          event is the DOM context for the event
          console.log(event.target);
          In this instance, event.target is the
        });
*/