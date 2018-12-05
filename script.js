const winningMoves = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
const cells = document.body.querySelectorAll(".cell") //this is a NodeList of cells
const restartButton = document.body.querySelector("#restart-button")

var turn = 1
var playerOne = generatePlayer("X", "red")
var playerTwo = generatePlayer("O", "blue")
var currentPlayer

startGame()

// -------------------------------------------------------------------------

function generatePlayer(icon, color){
    var playerObject = {
        'icon': icon,
        'color': color,
        'moves': []
    }
    return playerObject
}

function startGame(){
    for(let cell of cells){
        cell.addEventListener("click", turnStart)
    }
    restartButton.addEventListener("click", restart)
}

function restart(){
    resetCells()
    clearClickListeners()
    clearData()
    startGame()
}

function turnStart(){
    playTurn(this)
    if (turn === 1){
        restartButton.style.visibility = "hidden"
    }
    if (turn>=5){
        checkVictory()
    }
    if (turn === 9){
        gameDraw()
    }
    turn++
}

function playTurn(object){
    currentPlayer = getCurrentPlayer()
    object.innerText = currentPlayer.icon
    object.style.color = currentPlayer.color
    currentPlayer.moves.push(parseInt(object.id))
}

function getCurrentPlayer(){
    if (turn % 2 === 0){
        return playerTwo
    } else {
        return playerOne
    }
}

function checkVictory(){
    let currentPlayerMoves = currentPlayer.moves
    for (let set of winningMoves){
        if (set.every(number => {
            return currentPlayerMoves.indexOf(number) > -1
        })){
            gameWon(set)
            break
        }
    }
}

function showWinningCells(set){
    for (let cell of set){
        cells[cell].style.backgroundColor = "rgb(255,252,183)"
    }
}

function gameWon(set){
    clearClickListeners()
    showWinningCells(set)
    restartButton.style.visibility = ""
}

function gameDraw(){
    clearClickListeners()
    alert("Draw!")
    restartButton.style.visibility = ""
}

function clearData(){
    playerOne.moves = []
    playerTwo.moves = []
    turn = 1
}

function resetCells(){
    for (let cell of cells){
        cell.innerText = ""
        cell.style.backgroundColor = "white"
    }
}

function clearClickListeners(){
    for (let cell of cells){
        cell.removeEventListener("click", turnStart)
    }
}