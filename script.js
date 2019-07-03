
function createBoard(){
  resetData();
  var boardSize =document.getElementById("boardxrowxheight");
  var boardLength = parseInt(boardSize.value);
  var board = document.getElementById("gameboard");
  //remove any previous element to clear game space
  while(board.hasChildNodes()){
    board.removeChild(board.childNodes[0])
  };
  //create dynamic board
  for (var x = 0; x < boardLength; x++){
    gameArray[x] = new Array(boardLength);
  };
  for (var i = 0; i < boardLength; i++){
    var row = document.createElement("div");
    row.setAttribute("id","row");
    for (var j = 0; j < boardLength; j++){
      var box = document.createElement("div");
      box.style.backgroundColor = "yellow";
      box.setAttribute("id","box");
      box.setAttribute("name",i);
      box.setAttribute("value",j);
      box.addEventListener("click",checkBox);
      // box.addEventListener("click",checkWin);
      row.appendChild(box);
    };
    board.appendChild(row);
  };
}

var startingSign = 0;
var signInPlay = null;
var gameArray = null;
// create a multidimensional array through user inputs "X"
// var myarray=new Array(X)
// for (i=0; i <X; i++)
//     myarray[i]=new Array(X)

function resetData(){
  startingSign = 0;
  signInPlay = null;
  gameArray = [[],[],[]];
}

function checkBox(){
  var check = event.target
  var para = document.createElement("p")
  if (check.hasChildNodes()){
    console.log("existing entry!")
  }else if (startingSign === 0){
    para.innerText = "🍍";
    check.appendChild(para);
    startingSign = 1;
    signInPlay = para.innerText;
    checkWin(check,para.innerText)
  }else if (startingSign === 1){
    para.innerText = "🍇";
    check.appendChild(para);
    startingSign = 0;
    signInPlay = para.innerText;
    checkWin(check,para.innerText)
  }
}

function checkWin(check, sign){
  var posX = check.getAttribute("value");
  var posY = check.getAttribute("name");
  gameArray[posX][posY] = sign;
  checkLeftRight(posX, posY, sign);
  checkUpDown(posX, posY, sign);
  checkDiagonalTopLeftToBottomRight(posX, posY, sign);
  checkDiagonalTopRightToBottomLeft(posX, posY, sign);
  // rowCheck(sign);
  // columnCheck(sign);
  // diagonalLeftCheck(sign);
  // diagonalRightCheck(sign);
  // testForDirections(posX, posY, sign)
  console.log("gameArray[posX][posY] is "+posX+" "+posY)
}

function checkLeftRight(posX, posY, sign){
  setCount = 0;
  var basePosX = parseInt(posX);
  //to check how many signs appear to the right
  // checking the right entries
  for (var i = 0; i < gameArray.length; i++){
    if (basePosX < gameArray.length-1){
      basePosX+=1;
      if (gameArray[basePosX][posY] === signInPlay){
        setCount+=1;
      }else {
        break;
      }
    }
  }
  //reset basePosX to original index
  basePosX = parseInt(posX);
  //checking the left entries
  for (var j = 0; j < gameArray.length; j++){
    if (basePosX > 0){
      basePosX-=1;
      if (gameArray[basePosX][posY] === signInPlay){
        setCount+=1;
      }else {
        break;
      }
    }
  }
  //to include the original starting position count
  setCount+=1;
  if (setCount === 3){
    gameWin();
  }
}

function checkUpDown(posX, posY, sign){
  setCount = 0;
  var basePosY = parseInt(posY);
  //to check how many signs appear above
  for (var i = 0; i < gameArray.length; i++){
    if (basePosY > 0){
      basePosY-=1;
      if(gameArray[posX][basePosY] === signInPlay){
        setCount+=1;
      }else {
        break;
      }
    }
  }
  //reset basePosY to original index
  basePosY = parseInt(posY);
  //to check how many appear below
  for (var j = 0; j < gameArray.length; j++){
    if (basePosY < gameArray.length){
      basePosY+=1;
      if(gameArray[posX][basePosY] === signInPlay){
        setCount+=1;
      }else {
        break;
      }
    }
  }
  //to include the original starting position count
  setCount+=1;
  if (setCount === 3){
    gameWin();
  }
}

function checkDiagonalTopLeftToBottomRight(posX, posY, sign){
  setCount=0;
  var basePosX = parseInt(posX);
  var basePosY = parseInt(posY);
  //check diagonal top left of user click position
  for (var i = 0; i < gameArray.length; i++){
    if ((basePosX > 0) && (basePosY > 0)){
      basePosX-=1;
      basePosY-=1;
      if (gameArray[basePosX][basePosY] === signInPlay){
        setCount+=1;
        console.log("diagonal top left sign found!");
      }else{
        break;
      }
    }
  }
  //reset values of both basePos
  basePosX = parseInt(posX);
  basePosY = parseInt(posY);
  //check diagonal bottom right of user click position
  for (var j = 0; j < gameArray.length; j++){
      if ((basePosX < gameArray.length-1) && (basePosY < gameArray.length-1)){
        basePosX+=1;
        basePosY+=1;
        if (gameArray[basePosX][basePosY] === signInPlay){
          setCount+=1;
          console.log("diagonal bottom right sign found!");
        }else{
          break;
        }
      }
  }
  //to include the original starting position count
  setCount+=1;
  console.log(setCount);
  if (setCount === 3){
    gameWin();
  }
}

function checkDiagonalTopRightToBottomLeft(posX, posY, sign){
  setCount=0;
  var basePosX = parseInt(posX);
  var basePosY = parseInt(posY);
  //check diagonal top right of user click position
  for (var i = 0; i < gameArray.length; i++){
    if ((basePosX < gameArray.length-1) && (basePosY > 0)){
      basePosX+=1;
      basePosY-=1;
      if (gameArray[basePosX][basePosY] === signInPlay){
        setCount+=1;
        console.log("diag top right good!")
      }else{
        break;
      }
    }
  }
  //reset basePos back to original values
  basePosX = parseInt(posX);
  basePosY = parseInt(posY);
  //check diagonal bottom left of user click position
  for (var j = 0; j < gameArray.length; j++){
    if ((basePosX > 0) && (basePosY < gameArray.length)){
      basePosX-=1;
      basePosY+=1;
      if (gameArray[basePosX][basePosY]===signInPlay){
        setCount+=1;
        console.log("diag bottom left good!")
      }else{
        break;
      }
    }
  }
  //to include the original starting position count
  setCount+=1;
  if (setCount === 3){
    gameWin();
  }
}


//
//
// function rowCheck(){
//   setCount = 0;
//   for (var i = 0; i < 3; i++){
//     for (var j = 0; j < 3; j++){
//       if (gameArray[j][i] === signInPlay){
//           setCount += 1;
//
//       }
//       if (setCount === 3){
//         gameWin();
//       }
//     }
//     setCount = 0;
//   }
// }
//
// function columnCheck(){
//   setCount = 0;
//   for (var i = 0; i < 3; i++){
//     for (var j = 0; j < 3; j++){
//       if (gameArray[i][j] === signInPlay){
//           setCount += 1;
//       }
//       if (setCount === 3){
//         gameWin();
//       }
//     }
//     setCount = 0;
//   }
// }
//
// function diagonalLeftCheck(sign){
//   setCount = 0;
//   var j = 0;
//   for (var i = 0; i < 3; i++){
//     if (gameArray[j][i] === signInPlay){
//       setCount += 1;
//     }
//     j++;
//     if (setCount === 3){
//       gameWin();
//     }
//   }
//   setCount = 0;
// }
//
// function diagonalRightCheck(sign){
//   setCount = 0;
//   var j = 0;
//   for (var i = 2; i >= 0; i--){
//     if (gameArray[i][j] === signInPlay){
//       setCount += 1;
//       console.log("SAME SIGN")
//       console.log(sign)
//       console.log("diagonalCheck setCount is " + setCount)
//     }
//     j++;
//     if (setCount === 3){
//       gameWin();
//     }
//   }
//   setCount = 0;
// }


function gameWin(){
  alert("you win");
}

//
// function testForDirections(posX, posY, sign){
//   northTest(posX, posY, sign);
//   southTest(posX, posY, sign);
//   eastTest(posX, posY, sign);
//   westTest(posX, posY, sign);
//   neTest(posX, posY, sign);
//   nwTest(posX, posY, sign);
//   seTest(posX, posY, sign);
//   swTest(posX, posY, sign);
// }
//
// function northTest(posX, posY, sign){
//   setCount = 0;
//   while (posY != 0){
//     if (gameArray[posX][posY] === sign){
//       confirmGameArray()
//     }
//     posY--;
//   }
// }
