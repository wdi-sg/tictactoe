const winningMoves = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
const colors = ["red", "orange", "green", "purple", "brown", "blue"]
const cells = document.body.querySelectorAll(".cell") //this is a NodeList of cells
const restartButton = document.body.querySelector("#restart-button")

var turn = 1
var playerOne = generatePlayer("one")
var playerTwo = generatePlayer("two")
var currentPlayer

startGame()

// -------------------------------------------------------------------------

function generatePlayer(number){
    var name
    var symbol
    while (true){
        name = prompt("Hello player " + number + "! What's your name?")
        if (name !== ""){
            break
        } else {
            alert("You must enter a name!")
        }
    }
    while (true){
        symbol = prompt("Very well, " + name + ". What symbol do you choose?")
        if (symbol.length > 1){
            alert("You can only have a single character for your symbol!")
        } else {
            break
        }
    }
    let color = colors.splice(Math.floor(Math.random() * (colors.length-1)),1)
    return playerObject(name,symbol,color)
}

function playerObject(name, icon, color){
    var object = {
        'name': name,
        'icon': icon,
        'color': color,
        'moves': []
    }
    return object
}

function startGame(){
    for(let cell of cells){
        cell.addEventListener("click", playTurn)
    }
    restartButton.addEventListener("click", restart)
}

function restart(){
    resetCells()
    clearClickListeners()
    clearData()
    startGame()
}

function playTurn(){
    if (this.innerText === ""){
        if (turn === 1){
            restartButton.style.visibility = "hidden"
        }
        changeCell(this)
        turnPlayed()
    }
}

function turnPlayed(){
    turn++
    if (turn>=5 && somebodyWon()){
        gameWon()
    } else if (turn === 10 && !somebodyWon()){
        gameDraw()
    }
}

function changeCell(object){
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

function somebodyWon(){
    let currentPlayerMoves = currentPlayer.moves
    for (let set of winningMoves){
        if (set.every(number => {
            return currentPlayerMoves.indexOf(number) > -1
        })){
            showWinningCells(set)
            return true
        }
    }
}

function showWinningCells(set){
    for (let cell of set){
        cells[cell].style.backgroundColor = "rgb(255,252,183)"
    }
}

function gameWon(){
    clearClickListeners()
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
        cell.removeEventListener("click", playTurn)
    }
}