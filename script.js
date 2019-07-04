console.log("Hey mal! Let's freaking do this");
var container = document.querySelector(".container")

var boardSize = 3;
var turns = 0;

var inputArray = ["x","0","x","0","x","0","x","0","x"];
var board = {
                row1: [],
                row2: [],
                row3: [],
            }

//create button
var createButton = function() {
    var button = document.createElement("button");
    button.setAttribute("id","startButton");
    button.innerHTML = "Start Game";
    button.addEventListener("click", function() {

        //creating no of game boxes loop
        for (var i = 0; i < 9; i++) {
            console.log("number", i);
            createGameBox(i);
            createP(i);
        };
    });
    container.appendChild(button);
};
createButton();

//create game board function
var createGameBoard = function(){
    var board = document.createElement("div");
    board.setAttribute("id","board");
    container.appendChild(board);
};
createGameBoard();

//creating game box function
var createGameBox = function(boxNo) {
    var box = document.createElement("div");
    box.setAttribute("class","box");
    box.setAttribute("id","box" + boxNo);
    document.getElementById("board").appendChild(box);
};

//creating gamebox p tag
var createP = function(pNo) {
    var p = document.createElement("p");
    p.setAttribute("class","classP");
    p.setAttribute("id","p" + pNo);
    document.getElementById("box" + pNo).appendChild(p);
    p.innerHTML = "r";
    p.addEventListener("click", function() {
    alert("Be patient, box: " + pNo + " feature not working yet~");
    })
};

// p tag of row 1 column 1
let pr1c1 = document.getElementById("pr1c1");
    pr1c1.addEventListener("click", function() {
    pr1c1.innerHTML = inputArray[turns];
    board.row1[0] = (inputArray[turns]);
        turns ++;
    });

// //p tag of row 1 column 2
let pr1c2 = document.getElementById("pr1c2");
    pr1c2.addEventListener("click", function() {
    pr1c2.innerHTML = inputArray[turns];
    board.row1[1] = (inputArray[turns]);
    turns ++;
});

//p tag of row 1 column 3
let pr1c3 = document.getElementById("pr1c3");
    pr1c3.addEventListener("click", function() {
    pr1c3.innerHTML = inputArray[turns];
    board.row1[2] = (inputArray[turns]);
    turns ++;
});

//p tag of row 2 column 1
let pr2c1 = document.getElementById("pr2c1");
    pr2c1.addEventListener("click", function() {
    pr2c1.innerHTML = inputArray[turns];
    board.row2[0] = (inputArray[turns]);
    turns ++;
});

//p tag of row 2 column 2
let pr2c2 = document.getElementById("pr2c2");
    pr2c2.addEventListener("click", function() {
    pr2c2.innerHTML = inputArray[turns];
    board.row2[1] = (inputArray[turns]);
    turns ++;
});

//p tag of row 2 column 3
let pr2c3 = document.getElementById("pr2c3");
    pr2c3.addEventListener("click", function() {
    pr2c3.innerHTML = inputArray[turns];
    board.row2[2] = (inputArray[turns]);
    turns ++;
});

//p tag of row 3 column 1
let pr3c1 = document.getElementById("pr3c1");
    pr3c1.addEventListener("click", function() {
    pr3c1.innerHTML = inputArray[turns];
    board.row3[0] = (inputArray[turns]);
    turns ++;
});

//p tag of row 3 column 2
let pr3c2 = document.getElementById("pr3c2");
    pr3c2.addEventListener("click", function() {
    pr3c2.innerHTML = inputArray[turns];
    board.row2[1] = (inputArray[turns]);
    turns ++;
});

//p tag of row 3 column 3
let pr3c3 = document.getElementById("pr3c3");
    pr3c3.addEventListener("click", function() {
    pr3c3.innerHTML = inputArray[turns];
    board.row2[2] = (inputArray[turns]);
    turns ++;
});

document.addEventListener('DOMContentLoaded', function (event) { })