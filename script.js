console.log('hello');

//first version
var player1 = [];
var player2 = [];
var moves = ['X','O'];

var turnNumber = 1;
var board = [];

//get all elements with class name square and put in array
// var sqArray = document.getElementsByClassName('square');

// // // this function checks whose turn it is and prints either X or O
// var clickSq = function() {
//     console.log('current round', turnNumber);
// //if player 1's turn, print X
//     if (turnNumber%2 !== 0) {
//         player1.push(moves[0]);
//         console.log(player1);
//         this.innerHTML = moves[0];
//     }
// //else its player 2's turn, print O
//     else {
//         player2.push(moves[1]);
//         console.log(player2);
//         this.innerHTML = moves[1];
//     };
// //increase the count for next player's turn
//     turnNumber++;
// //end the game if reach 10th turn
//     if (turnNumber === 10) {
//         setTimeout(function(){
//             alert("game over")
//         }, 500)
//     }
// };

// //add event listener for every square in html
// for(let i = 0; i < 9; i++) {
//     sqArray[i].addEventListener('click', clickSq);
// }

//second version not complete

//click button to start game
document.addEventListener('DOMContentLoaded', function( event ){
var button = document.querySelector('#buttonStart');
button.addEventListener ('click', showGameBoard);
return;
});
//function displays the squares
var showGameBoard = function() {
    for (var j = 0; j < 9; j++) {
        var square = document.createElement('div');
        console.log('create square ' +j);
        square.className = 'square';
        square.id = j;
        document.querySelector('.gameboard').appendChild(square);
        board.push(square);
    }
console.log(board);
};

//add event listener for players' moves
var gameArea = document.querySelector('.gameboard');
console.log(gameArea);
// var sqArray = document.querySelectorAll('square');
// console.log(sqArray);
// for(let i = 0; i < 9; i++) {
    gameArea.addEventListener('click', clickSq);
// }

//check which player's turn, add square and X or O accordingly.
var clickSq = function() {
    console.log('current round', turnNumber);
//if player 1's turn, print X
    if (turnNumber%2 !== 0) {
        player1.push(moves[0]);
        console.log(player1);
        this.innerHTML = moves[0];
        div[i].square = moves[0];
    }
//else its player 2's turn, print O
    else {
        player2.push(moves[1]);
        console.log(player2);
        this.innerHTML = moves[1];
    };
//increase the count for next player's turn
    turnNumber++;
//end the game if reach 10th turn
    if (turnNumber === 10) {
        setTimeout(function(){
            alert("game over")
        }, 500)
    }
};