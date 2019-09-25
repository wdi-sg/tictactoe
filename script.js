console.log('linked')

let key = true;
let sign = 'O';

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

            if (event.target.innerText === "") {
                if (key) {sign = 'X'} else {sign = 'O'}
                event.target.innerText = sign;
                key = !key;
            } else {
                alert(`can't do that`);
            }
            checkResult(event.target.id);
        })
    }
    board.append(row);
}
document.body.append(board);

const resetGame = () => {
    for (let i=0; i<9; i++) {
        document.querySelectorAll('.box')[i].innerHTML = "";
    }
    document.querySelector('#resetDiv').classList.remove('resetDiv');
    document.querySelector('#resetDiv').classList.add('reseted');
}

let gameBoard = document.querySelectorAll('.box');

let newDiv = document.createElement('div');
newDiv.id = 'resetDiv'
newDiv.className = 'resetDiv reseted'
let reset = document.createElement('button');
reset.innerText = 'Reset';
reset.id = 'reset';
reset.addEventListener('click', resetGame)
document.body.append(newDiv);
document.querySelector('#resetDiv').append(reset);

const winMes = () => {
    alert(`YOU WON!`)
    document.querySelector('#resetDiv').classList.remove('reseted');
    document.querySelector('#resetDiv').classList.add('resetDiv');
}

const checkResult = (y) => {
    let x = parseInt(y);
    let arr = [];
    for (let i=0; i<9; i++) {
        arr.push(gameBoard[i].innerText);
    }
    if (x < 3 && arr[x+3] !== "" && arr[x+6] !== "") {
        if (arr[x] === arr[x+3] && arr[x] === arr[x+6]) {
            setTimeout(winMes, 1000)
        };
    } else if (x >= 6 && arr[x-3] !== "" && arr[x-6] !== "") {
        if (arr[x] === arr[x-3] && arr[x] === arr[x-6]) {setTimeout(winMes, 1000)
        };
    } else if (arr[x-3] !== "" && arr[x+3] !== "") {
        if (arr[x] === arr[x-3] && arr[x] === arr[x+3]) {setTimeout(winMes, 1000)
        };
    }

    if (x%3 === 0 && arr[x+1] !== "" && arr[x+2] !== "") {
        if (arr[x] === arr[x+1] && arr[x] === arr[x+2]) {
            setTimeout(winMes, 1000)}
    } else if (x%3 === 1 && arr[x-1] !== "" && arr[x+1] !== "") {
        if (arr[x] === arr[x-1] && arr[x] === arr[x+1]) {setTimeout(winMes, 1000)};
    } else if (x%3 === 2 && arr[x-1] !== "" && arr[x-2] !== "") {
        if (arr[x] === arr[x-1] && arr[x] === arr[x-2]) {setTimeout(winMes, 1000)};
    }

    if (arr[2] === arr[4] && arr[4] === arr[6] && arr[4] !== "") {
        setTimeout(winMes, 1000)
    }

    if (arr[0] === arr[4] && arr[4] === arr[8] && arr[4] !== "") {
        setTimeout(winMes, 1000)}
}