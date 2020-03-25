//created container to wrap around elements
var container = document.querySelector(".container");

//Global variables to check if it's player one or player two turns and if anyone won
var won = false;
var currentPlayer = "O";
var clicked = 0;
var board = [[null,null,null],
             [null,null,null],
             [null,null,null]];


var createPage = function(){
  //clear container
  container.innerHTML = "";
  //create heading 1
  var headingDiv = document.createElement("div");
  var gameHeading = document.createElement("h1");
  gameHeading.innerText = "Tic-Tac-Toe";
  headingDiv.appendChild(gameHeading);
  container.appendChild(headingDiv);
//create div for rows and columns
  for(var i = 0; i < 3; i++){
      var divRow = document.createElement("div");
    for(var j = 0 ; j< 3; j++){
        var divCol = document.createElement("div");
        divCol.className = "game-square";
        divCol.addEventListener("click",userClicked);
        divCol.style.cursor = "pointer";
        divRow.appendChild(divCol);
    }
    container.appendChild(divRow);
  }
}
//start button at start of game
var createStartButton = function(){
    var button = document.createElement("button");
    button.innerText = "Click to Start Game";
    button.className = "start";
    button.addEventListener("click", createPage);
    console.log(container);
    container.appendChild(button);
}

createStartButton();
var userClicked = function(){
    clicked++;
    //check if it;s second turn and nothing in the box clicked
    if((this.innerText!=="O" && this.innerText!=="X")){
        this.innerText= currentPlayer;
        updateArray();
        gameLogic(currentPlayer);
    }
    //check if won after update
    if(won){
      won = false;
      message(currentPlayer + " won!");
      createStartButton();
    }else if(clicked>=9){
      message("It's a tie!");
      createStartButton();
    }
    //swap players
    if(currentPlayer === "O"){
      currentPlayer = "X";
    }else{
      currentPlayer = "O";
    }
}
var message = function(msg){
    container.innerHTML = "";
    var wonStatus = document.createElement("h1");
    wonStatus.innerText += msg;
    wonStatus.style.fontsize = "60px";
    reset();
    container.appendChild(wonStatus);
}
//reset Array
var reset = function(){
    board = [[null,null,null],
             [null,null,null],
             [null,null,null]];
    clicked = 0;
    currentPlayer = "O";
}
//update Array According to click
var updateArray = function(){
    var gameSquare = document.querySelectorAll(".game-square");
    var indexOfGameSquare = 0;
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board.length; j++){
            if(gameSquare[indexOfGameSquare].innerText !== board[i][j] &&
                (board[i][j]!== "X" || board[i][j] !== "O")
                ){
                board[i][j] = gameSquare[indexOfGameSquare].innerText;
            }
            indexOfGameSquare++;
        }
    }
}
//
var gameLogic= function(char){
    var col = 0;
    var row = 0;

    if(board[row][col]===char && board[row+1][col+1]===char && board[col+2][col+2]===char){
          won = true;
    }
    else if(board[row+2][col]===char && board[row+1][col+1]===char && board[row][col+2]===char){
        won = true;
    }
    for(var i = 0 ; i< 3; i++){
        //check all rows, 3 possible combination
    if(board[i][col]===char && board[i][col+1]===char && board[i][col+2]===char){
        won = true;
    }
          //check all columns, 3 possible combination
    else if(board[row][i]===char && board[row+1][i]===char && board[row+2][i]===char){
        won = true;
    }
     }
       return false;
}