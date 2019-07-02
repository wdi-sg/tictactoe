//Player Related Variables
var currentPlayer = '';
var player1 = '';
var player2 = '';

//Holding Array
var currentArray=[];

//Board Length Variable
var boardLength = null;

//Win Condition Variable
var winConditionNumber = null;
var winConditionP1 = '' ;
var winConditionP2 = '' ;
var winAlready = false;
/////////////////////////////////////////////////////
// Display functions
/////////////////////////////////////////////////////
var clearField = function(){
    document.getElementById('board-size').value = '';
    document.getElementById('win-condition').value = '';
    document.getElementById('P1-name').value = '';
    document.getElementById('P2-name').value = '';
    document.getElementById('symbol').value = '';
}

/////////////////////////////////////////////////////
//Dynamic Board Builder
/////////////////////////////////////////////////////
var createBoard = function (){
    //Get Board Size
    boardLength = document.getElementById('board-size').value;
    boardLength = parseInt(boardLength);

    //Get player input
    player1 = document.getElementById('symbol').value;
    console.log(player1);
    player1 = player1.toUpperCase();
    if (player1 === 'O'){
        player2 = 'X';
    } else if (player1 === 'X') {
        player2 = 'O';
    } else {
        return;
    }
    currentPlayer = player1;//Set first player

    //Get Win Conditions
    winConditionNumber=document.getElementById('win-condition').value;
    generateWinCondition();

    clearField();
    //Build Board Variables
    var gridCount=1;
    var currentRow=0;
    var currentColumn=0;
    var totalNoOfGrids = boardLength*boardLength;
    var displayBoard = document.getElementById('game-display');
    var widthPercent = 95/boardLength;

    //Build Board
    while (gridCount <= totalNoOfGrids){
        var grid = document.createElement('p');
        grid.classList.add('grid');
        grid.setAttribute("id",`${currentRow}${currentColumn}`);
        grid.setAttribute("onclick",'inputEntry(this.id)');
        grid.style.width =`${widthPercent}%`;
        grid.innerHTML = '&nbsp;&nbsp;';

        if (gridCount%boardLength===0 && gridCount!==totalNoOfGrids){
            grid.style.borderBottom = '1px solid black';
        } else if ((currentRow+1) === boardLength && gridCount!==totalNoOfGrids) {
            grid.style.borderRight = '1px solid black';
        } else if (gridCount === totalNoOfGrids){
            //no style
        } else {
            grid.style.borderRight = '1px solid black';
            grid.style.borderBottom = '1px solid black';
        }

        displayBoard.appendChild(grid);

        currentColumn++

        if (gridCount%boardLength===0){
            currentRow++;
        }

        if (currentColumn===3){
            currentColumn=0;
        }

        gridCount++;
    }
};

//Creates Game Array
var createGameArray = function(){
    for (var i = 0; i<boardLength;i++){
        var newArray = [];
        for(var j = 0; j<boardLength;j++){
            newArray.push(' ');
        }
        currentArray.push(newArray);
    }
    console.log(currentArray);
}

//Generate Win Condition;
var generateWinCondition = function(){
     var newWinString1 = '';
     var newWinString2 = '';
    for (var i=0; i<winConditionNumber ; i++){
        newWinString1 += player1;
        newWinString2 += player2;
    }
    winConditionP1 = newWinString1;
    winConditionP2 = newWinString2;
}

//////////////////////////////////////////////////////
//Operation Function
/////////////////////////////////////////////////////

//Get input and display function
var inputEntry = function(id){
    var grid = document.getElementById(id);
    var index = id.split('');
    var row = parseInt(index[0]);
    var column = parseInt(index[1]);

    if (grid.innerText !== 'O' && grid.innerText!== 'X')
    {
        grid.innerText = currentPlayer;
        currentArray[row][column] = currentPlayer;

        if (currentPlayer === player1){
            checkWin(winConditionP1);
            currentPlayer=player2;
        } else if (currentPlayer === player2){
            checkWin(winConditionP2);
            currentPlayer=player1;
        }
    } else {
        return;
    }

}

var checkWin = function(winCondition){
    for (var i=0; i<boardLength;i++){
        if(currentArray[i].includes(' ')){
            break;
        } else if (i === boardLength - 1){
            alert('Draw!');
            return;
        }
    }

    if(winAlready) {
        alert('win');
        return;x``
    }

    var checkArray = '';
    //check each row
    for (var i=0; i < boardLength; i++) {
        if(checkArray.includes(winCondition)){
            winAlready=true;
            alert('winR');
            winCharacter = currentPlayer;
            return;
        }
    }

    //check each column
    for (var i=0; i < boardLength; i++) {
        checkArray = '';
        for (var j=0; j < boardLength; j++){
            checkArray += currentArray[j][i];
        }
        console.log(checkArray);
        console.log(' ');
        console.log(winCondition);
        if(checkArray.includes(winCondition)){
            winAlready=true;
            alert('winC');
            winCharacter = currentPlayer;
            return;
        }
    }

    //check each top-left to bottom-right diagonal
    for (var i=0; i < (2* (boardLength- 1)); i++) {
        checkArray = '';
        for (var j = boardLength-1; j >= 0; j--){
            var k = i - j;
            if (k >= 0 &&  k < boardLength) {
                checkArray += currentArray[j][k];
            }
        }
        if(checkArray.includes(winCondition)){
            winAlready=true;
            alert('winL');
            winCharacter = currentPlayer;
            return;
        }
    }

    //check each top-right to bottom-left diagonal
    for (var i=0; i < (2* (boardLength- 1)); i++) {
        checkArray = '';
        for (var j = boardLength-1; j >= 0; j--){
            var k = i -(boardLength - j);
            if (k >= 0 &&  k < boardLength) {
                checkArray += currentArray[j][k];
            }
        }
        if(checkArray.includes(winCondition)){
            winAlready=true;
            alert('winRi');
            winCharacter = currentPlayer;
            return;
        }
    }

}