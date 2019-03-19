var baseBoard;
//Original board for reference
const player1 = 'O';
const player2 = 'X';
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

const cells = document.querySelectorAll('.cell'); startGame();
//HTML's Cell variable will now store reference for fresh game (startGame function)

function startGame () {
    document.querySelector(".endGame").style.display = "none";
//Reset function to clear the board
    baseBoard = Array.from(Array(9).keys());
//Creates array of array
//console.log(baseBoard);
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        //Clears all cells
        cells[i].style.removeProperty('background-color');
        //*Remove highlight when win condition is met
        cells[i].addEventListener('click', turnClick, false);
        //*Makes 'turnClick' function execute when a 'click' is detected
    }
}

function turnClick(cell) {
    turn(cell.target.id, player1);
    //console.log(square.target.id);
    //^Shows which cell is being clicked
}

function turn(cellId, player) {
    console.log(baseBoard[cellId] = player);
    //Shows which player clicked where
    document.getElementById(cellId).innerText = player;
}