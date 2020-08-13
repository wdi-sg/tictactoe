console.log('Script loading...')

let createBoard = () => {
    let board = document.createElement('div')
    board.classList.add('board')

    for(var i=0; i<9; i++){
        var tile = document.createElement('div')
        tile.classList.add(`tile-${i}`);
        tile.classList.add('board-item');
        var text = document.createElement('p')

        tile.appendChild(text)
        board.appendChild(tile)
        tile.addEventListener('click',(event)=>{
            console.log(event,'--- board-item')
            event.target.firstChild.textContent = 'X'
        })
    }

    // if you want index, in the for loop add to array
    // use a for each on the array

    document.querySelector('.dashboard').insertAdjacentElement('afterend', board)
}

// alternate clicks to switch x and o
// change the text to x or o
// after nine moves do nothing
// to continue refresh page?????
// click set a global variable to hold current player
// first player is x

// add win state
// check after the 6th turn
// notify users who won
// check for 3 moves in a row - row // col // diag

//track state of game

// start game with a button
// disappears when game start
// reappear when game ends

// asks for names of players 1 and 2
// ask for their symbol
// display names as the play

// keep score of the board

// add congrats screen when they win

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