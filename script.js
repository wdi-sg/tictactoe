//Player Related Variables
var currentPlayer = '';
var player1 = '';
var player2 = '';
var player1Name = '';
var player2Name = '';
var player1Score = 0;
var player2Score = 0;

//Holding Array
var currentArray=[];

//Board Length Variable
var boardLength = null;

//Win Condition Variable
var winConditionNumber = null;
var winConditionP1 = '' ;
var winConditionP2 = '' ;
var winAlready = false;
var checkDraw = 0;
/////////////////////////////////////////////////////
// Display functions
/////////////////////////////////////////////////////
var clearFieldPlayerInformation = function(){
    document.getElementById('P1-name').value = '';
    document.getElementById('P2-name').value = '';
    document.getElementById('P1-symbol').value = '';
    document.getElementById('P2-symbol').value = '';
}

var clearGameDetailField = function(){
    document.getElementById('board-size').value = null;
    document.getElementById('win-condition').value = null;
}

var clearBoard = function() {
    var board=document.getElementById('ttc-display');
    for (var i=0; i<(boardLength*boardLength);i++){
        board.removeChild(board.children[0]);
    }
}

var playerVsPlayer = function(){
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('player-information').style.display = 'initial';
}

var submitPlayerInformation = function(){
    player1Name = document.getElementById('P1-name').value;
    player2Name = document.getElementById('P2-name').value;

    player1 = document.getElementById('P1-symbol').value;
    player1 = player1.toUpperCase();
    player2 = document.getElementById('P2-symbol').value;
    player2 = player2.toUpperCase();

    if ((player1 ==="O" && player2==='X')||(player1 ==="X" && player2==='O')){

        currentPlayer=player1;

        clearFieldPlayerInformation();

        document.getElementById('player-information').style.display = 'none';
        document.getElementById('game-details').style.display = 'initial';
    } else {
        clearFieldPlayerInformation();
        alert('Incorrect Input');
    }
}

var buildBoard = function() {
    //Build Board Variables
    var gridCount=1;
    var currentRow=0;
    var currentColumn=0;
    var totalNoOfGrids = boardLength*boardLength;
    var displayBoard = document.getElementById('ttc-display');
    var widthPercent = 98/boardLength;

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

        if (currentColumn===boardLength){
            currentColumn=0;
        }

        gridCount++;
    }
}

var resetGame = function () {
    player1Score = 0;
    player2Score = 0;
    winConditionP1 = '' ;
    winConditionP2 = '' ;
    winAlready = false;
    checkDraw = 0;

    clearBoard();
    document.getElementById('main-game-display').style.display='none';
    document.getElementById('start-screen').style.display = 'initial';
    document.getElementById('ttc-display').style.opacity = 1;
    document.getElementById('game-button').style.display = 'none';
}

var playAgain = function () {
    currentArray=[];
    winAlready = false;
    checkDraw = 0;

    document.getElementById('ttc-display').style.opacity = 1;
    document.getElementById('game-button').style.display = 'none';

    clearBoard();
    buildBoard();
    createGameArray();

    if (currentPlayer===player2){
        document.getElementById('game-message').innerText=`${player2Name}'s Turn`;
    } else if(currentPlayer===player1){
        document.getElementById('game-message').innerText=`${player1Name}'s Turn`;
    }
}



/////////////////////////////////////////////////////
//Dynamic Board Builder
/////////////////////////////////////////////////////
var createGame = function (){

    //Get Board Size
    boardLength = document.getElementById('board-size').value;
    boardLength = parseInt(boardLength);

    //Get Win Conditions
    winConditionNumber=document.getElementById('win-condition').value;
    winConditionNumber=parseInt(winConditionNumber);

    if (winConditionNumber > boardLength) {
        clearGameDetailField();
        alert('Win condition cannot be more than board length');
        return;
    }
    generateWinCondition();

    //Generate Side Display
    document.getElementById('display-name1').innerText=player1Name;
    document.getElementById('display-name2').innerText=player2Name;
    document.getElementById('p1-dispsym').innerText=player1;
    document.getElementById('p2-dispsym').innerText=player2;
    document.getElementById('game-score').innerText=`${player1Name} ${player1Score}:${player2Score} ${player2Name}`;
    document.getElementById('game-message').innerText=`${player1Name}'s Turn`;

    clearGameDetailField();
    document.getElementById('game-details').style.display = 'none';
    document.getElementById('main-game-display').style.display = 'flex';

    buildBoard();
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

    if (winAlready){
        return;
    }

    if (grid.innerText !== 'O' && grid.innerText!== 'X')
    {
        grid.innerText = currentPlayer;
        currentArray[row][column] = currentPlayer;

        if (currentPlayer === player1){
            currentPlayer=player2;
            if (checkWin(winConditionP1)){
                player1Score++;
                document.getElementById('game-message').innerText=`${player1Name}had won the game`;
                document.getElementById('game-score').innerText=`${player1Name} ${player1Score}:${player2Score} ${player2Name}`;
                document.getElementById('ttc-display').style.opacity = 0.2;
                document.getElementById('game-button').style.display = 'initial';
                return;
            }
            checkDraw++;
            document.getElementById('game-message').innerText=`${player2Name}'s Turn`;
        } else if (currentPlayer === player2){
            currentPlayer=player1;
            if (checkWin(winConditionP2)){
                player2Score++;
                document.getElementById('game-message').innerText=`${player2Name}had won the game`;
                document.getElementById('game-score').innerText=`${player1Name} ${player1Score}:${player2Score} ${player2Name}`;
                document.getElementById('ttc-display').style.opacity = 0.2;
                document.getElementById('game-button').style.display = 'initial';
                return;
            }
            checkDraw++;
            document.getElementById('game-message').innerText=`${player1Name}'s Turn`;
        }
    }

    if (checkDraw === boardLength*boardLength) {
        document.getElementById('game-message').innerText=`It's a draw!`;
        document.getElementById('ttc-display').style.opacity = 0.2;
        document.getElementById('game-button').style.display = 'initial';
        return;
    }

}

var checkWin = function(winCondition){
    var checkArray;
    //check each row
    for (var i=0; i < boardLength; i++) {
        checkArray=' ';
        checkArray=currentArray[i].join('');
        if(checkArray.includes(winCondition)){
            winAlready=true;
            winCharacter = currentPlayer;
            return true;
        }
    }

    //check each column
    for (var i=0; i < boardLength; i++) {
        checkArray = '';
        for (var j=0; j < boardLength; j++){
            checkArray += currentArray[j][i];
        }
        if(checkArray.includes(winCondition)){
            winAlready=true;
            winCharacter = currentPlayer;
            return true;
        }
    }

    //check each top-left to bottom-right diagonal
    for (var i=winConditionNumber-1; i <= (2*boardLength-winConditionNumber-1); i++) {
        checkArray = '';
        for (var j = boardLength-1; j >= 0; j--){
            var k = i - j;
            if (k >= 0 &&  k < boardLength) {
                checkArray += currentArray[j][k];
            }
        }
        if(checkArray.includes(winCondition)){
            winAlready=true;
            winCharacter = currentPlayer;
            return true;
        }
    }

    //check each bottom-right to top-left diagonal
    for (var i=winConditionNumber; i <= (2*boardLength-winConditionNumber); i++) {
        checkArray = '';
        for (var j = boardLength-1; j >= 0; j--){
            var k = i -(boardLength - j);
            if (k >= 0 &&  k < boardLength) {
                checkArray += currentArray[j][k];
            }
        }
        if(checkArray.includes(winCondition)){
            winAlready=true;
            winCharacter = currentPlayer;
            return true;
        }
    }

}