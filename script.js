var size = prompt('Please enter board size:', 3)
var body = document.getElementsByTagName('body')[0]
var field
var square
var display
var button
var turn = 0
var gameArray = []
var winCounter = 0
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

function checkWin(mark, event) {
    var positionOnBoard = event.target.id //assume id is '00' .. '21' .. '33'
    var cordinates = positionOnBoard.split('')
    var row = cordinates[0]
    var col = cordinates[1]

    gameArray[row][col] = mark

    //horizontal check
    checkHorizontal(mark)
    checkVertical(mark)
}

function checkHorizontal(mark) {
    var result = []
    for (var row = 0; row < size; row++) {
        for (var col = 0; col < size; col++) {
            result.push(gameArray[row][col])
        }
        console.log(result);
        if (result.every((element, i, arr) => element === arr[0])) {
            console.log(mark + ' wins');
            removeListeners()
        }
        result = []
    }
}

function checkVertical(mark) {
    var result = []
    for (var col = 0; col < size; col++) {
        for (var row = 0; row < size; row++) {
            result.push(gameArray[row][col])
        }
        console.log(result);
        if (result.every((element, i, arr) => element === arr[0])) {
            console.log(mark + ' wins');
            removeListeners()
        }
        result = []
    }
}

function placeMark(event) {
    button.style.visibility = 'visible'
    if (turn % 2 == 0) {
        this.textContent = 'X'
        this.style.background = 'red'
        checkWin('X', event)
    } else {
        this.textContent = 'O'
        this.style.background = 'blue'
        checkWin('O', event)
    }
    turn++
    event.target.removeEventListener('click', placeMark, false)
}

function createBoard(size) {
    var row = 0
    var col = 0
    field = document.createElement('div')
    field.style.display = 'grid'
    field.style.gridTemplateColumns = `repeat(${size},1fr)`
    field.setAttribute('id', 'field')

    //create board elements and create gameArray
    for (row = 0; row < size; row++) {
        var rowArray = []
        for (col = 0; col < size; col++) {
            square = document.createElement('div')
            square.setAttribute('id', row.toString() + col.toString())
            square.classList = 'board'
            square.innerHTML = square.id
            assignRowCol(square, row, col, size)
            square.addEventListener('click', placeMark)
            rowArray.push(square)
            field.appendChild(square)
        }
        gameArray.push(rowArray)
    }
    console.log(gameArray)

    body.appendChild(field)
    display = document.createElement('h1')
    display.innerHTML = 'Ready'

    button = document.createElement('button')
    button.innerHTML = 'Restart'
    button.addEventListener('click', resetBoard)
    button.style.visibility = 'hidden'
    body.appendChild(display)
    body.appendChild(button)
}

//add classses based on row/col position
function assignRowCol(square, row, col, size) {
    if (row == 0)
        square.classList.add('top')
    else if (row == size - 1)
        square.classList.add('bottom')
    if (col == 0)
        square.classList.add('left')
    else if (col == size - 1)
        square.classList.add('right')
}


createBoard(size)

//remove all elements, reset turn and createboard
function resetBoard() {
    while (body.lastChild) {
        body.removeChild(body.lastChild)
    }
    turn = 0
    createBoard(size)
}