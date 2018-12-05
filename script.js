const ranN = (num) => Math.floor(Math.random() * num); //return random number from 0-num
const toRad = (angleInDegree) => angleInDegree * Math.PI / 180;
const gameContainer = document.getElementById('container');
let gameGrid = [];
let playerTurn = true;


let gameSize = prompt('What size?');


class _grid {
    constructor(x, y, p1 = false, p2 = false, display = document.createElement('div')) {
        this.x = x;
        this.y = y;
        this.p1 = p1;
        this.p2 = p2;
        this.display = display;
        this.updateGrid = this.updateGrid.bind(this);
    }
    displayGrid() {
        this.display.className = 'grid';
        this.display.style.left = `${this.x}px`;
        this.display.style.top = `${this.y}px`;
        gameContainer.appendChild(this.display);
    }
    getUserInput() {
        this.display.addEventListener("click", this.updateGrid)
    }
    updateGrid() {
        if (playerTurn) {
            if (!this.p1 && !this.p2) {
                this.p1 = true;
                this.display.style.backgroundColor = 'red';
                updateTurn();
            }
        } else {
            if (!this.p1 && !this.p2) {
                this.p2 = true;
                this.display.style.backgroundColor = 'blue';
                updateTurn();
            }
        }
    }
}

const updateTurn = () => {
    checkWinState();
    if (playerTurn) {
        playerTurn = false
    } else {
        playerTurn = true
    }
}

let p1WinState =false;
let p2WinState = false;

const checkWinState = () => {
    let p1DiaA = true;
    let p1DiaB = true;
    let p2DiaA = true;
    let p2DiaB = true;
    for (i = 0; i < gameSize; i++) {
        let p1Row = true;
        let p2Row = true;
        let p1Col = true;
        let p2Col = true;
        p1DiaA &= gameGrid[i][i].p1;
        p1DiaB &= gameGrid[gameSize - 1 - i][i].p1;
        p2DiaA &= gameGrid[i][i].p2;
        p2DiaB &= gameGrid[gameSize - 1 - i][i].p2;
        for (j = 0; j < gameSize; j++) {
            p1Row &= gameGrid[i][j].p1;
            p2Row &= gameGrid[i][j].p2;
            p1Col &= gameGrid[j][i].p1;
            p2Col &= gameGrid[j][i].p2;
        };
        if (p1Row || p1Col) {
            alert('player 1 wins');
            restartGame();
        };
        if (p2Row || p2Col) {
            alert('player 2 wins');
            restartGame();
      };
    }
    if (p1DiaA || p1DiaB) {
        alert('player 1 wins');
        restartGame();
    };
    if (p2DiaA || p2DiaB) {
        alert('player 2 wins');
        restartGame();
    };
}
const createGame = (x) => {
    for (i = 0; i < x; i++) {
        gameGrid[i] = [];
        for (j = 0; j < x; j++) {
            gameGrid[i].push(new _grid(j + 100 * j, i + 100 * i));
            gameGrid[i][j].display.id = `x${j}y${i}`;
            gameGrid[i][j].displayGrid();
            gameGrid[i][j].getUserInput();
        }
    }
}
const restartGame = () => {
 //   let size=prompt('Would you like to play again? Type a number for size.');
 //   gameGrid=[];
 //   createGame(size);
}
createGame(gameSize);
///////////////RUN CODE///////////////////