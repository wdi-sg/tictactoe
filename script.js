var baseBoard;
//Original board for reference
let player1 = 'O';
let player2 = 'X';
//Player creation O/X
const win = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[6,4,2]
]
//Possible winning conditions

const cells = document.querySelectorAll('.cell');

//Tracks turns
let whoseTurn = 1;
const check = function (event) {
    if(whoseTurn%2 === 1 && event.target.textContent === "")
    {event.target.textContent = "O";
    whoseTurn++;
}
else if (whoseTurn%2 === 0 && event.target.textContent === "") {
    event.target.textContent = "X";
    whoseTurn++
}
}

//Tracks cell id
let player1Array =[];
let player2Array = [];
const createPlayerArray = function (event) {
    if(whoseTurn%2 === 1 && event.target.textContent === "") {
    player1Array.push(event.target.id);
    console.log(player1Array);
}
else if (whoseTurn%2 === 0 && event.target.textContent === "") {
   player2Array.push(event.target.id);
   console.log(player2Array);
}
}

//Reset everything
function startGame () {
    document.querySelector(".endGame").style.display = "none";
//Reset function to clear the board
    baseBoard = Array.from(Array(9).keys());
    player1Array = [];
    player2Array = [];
//Creates array of array
console.log(baseBoard);
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', createPlayerArray);
        cells[i].addEventListener('click', check);
    }
}

startGame();
//HTML's Cell variable will now store reference for fresh game (startGame function)