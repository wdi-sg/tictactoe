var playerInputTemp = 'X'; //prompt("Are you 'O' or 'X'?");
var playerInput = playerInputTemp.toUpperCase();
playerInput === 'X' ? computerInput = 'O' : computerInput = 'X';
let gameState = 1; //tracks if game is on or over; had to do this so the computer wouldn't play it's move even after the game had ended


var playerScore = 0;
var computerScore = 0;
playerScoreEl = document.getElementById('player-score');
compScoreEl = document.getElementById('computer-score');


var initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
var currentBoard = JSON.parse(JSON.stringify(initialBoard));



//---------------------------------SELECTORS---------------------------------



var board = document.getElementById('board');
var startButton = document.getElementById('start-button');
var newPara = document.createElement('p');
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
            if (gameState === 1) {
                setTimeout(computerMove, 200);
            }
            setTimeout(checkWin, 200);
        })
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

    //checks for diagonal wins                      
    let arrTemp = [];
    for (let i = 0 ; i < currentBoard.length ; i++) {
        arrTemp.push(currentBoard[i][i]);
    }
    if (arrTemp.join('').match(winCondition)) {
        afterWin(arrTemp.join('').match(winCondition));
    }
    let arrTemp2 = [];
    for (let i = 0 ; i < currentBoard.length ; i++) {
        arrTemp2.push(currentBoard[i][currentBoard.length-1-i]);
    }
    if (arrTemp2.join('').match(winCondition)) {
        afterWin(arrTemp2.join('').match(winCondition));
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
    if (currentBoard.flat().includes(null)) { //makes sure that there are empty boxes
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



// function computerMove2() {
    
// }


// //similar to checkWin() except matching terms are different
// function checkThreat() {
//     let winCondition = /^X{2}$|^O{2}$/;

//     //checks for horizontal and vertical wins
//     for (let i = 0 ; i < currentBoard.length ; i++) {
//         if (currentBoard[i].join('').match(winCondition)) {

//             break;
//         }
//         else if (currentBoard.map(x => x[i]).join('').match(winCondition)) {

//             break;
//         }
//     }

//     //checks for diagonal wins                      
//     let arrTemp = [];
//     for (let i = 0 ; i < currentBoard.length ; i++) {

//     }
//     if (arrTemp.join('').match(winCondition)) {

//     }
//     let arrTemp2 = [];
//     for (let i = 0 ; i < currentBoard.length ; i++) {

//     }
//     if (arrTemp2.join('').match(winCondition)) {

//     }    
// }


// let str = 'XX';
// console.log(str.match(/^X{2}$|^O{2}$/))