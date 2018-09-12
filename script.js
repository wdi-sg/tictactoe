var size = prompt('Please enter board size:', 3)
var body = document.getElementsByTagName('body')[0]
var display = document.getElementsByTagName('h1')[0] //for message display
var turn = 0 //turn counter
var gameArray = [] //game board

//remove click eventListeners from non-clicked elements
function removeListeners() {
    var board = document.getElementsByClassName('board')
    for (i in board) {
        if (board[i].innerHTML != 'X' || board[i].innerHTML != 'O') {
            board[i].removeEventListener('click', placeMark)
        }
    }
}

//see comments inside
function checkWin(mark, event) {
    //Akira Suggesstion
    var positionOnBoard = event.target.id //assume id is '00' .. '21' .. '33'
    var cordinates = positionOnBoard.split('')
    var row = cordinates[0]
    var col = cordinates[1]

    //Marking javascript 'board' to match DOM board
    gameArray[row][col] = mark

    //Various Checks
    checkHorizontal(mark)
    checkVertical(mark)
    checkDownDiag(mark)
    checkUpDiag(mark)
}

//Check result array if all elements are the same to determin WIN
function allSame(result, mark) {
    if (result.every((element, i, arr) => element === arr[0])) {
        console.log(result);
        console.log(mark + ' wins');
        display.textContent = mark + ' Wins!'
        removeListeners()
    }
}

//Traverse gameArray horizontally by incrementing col and pushing the entire row into result array
function checkHorizontal(mark) {
    var result = []
    for (var row = 0; row < size; row++) {
        for (var col = 0; col < size; col++) {
            result.push(gameArray[row][col])
        }
        allSame(result, mark)
        result = []
    }
}

//Traverse gameArray vertically by incrementing row and pushing the entire col into result array
function checkVertical(mark) {
    var result = []
    for (var col = 0; col < size; col++) {
        for (var row = 0; row < size; row++) {
            result.push(gameArray[row][col])
        }
        allSame(result, mark)
        result = []
    }
}

//Traverse gameArray diagonally downwards by incrementing col and row equally and pushing the entire diagonal into result array
function checkDownDiag(mark) {
    var result = []
    for (var i = 0; i < size; i++) {
        result.push(gameArray[i][i])
    }
    allSame(result, mark)
    result = []
}

//Traverse gameArray diagonally upwards by decrementing row max size and incrementing col and pushing the entire diagonal into result array
function checkUpDiag(mark) {
    var result = []
    for (var i = 0; i < size; i++) {
        result.push(gameArray[(size - 1 - i)][i])
    }
    allSame(result, mark)
    result = []
}

//Place x or o mark depending on turn
function placeMark(event) {
    display.textContent = 'Match in Progress'
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

//create entire board via DOM
function createBoard(size) {
    var field = document.createElement('div')
    field.style.display = 'grid'
    field.style.gridTemplateColumns = `repeat(${size},1fr)`
    field.setAttribute('id', 'field')

    //create board elements and create gameArray
    for (var row = 0; row < size; row++) {
        var rowArray = []
        for (var col = 0; col < size; col++) {
            var square = document.createElement('div')
            square.setAttribute('id', row.toString() + col.toString())
            square.style.padding = `${10 - size}vh`
            square.style.fontSize = `${10 - size}vh`
            body.style.paddingTop = `${10 - size}vh`
            square.classList = 'board'
            square.innerHTML = '*'
            assignRowCol(square, row, col, size)
            square.addEventListener('click', placeMark)
            rowArray.push(square.id)
            field.appendChild(square)
        }
        gameArray.push(rowArray)
    }
    console.log('Board Loaded: ' + gameArray.length)

    body.appendChild(field)
    var display = document.createElement('h1')
    display.innerHTML = 'Ready'

    var button = document.createElement('button')
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

//remove all elements, reset turn and createboard
function resetBoard() {
    while (body.lastChild) {
        body.removeChild(body.lastChild)
    }
    gameArray = []
    turn = 0
    createBoard(size)
}

//initiate game.
createBoard(size)