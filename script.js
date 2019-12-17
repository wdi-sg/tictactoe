console.log("test");


var turn = 0;
var grid = document.querySelector(".grid")
var box = [];


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
    if (turn === 0) {
        setToX()
        turn++;
    } else {
        setToO();
        turn = 0;
    }
}

createBoard();

for (i = 0; i < document.querySelectorAll(".box").length; i++){
    box[i] = document.querySelectorAll(".box")[i];
}