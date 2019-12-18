console.log("test");


var turn = 0;
var grid = document.querySelector(".grid")
var box = [];
var boxArray = [[]];
var gameIsOver = false;

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
    if (turn === 0 && this.innerText == "" && gameIsOver === false) {
        setToX()
        turn++;
        checkForWin();
    } else if (turn === 1 && this.innerText == "" && gameIsOver === false){
        setToO();
        turn = 0;
        checkForWin();
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
                gameIsOver = true;
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        gameIsOver = true;
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[0].innerText !== "" && box[0].innerText === box[3].innerText && box[0].innerText === box[6].innerText):
                if (turn === 0){
                alert("Circle Wins");
                gameIsOver = true;
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        gameIsOver = true;
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[0].innerText !== "" && box[0].innerText === box[4].innerText && box[0].innerText === box[8].innerText):
                if (turn === 0){
                alert("Circle Wins");
                gameIsOver = true;
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        gameIsOver = true;
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[1].innerText !== "" && box[1].innerText === box[4].innerText && box[1].innerText === box[7].innerText):
                if (turn === 0){
                alert("Circle Wins");
                gameIsOver = true;
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        gameIsOver = true;
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[2].innerText !== "" && box[2].innerText === box[5].innerText && box[2].innerText === box[8].innerText):
                if (turn === 0){
                alert("Circle Wins");
                gameIsOver = true;
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        gameIsOver = true;
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[3].innerText !== "" && box[3].innerText === box[4].innerText && box[3].innerText === box[5].innerText):
                if (turn === 0){
                alert("Circle Wins");
                gameIsOver = true;
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        gameIsOver = true;
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[6].innerText !== "" && box[6].innerText === box[7].innerText && box[6].innerText === box[8].innerText):
                if (turn === 0){
                alert("Circle Wins");
                gameIsOver = true;
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        gameIsOver = true;
                        document.querySelector("#reset").classList.remove("invisible");
                    }
                break;
            case (box[2].innerText !== "" && box[2].innerText === box[4].innerText && box[2].innerText === box[6].innerText):
                if (turn === 0){
                alert("Circle Wins");
                gameIsOver = true;
                document.querySelector("#reset").classList.remove("invisible");
                    } else {
                        alert("X Wins");
                        gameIsOver = true;
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
    createBoard();
    getBoxIds();
    gameIsOver = false;
    event.target.classList.add("invisible");
}

document.querySelector("#reset").addEventListener("click", resetGame);