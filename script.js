//HTML Elements
var resetButton = document.querySelector('#restart');
var startButton = document.querySelector('#start');
var scoreboard = document.querySelector('.scoreboard');
var xScore = document.getElementById('x-score');
var oScore = document.getElementById('o-score');
var input = document.getElementById('input');
var grid = document.querySelector('.grid');
var cells = document.querySelectorAll('.cell');
var startMessage = document.querySelector('.start-message');
var startDisplay = document.querySelector('.start-state');
var winMessage = document.querySelector('.outcome-message');
var winDisplay = document.querySelector('.win-state');
resetButton.addEventListener('click', newGame);
var clickCount = 0;
var playerOne = {};
var playerTwo = {};

//Game variables
var xTurn = true;
var xClass = 'x';
var oClass = 'o';
var xWinNum = 0;
var oWinNum = 0;
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

if (startButton) {
    startButton.addEventListener('click', function(event){
        var letters = /^[A-Za-z]+$/;
        clickCount += 1
        //First input = player 1 name
        if (clickCount === 1){
            //validate input
            if (input.value === "" || !input.value.match(letters)) { 
                startMessage.innerText = 'Please enter valid name!'
                input.value = "";
            } 
            else {
                playerOne.name = input.value;
                console.log(playerOne);
                input.placeholder = 'Enter name for player 2';
                input.value = "";
            }

        } 
        //Second input = player 2 name
        else if (clickCount === 2) {
            if (input.value === "" || !input.value.match(letters)) { 
                startMessage.innerText = 'Please enter valid name!'
                input.value = "";
            }
            else {
                playerTwo.name = input.value;
                input.placeholder = 'Player 1: X or O?';
                input.value = "";
            }
        }
        //Third input = player 1's symbol
        else if (clickCount === 3) {
            if (input.value.toUpperCase() === "X"){
                playerOne.x = true;
                playerTwo.o = true;
                xTurn = true;
                startButton.remove();
                input.remove();
                startDisplay.classList.remove('show');
                scoreboard.classList.add('show');
                grid.classList.add('show');
                newGame();
            }
            else if (input.value.toUpperCase() === "O"){
                playerOne.o = true;
                playerTwo.x = true;
                xTurn = false;
                startButton.remove();
                input.remove();
                startDisplay.classList.remove('show');
                scoreboard.classList.add('show');
                grid.classList.add('show');
                newGame();
            }
            else {
                startMessage.innerText = 'Please choose a valid symbol!'
                input.value = "";
            }
        }
        
    });
}


function newGame (){
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

function gameOver(draw){
    if (draw){
        winMessage.innerText = 'It\'s a draw between ' + playerOne.name + ' and ' + playerTwo.name + '! Play again?';
    } 
    else if(xTurn){
        xWinNum += 1;
        xScore.innerText = 'X Score: ' + xWinNum;
        //Check if playerOne object has the x symbol so correct winner displays
        winMessage.innerText = `${playerOne.x ? playerOne.name : playerTwo.name} wins! Play again?`
    } else {
        oWinNum += 1;
        oScore.innerText = 'O Score: ' + oWinNum;
        //Check if playerOne object has the o symbol so correct winner displays
        winMessage.innerText = `${playerOne.o ? playerOne.name : playerTwo.name} wins! Play again?`
    }
    winDisplay.classList.add('show');
}

function checkDraw (){
    return [...cells].every(cell => {
        return cell.classList.contains(xClass) || cell.classList.contains(oClass);
      })
}
