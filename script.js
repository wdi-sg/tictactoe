var body = document.getElementsByTagName('body')[0]
var field
var square
var display
var turn = 0


function checkWin() {
    display.textContent = 'win'
}

function placeMark(event) {
    if (turn == 2 || turn == 5 || turn == 8)
        checkWin()
    if (turn % 2 == 0) {
        this.textContent = 'O'
    } else {
        this.textContent = 'X'
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

    for (var i = 1; i < 10; i++) {
        square = document.createElement('div')
        square.setAttribute('id', 'board' + i)
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
    display.style.gridColumn = '1 / span 3'
    display.style.justifySelf = 'center'
    body.appendChild(display)
}

createBoard(9)