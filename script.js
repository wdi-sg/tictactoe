let playerInputTemp = 'X'; //prompt("Are you 'O' or 'X'?");
let playerInput = playerInputTemp.toUpperCase();
playerInput === 'X' ? computerInput = 'O' : computerInput = 'X';
let gameState = 1; //tracks if game is on or over; had to do this so the computer wouldn't play it's move even after the game has ended


let computerDifficulty = 'Dumb';
let selectDifficulty = document.querySelector('select');
selectDifficulty.addEventListener('change', function() {
    computerDifficulty = selectDifficulty.value;
})


let playerScore = 0;
let computerScore = 0;
playerScoreEl = document.getElementById('player-score');
compScoreEl = document.getElementById('computer-score');


let initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
let currentBoard = JSON.parse(JSON.stringify(initialBoard));



//---------------------------------SELECTORS---------------------------------



let board = document.getElementById('board');
let startButton = document.getElementById('start-button');
let newPara = document.createElement('p');
newPara.style = 'font-family: \'Indie Flower\', cursive;';



//-----------------------------ITERATE BUTTONS/BOXES------------------------------



for (let i = 0 ; i < currentBoard.length ; i++) {
    let newDiv = document.createElement('div');
    for (let j = 0 ; j < currentBoard[i].length ; j++) {
        let newButton = document.createElement('button');
        newButton.className = 'btn btn-info'
        newButton.style = 'margin: 2px; width: 50px; height: 50px;';
        newDiv.appendChild(newButton);
    }
    board.appendChild(newDiv);
}


let buttonGrid = document.getElementById('board').querySelectorAll('button');
buttonGrid.forEach(x => x.disabled = true);



//--------------------------------START-BUTTON------------------------------



startButton.addEventListener('click', function() {
    if (startButton.innerText === 'START') {
        buttonGrid.forEach(x => x.disabled = false);
        startButton.innerText = 'RESTART';
    }
    else {
        gameState = 1;
        buttonGrid.forEach( x => {
            x.innerHTML = '&nbsp&nbsp&nbsp';
            x.disabled = false;
        });
        currentBoard = JSON.parse(JSON.stringify(initialBoard));
        if (board.childNodes.length > 3) {
            board.removeChild(board.childNodes[board.childNodes.length-1]);
        }
    }
});



//------------------------------INPUT & CHECKING--------------------------



playerPress();

function playerPress() {
    for (let i = 0 ; i < buttonGrid.length ; i++) {
        buttonGrid[i].addEventListener('click', function() {
            buttonGrid[i].innerText = playerInput;
            buttonGrid[i].disabled = true;
            currentBoard[Math.floor(i/3)][i%3] = playerInput;
            checkDraw();
            checkWin();
            console.log(gameState);
            if (gameState === 1) {
                if (computerDifficulty === 'Dumb') {
                    setTimeout(computerMove, 150);
                }
                else {
                    setTimeout(computerMove2, 150);
                }
                setTimeout(checkDraw, 150);
                setTimeout(checkWin, 150);
            }
        })
    } 
}



function checkDraw() {
    if (!currentBoard.flat().includes(null)) {
        newPara.innerText = `It's a draw!`;
        gameState = 0;
        board.appendChild(newPara);
        buttonGrid.forEach(x => x.disabled = true);
        startButton.innerText = 'RESTART';
    }
}



function checkWin() {
    let winCondition = /O{3}|X{3}/;  //how to make dynamic?

    //checks for horizontal and vertical wins
    for (let i = 0 ; i < currentBoard.length ; i++) {
        if (currentBoard[i].join('').match(winCondition)) {
            afterWin(currentBoard[i].join('').match(winCondition));
            break;
        }
        else if (currentBoard.map(x => x[i]).join('').match(winCondition)) {
            afterWin(currentBoard.map(x => x[i]).join('').match(winCondition));
            break;
        }
    }

    //checks for diagonal wins YEABOIII
    let diagonalFromLeft = currentBoard
        .map(row => row[currentBoard.indexOf(row)])
        .join('');
    if (diagonalFromLeft.match(winCondition)) {
        afterWin(diagonalFromLeft.match(winCondition));
    }

    let diagonalFromRight = currentBoard
        .map(row => row[currentBoard.length - 1 - currentBoard.indexOf(row)])
        .join('');
    if (diagonalFromRight.match(winCondition)) {
        afterWin(diagonalFromRight.match(winCondition));
    }
}



//updates score, clears board, etc.
function afterWin(winningArr) {
    if (winningArr.toString().includes(playerInput)) {
        newPara.innerText = 'You win!';
        playerScore++;
        gameState = 0;
    }
    else {
        newPara.innerText = 'Computer wins!';
        computerScore++;
        gameState = 0;
    }
        board.appendChild(newPara);
        buttonGrid.forEach(x => x.disabled = true);
        startButton.innerText = 'RESTART';
        compScoreEl.innerText = `Losses: ${computerScore}`;
        playerScoreEl.innerText = `Wins: ${playerScore}`;
 }



//-----------------------------------COMPUTER---------------------------------



function computerMove() {
    let moves = []; //[0,1], [0,2], [1,2], etc.
    if (currentBoard.flat().includes(null) && gameState == 1) { //makes sure that there are empty boxes
        for (let i = 0 ; i < currentBoard.length; i++) {
            for (let j = 0 ; j < currentBoard[i].length ; j++) {
                if (currentBoard[i][j] === null) {
                    moves.push([i, j]);
                }
            }
      }
        let randomMove = moves[Math.floor(Math.random()*moves.length)];
        currentBoard[randomMove[0]][randomMove[1]] = computerInput;
        buttonGrid[randomMove[0]*3+randomMove[1]].innerText = computerInput;
        buttonGrid[randomMove[0]*3+randomMove[1]].disabled = true;
    }
}


function computerMove2() {
    if (checkThreat()) {
        checkThreat();
    }
    else {
        computerMove();
    }
}


//similar to checkWin() except matching terms are different
function checkThreat() {
    let winCondition = /^X{2}$|^O{2}$/;

    //checks for horizontal and vertical threats
    for (let i = 0 ; i < currentBoard.length ; i++) {
        if (currentBoard[i].join('').match(winCondition)) {
            let indexOfMove = currentBoard[i].indexOf(null);
            currentBoard[i][indexOfMove] = computerInput;
            buttonGrid[i * 3 + indexOfMove].innerText = computerInput;
            buttonGrid[i * 3 + indexOfMove].disabled;
            break;
        }
        else if (currentBoard.map(x => x[i]).join('').match(winCondition)) {
            let indexOfMove = currentBoard.map(x => x[i]).indexOf(null);
            currentBoard[indexOfMove][i] = computerInput;
            buttonGrid[indexOfMove * 3 + i].innerText = computerInput;
            buttonGrid[indexOfMove * 3 + i].disabled = true;
            break;
        }
    }
                     
    //checks for diagonal threats
    let diagonalFromLeft = currentBoard
        .map(row => row[currentBoard.indexOf(row)])
        .join('');
    if (diagonalFromLeft.match(winCondition)) {
        let indexOfRow = diagonalFromLeft.indexOf(null);
        currentBoard[indexOfRow][indexOfRow] = computerInput;
        buttonGrid[indexOfRow * 3 + indexOfRow].innerText = computerInput;
        buttonGrid[indexOfRow * 3 + indexOfRow].disabled = true;
    }

    let diagonalFromRight = currentBoard
        .map(row => row[currentBoard.length - 1 - currentBoard.indexOf(row)])
        .join('');
    if (diagonalFromRight.match(winCondition)) {
        let indexOfRow = diagonalFromRight.indexOf(null);
        currentBoard[indexOfRow][currentBoard.length - 1 -indexOfRow] = computerInput;
        buttonGrid[indexOfRow * 3 + currentBoard.length - 1 -indexOfRow].innerText = computerInput;
        buttonGrid[indexOfRow * 3 + currentBoard.length - 1 -indexOfRow].disabled = true;
    } 
}