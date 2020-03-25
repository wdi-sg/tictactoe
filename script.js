//variables
let gameboardDiv = document.getElementById("gameboard");
let buttonDiv = document.getElementById("gamebutton");
let gamePlayArr = [];
let outputCount = 0;
let boardSize = 3;
let gameButtonState = 0;

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
  if (event.target.textContent !== "" || gameButtonState === 0) {
    return;
  }
  //add: if win condition, add start game button, return
  let clickedIndex = event.target.id.split("-");
  console.log(clickedIndex[0]);
  console.log(clickedIndex[1]);
  let xCoor = clickedIndex[0];
  let yCoor = clickedIndex[1];
  outputCount++;
  console.log(outputCount);
  if (outputCount % 2 !== 0) {
    gamePlayArr[xCoor][yCoor] = "X";
    event.target.textContent = "X";
  } else {
    gamePlayArr[xCoor][yCoor] = "O";
    event.target.textContent = "O";
  }
}

function startGameButtonErase() {
  buttonDiv.addEventListener("click", function(event) {
    buttonDiv.removeChild(event.target);
    console.log(gameButtonState);
    console.log(event.target);
    gameButtonState = 1;
    console.log(gameButtonState);
  });
}

function initGameButton() {
  let newButton = document.createElement("button");
  newButton.textContent = "START GAME";
  buttonDiv.appendChild(newButton);
  gameButtonState = 0;
}

initGameBoard();


