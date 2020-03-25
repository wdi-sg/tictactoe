let body = document.querySelector('body');
let winStatement = document.createElement("p");
winStatement.id = "win-statement"

let player = "X";


//Check Win Function
var someoneHasWon = () => {
    //Check for rows
    for (let i = 0; i < 3; i++){
        let matchCounter = 0;
        for (let k = 0; k < 3; k++){
            if (gameState[i][k] === player){
                matchCounter++
            }
        }
        if (matchCounter === 3){
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

for (let i = 0; i < 3; i++){
    let gameStateRow = [];
    gameState.push(gameStateRow);
    for (let k = 0; k < 3; k++){
        let gridItem = document.createElement('div');
        gridItem.className = "grid-item";
        gridItem.id = i + "," + k;
        gridItem.addEventListener("click", selectItem);
        gameContainer.appendChild(gridItem);
        gameStateRow.push(null);
    }
}
body.appendChild(gameContainer);