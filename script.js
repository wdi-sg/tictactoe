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

	//number the buttons using id: 1 to 9
	for (i = 0; i < 9; i++){
		document.getElementsByTagName('button')[i].id = i+1;
	}
}

// keeps track of player 1 or 2
let player_turn = 1;

//list of possible winning combinations, for each player
let player1_combinations = []
let player2_combinations = []



// change turns
const takeTurn = function(){
	if (player_turn === 1){
		player_turn += 1;
	} else { 
		player_turn -= 1;
	};
};

//button_nums as keys with winning combinations as values
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


//returns true if there are 3 repeats a nested array
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

const checkWin = function(){
	if (checkThreeRepeat(player1_combinations)){
		console.log('Player 1 Wins!');
	} else if (checkThreeRepeat(player2_combinations)){
		console.log('Player 2 Wins!');
	};
};




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
const display_input = function(event){
	if (player_turn === 1){
		event.target.textContent = "X";
		updateCombinations();
		checkWin();
		takeTurn();
	} else {
		event.target.textContent = "O";
		updateCombinations();
		checkWin();
		takeTurn();
	};
};


document.body.addEventListener('click', display_input);

boardCreate();
