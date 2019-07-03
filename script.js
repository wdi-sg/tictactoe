// console.log('linked');

var displayTurn = document.getElementById('display-turn');
var container = document.querySelector('.container');

//game defaults
var userATurn = true;
var boardSize = 4;
var game = [];
var boxCount = 0;
var gameWin = false;
var winCross = "";
var winCircle = "";


var generateWinCross = function(boardSize){
  var array = [];
  for(var i =0; i < boardSize; i++){
    array.push("x");
  }
  winCross = array.join("");
  console.log(winCross);
}

var generateWinCircle = function(boardSize){
  var array = [];
  for(var i =0; i < boardSize; i++){
    array.push("o");
  }
  winCircle = array.join("");
  console.log(winCircle);
}


// display Player turn
var indicatePlayerTurn = function(){
  if (userATurn === true){
    displayTurn.innerText = "Player A's Turn";
  } else {
    displayTurn.innerText = "Player B's Turn";
  }
}


//transpose game
var transpose = function(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
      newArray.push([]);
  };

  for(var i = 0; i < array.length; i++){
      for(var j = 0; j < array[i].length; j++){
          newArray[j].push(array[i][j]);
      };
  };

  return newArray;
}

//get diagonal values of the game array
var diagonal = function(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
      newArray.push(array[i][i]);
  };

  return newArray;
}

//get antiDiagonal values of the game array
var antiDiagonal = function(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
      newArray.push(array[array.length-1-i][i]);
  };
  return newArray;
}


// dynamically create board based on boardSize

var createBoard = function(){
  var board = document.createElement('div');
  board.setAttribute('id', 'gameboard');
  container.appendChild(board);
  generateWinCircle(boardSize);
  generateWinCross(boardSize);
  console.log('win x = ' + winCross);
  console.log('win o = ' + winCircle);
  for (var i = 0; i < boardSize; i++) {
        var row = [];
        for (var j = 0; j < boardSize; j++) {
            // row.push(i+""+j);
            row.push((boxCount+1));
            var box = document.createElement('div');
            box.setAttribute('id', "box-"+ (boxCount+1));
            box.setAttribute('class', "box");
            box.setAttribute('posX',[j]);
            box.setAttribute('posY',[i]);
            box.setAttribute('played','false');
            box.innerHTML = [i]+','+[j];
            // box.innerHTML = boxCount+1;
            box.style.width = 100/boardSize + "%";
            board.appendChild(box);

            var numBox = document.createElement('div');
            numBox.setAttribute('class', "numBox");
            numBox.innerHTML = boxCount+1;
            box.appendChild(numBox);

            // TODO: change to set event listener, check with Akira
            box.addEventListener('click', function(){
              drawSymbol(event);
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

//check if win
  //if win, game ends
  //else if all filled game ends
  //else do nothing, continue game


var checkWin = function(game,event,symbol){
  var loopCount = 0;
  // console.log("event");
  // console.log(event);
  // console.log("game");
  // console.log(game);
  // console.log("symbol");
  // console.log(symbol);
  // console.log("played " + event.target.attributes.played.value);
  for (var i = 0; i < game.length; i++){
    var gameRow = game[i].join('');
    console.log(gameRow);

    var gameTransposed = transpose(game);

    console.log('gameTransposed');
    console.log(gameTransposed);

    var gameDiagonal = diagonal(game);
    console.log('gameDiagonal');
    console.log(gameDiagonal);

    var gameAntiDiagonal = antiDiagonal(game);
    console.log('gameAntiDiagonal');
    console.log(gameAntiDiagonal);

    if (game[i].join('') === winCross || game[i].join('') === winCircle){
      //checkHorizontal
      gameWin = true;
      console.log('win');
    } else if(gameTransposed[i].join('') === winCross || gameTransposed[i].join('') === winCircle){
      //checkVertical
      gameWin = true;
      console.log('win');
    } else if(gameDiagonal.join('') === winCross || gameDiagonal.join('') === winCircle){
      gameWin = true;
      console.log('win');
    } else if(gameAntiDiagonal.join('') === winCross || gameAntiDiagonal.join('') === winCircle){
      gameWin = true;
      console.log('win');
    }

    // for (var j = 0; j < game[i].length ; j++){
    //   loopCount ++;
    //   // console.log('loopCount' + loopCount);
    //   // console.log('i is ' + i);
    //   // console.log('j is ' + j);
    //   console.log(game[i][j]);
    //   console.log(symbol);
    //
    //   //if all y is the same
    //   //if all x is the same
    //   //if diagonal same
    //   //if all anti-diagonal is the same
    // }
  }
}

var drawSymbol = function(event){
  console.clear();
  // console.log(`game[${event.target.attributes.posy.value}][${event.target.attributes.posx.value}]`);
  var xValue = event.target.attributes.posx.value;
  var yValue = event.target.attributes.posy.value;
  // console.log("played " + event.target.attributes.played.value);
  var symbol = "";

  // todo check if already drawn
  if(userATurn === true){
    game[yValue][xValue]= 'x';
    event.target.innerHTML = "x";
    event.target.classList.add('filled');
    userATurn = false;
    event.target.attributes.played.value = true;
    indicatePlayerTurn();
    symbol = 'x';
    console.log('player A plays  ' + symbol);
  } else if (userATurn === false) {
    game[yValue][xValue]= 'o';
    event.target.innerHTML = "o";
    event.target.classList.add('filled');
    userATurn = true;
    event.target.attributes.played.value = true;
    indicatePlayerTurn();
    symbol = 'o';
    console.log('player B plays  ' + symbol);
  }
  // console.log(game,event,symbol);
  checkWin(game,event,symbol);
}
