// console.log('linked');

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
var boxCount = 0;

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
            // row.push(i+""+j);
            row.push(boxCount+1);
            var box = document.createElement('div');
            box.setAttribute('id', "box-"+ (boxCount+1));
            box.setAttribute('class', "box");
            box.setAttribute('posX',[j]);
            box.setAttribute('posY',[i]);
            box.innerHTML = [i]+','+[j];
            // box.innerHTML = boxCount+1;
            box.style.width = 100/boardSize + "%";
            board.appendChild(box);
            box.addEventListener('click', function(){
              drawSymbol(event);
              // console.log("in create board function");
              // console.log(event);
            });
            boxCount ++;
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
  // console.log("in drawSymbol function");
  console.log(`game[${event.target.attributes.posx.value}][${event.target.attributes.posy.value}]`)
  var xValue = event.target.attributes.posx.value;
  var yValue = event.target.attributes.posy.value;

  if(userATurn === true){
    game[yValue][xValue]= 'x';
    event.target.innerHTML = "x";
    userATurn = false;
    indicatePlayerTurn();
  } else {
    game[yValue][xValue]= 'o';
    event.target.innerHTML = "o";
    userATurn = true;
    indicatePlayerTurn();
  }

  console.log(game);
}
