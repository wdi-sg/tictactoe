/* VERSION 1
var playerOneTurn = true;
var playerTwoTurn = "O";
var userInput = [];
var item;
userInput = document.querySelectorAll(".game-square");
var toPerform = function(event){
    if(playerOneTurn){
        this.innerText = "X";
        playerOneTurn = false;
    }
    else{
        this.innerText = "O";
        playerOneTurn = true;
    }
}
for(item = 0;item<userInput.length;item++){
    //userInput[item] = document.querySelectorAll(".game-square");
    userInput[item].addEventListener("click",toPerform);
}
*/

/* START BUTTON ADDED

var i;
var j;
var gameSquare;
var playerOneTurn = true;
onClick = function(event){
    if (event.target.textContent !== "") {
    return;
  }
    if(playerOneTurn){
        this.innerText = "X";
        playerOneTurn = false;
    }
    else{
        this.innerText = "O";
        playerOneTurn = true;
    }
}
var button = document.createElement('button');
button.innerHTML = "START";
button.id = "btn";
button.className = "Button";
document.body.appendChild(button);
button.addEventListener('click',function(){console.log("Game started"); button.hidden = true;});

var gameBoard = document.querySelector('#gameboard');
for(i=0;i<3;i++){
    for(j=0;j<3;j++){
     gameSquare = document.createElement('div');
     console.log(gameSquare);
     gameSquare.className = "square";
     gameSquare.id = "sqr";
     gameBoard.appendChild(gameSquare);
     gameSquare.addEventListener('click',onClick);
    }
}
*/