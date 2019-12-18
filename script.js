console.log("Tic Tac Toe assignment")

var createBoard = function(){
    for(var j = 0; j < 3; j++){
      var createRows = document.createElement("div");
      createRows.classList = "game-row";
      document.querySelector("#board").appendChild(createRows);
        for(var i = 0; i < 3; i++){
          var createColumns = document.createElement("div");
          createColumns.classList = "game-square";
          var selectRows = document.querySelectorAll(".game-row");
          selectRows[j].appendChild(createColumns);
        }
    }
}

createBoard();

// global variables
var button = document.querySelectorAll('.game-square');
var player = false;
var board = [
    [null,null,null],
    [null,null,null],
    [null,null,null]];

var win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

// check win condition
var checkWin = function(input){

    if(board[0][0] && board[0][1] && board[0][2] === input){
        alert("You won!");
    }else if (board[1][0] && board[1][1] && board[1][2] === input){
        alert("You won!");
    }else if (board[2][0] && board[2][1] && board[2][2] === input){
        alert("You won!");
    }else if (board[0][0] && board[1][0] && board[2][0] === input){
        alert("You won!");
    }else if (board[0][1] && board[1][1] && board[2][1] === input){
        alert("You won!");
    }else if (board[0][2] && board[1][2] && board[2][2] === input){
        alert("You won!");
    }else if (board[0][2] && board[1][1] && board[2][0] === input){
        alert("You won!");
    }else if (board[0][0] && board[1][1] && board[2][2] === input){
        alert("You won!");
    } else {
        console.log("nothing")
    }
}

// adding to my board variable
var addToBoardArray = function(input){
    var buttonIncrement = 0
    for(var i = 0; i < board.length; i++){
        for (var j = 0; j < board.length; j++){
            if (button[buttonIncrement].innerHTML === input){
            board[i][j] = input;
            }
            buttonIncrement++;
        }
    }
}

//function to add x or o
var game = function(input){
    if (player === false){
        this.innerHTML = "X"; // or event.target
        player = true;
        addToBoardArray(this.innerHTML);
        checkWin(this.innerHTML);
    } else {
        this.innerHTML = "O"; // or event.target
        player = false;
        addToBoardArray(this.innerHTML);
        checkWin(this.innerHTML);
    }
};

// on click executes the game function to add x or o
var clicker = function(){
    for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click', game);
    }
};

clicker();