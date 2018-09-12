var body = document.getElementsByTagName('body')[0]
var field
var square
var display
var button
var turn = 0
// var winningCombination = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7],
// ];

function removeListeners() {
    var board = document.getElementsByClassName('board')
    for (i in board) {
        //if (board[i].classList.length > 1)
        board[i].removeEventListener('click', placeMark, false)
    }
}

function checkWin(className) {
    var board = document.getElementsByClassName('board')
    switch (true) {
        case (board[0].classList === board[1].classList && === board[2].classList):
            display.textContent = `${className} Wins!`
            removeListeners()
            break;
        case (board[3].classList === board[4].classList && === board[5].classList):
            display.textContent = `${className} Wins!`
            removeListeners()
            break;
        case (board[6].classList === board[7].classList && === board[8].classList):
            display.textContent = `${className} Wins!`
            removeListeners()
            break;
        case (board[0].classList === board[3].classList && === board[6].classList):
            display.textContent = `${className} Wins!`
            removeListeners()
            break;
        case (board[1].classList === board[4].classList && === board[7].classList):
            display.textContent = `${className} Wins!`
            removeListeners()
            break;
        case (board[2].classList === board[5].classList && === board[8].classList):
            display.textContent = `${className} Wins!`
            removeListeners()
            break;
        case (board[0].classList === board[4].classList && === board[8].classList):
            display.textContent = `${className} Wins!`
            removeListeners()
            break;
        case (board[2].classList === board[4].classList && === board[6].classList):
            display.textContent = `${className} Wins!`
            removeListeners()
            break;
        default:
            if (turn == 8)
                display.textContent = 'Draw'
            else
                display.textContent = 'In Progress'

    }

}

function placeMark(event) {
    button.style.visibility = 'visible'
    if (turn % 2 == 0) {
        this.textContent = 'X'
        this.classList.add('X')
        checkWin('X')
    } else {
        this.textContent = 'O'
        this.classList.add('O')
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
        square.innerHTML = '*'
        //square.style.border = 'solid 1px'
        //square.style.justifySelf = 'center'
        //square.style.alignSelf = 'center'
        square.addEventListener('click', placeMark)
        field.appendChild(square)
    }

    body.appendChild(field)
    display = document.createElement('h1')
    display.innerHTML = 'Ready'
    //display.style.border = 'solid 1px'
    //display.style.gridColumn = '1 / span 3'
    //display.style.justifySelf = 'center'
    button = document.createElement('button')
    button.innerHTML = 'Restart'
    button.addEventListener('click', resetBoard)
    button.style.visibility = 'hidden'
    body.appendChild(display)
    body.appendChild(button)
}

function resetBoard() {
    while (body.lastChild) {
        body.removeChild(body.lastChild)
    }
    createBoard(9)
}

createBoard(9)