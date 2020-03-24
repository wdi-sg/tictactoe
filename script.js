//Setup the starting values of the game.
var turn = `O`; //First turn is always cross.
var moves = 0; //Count number of moves.
var grids = document.querySelectorAll(".grid");
var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

//Display first turn.
var turnDisplay = document.querySelector(".turn")
var turnElement = document.getElementById("show-turn")
turnElement.innerText = turn

//This function will return "X" if "X" is the winner.
var winCheck = function() {
    //Check each column
    for (var col = 0; col < 3; col++) {
        var colArray = [];
        for (var row = 0; row < 3; row++) {
            colArray.push(board[row][col])
        }
        var colCombi = colArray.join("")
        if (colCombi === "XXX" || colCombi === "OOO") {
            console.log(colCombi.charAt(0) + `wins`);
            return colCombi.charAt(0);
        }
    }
    //Check each row
    for (var row = 0; row < 3; row++) {
        var rowArray = [];
        for (var col = 0; col < 3; col++) {
            rowArray.push(board[row][col])
        }
        var rowCombi = rowArray.join("")
        if (rowCombi === "XXX" || rowCombi === "OOO") {
            console.log(rowCombi.charAt(0) + `wins`);
            return rowCombi.charAt(0);
        }
    }

    //Check the board diagonally left to right, and make sure it doesn't match empty boards
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[1][1] !== "") {
        console.log(board[1][1] + `wins`);
        return (board[1][1]);
    }
    //Check diagonal right to left, and make sure it doesn't match empty boards
    else if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[1][1] !== "") {
        console.log(board[1][1] + `wins`);
        return (board[1][1]);
    }

}
//Update the board whenever grids get clicked.
function updateBoard() {
    board = [
        [grids[0].innerText, grids[1].innerText, grids[2].innerText],
        [grids[3].innerText, grids[4].innerText, grids[5].innerText],
        [grids[6].innerText, grids[7].innerText, grids[8].innerText]
    ];
}


//Function to change current turn display.
function displayTurn(value) {
    return turnElement.innerText = value
};
//Function to change grid to become an "X",
function cross(element) {
    element.innerText = "X"; //Change element's inner text.
    turn = `O`; //Change turn status.
    displayTurn(turn); //Display latest turn status.
}
//Function to change grid to become an "O"
function circle(element) {
    element.innerText = 'O';
    turn = `X`
    displayTurn(turn);
}
//What to do whenever a grid is clicked.
function handleClick() {
    //Only run the function if the div is empty & doesn't already have text, eg X or O
    if (this.innerText === "") {
        if (turn === `X`) {
            //the 'this' argument passed into the cross function references the element that is clicked, the grid div.
            cross(this);
        } else {
            //the 'this' argument passed into the cross function references the element that is clicked, the grid div.
            circle(this);
        }
        updateBoard();
        moves++;
    }
    var winner = winCheck();
    if (winner === "O" || winner === "X") {
        displayTurn(`${winner} wins! Resetting game in 3 seconds...`);
        return setTimeout(restart, 3000);
        //If there's no winner but 9 moves have been made, change 'turn' div to show gameover.
    } else if (moves === 9) {
      displayTurn(`Game is over! Resetting game in 3 seconds...`)
      return setTimeout(restart, 3000);
    }
}

function restart() {
    for (var i = 0; i < grids.length; i++) {
        grids[i].innerText = "";
    };
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    turn = `O`;
    moves = 0;
    return displayTurn(turn);
}

var restartBtn = document.getElementById(`restart`);
restartBtn.addEventListener(`click`, restart)

//add click eventListener to all grid divs, clicks should trigger the function handleClick.
for (var i = 0; i < grids.length; i++) {
    grids[i].addEventListener('click', handleClick);
}
