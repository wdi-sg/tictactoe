var playerInputTemp = 'X'; //prompt("Are you 'O' or 'X'?");
var playerInput = playerInputTemp.toUpperCase();
playerInput === 'X' ? computerInput = 'O' : computerInput = 'X';
var playerScore = 0;
var computerScore = 0;
var initialBoard = [
    ['a', 'b', 'c'],
    ['a', 'b', 'c'],
    ['a', 'b', 'c']
];
var currentBoard = $.extend(true, [], initialBoard);



//---------------------------------SELECTORS---------------------------------



var board = document.getElementById('board');
var startButton = document.getElementById('start-button');
var newPara = document.createElement('p');
newPara.style = 'font-family: \'Indie Flower\', cursive;';



//-----------------------------CREATE BOARD---------------------------------



for (let i = 0 ; i < currentBoard.length ; i++) {
  let newDiv = document.createElement('div');
  for (let j = 0 ; j < currentBoard[i].length ; j++) {
    let newButton = document.createElement('button');
    newButton.className = 'btn btn-info'
    newButton.style = 'margin: 2px';
    newButton.innerHTML = '&nbsp&nbsp&nbsp';
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
  }
  else {
    buttonGrid.forEach( x => {
      x.innerHTML = '&nbsp&nbsp&nbsp';
      x.disabled = false;
    });
    currentBoard = $.extend(true, [], initialBoard);
    if (board.childNodes.length > 3) {
       board.removeChild(board.childNodes[board.childNodes.length-1]);
    }
  }
});


//------------------------------INPUT & CHECKING--------------------------



playerPress();

function playerPress() {
  for (let i = 0 ; i < buttonGrid.length ; i++) {
    buttonGrid[i].addEventListener('click', function(e) {
      e.target.innerText = playerInput;
      currentBoard[Math.floor(i/3)][i%3] = playerInput;
      setTimeout(computerMove, 500);
      checkWin();
    })
  } 
}


function checkWin() {
  let regexWin = /(O{3})|(X{3})/;

  function playerWins() {
    newPara.innerText = 'You win!';
    board.appendChild(newPara);
    playerScore++;
    buttonGrid.forEach(x => x.disabled = true);
    startButton.innerText = 'RESTART';
  }

  for (let i = 0 ; i < currentBoard.length ; i++) {

    //checks for horizontal and vertical wins
    if (currentBoard[i].join('').match(regexWin)) {
      playerWins();
      break;
    }
    else if (currentBoard.map(x => x[i]).join('').match(regexWin)) {
      playerWins();
      break;
    }
    
    //checks for diagonal wins
    let arrTemp = [];
    for (let j = 0 ; j < currentBoard.length ; j++) {
      arrTemp.push(currentBoard[j][j]);
    }
    if (arrTemp.join('').match(regexWin)) {
      playerWins();
      break;
    }
    let arrTemp2 = [];
    for (let j = 0 ; j < currentBoard.length ; j++) {
      arrTemp2.push(currentBoard[j][currentBoard.length-1-j]);
    }
    if (arrTemp2.join('').match(regexWin)) {
      playerWins();
      break;
    }
  }
}


function computerMove() {
  console.log('ecce machina');
}