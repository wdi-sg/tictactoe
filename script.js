var body = document.getElementsByTagName('body')[0]
var field
var square
var display
var turn = 0
var winningCombination = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function checkWin(className) {
    var board = document.getElementsByClassName('board')
    debugger;
    switch (true) {
        case (board[0].classList[1] === className && board[1].classList[1] === className && board[2].classList[1] === className):
            display.textContent = `${className} Wins!`
            break;
        case (board[3].classList[1] === className && board[4].classList[1] === className && board[5].classList[1] === className):
            display.textContent = `${className} Wins!`
            break;
        case (board[6].classList[1] === className && board[7].classList[1] === className && board[8].classList[1] === className):
            display.textContent = `${className} Wins!`
            break;
        case (board[0].classList[1] === className && board[3].classList[1] === className && board[6].classList[1] === className):
            display.textContent = `${className} Wins!`
            break;
        case (board[1].classList[1] === className && board[4].classList[1] === className && board[7].classList[1] === className):
            display.textContent = `${className} Wins!`
            break;
        case (board[2].classList[1] === className && board[5].classList[1] === className && board[8].classList[1] === className):
            display.textContent = `${className} Wins!`
            break;
        case (board[0].classList[1] === className && board[4].classList[1] === className && board[8].classList[1] === className):
            display.textContent = `${className} Wins!`
            break;
        case (board[2].classList[1] === className && board[4].classList[1] === className && board[6].classList[1] === className):
            display.textContent = `${className} Wins!`
            break;
        default:
            display.textContent = 'Status'
    }

}

function placeMark(event) {
    if (turn % 2 == 0) {
        this.textContent = 'X'
        this.classList.add('X')
        if (turn > 3)
            checkWin('X')
    } else {
        this.textContent = 'O'
        this.classList.add('O')
        if (turn > 3)
            checkWin('O')
    }
    turn++
    event.target.removeEventListener('click', placeMark, false)
}

function createBoard(size) {
    turn = 0
    field = document.createElement('div')
    field.style.display = 'grid'
    field.style.gridTemplateColumns = 'auto auto auto'
    field.setAttribute('id', 'field')

    for (var i = 1; i < size + 1; i++) {
        square = document.createElement('div')
        square.setAttribute('id', i)
        square.classList = 'board'
        square.innerHTML = i
        //square.style.border = 'solid 1px'
        //square.style.justifySelf = 'center'
        //square.style.alignSelf = 'center'
        square.addEventListener('click', placeMark)
        field.appendChild(square)
    }

    body.appendChild(field)
    display = document.createElement('h1')
    display.innerHTML = 'Status'
    //display.style.border = 'solid 1px'
    //display.style.gridColumn = '1 / span 3'
    //display.style.justifySelf = 'center'
    body.appendChild(display)
}

createBoard(9)