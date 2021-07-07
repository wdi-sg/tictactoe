

let player1Name = "";
let player1Symbol = "";

let player2Name = "";
let player2Symbol = "";

let nextPlayer = "playerOne";

let winningCombos = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]
];

let playerOneMoves = [];
let playerTwoMoves = [];
let totalMovesMade = 0;
let anyWinnerYet = false;

// Function that determines the order of the game
const drawXorO = function() {

    let boxClicked = event.target.id;
    let boxNumClicked = parseInt(boxClicked[3]);

    if (nextPlayer === "playerOne") {

        document.getElementById(boxClicked).textContent = player1Symbol;
        document.getElementById(boxClicked).style.backgroundColor = "lightblue";
        playerOneMoves.push(boxNumClicked);

        nextPlayer = "playerTwo";
        totalMovesMade = totalMovesMade + 1;

    } else {

        document.getElementById(boxClicked).textContent = player2Symbol;
        document.getElementById(boxClicked).style.backgroundColor = "lightpink";
        playerTwoMoves.push(boxNumClicked);


        nextPlayer = "playerOne";
        totalMovesMade = totalMovesMade + 1;

    }

    for (let i = 0; i < winningCombos.length; i ++) {
        winningArray = winningCombos[i];
        checkForWinP1();
        checkForWinP2();
    }

    checkForDraw();
}

// When the body is clicked, this function is run:
function myFunction(event) {

// To make sure that the drawing function only happens in the 9 Divs in the game board
    if (event.target.id === "box1" || event.target.id === "box2" || event.target.id === "box3" || event.target.id === "box4" || event.target.id === "box5" || event.target.id === "box6" || event.target.id === "box7" || event.target.id === "box8" || event.target.id === "box9") {

        drawXorO(event);
    }

}

// Function that checks if playerOne wins
const checkForWinP1 = function() {

    let result = (winningArray.every(element => playerOneMoves.includes(element)));

    if (result === true) {
        alert(player1Name + " you won!")
        anyWinnerYet = true;
        document.querySelector("#reset-btn").style.visibility = "visible"
    }
}

// Function that checks if playerTwo wins
const checkForWinP2 = function() {

    let result = (winningArray.every(element => playerTwoMoves.includes(element)));

    if (result === true) {
        alert(player2Name + " you won!")
        anyWinnerYet = true;
        document.querySelector("#reset-btn").style.visibility = "visible"
    }
}

// Function that checks if game ends in a tie
const checkForDraw = function() {

    if (anyWinnerYet === false && totalMovesMade === 9) {
        alert("It's a tie!")
        document.querySelector("#reset-btn").style.visibility = "visible"

    }
}

// Defining some variables in the form
let startButton = document.querySelector("#start-btn")
let p1Name = document.querySelector("#player1Name").value;
let p2Name = document.querySelector("#player2Name").value;

// Function that helps make the game board
const makeBoard = function() {

    event.preventDefault();
    createBoard();
    document.querySelector("form").style.visibility = "hidden"
    player1Name = document.querySelector("#player1Name").value;
    player2Name = document.querySelector("#player2Name").value;
    player1Symbol = document.querySelector("#symbol1").value;
    player2Symbol = document.querySelector("#symbol2").value;

}



// Function containing all the DOM manipulation for creating the HTML of the game board
const createBoard = function() {
    var parent = document.createElement("div");
    var bx1 = document.createElement('div');
    var bx2 = document.createElement('div');
    var bx3 = document.createElement('div');
    var bx4 = document.createElement('div');
    var bx5 = document.createElement('div');
    var bx6 = document.createElement('div');
    var bx7 = document.createElement('div');
    var bx8 = document.createElement('div');
    var bx9 = document.createElement('div');

    parent.classList.add("parent-container");
    bx1.classList.add("child-container");
    bx2.classList.add("child-container");
    bx3.classList.add("child-container");
    bx4.classList.add("child-container");
    bx5.classList.add("child-container");
    bx6.classList.add("child-container");
    bx7.classList.add("child-container");
    bx8.classList.add("child-container");
    bx9.classList.add("child-container");

    bx1.setAttribute("id", "box1");
    bx2.setAttribute("id", "box2");
    bx3.setAttribute("id", "box3");
    bx4.setAttribute("id", "box4");
    bx5.setAttribute("id", "box5");
    bx6.setAttribute("id", "box6");
    bx7.setAttribute("id", "box7");
    bx8.setAttribute("id", "box8");
    bx9.setAttribute("id", "box9");

    parent.appendChild(bx1);
    parent.appendChild(bx2);
    parent.appendChild(bx3);
    parent.appendChild(bx4);
    parent.appendChild(bx5);
    parent.appendChild(bx6);
    parent.appendChild(bx7);
    parent.appendChild(bx8);
    parent.appendChild(bx9);

    document.body.appendChild(parent);

}

const resetGame = function() {
    nextPlayer = "playerOne";
    playerOneMoves = [];
    playerTwoMoves = [];
    totalMovesMade = 0;
    anyWinnerYet = false;

    let boardTiles = document.querySelector('.parent-container').childNodes

    for (let i = 0; i < boardTiles.length; i ++) {
        boardTiles[i].textContent = ""
        boardTiles[i].style.backgroundColor = ""
    }

    document.querySelector("#reset-btn").style.visibility = "hidden"

}

// AddEventListeners for the Start Button and when the body is clicked during the game
startButton.addEventListener('click', makeBoard);
document.body.addEventListener('click', myFunction);
let resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener('click', resetGame);