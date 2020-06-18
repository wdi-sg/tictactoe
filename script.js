var gameBoard = []; //initialize game board as an array
var gameState = "X";
var anotherState = 0;

gameBoard = document.querySelectorAll('.game-square'); //stores all the spans into array



for(let i = 0; i < gameBoard.length; i++){ //add onclick to all spans
    gameBoard[i].onclick = doSomething;
}
function doSomething(){
    if(gameState == "X" && anotherState < 9){
        this.innerHTML = "X";
        gameState = "O";
        anotherState++;
        squareChecker();
    } else if(gameState == "O" && anotherState < 8){
        this.innerHTML = "O";
        gameState = "X";
        anotherState++;
        squareChecker();
    } else {
        //game end
    }
}


var squareChecker = function(){//get square state and stick into array
    var tempArr = [];
    
        for(let i = 1; i < 10; i++){
            var square = document.getElementById("box"+i).innerHTML;
            tempArr.push(square);
        }
         
    
    
    console.log(tempArr);
}
