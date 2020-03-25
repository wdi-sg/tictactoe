//variables
let gameboardDiv = document.getElementById("gameboard");
let buttonDiv = document.getElementById("gamebutton");
let gamePlayArr = [];
let outputCount = 0;
let boardSize = 3;
let gameButtonState = 0;
let winStringX = "XXX";
let winStringO = "OOO";
let winAlert;

//initialise game board
//1. initialise game play array that contains empty string
//2. creates game play board display via DOM
//3. adds event listener to each grid element of board
function initGameBoard() {
  for (let i = 0; i < boardSize; i++) {
    gamePlayArr.push([]);
    for (let x = 0; x < boardSize; x++) {
      gamePlayArr[i].push("");
      let newDiv = document.createElement("div");
      newDiv.className = "square";
      newDiv.textContent = "";
      newDiv.id = i + "-" + x;
      gameboardDiv.appendChild(newDiv);
      console.log(newDiv.id);
      newDiv.addEventListener("click", onClick);
    }
  }
  startGameButtonErase();
}

function onClick(event) {
  //doesn't let you re-click squares or click square before starting game
  if (event.target.textContent !== "" || gameButtonState === 0) {
    return;
  }
  let clickedIndex = event.target.id.split("-");
  console.log(clickedIndex);
  // console.log(clickedIndex[1]);
  let xCoor = clickedIndex[0];
  let yCoor = clickedIndex[1];
  outputCount++;
  console.log(outputCount);
  //depending no. of turns, display X or O 
  if (outputCount % 2 !== 0) {
    gamePlayArr[xCoor][yCoor] = "X";
    event.target.textContent = "X";
  } else {
    gamePlayArr[xCoor][yCoor] = "O";
    event.target.textContent = "O";
  }
  checkWin();
}

function startGameButtonErase() {
  buttonDiv.addEventListener("click", function(event) {
    buttonDiv.removeChild(event.target);
    // console.log(gameButtonState);
    // console.log(event.target);
    gameButtonState = 1;
    //console.log(gameButtonState);
  });
}

function initGameButton() {
  let newButton = document.createElement("button");
  newButton.textContent = "START GAME";
  buttonDiv.appendChild(newButton);
  gameButtonState = 0;
}

function checkWin () {
  //check rows 
  for (let i=0; i<boardSize; i++) {
    let stringRow = gamePlayArr[i].join("");
    console.log("check rows");
    console.log(stringRow);
    if (outputCount % 2 !== 0 && stringRow.includes(winStringX)) {
      winAlert = "Player X has won the game!";
    }
    else if (outputCount % 2 === 0 && stringRow.includes(winStringO)) {
      winAlert = "Player O has won the game!";
    }
  }
  //check columns
  for (let y=0; y<boardSize; y++) {
    let stringCol = "";
    for (let x=0; x<boardSize; x++) {
      stringCol += gamePlayArr[x][y];
      console.log(stringCol);
      if (outputCount % 2 !== 0 && stringCol.includes(winStringX)) {
        winAlert = "Player X has won the game!";
      }
      else if (outputCount % 2 === 0 && stringCol.includes(winStringO)) {
        winAlert = "Player O has won the game!";
      }
    }
  }
  console.log(winAlert);
}

initGameBoard();


