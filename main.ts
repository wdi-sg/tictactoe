let gameBoard: number[][] = [];
let gameSize: number = 3;
let winCon: number = 3;

var boxClicked = function() {
  let x: number = parseInt(this.getAttribute("data-x"));
  let y: number = parseInt(this.getAttribute("data-y"));
  let state: number = parseInt(this.getAttribute("data-state"));
  console.log("User clicked on box " + x + " " + y);
  let currentText: string = this.innerText;
  if (!(currentText === "X" || currentText === "O")) {
    let oneOrTwo: number = circleCross();
    let letter: string;
    if (oneOrTwo === 1) {
      //return an X
      letter = "X";
    } else {
      //return an O
      letter = "O";
    }
    this.childNodes[0].innerText = letter;
    //assign that oneOrTwo to the array representation
    gameBoard[x][y] = oneOrTwo;
    checkWin();
  }
};

function setupBoard() {
  //create a boxClicked function that extracts the id from data-x and data-y and parses it back into numbers to reference to our checkWin function.
  var gameBoardHTML = document.getElementById("game-board");
  let gameBoardDimension: number = gameSize * 54;
  gameBoardHTML.style.width = gameBoardDimension + "px";
  gameBoardHTML.style.height = gameBoardDimension + "px";
  for (let i = 0; i < gameSize; i++) {
    let array2d: number[] = [];
    for (let j = 0; j < gameSize; j++) {
      array2d.push(0);
      var element = document.createElement("div");
      var paragraph = document.createElement("p");
      element.setAttribute("data-x", i.toString());
      element.setAttribute("data-y", j.toString());
      element.setAttribute("data-state", "0");
      element.setAttribute("class", "box");
      element.appendChild(paragraph);
      element.addEventListener("click", boxClicked);
      gameBoardHTML.appendChild(element);
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
      if (gameBoard[x][y] === gameBoard[x + i][y] && gameBoard[x][y] != 0) {
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
      if (gameBoard[x][y] === gameBoard[x][y + i] && gameBoard[x][y] != 0) {
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
  let diagonalSpaceUp: number = Math.min(horizontalSpace, verticalSpace);
  let winCountXY = 0;
  if (diagonalSpaceUp >= winCon) {
    for (let i = 0; i < winCon; i++) {
      if (gameBoard[x][y] === gameBoard[x + i][y + i] && gameBoard[x][y] != 0) {
        winCountXY++;
      }
    }
  }
  let verticalSpaceDown: number = y + 1;
  let diagonalSpaceDown: number = Math.min(horizontalSpace, verticalSpaceDown);
  if (diagonalSpaceDown >= winCon) {
    for (let i = 0; i < winCon; i++) {
      if (gameBoard[x][y] === gameBoard[x + i][y - i] && gameBoard[x][y] != 0) {
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
let circleOrCross = 0;
function circleCross() {
  circleOrCross++;
  let oneOrTwo = 0;
  if (circleOrCross % 2 === 0) {
    //circleOrCross is odd
    return 1;
  } else {
    return 2;
  }
}
//assign divs data-id attributes of data-id-x and data-id-y
//generate them all with javascript
