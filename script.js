let body = document.querySelector('body');
let winStatement = document.createElement("p");
winStatement.id = "win-statement"

let player = "X";
let boardSize = 3;
let winLength = 3;

//Check Win Function
var someoneHasWon = () => {
    //Check for rows and columns and diagonals
    let matchCounterDiagonal = 0; //Diagonal counter must be outside loop to accumulate
    for (let i = 0; i < boardSize; i++){
        let matchCounterRow = 0;
        let matchCounterColumn = 0;
        //Diagonals
        if (gameState[i][i] === player){
            matchCounterDiagonal++
        }
        //Rows and Columns
        for (let k = 0; k < boardSize; k++){
            if (gameState[i][k] === player){
                matchCounterRow++
            }
            if (gameState[k][i] === player){
                matchCounterColumn++
            }
        }
        //Check for matches
        if (matchCounterRow === winLength || matchCounterColumn === winLength ||matchCounterDiagonal === winLength){
            return true
        }
    }
}

//Function to select grid item and change it to "X" or "O"
let selectItem = function(){
    if (player === "X"){
        //Update DOM
        this.innerText = "X"
        //Update Game State
        let idArray = this.id.split(",").map(x => parseInt(x));
        gameState[idArray[0]][idArray[1]] = "X";
        //Check win condition
        if (someoneHasWon()){
            winStatement.innerText = `Player ${player} has won!`
            body.appendChild(winStatement);
        }
        //Change Turn
        player = "O";

    } else{
        //Update DOM
        this.innerText = "O"
        //Update Game State
        let idArray = this.id.split(",").map(x => parseInt(x));
        gameState[idArray[0]][idArray[1]] = "O";
        //Check win condition
        if (someoneHasWon()){
            winStatement.innerText = `Player ${player} has won!`
            body.appendChild(winStatement);
        }
        //Change Turn
        player = "X";
    }
}

//Multi purpose loop to generate Game Board and Game State
let gameContainer = document.createElement('div');
let gameState = [];
gameContainer.className = "container";

for (let i = 0; i < boardSize; i++){
    let gameStateRow = [];
    gameState.push(gameStateRow);
    for (let k = 0; k < boardSize; k++){
        let gridItem = document.createElement('div');
        gridItem.className = "grid-item";
        gridItem.id = i + "," + k;
        gridItem.addEventListener("click", selectItem);
        gameContainer.appendChild(gridItem);
        gameStateRow.push(null);
    }
}
body.appendChild(gameContainer);

//Game button.
let startButton = document.createElement('button');
body.appendChild(startButton);

//Game button disappear and reappear
let buttonAppear = () => {
    startButton.classList.toggle('button-disappear', true)
}

//Game button. Declaration and DOM manipulation
startButton.id = "start-button";
startButton.innerText = "Start Game?";
startButton.addEventListener('click', buttonAppear)