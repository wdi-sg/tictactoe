console.log("tictactoe");

//store player turn in global variable
var playerTurn = 0;

//counts number of moves, if equal to 9 > cannot click
var movesCount = 0;

//store empty board in array for looping of different states
var boardArray = [
[null, null, null],
[null, null, null],
[null, null, null]
];
console.log(boardArray);

//function to return x or o - cannot click a box more than once or click if empty
var turnTile = function(event){
    movesCount ++;
    console.log(movesCount);
    if (playerTurn === 0 && movesCount <= 9) {
        var position = event.target.id;
        var coords = position.split('')
        document.getElementById(position).textContent = "X";
        playerTurn ++;
        boardArray[parseInt(coords[0])][parseInt(coords[1])] = "X";
    }

    else if (playerTurn === 1 && movesCount <= 9) {
        for(var row = 0;row < boardArray.length; row++){
        for(var column = 0; column < boardArray[row].length; column++){
        if (boardArray[row][column]===' '){
        console.log('?')
        }
        else{
          console.log('-')
        }
    }
};
        var position = event.target.id;
        var coords = position.split('')
        console.log(position.split(''))
        document.getElementById(position).textContent = "O";
        playerTurn --;
        boardArray[parseInt(coords[0])][parseInt(coords[1])] = "O";
    }
    if (movesCount > 9) {
        removeClickEvent();
    }

};


// 9 buttons or divs with click events attached to each of them.
//After 9 moves are played the game doesn't do anything else.

var tiles = document.querySelectorAll(".game-button");
for(var i = 0; i < tiles.length; i++){
tiles[i].addEventListener("click", turnTile);
};

var removeClickEvent = function(){
    if (movesCount > 9){
    var tiles = document.querySelectorAll(".game-button");
        for (var j = 0; j < tiles.length; j ++) {
        tiles[j].removeEventListener("click", turnTile);
        }
    }
};

//If the users want to continue playing they can refresh the page.
var restartGame = function (){
    playerTurn = 0;
    movesCount = 0;
    boardArray = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
        ];
    document.querySelector(".game-board").innerHTML = " ";
};
var replayButton = document.querySelector("#restart");
replayButton.addEventListener("click",restartGame);

//winning state
/*  if (boardArray[0][0] === "X" && boardArray[0][1] === "X" && boardArray[0][2] === "X")
if (boardArray[1][0] === "X" && boardArray[1][1] === "X" && boardArray[1][2] === "X") */