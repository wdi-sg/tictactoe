let gameBoard: number[][] = [];
let gameSize: number = 3;
let winCon: number = 3;
function setupBoard() {
  for (let i = 0; i < gameSize; i++) {
    let array2d: number[] = [];
    for (let j = 0; j < gameSize; j++) {
      array2d.push(0);
    }
    gameBoard.push(array2d);
  }
}
setupBoard();

let horizontalLength: number = gameBoard.length;
let verticalLength: number = gameBoard[0].length;

function checkHorizontal(x: number, y: number) {
  let horizontalSpace: number = horizontalLength - x;
  let winCountX = 0;
  if (horizontalSpace >= winCon) {
    for (let i = 0; i < winCon; i++) {
      if (gameBoard[x][y] === gameBoard[x + i][y] && (gameBoard[x][y] != 0) ) {
        winCountX++;
      }
    }
  }
  if (winCountX === winCon) {
    console.log("horizontal win condition met");
  }
}
function checkVertical(x: number, y: number) {
  let verticalSpace: number = verticalLength - y;
  let winCountY = 0;
  if (verticalSpace >= winCon) {
    for (let i = 0; i < winCon; i++) {
      if (gameBoard[x][y] === gameBoard[x][y + i] && (gameBoard[x][y] != 0) ) {
        winCountY++;
      }
    }
  }
  if (winCountY === winCon) {
    console.log("vertical win condition met");
  }
}
function checkDiagonal(x: number, y: number) {
  let horizontalSpace: number = horizontalLength - x;
  let verticalSpace: number = verticalLength - y;
  let diagonalSpace: number = Math.min(horizontalSpace, verticalSpace);
  let winCountXY = 0;
  if (diagonalSpace >= winCon) {
    for (let i = 0; i < winCon; i++) {
      if (gameBoard[x][y] === gameBoard[x + i][y + i] && (gameBoard[x][y] != 0) ) {
        winCountXY++;
      }
    }
  }
  if (winCountXY === winCon) {
    console.log("diagonal win condition met");
  }
}
function checkWin() {
  //function to check through all 3 possible directions in each cell
  for (let i = 0; i < horizontalLength; i++) {
    for (let j = 0; j < verticalLength; j++) {
      checkHorizontal(i, j);
      checkVertical(i, j);
      checkDiagonal(i, j);
    }
  }
}
//write a function that alternates between returning the number 1 and the number 2 everytime it is called