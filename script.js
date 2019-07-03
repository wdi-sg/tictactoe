console.log('linked');

var displayTurn = document.getElementById('display-turn');
var gameboardUI = document.getElementById('gameboard');
var container = document.querySelector('.container');

//game defaults
var userATurn = true;
var numTiles = 9;
var userGame = [];
var gameboard = [];
var boardSize = 3;
var game = [];

// display Player turn

var indicatePlayerTurn = function(){
  if (userATurn === true){
    displayTurn.innerText = "Player A's Turn";
  } else {
    displayTurn.innerText = "Player B's Turn";
  }
}

// dynamically create board based on boardSize

var createBoard = function(){
  var board = document.createElement('div');
  board.setAttribute('id', 'gameboard');
  container.appendChild(board);
  for (var i = 0; i < boardSize; i++) {
        var row = [];

        for (var j = 0; j < boardSize; j++) {
            row.push("");
            var box = document.createElement('div');
            box.setAttribute('class', "box");
            box.setAttribute('x',[j]);
            box.setAttribute('y',[i]);
            box.style.width = 100/boardSize + "%";
            board.appendChild(box);
            box.addEventListener('click', function(){
              drawSymbol(event);
              console.log("in create board function");
              console.log(event);
            });
        }
        game.push(row);
      }
  console.log(game);
  return game;
}

createBoard();


var sayHi = function(){
  console.log('hi');
}

indicatePlayerTurn();

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
