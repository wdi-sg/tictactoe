//HTML Elements
var resetButton = document.querySelector('#restart');
var cells = document.querySelectorAll('.cell');
var startMessage = document.querySelector('.start-message');
var startDisplay = document.querySelector('.start-state');
startButton.addEventListener('click', newGame);
var winMessage = document.querySelector('.outcome-message');
var winDisplay = document.querySelector('.win-state');
resetButton.addEventListener('click', newGame);

//Game variables
var xTurn = true;
var xClass = 'x';
var oClass = 'o';
var possibleWins = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6]
]

newGame();

function newGame (){
    xTurn = true;
    cells.forEach(cell => {
        cell.classList.remove(xClass)
        cell.classList.remove(oClass)
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, {once: true})
    })
    winDisplay.classList.remove('show');
}


function handleClick (e){
    //Taken from whichever cell is clicked
    var cell = e.target;
    var symbolClass = xTurn ? xClass : oClass;
    //print x or o
    printSymbol (cell, symbolClass);
    //check for win
    if (verifyWin(symbolClass)){
        gameOver(false);
    //check for draw
    } else if (checkDraw()) {
        gameOver(true);
     //swap turns
    } else {
        changeTurn();
    }
}

//Helper functions

function printSymbol (cell, symbolClass){
    cell.classList.add(symbolClass);
}

function changeTurn (){
    xTurn = !xTurn;
}

function verifyWin (symbolClass){
  return possibleWins.some(possibility => {
     return possibility.every(index => {
           return cells[index].classList.contains(symbolClass);
        })
    })
}

// function verifyWin (symbolClass){
//     for (var possibility = 0; possibility < possibleWins.length; possibility++){
//         for (var j = 0; j < possibility.length; j++){
//             console.log(cells[j].classList.contains(symbolClass));
                
//             }
//         }
//     }

function gameOver(draw){
    if (draw){
        winMessage.innerText = 'It\'s a draw!'; 
    }
    else if(xTurn){
       winMessage.innerText = 'Win goes to X!';
    } else {
        winMessage.innerText = 'Win goes to O!';
    }
    winDisplay.classList.add('show');
}

function checkDraw (){
    return [...cells].every(cell => {
        return cell.classList.contains(xClass) || cell.classList.contains(oClass);
      })
}
