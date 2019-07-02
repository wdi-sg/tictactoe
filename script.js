
function createBoard(){
  var board = document.getElementById("gameboard");
  while(board.hasChildNodes()){
    board.removeChild(board.childNodes[0])
  };
  for (var i = 0; i < 3; i++){
    var row = document.createElement("div");
    row.setAttribute("id","row");
    for (var j = 0; j < 3; j++){
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

var markState = 0;
var startingSign = 0;
var signInPlay = null;
var signCount = 0;
var gameArray = [[],[],[]];
// create a multidimensional array through user inputs "X"
// var myarray=new Array(X)
// for (i=0; i <X; i++)
//     myarray[i]=new Array(X)


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
  rowCheck(sign);
  columnCheck(sign);
  diagonalLeftCheck(sign);
  diagonalRightCheck(sign);
  // testForDirections(posX, posY, sign)
  console.log("gameArray[posX][posY] is "+posX+" "+posY)
}

function rowCheck(){
  setCount = 0;
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (gameArray[j][i] === signInPlay){
          setCount += 1;

      }
      if (setCount === 3){
        gameWin();
      }
    }
    setCount = 0;
  }
}

function columnCheck(){
  setCount = 0;
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (gameArray[i][j] === signInPlay){
          setCount += 1;
      }
      if (setCount === 3){
        gameWin();
      }
    }
    setCount = 0;
  }
}

function diagonalLeftCheck(sign){
  setCount = 0;
  var j = 0;
  for (var i = 0; i < 3; i++){
    if (gameArray[j][i] === signInPlay){
      setCount += 1;
    }
    j++;
    if (setCount === 3){
      gameWin();
    }
  }
  setCount = 0;
}

function diagonalRightCheck(sign){
  setCount = 0;
  var j = 0;
  for (var i = 2; i >= 0; i--){
    if (gameArray[i][j] === signInPlay){
      setCount += 1;
      console.log("SAME SIGN")
      console.log(sign)
      console.log("diagonalCheck setCount is " + setCount)
    }
    j++;
    if (setCount === 3){
      gameWin();
    }
  }
  setCount = 0;
}


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
