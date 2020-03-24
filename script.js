var createBoard = function(){
    var mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'board');
    document.body.appendChild(mainDiv);
    var board = document.querySelector('#board');
    console.log(board);

    var childDiv = document.createElement('div');
    childDiv.setAttribute('class','game-row');
    board.appendChild(childDiv);

    for(var colI = 0; colI < 9; colI++){
        var gameRow = document.querySelector('.game-row');
        var squareGrid = document.createElement('span');
        squareGrid.setAttribute('class', 'game-square');
        gameRow.appendChild(squareGrid);
    };
};

createBoard();

var userChoice = ["X", "O"];
var gameSquares = document.querySelectorAll('.game-square');
var player;
var playerSymbol;
var gameProgress = 0;

var gameSquaresClick = function(event){
    console.log('clicked');
    console.log(gameSquaresI);
    if (gameProgress % 2 === 0) {
        event.target.innerText = userChoice[0];
        gameProgress++;
        console.log(gameProgress);
    } else {
        event.target.innerText = userChoice[1];
        gameProgress++;
    };
};

for (var gameSquaresI = 0; gameSquaresI < gameSquares.length; gameSquaresI++){
    playerClick = gameSquares[gameSquaresI].addEventListener('click', gameSquaresClick);
};