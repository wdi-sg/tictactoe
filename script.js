const winningMoves = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
const colors = ["red", "orange", "green", "burlywood", "brown", "blue", "aquamarine", "darkblue", "darkviolet"]

var turn = 1
// var boardSize = getBoardSize()
var playerOne = generatePlayer("one")
var playerTwo = generatePlayer("two")
var currentPlayer
var cells
var restartButton

window.onload = function(){
     cells = document.body.querySelectorAll(".cell") //this is a NodeList of cells
     restartButton = document.body.querySelector("#restart-button")
    // var testTable = generateBoard()
    showPlayerScores()
    startGame()
}
// -------------------------------------------------------------------------

function getBoardSize(){
    while (true){
        var boardSize = parseInt(prompt("How big a board would you like to play?"))
        if (isNaN(boardSize)){
            alert("You must choose a number!")
        } else {
            return boardSize
        }
    }
}

function generateBoard(){
    var index = 0
    var table = document.createElement("table")
    for (let i = 0; i < boardSize; i++){
        var row = document.createElement("tr")
        for (let j = 0; j < boardSize; j++){
            var cell = document.createElement("td")
            cell.className = "cell"
            cell.id = index
            index++
            row.appendChild(cell)
        }
        table.appendChild(row)
    }
    return table
}

function showPlayerScores(){
    var paragraph = document.createElement("p")
    var paragraphTwo = document.createElement("p")

    paragraph.id = "player-one"
    paragraphTwo.id = "player-two"
    paragraph.innerText = playerOne.name + ": " + playerOne.wins
    paragraphTwo.innerText = playerTwo.name + ": " + playerTwo.wins
    paragraph.style.color = playerOne.color
    paragraphTwo.style.color = playerTwo.color

    document.body.insertBefore(paragraph, document.body.querySelector("table"))
    document.body.insertBefore(paragraphTwo, document.body.querySelector("table"))
}

function updatePlayerScores(){
    document.body.querySelector("#player-one").innerText = playerOne.name + ": " + playerOne.wins
    document.body.querySelector("#player-two").innerText = playerTwo.name + ": " + playerTwo.wins
}

function generatePlayer(number){
    var name
    var symbol
    while (true){
        name = prompt("Hello player " + number + "! What's your name?")
        if (name === "" || name === null){
            alert("You must enter a name!")
        } else {
            break
        }
    }
    while (true){
        symbol = prompt("Very well, " + name + ". What symbol do you choose?")
        if (symbol.length > 1){
            alert("You can only have a single character for your symbol!")
        } else if (symbol === "" || symbol === null){
            alert("You must choose a symbol!")
        }else {
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
        'moves': [],
        'wins': 0
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
        if (set.every(function(number) {
            return (currentPlayerMoves.indexOf(number) > -1)
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
    currentPlayer.wins++
    updatePlayerScores()
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