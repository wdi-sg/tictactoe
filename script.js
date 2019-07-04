// console.log('linked');

var displayTurn = document.getElementById('display-turn');
var container = document.querySelector('.container');

//game defaults
var userATurn = true;
var boardSize = parseInt(prompt('How big do you want the board to be?'));
var game = [];
var boxCount = 0;
var filledSquares = 0;
var gameWin = false;
var gameEnd = false;
var winCross = "";
var winCircle = "";
var lastPlayer = "";

//dynamically generate winning combination based on board size

//function to generate xxxx if board size = 4, for comparison later
var generateWinCross = function(boardSize){
  var array = [];
  for(var i =0; i < boardSize; i++){
    array.push("x");
  }
  winCross = array.join("");
}

//function to generate oooo if board size = 4, for comparison later
var generateWinCircle = function(boardSize){
  var array = [];
  for(var i =0; i < boardSize; i++){
    array.push("o");
  }
  winCircle = array.join("");
}


// display Player turn
var indicatePlayerTurn = function(){
  if (userATurn === true){
    displayTurn.innerText = "Player A's Turn, Draw x";
  } else {
    displayTurn.innerText = "Player B's Turn, Draw o";
  }
}


//transpose the 2d array so that can get the "columns" value to compare later,

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

//get diagonal values of the game array to compare later
var diagonal = function(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
      newArray.push(array[i][i]);
  };

  return newArray;
}

//get antiDiagonal values of the game array to compare later
var antiDiagonal = function(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
      newArray.push(array[array.length-1-i][i]);
  };
  return newArray;
}


// dynamically create board based on boardSize

var createBoard = function(){

  // generate the 2 winning conditions based on boardsize, e.g. if boardsize = 3, return xxx and ooo
  generateWinCircle(boardSize);
  generateWinCross(boardSize);
  // console.log('win x = ' + winCross);
  // console.log('win o = ' + winCircle);

  //create the gameboard div in the html
  var board = document.createElement('div');
  board.setAttribute('id', 'gameboard');
  container.appendChild(board);

  //generate the tiles in the board based on the boardsize
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
            box.innerHTML = '';
            // box.innerHTML = [i]+','+[j];
            // box.innerHTML = boxCount+1;
            box.style.width = 100/boardSize + "%";
            board.appendChild(box);

            var numBox = document.createElement('div');
            numBox.setAttribute('class', "numBox");
            numBox.innerHTML = boxCount+1;
            box.appendChild(numBox);

            // TODO: change to set event listener, check with Akira
            box.addEventListener('click', function(){
              playTurn(event);
            });

            boxCount ++;
        }
        game.push(row);
      }

  console.log(game);
  return game;

}

//run the createBoard function
createBoard();

//show the player turn
indicatePlayerTurn();

//check if win
  //if win, game ends
  //else if all filled game ends
  //else do nothing, continue game


var checkWin = function(game){
  var loopCount = 0;
  for (var i = 0; i < game.length; i++){

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

    //else game gontinues
  }

  if (gameWin === true){
    setTimeout(function(){
    alert(`Game Ends. Player ${lastPlayer} wins!`);
    }, 200);
    gameEnd === true;
    //disable board
  }
}

var checkDraw = function(game){
   console.log('checkdraw');
  //if all the boxes are filled and gameWin === false
  // then gameEnd === true;
  filledSquares = 0;
  for (var i = 0; i < game.length; i++){
    for (var j=0; j < game[i].length; j++){
       if( game[i][j] === "o" ||  game[i][j] === "x" ){
         console.log(game[i][j]);
         filledSquares++;
         console.log("filledSquares =" + filledSquares );
       }
    }
  }
  if (filledSquares === (boardSize*boardSize)){
    console.log('game ends!');{
      if (gameWin === false){
        alert('Game draw!');
      }
    }
  }
}

var playTurn = function(event){
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
    symbol = 'x';
    lastPlayer = "A";

    userATurn = false;
    event.target.attributes.played.value = true;
    indicatePlayerTurn();
  } else if (userATurn === false) {
    game[yValue][xValue]= 'o';
    event.target.innerHTML = "o";
    event.target.classList.add('filled');
    symbol = 'o';
    lastPlayer = "B";

    userATurn = true;
    event.target.attributes.played.value = true;
    indicatePlayerTurn();
  }

  checkWin(game);
  checkDraw(game);
}
