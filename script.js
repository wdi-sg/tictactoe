console.log('linked')

// let input = 0;

// const checkInput = () => {
//     for (let i=0; i>8; i++) {
//         if (gameBoard[i].innerText !== undefined) {
//             input++;
//         }
//     }
//     return input;
// }

let board = document.createElement('div');
board.id = 'board';
for (let i=0; i<3; i++) {
    let row = document.createElement('div');
    row.className = `row`;
    for (let j=0; j<3; j++) {
        let box = document.createElement('button');
        box.id = `${i*3+j}`;
        box.className = 'box'
        row.append(box);
        box.addEventListener('click', () => {
            if (event.target.innerText === 'X') {
                event.target.innerText = 'O';
            } else if (event.target.innerText === 'O') {
                event.target.innerText = 'X';
            } else {
                event.target.innerText = 'X';
            }
            // if (checkInput()>4) {
                // checkCol(event.target.id);
                // checkRow(event.target.id);
            // }
            checkResult(event.target.id);
        })
    }
    board.append(row);
}
document.body.append(board);

let gameBoard = document.querySelectorAll('.box');

const winMes = () => {
    alert(`YOU WON!`);
}

// const checkCol = (x) => {
//     if (x < 3) {
//        if (gameBoard[x].innerText === gameBoard[x+3].innerText && gameBoard[x].innerText === gameBoard[x+6].innerText) {winMes()};
//     } else if (x >= 6) {
//         if (gameBoard[x].innerText === gameBoard[x-3].innerText && gameBoard[x].innerText === gameBoard[x-6].innerText) {winMes()};
//     } else {
//         if (gameBoard[x].innerText === gameBoard[x-3].innerText && gameBoard[x].innerText === gameBoard[x+3].innerText) {winMes()};
//     }
// }

// const checkRow = (x) => {
//     if (x%3 === 0) {
//         if (gameBoard[x].innerText === gameBoard[x+1].innerText && gameBoard[x].innerText === gameBoard[x+2].innerText) {winMes()}
//     } else if (x%3 === 1) {
//         if (gameBoard[x].innerText === gameBoard[x-1].innerText && gameBoard[x].innerText === gameBoard[x+1].innerText) {winMes()};
//     } else if (x%3 === 2) {
//         if (gameBoard[x].innerText === gameBoard[x-1].innerText && gameBoard[x].innerText === gameBoard[x-2].innerText) {winMes()};
//     }
// }

const checkResult = (x) => {
    let arr = [];
    for (let i=0; i<9; i++) {
        arr.push(gameBoard[i].innerText);
        if (x < 3) {
           if (arr[x] === arr[x+3] && arr[x] === arr[x+6]) {
            winMes()
            };
        } else if (x >= 6) {
            if (arr[x] === arr[x-3] && arr[x] === arr[x-6]) {winMes()
            };
        } else {
            if (arr[x] === arr[x-3] && arr[x] === arr[x+3]) {winMes()
            };
        }
    }
}




// check row
// const checkRow = () => {
//     for (let i=0; i<3; i++) {
//         if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][0] === gameBoard[i][2]) {
//             return true;
//         } else {
//             return false;
//         };
//     };
// };

// const checkCol = () => {
//     for (let i=0; i<3; i++) {
//         if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[0][i] === gameBoard[2][i]) {
//             return true;
//         } else {
//             return false;
//         };
//     };
// };

// const winCon = () => {
//     if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]) {
//         console.log(winMes);
//     } else if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[2][2] === gameBoard[0][0]) {
//         return winMes;
//     } else if (checkRow()) {
//         return winMes;
//     } else if (checkCol()) {
//         return winMes;
//     } else {

//     }
// }