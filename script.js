console.log('linked');

var userATurn = true;
var displayTurn = document.getElementById('display-turn');
var gameboardUI = document.getElementById('gameboard');
var numTiles = 9;
var userGame = [];
var gameboard = [];
var boardSize = 3;

var indicatePlayerTurn = function(){
  if (userATurn === true){
    displayTurn.innerText = "Player A's Turn";
  } else {
    displayTurn.innerText = "Player B's Turn";
  }
}

var newCreateBoard = function(){
  for (let a = 0; a < boardSize; a++) {
        let row = [];

        for (let b = 0; b < boardSize; b++) {
            row.push("");
        }
        gameboard.push(row);
      }
  console.log(gameboard);
  return gameboard;
}

newCreateBoard();


var sayHi = function(){
  console.log('hi');
}

var createBoardUI = function(){
  for (var i =0; i < numTiles; i++){
    var box = document.createElement('div');
    box.setAttribute("class", "box");
    box.setAttribute("id", "box-" + (i+1));
    box.innerHTML = "";
    gameboardUI.appendChild(box);
    box.addEventListener('click', function(){
      drawSymbol(event);
      console.log("in create board function");
      console.log(event);
    });
  }
  console.log('end');
}

indicatePlayerTurn();
createBoardUI();

var drawSymbol = function(event){
  console.log("in drawSymbol function");
  console.log(event.target.innerHTML);
  if(userATurn === true){
    userGame.push('x');
    console.log("x");
    event.target.innerHTML = "x";
    console.log(event.target.innerHTML);
    console.log("works");
    userATurn = false;
    indicatePlayerTurn();
  } else {
    userGame.push('o');
    console.log("o");
    event.target.innerHTML = "o";
    console.log(event.target.innerHTML);
    console.log("works");
    userATurn = true;
    indicatePlayerTurn();
  }
  console.log('game array is ' + userGame);
}
