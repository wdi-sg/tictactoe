console.log("Tic Toc");


var turnCounter = 0

var scoreBoard = [
    [ null, null, null],
    [ null, null, null],
    [ null, null, null],
];



//attempted game start button. also failed

// var firstClick = function(event){
//     console.log("game begins");
// };

// document.querySelector(".startbutton")
//         event.target.addEventListener("click" , firstClick);

// var startbutton = document.createElement("button");
// startbutton.classList.add("startbutton");
// startbutton.innerText=("Start Game")
// document.body.appendChild(button);

//making the board
var firstClick = function(){
    var board = document.createElement("div");
    board.classList.add("board");
    document.body.appendChild(board);

    var row1 = document.createElement("div");
    row1.classList.add("row1");
    document.body.appendChild(row1);
    board.appendChild(row1);

    var button = document.createElement("button");
    button.classList.add("button");
    document.body.appendChild(button);
    board.appendChild(button);
    row1.appendChild(button);

    var button = document.createElement("button");
    button.classList.add("button");
    document.body.appendChild(button);
    board.appendChild(button);
    row1.appendChild(button);

    var button = document.createElement("button");
    button.classList.add("button");
    document.body.appendChild(button);
    board.appendChild(button);
    row1.appendChild(button);

    var row2 = document.createElement("div");
    row2.classList.add("row2");
    document.body.appendChild(row2);
    board.appendChild(row2);

    var button = document.createElement("button");
    button.classList.add("button");
    document.body.appendChild(button);
    board.appendChild(button);
    row2.appendChild(button);

    var button = document.createElement("button");
    button.classList.add("button");
    document.body.appendChild(button);
    board.appendChild(button);
    row2.appendChild(button);

    var button = document.createElement("button");
    button.classList.add("button");
    document.body.appendChild(button);
    board.appendChild(button);
    row2.appendChild(button);

    var row3 = document.createElement("div");
    row3.classList.add("row3");
    document.body.appendChild(row3);
    board.appendChild(row3);

    var button = document.createElement("button");
    button.classList.add("button");
    document.body.appendChild(button);
    board.appendChild(button);
    row3.appendChild(button);

    var button = document.createElement("button");
    button.classList.add("button");
    document.body.appendChild(button);
    board.appendChild(button);
    row3.appendChild(button);

    var button = document.createElement("button");
    button.classList.add("button");
    document.body.appendChild(button);
    board.appendChild(button);
    row3.appendChild(button);
};




var highLight = function(){
    event.target.style.background="LightGrey";
}

var noLight = function(){
    event.target.style.background="white";
}

var onClick = function(){
    if (turnCounter === 0 | turnCounter === 2 | turnCounter === 4 | turnCounter === 6 | turnCounter === 8){
        event.target.innerText="X" ;
        event.target.addEventListener("mouseout" , noLight);
        event.target.addEventListener("mouseover" , noLight);
    }
    else {
    event.target.innerText="O" ;
    event.target.addEventListener("mouseout" , noLight);
    event.target.addEventListener("mouseover" , noLight);
    }
    turnCounter = turnCounter + 1;
    console.log("Turn: " + turnCounter)
};

var allButtons = document.querySelectorAll("button");


for (var i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener("mouseover" , highLight);

    allButtons[i].addEventListener("mouseout" , noLight);

    allButtons[i].addEventListener("click" , onClick);
}

//attempted win state. not sure how to continue
// for (var i = 0; i < scoreBoard.length; i++){
//     for (var j = 0; j < scoreBoard[i].length; j++){
//         if (scoreboard[0][0] === scoreboard[0][1] === scoreboard[0][2]){
//             var theWinner = scoreboard[0][0]
//             return = the Winner
//         }
//         else if (scoreboard[1][0] === scoreboard[1][1] === scoreboard[1][2]){
//             var theWinner = scoreboard[1][0]
//             return = theWinner
//         }
//         else if (scoreboard[2][0] === scoreboard[2][1] === scoreboard[2][2]){
//             var theWinner = scoreboard[2][0]
//             return = theWinner
//         }
//         else if (scoreboard[0][0] === scoreboard[1][0] === scoreboard[2][0]){
//             var theWinner = scoreboard[0][0]
//             return = theWinner
//         }
//         else if (scoreboard[0][1] === scoreboard[1][1] === scoreboard[2][1]){
//             var theWinner = scoreboard[0][0]
//             return = the Winner
//         }
//         else if (scoreboard[0][2] === scoreboard[1][2] === scoreboard[2][2]){
//             var theWinner = scoreboard[1][0]
//             return = theWinner
//         }
//         else if (scoreboard[0][0] === scoreboard[1][1] === scoreboard[2][2]){
//             var theWinner = scoreboard[2][0]
//             return = theWinner
//         }
//         else if (scoreboard[2][0] === scoreboard[1][1] === scoreboard[0][2]){
//             var theWinner = scoreboard[0][0]
//             return = theWinner
//         }
//     }


// }