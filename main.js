// Particle JS stuff for background

const particleOptions = {
    particles: {
        number: {
            value: 114,
            density: {
                enable: true,
                value_area: 473.4895191122072
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
}

particlesJS("particle", particleOptions);

// My Code starts here

let gameBoard = [];
const playerList = ['O', 'X']
let currentPlayer = 1;
const player1 = 1;
const player2 = 2;
let gameOver = false;
let msgBoard = document.getElementById('msgBoard');
let maxRow = 3;
let maxColumn = 3;

function setupGameBoard() {

    currentPlayer = 1;
    gameOver = false;

    var gameCells = document.getElementsByClassName('gameCell');
    var winnerMessage = document.getElementById('winnerMessage');

    msgBoard.textContent = "Current Player is : " + currentPlayer;


    // console.log(gameCells);

    for (var i = 0; i < gameCells.length; i++) {
        gameCells[i].textContent = ""

        // if (gameCells[i].classList.contains('gameCell-flip-color')) {
        //     gameCells[i].classList.toggle('gameCell-flip-color');
        // }
        if (gameCells[i].classList.contains('player1-flip')) {
            gameCells[i].classList.remove('player1-flip');
        }

        if (gameCells[i].classList.contains('player2-flip')) {
            gameCells[i].classList.remove('player2-flip');
        }

    }

    gameBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
}

function winRow(player, rowNo) {

    let noOfTiles = 0;

    for (var i = 0; i < maxRow; i++) {
        if (gameBoard[rowNo][i] === player) {
            noOfTiles += 1;
        }
    }

    if (noOfTiles === maxRow) {
        return true
    }
}


function winColumn(player, ColumnNo) {
    let noOfTiles = 0;

    for (var i = 0; i < maxColumn; i++) {
        if (gameBoard[i][ColumnNo] === player) {
            noOfTiles += 1;
        }
    }

    if (noOfTiles === maxColumn) {
        return true
    }
}

function winDiagonal(player) {

    var noOfTiles = 0;

    j = maxColumn;

    for (var i = 0; i < maxRow; i++) {

        if (gameBoard[i][j] === player) {
            noOfTiles += 1;
        }

        j--;

    }

    if (noOfTiles === 3) {
        return true
    } else {
        return false
    }
}

// function checkRowColumn(player, rowNo, columnNo) {
//     var noOfTiles = 0;

//     // Check column

//     for (var i = 0; i < 3; i++) {
//         if (gameBoard[i][columnNo] === player) {
//             noOfTiles += 1;

//         }

//     }

//     if (noOfTiles === 3) {
//         return true
//     }

//     noOfTiles = 0;

//     for (var i = 2; i >= 0; i--) {
//         if (gameBoard[rowNo][i] === player) {
//             noOfTiles += 1;
//         }
//     }

//     if (noOfTiles === 3) {
//         return true
//     } else {
//         return false
//     }
// }

function checkWinner(player, rowNo, columnNo) {

    if (winRow(player, rowNo)) {
        return true
    } else if (winColumn(player, columnNo)) {
        return true
    } else if (winDiagonal(player)) {
        return true
    } else {
        return false
    }

}

function flipCell(e) {

    var cellInfo = e.target.getAttribute("data-cell");
    var cellData = e.target.textContent.trim();

    if (gameOver) {
        return
    }

    if (currentPlayer === player1) {
        e.target.classList.toggle('player1-flip');
    } else {
        e.target.classList.toggle('player2-flip');
    }

    if (!cellData || cellData === null) {
        cellInfo = cellInfo.split("-");
        rowNo = parseInt(cellInfo[0]);
        columnNo = parseInt(cellInfo[1]);

        gameBoard[rowNo][columnNo] = currentPlayer;
        e.target.textContent = playerList[currentPlayer-1];

        msgBoard.textContent = "";

        // var gameOver = false;

        if (checkWinner(currentPlayer, rowNo, columnNo)) {
            msgBoard.textContent = "Player " + currentPlayer + " have Won";
            gameOver = true;
        } else {
            if (currentPlayer === player1) {
                currentPlayer = player2;

            } else if (currentPlayer === player2) {
                currentPlayer = player1;
            }
            msgBoard.textContent = "Current Player is : " + currentPlayer;
        }


        // if (!gameOver) {
        //     msgBoard.textContent = "Current Player is : " + currentPlayer;
        // }



    } else {
        msgBoard.textContent = "Cell already clicked";
    }

    // console.log(gameBoard)

}

var gameCell = document.querySelectorAll('.gameCell');

setupGameBoard();


for (let i = 0; i < gameCell.length; i++) {
    // console.log(gameCell[i])
    gameCell[i].addEventListener('click', flipCell);
}

var resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', setupGameBoard);