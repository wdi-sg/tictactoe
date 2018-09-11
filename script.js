var body = document.getElementsByTagName('body')[0]
var square
var display
var turn = 0

function placeMark(event) {
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
    body.style.display = 'grid'
    body.style.gridTemplateColumns = '1fr 1fr 1fr'
    body.style.fontFamily = 'Arial'

    for (var i = 0; i < size; i++) {
        square = document.createElement('div')
        square.setAttribute('id', i)
        square.innerHTML = i
        square.style.border = 'solid 1px'
        square.style.justifySelf = 'center'
        square.style.alignSelf = 'center'
        square.style.padding = '10vh'
        square.addEventListener('click', placeMark)
        body.appendChild(square)
    }

    display = document.createElement('h1')
    display.innerHTML = 'Status'
    display.style.border = 'solid 1px'
    display.style.gridColumn = '1 / span 3'
    display.style.justifySelf = 'center'
    body.appendChild(display)
}

createBoard(9)