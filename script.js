var createPage = function(){
  var container = document.createElement("div");
  var headingDiv = document.createElement("div");
  container.className = "container";
  //create heading 1
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
        divRow.appendChild(divCol);
   }
     container.appendChild(divRow);
  }
 document.body.appendChild(container);
}
createPage();

var won = false;
var circle = false;

var gameSquare = document.querySelectorAll(".game-square");

var board = [[null,null,null],
             [null,null,null],
             [null,null,null]];

var userClicked = function(){
    if(!won){
    //check if it;s second turn and nothing in the box clicked
    if(circle && (this.innerText!=="O" && this.innerText!=="X")){
        this.innerText= "O";
        updateArray("O");
         gameLogic("O");
    circle = false;}
    else if(!circle && (this.innerText!=="O" && this.innerText!=="X")){
        this.innerText= "X";
        updateArray("X");
        gameLogic("X");
        circle= true;
    }
        if(won){
    alert("Won");
     }
    }

}
//update Array According to click
var updateArray = function(char){
    var indexOfGameSquare = 0;
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board.length; j++){
            if(gameSquare[indexOfGameSquare].innerText===char){
                board[i][j] = char;
            }
            indexOfGameSquare++;
        }
    }
}
//
var gameLogic= function(char){
    var col = 0;
    var row = 0;

    //diagonal win, 2 possible combination
    if(board[row][col]===char && board[row+1][col+1]===char && board[col+2][col+2]===char){
          won = true;
    }
    if(board[row+2][col]===char && board[row+1][col+1]===char && board[row][col+2]===char){
        won = true;
    }
    for(var i = 0 ; i< 3; i++){
        //check all rows, 3 possible combination
    if(board[i][col]===char && board[i][col+1]===char && board[i][col+2]===char){
        won = true;
    }
          //check all columns, 3 possible combination
     if(board[row][i]===char && board[row+1][i]===char && board[row+2][i]===char){
        won = true;
    }
     }
       return false;
}

var clickEventForGameSquare = function(){

    for(var i = 0;i < gameSquare.length; i++){
        gameSquare[i].addEventListener("click",userClicked);
        gameSquare[i].style.cursor = "pointer";
    }
}

clickEventForGameSquare();