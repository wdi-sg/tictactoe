var playerX = [];
var playerO = [];
var turnCount = 1; // to check if turn is X or O
var storeBoardInput = [];
var createBoardArray = ["","","","","","","","",""];

var winningCombinations = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"]
]

var box = document.querySelectorAll('td');
createBoard();

// create board with 9 boxes
function createBoard()
{
    var createBoard = document.querySelectorAll('.box');
    for(var i = 0; i < createBoardArray.length; i++)
    {
        createBoardArray.innerText = createBoard[i];
        document.querySelector('#gameBoard').appendChild(createBoard);
    }
}
//add  click event to every box

var box = document.getElementByClassName('box');

for(var i=0;i < box.length; i++)
{
    box[i].addEventListener('click', playerTurn);
    console.log(i);
}

function checkForWin (storeBoardInput)
{
    for(var i = 0; i < winningCombinations.length; i++)
    {
        for (var j = 0; j < winningCombinations[i][j].length; j++)
        {
            if(storeBoardInput.indexOf(winningCombinations[i][j]) !== -1)
            {
                console.log("WIN");
            }
        }
    }
}

// setting the innerHTML to X or O based on the turns
function playerTurn(event) {

    if(event.target.innerHTML.length === 0)
    {
        if(turnCount % 2 === 0)
        {
            playerX.push(event.target.id);
            console.log(playerX);

            event.target.innerHTML = "X";
        } else {
            playerO.push(event.target.id);
            console.log(playerO);

            event.target.innerHTML = "O";
        }
    }
    turnCount++;
    checkForWin(playerO, "O");
    checkForWin(playerX, "X");
}

















/*
var playerSelection = function(inputEvent){
    console.log(inputEvent.target.innerText + 'X');
};

var gameBoard = document.querySelectorAll("div");

for(var i = 0; i < gameBoard.length; i++){
    gameBoard[i].addEventListener("click", gameBoard)
}
*/
