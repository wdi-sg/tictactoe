console.log('script is running');

//board creation
const boardCreate = function(){
	let divBoard = document.createElement('div');
	document.body.appendChild(divBoard);
	divBoard.className = "board";

	let rowOne = divBoard.appendChild(document.createElement('div'));
	let rowTwo = divBoard.appendChild(document.createElement('div'));
	let rowThree = divBoard.appendChild(document.createElement('div'));
	rowOne.className = "row";
	rowTwo.className = "row";
	rowThree.className = "row";

	rowOne.appendChild(document.createElement('button'));	
	rowOne.appendChild(document.createElement('button'));	
	rowOne.appendChild(document.createElement('button'));	

	rowTwo.appendChild(document.createElement('button'));	
	rowTwo.appendChild(document.createElement('button'));	
	rowTwo.appendChild(document.createElement('button'));	

	rowThree.appendChild(document.createElement('button'));	
	rowThree.appendChild(document.createElement('button'));	
	rowThree.appendChild(document.createElement('button'));	

	// for (i = 0; i < 3; i++){
	// 	document.querySelectorAll('.row')[0].childNodes[i].className = 'button';
	// 	document.querySelectorAll('.row')[1].childNodes[i].className = 'button';
	// 	document.querySelectorAll('.row')[2].childNodes[i].className = 'button';
	// }
}

// keeps track of player 1 or 2
let player_turn = 1;

//
const takeTurn = function(){
	if (player_turn === 1){
		player_turn += 1;
	} else { 
		player_turn -= 1;
	};
};

document.body.addEventListener('click', function(event){
	if (player_turn === 1){
		event.target.textContent = "X";
		takeTurn();
	} else {
		event.target.textContent = "O"
		takeTurn();
	}
});


boardCreate();