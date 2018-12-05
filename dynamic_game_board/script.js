document.addEventListener("DOMContentLoaded", console.log("loaded."));

var boardSize;
var playCounter = 0;

do {
boardSize = prompt("How big do you want your board size to be?", "3 onwards");
} while (parseInt(boardSize) < 3)

var userArr =[];
var body = document.querySelector("body");

var checkWin = function(symbol) {

}

var showXorO = function() {
    if (playCounter % 2 == 0) {
        playCounter++;
        this.innerText = "X";
        checkWin("X");
    } else if (playCounter % 2 !== 0) {
        playCounter++;
        this.innerText = "O";
        checkWin("O");
    };
};

var createBoard = function() {

    var mainBoard = document.createElement("div");
    mainBoard.id = "mainBoard";
    mainBoard.style.cssText = `background-color: black; display: grid; grid-column-gap: 2px; grid-row-gap: 2px; width: 300px; height: 300px; margin: 0 auto; grid-template-columns: repeat(${boardSize}, 1fr);`
    body.appendChild(mainBoard);
//this for loop will multiply the inner for loop by boardSize also, at the same time giving row id possible to the inner for loop
    for (i=0; i<boardSize; i++) {
        var rowArr = [];
        for (y=0; y<boardSize; y++) {
            var createBox = document.createElement("div");
            createBox.setAttribute("id", `${i}${y}`);
            createBox.style.cssText = "font-family: \"Comfortaa\", cursive; background-color: white;"
            createBox.addEventListener("click", showXorO);
            rowArr.push(createBox);
            mainBoard.appendChild(createBox);
        };
    userArr.push(rowArr);
    };
    totalBox = boardSize * boardSize;
};



createBoard();