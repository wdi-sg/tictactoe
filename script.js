//Getting board size and win length
let state = "getting board size"
let boardSize;
let winLength;

document.querySelector('#input').addEventListener('change', function(event){
    let currentInput = event.target.value;
    inputHappened(currentInput)
});

let clearInput = () => {
    document.querySelector('#input').value = ""
}

let inputHappened = (currentInput) => {
  if (state === "getting board size"){
        boardSize = parseInt(currentInput);
        display("What win condition would you like? Default is 3");
        state = "getting win length";
        document.querySelector('#board-size').innerText = `${boardSize} x ${boardSize}`
        clearInput();
  } else {
        document.querySelector('#output').classList.toggle('disappear', true)
        winLength = parseInt(currentInput);
        document.querySelector('#input').classList.toggle('disappear', true)
        document.querySelector('#win-condition').innerText = winLength;
        startButton.classList.toggle('disappear');
        state = "first game"
  }
};

let display = (stuffToDisplay) => {
    document.querySelector('#output').innerText = stuffToDisplay;
};

display("How large a board do you want? Default is 3")

//Game Start Code
let body = document.querySelector('body');
let winStatement = document.createElement("p");
winStatement.id = "win-statement"

let player = "X";


//Check Win Function
var someoneHasWon = () => {
    //Check for rows and columns and diagonals
    let matchCounterDiagonal = 0; //Diagonal counter must be outside loop to accumulate
    let matchCounterReverseDiagonal = 0;
    for (let i = 0; i < boardSize; i++){
        let matchCounterRow = 0;
        let matchCounterColumn = 0;
        //Diagonals
        if (gameState[i][i] === player){
            matchCounterDiagonal++
        }
        if (gameState[boardSize - i - 1][i] === player){
            matchCounterReverseDiagonal++
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
        if (matchCounterRow === winLength || matchCounterColumn === winLength ||matchCounterDiagonal === winLength ||matchCounterReverseDiagonal === winLength){
            state = "subsequent games"
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
            console.log("win")
            winStatement.innerText = `Player ${player} has won!`
            body.appendChild(winStatement);
            startButton.innerText = `Play again?`
            startButton.classList.toggle('disappear')
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
            startButton.innerText = `Play again?`
            startButton.classList.toggle('disappear')
        }
        //Change Turn
        player = "X";
    }
}

//Multi purpose loop to generate Game Board and Game State
let gameContainer = document.createElement('div');
let gameState = [];
gameContainer.className = "container";

//Game button.
let startButton = document.createElement('button');
body.appendChild(startButton);
startButton.classList.toggle('disappear', true);

//Game Start and Reset
let startGame = () => {
    startButton.classList.toggle('disappear', true);
    winStatement.innerText = "";
    gameContainer.style.gridTemplateColumns = `repeat(${boardSize}, 100px)`;
    gameContainer.style.gridTemplateRows = `repeat(${boardSize}, 100px)`;

    if (state === "first game"){
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
    } else {
        for (let i = 0; i < boardSize; i++){
            for (let k = 0; k < boardSize; k++){
                document.getElementById(i + "," + k).innerText = "";
                gameState[i][k] = null;
            }
        }
    }
}


//Game button. Declaration and DOM manipulation
startButton.id = "start-button";
startButton.innerText = "Start Game?";
startButton.addEventListener('click', startGame)