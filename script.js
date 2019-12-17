let choices = [
    [undefined,undefined,undefined],
    [undefined,undefined,undefined],
    [undefined,undefined,undefined]
]

const clickEvent = function () {
    
    let userTurn = true
    let turnNumber = 0
    const boxes = document.querySelectorAll(".game-square")
    boxes.forEach(function (item) {
        item.addEventListener("click", function (el) {
            if (turnNumber < 9) {
                if (userTurn) {
                    userTurn = !userTurn
                    item.textContent = "X"
                    let boxNumber = item.className[item.className.length - 1]

                    if (boxNumber < 3) {
                        choices[0][boxNumber] = "X"
                    } else if (boxNumber < 6){
                        let boxNumberID = boxNumber - 3
                        choices[1][boxNumberID] = "X"
                    } else if (boxNumber < 9) {
                        let boxNumberID = boxNumber - 6
                        choices[2][boxNumberID] = "X"
                    }
                    turnNumber++
                } else {
                    userTurn = !userTurn
                    item.textContent = "O"
                    let boxNumber = item.className[item.className.length -1]
                    if (boxNumber < 3) {
                        choices[0][boxNumber] = "O"
                    } else if (boxNumber < 6){
                        let boxNumberID = boxNumber - 3
                        choices[1][boxNumberID] = "O"
                        console.log(boxNumberID)
                    } else if (boxNumber < 9) {
                        let boxNumberID = boxNumber - 6
                        choices[2][boxNumberID] = "O"
                    }
                    turnNumber++
                }
            } else {

            }
            checkForWin()

        })
    })
}

const checkForWin = function(){
    if (choices[0][0] === "X" && choices[1][0] === "X" && choices[2][0] === "X" || 
    choices[0][0] === "X" && choices[0][1] === "X" && choices[0][2] === "X" ||
     choices[0][2] === "X" && choices[1][2] === "X" && choices[2][2] === "X" ||
      choices[2][0] === "X" && choices[2][1] === "X" && choices[2][2] === "X" ||
       choices[0][0] === "X" && choices[1][1] === "X" && choices[2][2] === "X" ||
        choices[0][2] === "X" && choices[1][1] === "X" && choices[2][0] === "X" ||
         choices[0][1] === "X" && choices[1][1] === "X" && choices[2][1] === "X" ||
         choices[1][0] === "X" && choices[1][1] === "X" && choices[1][2] === "X"){
             
        retryButton()

    }
}

const createBoard = function () {
    //create board
    const board = document.createElement("div")
    board.className = "board"
    //create rows
    const row = document.createElement("div")

    //create squares
    const gameSquare = document.createElement("button")

    for (let i = 0; i < 9; i++) {
        gameSquare.className = `game-square ${[i]}`
        board.appendChild(gameSquare.cloneNode(true))
    }
    document.body.appendChild(board)
    clickEvent()
}

const startButton = function(){
    choices = [
        [undefined,undefined,undefined],
        [undefined,undefined,undefined],
        [undefined,undefined,undefined]
    ]
    document.body.innerHTML = ""
    const button = document.createElement("button")
    button.innerHTML = "START GAME"
    button.addEventListener("click", function(){
        button.classList.add("d-none")
        createBoard()
    })
    document.body.appendChild(button)
}

const retryButton = function(){
    choices = [
        [undefined,undefined,undefined],
        [undefined,undefined,undefined],
        [undefined,undefined,undefined]
    ]
    document.body.innerHTML = ""
    const button = document.createElement("button")
    button.innerHTML = "YOU WON! RETRY?"
    button.addEventListener("click", function(){
        button.classList.add("d-none")
        createBoard()
    })
    document.body.appendChild(button)
}

startButton()