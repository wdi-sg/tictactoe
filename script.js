console.log('script is running');

//////////game data//////////
let p1_name = '';
let p2_name = '';
let p1_sym = '';
let p2_sym = '';
let p1_wins = 0;
let p2_wins = 0;

// keeps track of player 1 or 2
let player_turn = 1;

//list of possible winning combinations, for each player
let player1_combinations = [];
let player2_combinations = [];

//new elements
const board = document.createElement('div');
const input_ele = document.createElement('input');
const start = document.createElement('div');

//initialization function
const init = function(){
	boardInit();
	startInit();
	inputInit();
};

//name input creation
const inputInit = function(){
	
	document.querySelector('.board').insertBefore(input_ele, document.querySelector('.row'));
	input_ele.className = 'input';
	input_ele.placeholder = 'Enter Player 1 Name';
	input_ele.addEventListener('change', function(event){
		if (input_ele.placeholder === 'Enter Player 1 Name'){
			p1_name = event.target.value;
			input_ele.value = "";
			input_ele.placeholder = 'Enter Player 1 Symbol';
		} else if (input_ele.placeholder === 'Enter Player 1 Symbol'){
			p1_sym = event.target.value;
			input_ele.value = "";
			input_ele.placeholder = 'Enter Player 2 Name';
		} else if (input_ele.placeholder === 'Enter Player 2 Name'){
			p2_name = event.target.value;
			input_ele.value = "";
			input_ele.placeholder = 'Enter Player 2 Symbol';
		} else if (input_ele.placeholder === 'Enter Player 2 Symbol'){
			p2_sym = event.target.value;
			input_ele.value = "";
			input_ele.placeholder = 'Press Start!!';
		};
	});
};

//board creation
const boardInit = function(){
	document.body.appendChild(board);
	board.className = "board";

	let rowOne = board.appendChild(document.createElement('div'));
	let rowTwo = board.appendChild(document.createElement('div'));
	let rowThree = board.appendChild(document.createElement('div'));
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


	//number the buttons using id: 1 to 9
	for (i = 0; i < 9; i++){
		document.getElementsByTagName('button')[i].id = i+1;
	};
};

const startInit = function(){
	document.querySelector('.board').appendChild(start);
	start.className = 'start';
	start.innerHTML = 'START';
	start.addEventListener('click', gameStart);
};

const gameStart = function(event){
	document.querySelector('.start').classList.add('hide');
	input_ele.placeholder = `${p1_name}'s turn`;
	document.querySelectorAll('button')
		.forEach(element => element.addEventListener('click', display_input));
};

const gameEnd = function(event){
	let end_message = document.createElement('p');
	end_message.id = 'end';
	document.querySelector('.start').classList.remove('hide');
	document.querySelector('.board').appendChild(end_message);
	input_ele.placeholder = 'Game Ended!';
	if (player_turn === 1){
		end_message.innerHTML = `${p1_name} won!`;
		start.innerHTML = 'Restart';
		p1_wins++;
		start.addEventListener('click', gameRestart);
	} else {
		end_message.innerHTML = `${p2_name} won!`;
		start.innerHTML = 'Restart';
		p2_wins++;
		start.addEventListener('click', gameRestart);
	};
};

const gameRestart = function(event){
	document.querySelector('.board').innerHTML = '';
	init();
};

// keep track of player turns
const takeTurn = function(){
	if (player_turn === 1){
		player_turn += 1;
	} else { 
		player_turn -= 1;
	};
};

//object containing button_nums as keys, winning combinations as values
const win_combinations = {
	'1' : [[1, 2, 3], [1, 4, 7], [1, 5, 9]],
	'2' : [[1, 2, 3], [2, 5, 8]],
	'3' : [[1, 2, 3], [3, 6, 9], [3, 5, 7]],
	'4' : [[1, 4, 7], [4 ,5, 6]],
	'5' : [[1, 5, 9], [2, 5, 8], [3, 5, 7], [4, 5, 6]],
	'6' : [[3, 6, 9], [4, 5, 6]],
	'7' : [[1, 4, 7], [3, 5, 7], [7, 8, 9]],
	'8' : [[2, 5, 8], [7, 8, 9]],
	'9' : [[1, 5, 9], [3, 6 ,9], [7, 8, 9]]
};

//function to update possible winning combinations, depending on past inputs
const updateCombinations = function(){
	let button_num = event.target.id;
	let combi_keys = win_combinations[button_num];
	if (player_turn === 1){
		for (i = 0; i < combi_keys.length; i++) player1_combinations.push(combi_keys[i]);
	} else if (player_turn === 2){
		for (i = 0; i < combi_keys.length; i++) player2_combinations.push(combi_keys[i]);
	};
};


//returns true if there are 3 repeated nested arrays
//i.e. [Array1, Array1, Array4, Array1]
const checkThreeRepeat = function(array){
	for (i = 0; i < array.length; i++){
		count = 1;
		let a = array[i].toString();
		for (x = i+1; x < array.length; x++){
			let b = array[x].toString();
				if (a === b){
					count++;
				};
				if (count === 3){
					return true;
				};
		};
	};
	return false;
};

//check if any player has reached winning combination
const checkWin = function(){
	if (checkThreeRepeat(player1_combinations)){
		gameEnd();
	} else if (checkThreeRepeat(player2_combinations)){
		gameEnd();
	};
};

//player turns
const display_input = function(event){
	if (player_turn === 1){
		event.target.textContent = p1_sym;
		input_ele.placeholder = `${p2_name}'s turn`;
		updateCombinations();
		checkWin();
		takeTurn();
	} else {
		event.target.textContent = p2_sym;
		input_ele.placeholder = `${p1_name}'s turn`;
		updateCombinations();
		checkWin();
		takeTurn();
	};
};

init();










// //function that checks intersection between two array
// const intersect = function(array1, array2){
// 	let results = array1.filter(x => array2.includes(x));
// 	return results;
// }


// const win_combinations = [
// 	[1, 2, 3], [1, 4, 7], [1, 5, 9],
// 	[1, 2, 3], [2, 5, 8],
// 	[1, 2, 3], [3, 6, 9], [3, 5, 7],
// 	[1, 4, 7], [4 ,5, 6],
// 	[1, 5, 9], [2, 5, 8], [3, 5, 7], [4, 5, 6],
// 	[3, 6, 9], [4, 5, 6],
// 	[1, 4, 7], [3, 5, 7], [7, 8, 9],
// 	[2, 5, 8], [7, 8, 9],
// 	[1, 5, 9], [3, 6 ,9], [7, 8, 9]
// ];


// //returns true if arrayA elements are in arrayB, false otherwise
// //arrayA.length <= arrayB.length
// const checkAinB = function(arrayA, arrayB){
// 	let a = arrayA.sort();
// 	let b = arrayB.sort();
// 	for (i = 0; i < a.length; i++){
// 		if (arrayB.includes(arrayA[i])){ use filter?
// 			return false;
// 		};
// 	};
// 	return true;
// };

//input function
