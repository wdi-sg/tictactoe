var body = document.getElementsByTagName('body')[0]
var square
var display
var turn = 0

function placeMark(event) {
    if (turn % 2 == 0)
        this.textContent = 'X'
    else
        this.textContent = 'O'
    turn++
}

function createBoard(size) {
    turn = 0
    body.style.display = 'grid'
    body.style.gridTemplateColumns = '1fr 1fr 1fr'

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
    console.log(display)
    display.innerHTML = 'Status'
    display.style.border = 'solid 1px'
    display.style.gridColumn = '1 / span 3'
    display.style.justifySelf = 'center'
    body.appendChild(display)
}

createBoard(9)