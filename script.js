//variables
let gameboardDiv = document.getElementById("gameboard");
let buttonDiv = document.getElementById("gamebutton");
let winDiv = document.getElementById("winoutput");
let gamePlayArr = [];
let outputCount = 0;
let boardSize = 3;
let winStringX = "XXX";
let winStringO = "OOO";
let winAlert;

//text variables
let XWin = "Player X has won the game!"
let OWin = "Player O has won the game!"
let draw = "It is a draw!";

//initialise game board
//1. initialise game play array that contains empty string
//2. creates game play board display via DOM
//3. adds event listener to each grid element of board
function initGameBoard() {
  for (let i = 0; i < boardSize; i++) {
    gamePlayArr.push([]);
    for (let x = 0; x < boardSize; x++) {
      gamePlayArr[i].push(" ");
      let newDiv = document.createElement("div");
      newDiv.className = "square";
      newDiv.textContent = " ";
      newDiv.id = i + "-" + x;
      gameboardDiv.appendChild(newDiv);
      console.log(newDiv.id);
      newDiv.addEventListener("click", onClick);
    }
  }
  startGameButtonErase();
}

function onClick(event) {
  //does not let you re-click squares or click squares before game start OR after 1 click OR after there is a win
  if (
    event.target.textContent !== " " ||
    buttonDiv.className === "normal" ||
    winAlert
  ) {
    return;
  }
  let clickedIndex = event.target.id.split("-");
  console.log(clickedIndex);
  // console.log(clickedIndex[1]);
  let xCoor = clickedIndex[0];
  let yCoor = clickedIndex[1];
  outputCount++;
  // console.log(outputCount);
  //depending on number of turns, display X or O
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
    buttonDiv.className = "hidden";
  });
}

function checkWin() {
  //check rows
  for (let i = 0; i < boardSize; i++) {
    let stringRow = gamePlayArr[i].join("");
    // console.log(stringRow);
    if (outputCount % 2 !== 0 && stringRow.includes(winStringX)) {
      winAlert = XWin;
    } else if (outputCount % 2 === 0 && stringRow.includes(winStringO)) {
      winAlert = OWin;
    }
  }
  //check columns
  for (let y = 0; y < boardSize; y++) {
    let stringCol = "";
    for (let x = 0; x < boardSize; x++) {
      stringCol += gamePlayArr[x][y];
      // console.log(stringCol);
      if (outputCount % 2 !== 0 && stringCol.includes(winStringX)) {
        winAlert = XWin;
      } else if (outputCount % 2 === 0 && stringCol.includes(winStringO)) {
        winAlert = OWin;
      }
    }
  }
  //check diagonal up and down
  let stringDiagUp = "";
  let stringDiagDown = "";
  let xCo = boardSize - 1;
  let yCo = 0;
  for (let z = 0; z < boardSize; z++) {
    stringDiagUp += gamePlayArr[xCo][yCo];
    stringDiagDown += gamePlayArr[yCo][yCo];
    xCo--;
    yCo++;
    // console.log(stringDiagDown);
    // console.log(stringDiagUp);
    if (
      outputCount % 2 !== 0 &&
      (stringDiagUp.includes(winStringX) || stringDiagDown.includes(winStringX))
    ) {
      winAlert = XWin;
    } else if (
      outputCount % 2 === 0 &&
      (stringDiagUp.includes(winStringO) || stringDiagDown.includes(winStringO))
    ) {
      winAlert = OWin;
    }
  }
  // console.log(winAlert);
  displayWinAlert(winAlert);
}

function displayWinAlert(winAlert) {
  let newP = document.createElement("p");
  if (winAlert === undefined && outputCount === boardSize * boardSize) {
    winAlert = draw;
  }
  newP.textContent = winAlert;
  winDiv.appendChild(newP);
  if (winAlert) {
    restartGame();
  }
}

function restartGame() {
  buttonDiv.className = "normal";
  buttonDiv.addEventListener("click", function(event) {
    gameboardDiv.innerHTML = "";
    winDiv.innerHTML = "";
    gamePlayArr = [];
    outputCount = 0;
    winAlert = "";
    initGameBoard();
  });
}

initGameBoard();
