

// var node = document.createElement("p");             //create p tag
// var textNode = document.createTextNode("X");        //insert text

// var drawX = node.appendChild(textNode);                         //append text to p tag
// console.log(drawX);


// function myFunction() {

// var x = document.querySelectorAll(".game-square");

// for (var i = 0; i < x.length; i++) {
//     x[i];

// x[i].appendChild(drawX) ;


//  }
// }

/*----- constants -----*/

let board;
let turn = 'X';


/*----- app's state (variables) -----*/


/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));


/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', handleTurn);

document.getElementById('reset-button').addEventListener('click', init);

/*----- functions -----*/

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });

    board[idx] = turn;

    turn = turn === 'X'?'O':'X';

    render();
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};


function render() {

board.forEach(function(mark, index){
console.log(mark, index);

squares[index].textContent = mark;

});
};
init();