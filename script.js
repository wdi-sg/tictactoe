const gameBoard = document.createElement('div');
gameBoard.id = 'game-board';
//append gameBoard to body
document.body.appendChild(gameBoard);

var currentPlayer = 'Player 1';

const checkWinner = () => {
    const gameTiles = document.querySelectorAll('.game-tile');
    const matrix = [];
    const rows = [];
    const cols = [];
}

const playerMove = event => {
    const tile = event.target;
    tile.dataset.symbol = currentPlayer === 'Player 1' ? 'o' : 'x';
    tile.innerHTML = currentPlayer === 'Player 1' ? 'o' : 'x';
    // switch player
    if (currentPlayer === 'Player 1') {
        currentPlayer = 'Player 2';
    } else {
        currentPlayer = 'Player 1';
    }
    return checkWinner();
};

for (let index = 0; index < 9; index++) {
    let gameTile = document.createElement('div');
    gameTile.classList.add('game-tile', `game-tile-${index}`); // ` template literal ${-lets you put variable here-}
    gameTile.addEventListener('click', playerMove);
    gameBoard.appendChild(gameTile);
    console.log(gameTile);
}