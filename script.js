const gameBoard = document.createElement('div');
gameBoard.id = 'game-board';
//append gameBoard to body
document.body.appendChild(gameBoard);

const symbolX = 'X'
const symbolO = 'O'

for (let index = 0; index < 9; index++) {
    let gameTile = document.createElement('div');
    gameTile.classList.add('game-tile', `game-tile-${index}`); // ` template literal ${-lets you put variable here-}
    gameBoard.appendChild(gameTile);
    console.log(gameTile);
}