var players=[];
player[0] = "player 1";
player[1] = "player 2";
var signs=["X","O"];
var takeTurn = 0;
var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

var xWinRow = "XXX";
var oWinRow = "OOO";
var winAlert;
var playerXName;
var playerOName;
var xScore = 0;
var oScore = 0;


function play(event){
    if (event.innerText !== "X" && event.innerText !== "O"){
    event.innerText = signs[takeTurn];
    togglePlayer();
};
};

function togglePlayer(){
    if(takeTurn === 0) {
    takeTurn = 1;
} else {
    takeTurn = 0
};
};

var gameStatus = []
function gameStatus(){
    if()}



function checkWin() {
  var XWin = playerXName + " has won the game!";
  var OWin = playerOName + " has won the game!";
  //check rows
  for (let i = 0; i < boardSize; i++) {
    let stringRow = gamePlayArr[i].join("");
    // console.log(stringRow);
    if (outputCount % 2 !== 0 && stringRow.includes(xWinRow)) {
      winAlert = XWin;
      xScore++;
    } else if (outputCount % 2 === 0 && stringRow.includes(winStringO)) {
      winAlert = OWin;
      oScore++;
    }
  }

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