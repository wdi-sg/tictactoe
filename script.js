let choices = [
    [undefined,undefined,undefined],
    [undefined,undefined,undefined],
    [undefined,undefined,undefined]
]

const clickEvent = function () {
    //user turn is on
    let userTurn = true
    //turn number
    let turnNumber = 0
    //select all squares
    const boxes = document.querySelectorAll(".game-square")
    //apply for all squares
    boxes.forEach(function (item) {
        //click event
        item.addEventListener("click", function (el) {
            //check if less than 9 turns, so nothing happens after
            if (turnNumber < 9) {
                if (userTurn) {
                    userTurn = !userTurn
                    item.textContent = "X"
                    //variable for the squares class id number
                    let boxNumber = item.className[item.className.length - 1]
                    //detect if the id is within a certain range
                    //and assign it to row 0, 1 or 2 with an index of 0,1 or 2
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
                    //same as above, but for the O player
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
            //check for win after each input
            checkForWin()

        })
    })
}

const checkForWin = function(){
    // all possible win combinations
    if (choices[0][0] === "X" && choices[1][0] === "X" && choices[2][0] === "X" || 
    choices[0][0] === "X" && choices[0][1] === "X" && choices[0][2] === "X" ||
     choices[0][2] === "X" && choices[1][2] === "X" && choices[2][2] === "X" ||
      choices[2][0] === "X" && choices[2][1] === "X" && choices[2][2] === "X" ||
       choices[0][0] === "X" && choices[1][1] === "X" && choices[2][2] === "X" ||
        choices[0][2] === "X" && choices[1][1] === "X" && choices[2][0] === "X" ||
         choices[0][1] === "X" && choices[1][1] === "X" && choices[2][1] === "X" ||
         choices[1][0] === "X" && choices[1][1] === "X" && choices[1][2] === "X"){
        // if won, apply retry
        retryButton()

    }
}

const createBoard = function () {
    //create board
    const board = document.createElement("div")
    board.className = "board"
    //create squares
    const gameSquare = document.createElement("button")
    //give squares a class id and append to board
    for (let i = 0; i < 9; i++) {
        gameSquare.className = `game-square ${[i]}`
        board.appendChild(gameSquare.cloneNode(true))
    }
    //append board to body
    document.body.appendChild(board)
    //add clickEvent to squares
    clickEvent()
}

//start button
const startGame = function(){
    //reset the choices array
    choices = [
        [undefined,undefined,undefined],
        [undefined,undefined,undefined],
        [undefined,undefined,undefined]
    ]
    //reset body
    document.body.innerHTML = ""
    //create start button
    const button = document.createElement("button")
    button.innerHTML = "START GAME"
    button.addEventListener("click", function(){
        //on click let button disappear and create the board with click event
        button.classList.add("d-none")
        createBoard()
    })
    document.body.appendChild(button)
}

const retryButton = function(){
    //reset the choices array
    choices = [
        [undefined,undefined,undefined],
        [undefined,undefined,undefined],
        [undefined,undefined,undefined]
    ]
    //reset body
    document.body.innerHTML = ""
    //create retry button
    const button = document.createElement("button")
    button.innerHTML = "YOU WON! RETRY?"
    button.addEventListener("click", function(){
        //on click let button disappear and create the board with click event
        button.classList.add("d-none")
        createBoard()
    })
    document.body.appendChild(button)
}

startGame()