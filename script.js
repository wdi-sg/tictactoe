//variables
let gameboard = document.getElementById("gameboard");
let gamePlayArr = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];
let outputCount = 1;

//initialise game board
function initGameBoard() {
  for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 3; x++) {
      let newDiv = document.createElement("div");
      newDiv.className = "square";
      newDiv.textContent = "";
      newDiv.id = i + "-" + x;
      gameboard.appendChild(newDiv);
      console.log(newDiv.id);
      newDiv.addEventListener("click", onClick);
    }
  }
}

function onClick(event) {
  if (event.target.textContent !== "") {
    return;
  }
  let clickedIndex = event.target.id.split("-");
  console.log(clickedIndex[0]);
  console.log(clickedIndex[1]);
  let xCoor = clickedIndex[0];
  let yCoor = clickedIndex[1];
  if (outputCount % 2 !== 0) {
    gamePlayArr[xCoor][yCoor] = "X";
    event.target.textContent = "X";
  } else {
    gamePlayArr[xCoor][yCoor] = "O";
    event.target.textContent = "O";
  }
  outputCount++;
}

initGameBoard();
