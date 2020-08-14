console.log('Script loading...')

let createBoard = () => {
    let board = document.createElement('div')
    board.classList.add('board')

    let tiles = [];
    for(var i=0; i<9; i++){
        var tile = document.createElement('div')
        tile.classList.add(`tile-${i}`);
        tile.classList.add('board-item');
        var text = document.createElement('p')

        tile.appendChild(text)

        tiles.push(tile);
    }

    tiles.forEach((item, index)=>{
        item.id = index;
        item.addEventListener('click', (event) => {
            handleClick(event);
        })
        board.appendChild(item)
    })

    // if you want index, in the for loop add to array
    // use a for each on the array

    document.querySelector('.dashboard').insertAdjacentElement('afterend', board)
}

// global variables

let playerOne = '';
let playerOneSymbol = '';
let playerOneScore = 0;

let playerTwo = '';
let playerTwoSymbol = '';
let playerTwoScore = 0;

let gameState = 'initial';

let currentPlayer = null;
let currentBoard = [];
let currentStep = 0;

//
// QOL functions
//

// dont clear unless i can find a way to set default;
// let clearValue = (elementName) => {
//     document.querySelector(elementName).value = '';
// }

//
//  MAIN CODE HERE
//

// triggered by button
let startGame = () => {
    gameState = 'start';
    getInput();

    // player one always starts first
    currentPlayer = playerOne;

    console.log(gameState, '--- startGame')
    document.querySelector('.options').style.display = 'none';

    //update
    dashboard()
    scoreboard()
}

let getInput = () => {
    playerOne = document.getElementById('player-1').value;
    playerOneSymbol = document.getElementById('player-1-symbol').value;
    playerTwo = document.getElementById('player-2').value;
    playerTwoSymbol = document.getElementById('player-2-symbol').value;
    // clearValue('#player-1');
    // clearValue('#player-1-symbol');
    // clearValue('#player-2');
    // clearValue('#player-2-symbol');
}

//update the dashboard to show currentplayer
let dashboard = () => {
    var output = 'Are you ready player?';
    if (gameState === 'win'){
        output = `Player ${currentPlayer} won!\nPress play to start again`;
    } else if (gameState === 'start'){
        output = `Player ${currentPlayer} turn`;
    }
    document.querySelector('.dashboard>p').innerText = output;
}

let scoreboard = () => {
    document.querySelector('#pOne').innerText = playerOne;
    document.querySelector('#pOneScore').innerText = playerOneScore;
    document.querySelector('#pTwo').innerText = playerTwo;
    document.querySelector('#pTwoScore').innerText = playerTwoScore;
}

//
// Game only continues on click
 //

let handleClick = (event) => {
    if (gameState !== 'start'){
        return
    }

    // display current action of player
    if (currentPlayer === playerOne){
        currentBoard[event.target.id] = currentPlayer;
        event.target.firstChild.textContent = playerOneSymbol;
    } else {
        currentBoard[event.target.id] = currentPlayer;
        event.target.firstChild.textContent = playerTwoSymbol;
    }
    currentStep++;

    // check for win
    if(checkWin()){
        endGame();
        return;
    }

    // change player
    if (currentPlayer === playerOne){
        currentPlayer = playerTwo;
    } else {
        currentPlayer = playerOne;
    }
    dashboard();

}

let checkWin = () => {
    var found = false;

    if (currentStep < 4 && currentStep !== 9){
        return found
    }
    console.log(currentStep,'---currentStep');

    //check vertical
    for(var i=0; i < 9; i = i+3){
        if(currentBoard[i] === currentPlayer &&
           currentBoard[i+1] === currentPlayer &&
           currentBoard[i+2] === currentPlayer){
            gameState = 'win'
            if(currentStep%2 === 1){
                playerOneScore++;
            } else {
                playerTwoScore++;
            }
            console.log(gameState,"--- checkWin")
            return true
        }
    }
    //check horizontal
    for(var i=0; i < 9; i++){
        if(currentBoard[i] === currentPlayer &&
           currentBoard[i+3] === currentPlayer &&
           currentBoard[i+6] === currentPlayer){
            gameState = 'win'
            if(currentStep%2 === 1){
                playerOneScore++;
            } else {
                playerTwoScore++;
            }
            console.log(gameState,"--- checkWin")
            return true
        }
    }
    //check diag
    if((currentBoard[0] === currentPlayer &&
        currentBoard[4] === currentPlayer &&
        currentBoard[8] === currentPlayer)||
       (currentBoard[2] === currentPlayer &&
        currentBoard[4] === currentPlayer &&
        currentBoard[6] === currentPlayer))
    {
        gameState = 'win'
        if(currentStep%2 === 1){
            playerOneScore++;
        } else {
            playerTwoScore++;
        }
        console.log(gameState,"--- checkWin")
        return true
    }
    if (currentStep === 9){
        return true
    }
}

let endGame = () => {
    currentBoard = [];
    dashboard();
    scoreboard();
    currentStep = 0;
    gameState = 'initial';
    console.log(gameState,'---endGame')

    //clear and refresh board
    var child = document.querySelector('.board')
    child.parentNode.removeChild(child);
    createBoard()
    document.querySelector('.options').style.display = 'block';
}

///////// further ////////////


// set timer for each move - random move if time is out

// use css animation to animate filling the board


///////// further ////////////


// use dynamic board - how large of a board
// ask for win condition how many in a row

// add computer player
// lvl 1 random
// lvl 2 defensive
// lvl 3 offensive

// choose connect four or tictactoe
















window.onload = ()=> {
    createBoard();
}

console.log('Script loaded!')