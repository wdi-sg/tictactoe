let choices = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
]

const game = {
    players: {
        playerOne: {
            name: "",
            score: 0,
            image: ""
        },
        playerTwo: {
            name: "",
            score: 0,
            image: ""
        }
    },
    winner: "",
    congratulations: ["flash", "text", "grow"]
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
        gameSquare.textContent = ""
        board.appendChild(gameSquare.cloneNode(true))
    }
    //append board to body
    document.body.appendChild(board)
    //create score display
    appendScoreDisplay()
    //add clickEvent to squares
    clickEvent()
}

//append score display after start
let appendScoreDisplay = function () {
    let scoreList = document.createElement("ul")
    scoreList.id = "score"
    let scoreOne = document.createElement("li")
    scoreOne.id = "scoreOne"
    let scoreTwo = document.createElement("li")
    scoreTwo.id = "scoreTwo"
    scoreOne.innerHTML = `${game.players.playerOne.name}: ${game.players.playerOne.score} <img src="${game.players.playerOne.image}" style="width:75px;position:relative;top:20px;">`
    scoreTwo.innerHTML = `${game.players.playerTwo.name}: ${game.players.playerTwo.score} <img src="${game.players.playerTwo.image}" style="width:75px; position:relative;top:20px;">`
    scoreList.appendChild(scoreOne)
    scoreList.appendChild(scoreTwo)
    document.body.appendChild(scoreList)
}

const appendImages = function () {
    //create images and ids
    const bulbasaur = document.createElement("img")
    bulbasaur.id = "bulbasaur"
    bulbasaur.setAttribute("src", "images/Bulbasaur.png")
    const charmander = document.createElement("img")
    charmander.id = "charmander"
    charmander.setAttribute("src", "images/Charmander.png")
    const squirtle = document.createElement("img")
    squirtle.id = "squirtle"
    squirtle.setAttribute("src", "images/Squirtle.png")
    //create image container
    const imgDiv = document.createElement("div")
    imgDiv.id = "image-container"
    //append images to container
    imgDiv.appendChild(bulbasaur)
    imgDiv.appendChild(charmander)
    imgDiv.appendChild(squirtle)
    //append container to body
    document.body.appendChild(imgDiv)
    //select all images
    const allImages = document.querySelectorAll("img")
    //global variable for choice counter
    let choice = 0
    //loop all images and apply click event
    allImages.forEach(function (img) {
        img.addEventListener("click", function (el) {
            //if first choice, add image to first player. if second choice, to second player
            if (choice === 0) {
                game.players.playerOne.image = el.target.src
            } else {
                game.players.playerTwo.image = el.target.src
            }
            choice++
            //remove image from display after click
            img.classList.add("d-none")
        })
    })
}

//start button and inputs
const startGame = function () {
    //reset the choices array
    choices = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ]
    //reset body
    document.body.innerHTML = ""
    //create and append header
    const head = document.createElement("h1")
    head.textContent = "Pick your icon, then type your name (P1, then P2)"
    document.body.appendChild(head)
    //append images
    appendImages()
    //create form for names and button
    const form = document.createElement("form")
    //create inputs for players
    const inputOne = document.createElement("input")
    const inputTwo = document.createElement("input")
    inputOne.placeholder = "Player 1"
    inputTwo.placeholder = "Player 2"
    inputOne.type = "text"
    inputOne.required = "true"
    inputTwo.required = "true"
    //append inputs to form
    form.appendChild(inputOne)
    form.appendChild(inputTwo)
    //create start button
    const button = document.createElement("button")
    button.innerHTML = "START GAME"
    button.type = "submit"
    form.addEventListener("submit", function (e) {
        //on click let button disappear and create the board with submit event
        //ACTUAL START OF THE GAME
        game.players.playerOne.name = e.target.elements[0].value
        game.players.playerTwo.name = e.target.elements[1].value
        e.preventDefault()
        form.classList.add("d-none")
        //select all images and let them disappear
        document.querySelectorAll("img").forEach(function (item) {
            item.classList.add("d-none")
        })
        //select h1 and let it disappear
        document.querySelector("h1").classList.add("d-none")
        createBoard()
    })
    //append button to form
    form.appendChild(button)
    //append form to body
    document.body.appendChild(form)
}

const retryButton = function (winner) {
    //reset the choices array
    choices = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ]
    //reset turns
    turnNumber = 0
    //reset draw counter
    tries = 0
    //reset body
    document.body.innerHTML = ""
    //create retry button
    const button = document.createElement("button")
    button.id = "retry"

    button.innerHTML = `It is a ${winner}! RETRY?`
    button.addEventListener("click", function () {
        //on click let button disappear and create the board with click event
        button.classList.add("d-none")
        createBoard()
    })
    document.body.appendChild(button)
    //random function on win
    // if (winner !== "draw"){
    //     game.congratulations[0]()
    // }
}


let turnNumber = 0
let tries = 0

const clickEvent = function () {
    //user turn is on
    let userTurn = true
    //turn number

    //select all squares
    const boxes = document.querySelectorAll(".game-square")
    //apply for all squares
    boxes.forEach(function (item) {
        //click event
        item.addEventListener("click", function (el) {
            //check if less than 9 turns, so nothing happens after
            if (turnNumber < 9) {
                if (userTurn) {
                    if (item.textContent === "") {
                        userTurn = !userTurn
                        item.textContent = "X"
                        //variable for the squares class id number
                        let boxNumber = item.className[item.className.length - 1]
                        //detect if the id is within a certain range
                        //and assign it to row 0, 1 or 2 with an index of 0,1 or 2
                        if (boxNumber < 3) {
                            choices[0][boxNumber] = "X"
                        } else if (boxNumber < 6) {
                            let boxNumberID = boxNumber - 3
                            choices[1][boxNumberID] = "X"
                        } else if (boxNumber < 9) {
                            let boxNumberID = boxNumber - 6
                            choices[2][boxNumberID] = "X"
                        }
                        turnNumber++
                        checkForWin("X")
                    }

                } else {
                    if (item.textContent === "") {
                        userTurn = !userTurn
                        item.textContent = "O"
                        //same as above, but for the O player
                        let boxNumber = item.className[item.className.length - 1]
                        if (boxNumber < 3) {
                            choices[0][boxNumber] = "O"
                        } else if (boxNumber < 6) {
                            let boxNumberID = boxNumber - 3
                            choices[1][boxNumberID] = "O"
                            console.log(boxNumberID)
                        } else if (boxNumber < 9) {
                            let boxNumberID = boxNumber - 6
                            choices[2][boxNumberID] = "O"
                        }
                        turnNumber++
                        checkForWin("O")
                    }
                }
            }
        })
    })
}

const winHorizontal = function (mark) {
    // all possible win combinations
    let count = 0
    for (let i = 0; i < 3; i++) {
        let letter = ""
        for (let j = 0; j < 3; j++) {
            if (choices[i][j] === mark && count < 3) {
                letter += mark
                count++
            } else if (choices[i][j] !== mark && count < 3) {
                letter = ""
            }
            if (count === 3 && letter === `${mark}${mark}${mark}`) {
                if (mark === "X") {
                    game.players.playerOne.score++
                    game.winner = game.players.playerOne.name
                } else if (mark === "O") {
                    game.players.playerTwo.score++
                    game.winner = game.players.playerTwo.name
                }
                return true
            }
        }
    }
}

const winVertical = function (mark) {
    let count = 0
    for (let i = 0; i < 3; i++) {
        let letter = ""
        for (let j = 0; j < 3; j++) {
            if (choices[j][i] === mark && count < 3) {
                letter += mark
                count++
            } else if (choices[j][i] !== mark && count < 3) {
                letter = ""
            }
            if (count === 3 && letter === `${mark}${mark}${mark}`) {
                if (mark === "X") {
                    game.players.playerOne.score++
                    game.winner = game.players.playerOne.name
                } else if (mark === "O") {
                    game.players.playerTwo.score++
                    game.winner = game.players.playerTwo.name
                }
                return true
            }
        }
    }
}

const winDiagonal = function (mark) {
    let count = 0
    let letter = ""
    for (let i = 0; i < 3; i++) {
        if (choices[i][i] === mark && count < 3) {
            letter += mark
            count++
        } else if (choices[i][i] !== mark && count < 3) {
            letter = ""
        }
        if (count === 3 && letter === `${mark}${mark}${mark}`) {
            if (mark === "X") {
                game.players.playerOne.score++
                game.winner = game.players.playerOne.name
            } else if (mark === "O") {
                game.players.playerTwo.score++
                game.winner = game.players.playerTwo.name
            }
            return true
        }



    }

}

const checkForWin = function (mark) {

    if (winDiagonal(mark) ||
        winVertical(mark) ||
        winHorizontal(mark)) {
        // if player 1 won, apply retry, add to score
        retryButton(`win for ${game.winner}`)
        //if no winner after 9 rounds, make it a draw
    } else if (choices[0][2] === "X" && choices[1][1] === "X" && choices[2][0] === "X") {
        game.players.playerOne.score++
        game.winner = game.players.playerOne.name
        retryButton(`win for ${game.winner}`)
    } else if (choices[0][2] === "O" && choices[1][1] === "O" && choices[2][0] === "O") {
        game.players.playerTwo.score++
        game.winner = game.players.playerTwo.name
        retryButton(`win for ${game.winner}`)
    } else if (tries < 8) {
        tries++
    } else {
        retryButton(`draw`)
    }
}

// const winAnimation = function (){

//     for (i = 0; )
// }

// const flash = function(){
// let state = true
//     let interval = setInterval(function(){
//         if (state) {
//             document.body.style.backgroundColor = "red"
//             state = !state
//         } else {
//             document.body.style.backgroundColor = "white"
//             state = !state
//         }
//         setTimeout(function(){
//             clearInterval(interval)
//             document.body.style.backgroundColor = "white"
//          },2000) 
//     }, 200)
//     interval()
// }

startGame()