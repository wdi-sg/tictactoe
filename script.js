var turn = 0;
var xWins = 0;
var oWins = 0;
var waitInputs = 0;
var gameMoves = 0;
var grid = document.querySelector(".grid")
var xScoreBoard = document.querySelector(".xScore");
var oScoreBoard = document.querySelector(".oScore");
var gameIsOver = false;
var player1Name = "";
var player2Name = "";
var userInput = document.querySelector("#input1");
/*var box = [];
var boxArray = [[]];*/

var createRow = function () {
    for (i = 0; i < 3; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        grid.appendChild(row);
    }
}


var createColumn = function () {
    for (i = 0; i < 3; i++) {
        var box = document.createElement("span");
        box.setAttribute("class", "box");
        box.addEventListener("click", settingCheck);
        document.querySelectorAll(".row")[i].appendChild(box);
    }
}

var createBoard = function() {
    createRow();
    createColumn();
    createColumn();
    createColumn();
}

var setToX = function() {
    event.target.setAttribute("class", "x box");
    event.target.innerText = "x";
}

var setToO = function() {
    event.target.setAttribute("class", "o box");
    event.target.innerText = "o";
}

var settingCheck = function() {
    if (gameMoves === 8) {
        document.querySelector("#reset").classList.remove("invisible");
        setTimeout(checkState);
    }
    if (turn === 0 && this.innerText == "" && gameIsOver === false) {
        setToX()
        turn++;
        gameMoves++;
        checkForWin();

    } else if (turn === 1 && this.innerText == "" && gameIsOver === false){
        setToO();
        turn = 0;
        checkForWin();
        gameMoves++;
    } else if (gameIsOver === false) {
        alert("Please click on a valid target");
    }
}

var getBoxIds = function () {
    for (i = 0; i < document.querySelectorAll(".box").length; i++){
        box[i] = document.querySelectorAll(".box")[i];
    }
}

var checkForWin = function () {
    {
        switch (true) {
            case (box[0].innerText !== "" && box[0].innerText === box[1].innerText && box[0].innerText === box[2].innerText):
                if (turn === 0){
                alert("Circle Wins");
                oWins++
                gameIsOver = true;
                updateScore();
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        xWins++
                        gameIsOver = true;
                        updateScore();
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[0].innerText !== "" && box[0].innerText === box[3].innerText && box[0].innerText === box[6].innerText):
                if (turn === 0){
                alert("Circle Wins");
                oWins++
                gameIsOver = true;
                updateScore();
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        xWins++
                        gameIsOver = true;
                        updateScore();
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[0].innerText !== "" && box[0].innerText === box[4].innerText && box[0].innerText === box[8].innerText):
                if (turn === 0){
                alert("Circle Wins");
                oWins++
                gameIsOver = true;
                updateScore();
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        xWins++
                        gameIsOver = true;
                        updateScore();
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[1].innerText !== "" && box[1].innerText === box[4].innerText && box[1].innerText === box[7].innerText):
                if (turn === 0){
                alert("Circle Wins");
                oWins++
                gameIsOver = true;
                updateScore();
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        xWins++
                        gameIsOver = true;
                        updateScore();
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[2].innerText !== "" && box[2].innerText === box[5].innerText && box[2].innerText === box[8].innerText):
                if (turn === 0){
                alert("Circle Wins");
                oWins++
                gameIsOver = true;
                updateScore();
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        xWins++
                        gameIsOver = true;
                        updateScore();
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[3].innerText !== "" && box[3].innerText === box[4].innerText && box[3].innerText === box[5].innerText):
                if (turn === 0){
                alert("Circle Wins");
                oWins++
                gameIsOver = true;
                updateScore();
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        xWins++
                        gameIsOver = true;
                        updateScore();
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[6].innerText !== "" && box[6].innerText === box[7].innerText && box[6].innerText === box[8].innerText):
                if (turn === 0){
                alert("Circle Wins");
                oWins++
                gameIsOver = true;
                updateScore();
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        xWins++
                        gameIsOver = true;
                        updateScore();
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[2].innerText !== "" && box[2].innerText === box[4].innerText && box[2].innerText === box[6].innerText):
                if (turn === 0){
                alert("Circle Wins");
                oWins++
                gameIsOver = true;
                updateScore();
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        xWins++
                        gameIsOver = true;
                        updateScore();
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            default:
                console.log("nothing");
        }
    }
}

var resetGame = function () {
    document.querySelector(".grid").innerHTML = ""
    turn = 0;
    gameMoves = 0;
    createBoard();
    getBoxIds();
    gameIsOver = false;
    event.target.classList.add("invisible");
}

var updateScore = function () {
    xScoreBoard.innerText = "X Wins : " + xWins;
    oScoreBoard.innerText = "O Wins : " + oWins;
}

var checkState = function () {
    if (gameIsOver === false) {
        alert("DRAW!");
    }
}

var getPlayerNames = function () {
    if (waitInputs === 0) {

    }
}

document.querySelector("#reset").addEventListener("click", resetGame);