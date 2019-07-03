console.log('linked');

var userATurn = true;
var displayTurn = document.getElementById('display-turn');
var gameboard = document.getElementById('gameboard');
var numTiles = 9;
var gameArray = [];

var indicatePlayerTurn = function(){
  if (userATurn === true){
    displayTurn.innerText = "Player A's Turn";
  } else {
    displayTurn.innerText = "Player B's Turn";
  }
}

var sayHi = function(){
  console.log('hi');
}

var createBoard = function(){
  for (var i =0; i < numTiles; i++){
    var box = document.createElement('div');
    box.setAttribute("class", "box");
    box.setAttribute("id", "box-" + (i+1));
    box.innerHTML = "";
    gameboard.appendChild(box);
    box.addEventListener('click', function(){
      drawSymbol(event);
      console.log("in create board function");
      console.log(event);
    });
  }
  console.log('end');
}

indicatePlayerTurn();
createBoard();

var drawSymbol = function(event){
  console.log("in drawSymbol function");
  console.log(event.target.innerHTML);
  if(userATurn === true){
    gameArray.push('x');
    console.log("x");
    event.target.innerHTML = "x";
    console.log(event.target.innerHTML);
    console.log("works");
    userATurn = false;
    indicatePlayerTurn();
  } else {
    gameArray.push('o');
    console.log("o");
    event.target.innerHTML = "o";
    console.log(event.target.innerHTML);
    console.log("works");
    userATurn = true;
    indicatePlayerTurn();
  }
  console.log('game array is ' + gameArray);
}
