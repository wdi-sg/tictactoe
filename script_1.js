
var userInputBoardSize = parseInt(prompt("How big do you want your board to be?"));
var dimension = userInputBoardSize;

var playerOneIcon = "X"
var playerTwoIcon = "O"
var body;
var gameBoard;
var grid;
var boardArr =[];
var counterTurn=1;



var createGameBoard = function() {

    body = document.body;
    gameBoard = document.createElement("div");
    gameBoard.setAttribute("class","board");

    for(var i = 0; i < userInputBoardSize ;i++){

         var row = document.createElement("div");
        row.setAttribute("class","row");

            for(var j =0; j< userInputBoardSize; j++){

                var column = document.createElement("div");
                column.setAttribute("class","grid");
                row.appendChild(column);

    }

    gameBoard.appendChild(row);
    body.appendChild(gameBoard);

    }//1
    gameBoardArr();
}

var addClickerEvents = function() {

    grid = gameBoard.getElementsByClassName("grid");

        for(i = 0; i < grid.length; i++){

            grid[i].addEventListener("click", changeStateOnGrid);
            grid[i].addEventListener("click", checkGameBoardwithBoardArr);
         } //2
}

var changeStateOnGrid = function(){
    if(counterTurn%2 !== 0 && this.innerHTML == 0){
        this.innerHTML = playerOneIcon;
        counterTurn++;
    } else if(counterTurn%2 ==0 && this.innerHTML == 0){
        this.innerHTML = playerTwoIcon;
        counterTurn++;
    } //3 Checks this. If there is no innerhtml and counterTurn(odd->playerOne, even =>playerTwo) then it will give a innerHTML value
}

var gameBoardArr = function(){ //4 2D array based on size of board
    for(var i = 0; i < dimension ; i++){
        var xAxis = [];
        for(var j = 0; j < dimension ; j++){
            xAxis.push("");
        }
        boardArr.push(xAxis);
    }
}

var checkGameBoardwithBoardArr = function(){
    var gridCount = grid.length;
    while(gridCount>0){
        for(var i = 0; i < userInputBoardSize; i++){
            for(var j = 0; j < userInputBoardSize; j++){
                gridCount--;
                boardArr[i][j] = grid[(j)+(i*userInputBoardSize)].innerHTML;
            }
        }
    } // marks the browser gameboard with js board arr
}

var winConditonHorizontal = function(playerNow){
    var winningBoardArrs=[];
    var count=0;
    for(var i = 0; i <dimension-1; i++){
        for(var j=0; j<dimension-1; j++){
            if(boardArr[i][j] == boardArr[i][j+1] && boardArr[i][j+1] == boardArr[i][j+2]){
                console.log("Horizontals Win!")
            } else if(boardArr[j][i] == boardArr[j][i+1] && boardArr[j][i+1] == boardArr[j][i+2]){
                console.log("Verticals Win!")
            }
        }
    }
}

createGameBoard();
addClickerEvents();