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