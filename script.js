console.log('script is running');


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
