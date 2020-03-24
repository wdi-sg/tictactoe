//Function to select grid item and change it to "X" or "O"
var turnForX = true;
var selectItem = function(){
    if (turnForX){
        this.innerText = "X"
        turnForX = false;
    } else{
        this.innerText = "O"
        turnForX = true;
    }
}

//Generate Game Board
var body = document.querySelector('body');
var gameContainer = document.createElement('div');
gameContainer.className = "container";

for (let i = 0; i < 9; i++){
    var gridItem = document.createElement('div');
    gridItem.className = "grid-item";
    gridItem.addEventListener("click", selectItem);
    gameContainer.appendChild(gridItem);
}
body.appendChild(gameContainer);