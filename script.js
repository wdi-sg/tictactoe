
//defining global variables
var state = "X"
var boardSize = 3
var finalInd = boardSize-1
var player1Name = null
var player1Symbol = "X"
var player2Name = null
var player2Symbol = "O"
var emptyBoard = []
var board = []
var player1Wins = 0
var player2Wins = 0



//function to initialise empty matrix and DOM tile elements called when user inputs boardSize
var initEmptyGrid = function(){
    document.querySelector(".ttt-board").innerHTML = ""
    board = []
    emptyBoard =[]
    for(i=0;i<boardSize;i++){
        emptyBoard.push(new Array(boardSize).fill(null))
    }
    board = emptyBoard

    for(i=0;i<boardSize;i++){
        var newRow = document.createElement("div")
        newRow.className = "ttt-row"
        for(j=0;j<boardSize;j++){
            var newTile = document.createElement("div")
            newTile.className = "tile"
            newTile.id = i.toString() + j.toString()
            newRow.appendChild(newTile)
        }
        document.querySelector(".ttt-board").appendChild(newRow)
    }

    var tiles = document.querySelectorAll(".tile")
    tiles.forEach(function(item, index){
        item.addEventListener("click", claimTile)
    })
}


//when start button is clicked, all input values are assigned to global variables, board initialised.
var startGame = function(){

    document.querySelector(".result").innerText = ''

    player1Name = document.querySelector("#player1-name").value
    player1Symbol = document.querySelector("#player1-symbol").value
    player2Name = document.querySelector("#player2-name").value
    player2Symbol = document.querySelector("#player2-symbol").value
    boardSize = parseInt(document.querySelector("#board-size").value)
    finalInd = boardSize - 1

    initEmptyGrid()

    if(state=="X"){
        document.querySelector(".turn-tracker").innerText = `${player1Name}'s turn`
    }else if(state=="O"){
        document.querySelector(".turn-tracker").innerText = `${player2Name}'s turn`
    }



    document.querySelector(".user-input").classList.add("hide")
}

document.querySelector("#start").addEventListener("click", startGame)


//fills tile, updates board and checks if there's been a winner - delivers some output based on winner.
var claimTile = function(){
    if (this.innerText){
        return
    } else if (state=="X"){
        this.innerText = player1Symbol
        this.style.backgroundColor = "lightblue"
        updateBoard(this)
        if(checkWinner()){
            winOutput()
        } else if(checkDraw()){
            drawOutput()
        } else {
            document.querySelector(".turn-tracker").innerText = `${player2Name}'s turn`
            state="O"
        }

    } else if (state=="O"){
        this.innerText = player2Symbol
        this.style.backgroundColor = "lightgreen"
        updateBoard(this)
        if(checkWinner()){
            winOutput()
        } else if(checkDraw()){
            drawOutput()
        } else {
            document.querySelector(".turn-tracker").innerText = `${player1Name}'s turn`
            state="X"

        }

    }
}

//checks if any of the winning conditions are satisfied - returns true if there is a winner.
var checkWinner = function(){
    var rows = false;
    var columns = false;
    var diagonals = false;

    //check rows - check if all values in the row array are the same
    for(i=0;i<boardSize;i++){
        if(board[i].every((value, index, arr)=>value&&value==arr[0])){
            rows = true
        }
    }
    //check columns
    for(i=0;i<boardSize;i++){
        var head = board[0][i]
        j = 1
        while(j<boardSize){
            curr = board[j][i]
            if(curr==null||curr!==head){
               break
            }
            j++
        }
        if(j==boardSize){
            columns = true
        }
    }
    //check diagonals - executes if either top corners are filled
    if(board[0][0]){
        var xInd = 0
        var yInd = 0
        while(xInd < boardSize && yInd < boardSize){
            if (board[0][0]!==board[xInd][yInd]){
                break
            }
            xInd += 1
            yInd += 1
        }
        if(xInd==boardSize){
            diagonals = true
        }
    }
    if(board[0][finalInd]){
        var xInd = 0
        var yInd = finalInd
        while(xInd<boardSize&&yInd>=0){
            if(board[0][finalInd]!=board[xInd][yInd]){
                break
            }
            xInd += 1
            yInd -= 1
        }
        if(xInd==boardSize){
            diagonals = true
        }
    }
    return diagonals || rows || columns
}

var updateBoard = function(element){
    var firstIndex = parseInt(element.id[0])
    var secondIndex = parseInt(element.id[1])
    board[firstIndex][secondIndex] = state
}

function winOutput(){
    //say who wins
    if(state=="X"){
        player1Wins++
        var winner = player1Name
        var loser = player2Name
        state = "O"
    } else if (state=="O"){
        player2Wins++
        var winner = player2Name
        var loser = player1Name
        state = "X"
    }
    document.querySelector(".result").innerText = `Congratulations, ${winner}! You win.\n${loser}, better luck next time.`


    //update winCount DOM
    document.querySelector(".player1-wins").innerHTML = `${player1Name} wins: ${player1Wins}`
    document.querySelector(".player2-wins").innerHTML = `${player2Name} wins: ${player2Wins}`

    //Reset Game
    document.querySelector(".user-input").classList.remove("hide")
    document.querySelector("#start").innerText = "Play again!"
}

function checkDraw(){
    for(i=0;i<board.length;i++){
        if(board[i].includes(null)){
            return false
        }
    }
    return true
}

function drawOutput(){
    document.querySelector(".result").innerText = `It's a draw!`
    document.querySelector(".user-input").classList.remove("hide")
    document.querySelector("#start").innerText = "Play again!"
}