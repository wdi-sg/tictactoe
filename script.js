console.log("hello script js");

var turn = 0;
var playerOne = [];
var playerTwo = [];
var winPerm = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];




////// TO UPDATE CREATE DYNAMIC BOARD////////
// var board = function(){

//     for (i=1;i<10;i++){
//         var gameSquare = document.createElement("div");
//         gameSquare.setAttribute("id", i);
//         gameSquare.setAttribute("class", "game-square");
//         var board = document.getElementById("board");
//         board.appendChild(gameSquare);
//     }
// }
 // div1.setAttribute("style", "font-size: 30px")
    // }
// board();
/////////////////////////////////////////////

var createBoard = function() {
    console.log("create board works");
    turn = 0;
    playerOne = [];
    playerTwo = [];
    for (i=0;i<9;i++) {
        var gameSquare = document.querySelectorAll(".game-square");
        gameSquare[i].innerText = i+1;
        gameSquare[i].style.color = "red";
    }
}


var clickBox = function(event){
    if (turn === 0 || turn%2 === 0) {
        console.log("P1 clicked: "+ event.target.innerText);
        playerOne.push(parseInt(event.target.innerText));
        console.log(playerOne);
        event.target.innerText = "X";
        event.target.style.color = "white";
        turn++;
        checkWin();
    } else {
        console.log("P2 clicked: "+ event.target.innerText);
        playerTwo.push(parseInt(event.target.innerText));
        console.log(playerTwo);
        event.target.innerText = "O";
        event.target.style.color = "white";
        turn++;
        checkWin();
    }

}


//ES6 Syntax to check if array is subet of another
// if ((subset.every(element => mainArray.includes(element)))=== true ) {
//     console.log("function works");
// }
var checkWin = function (element) {
    for (i=0;i<winPerm.length;i++) {

        if ((winPerm[i].every(element => playerOne.includes(element)))=== true ) {
        console.log("playerOne Wins!");
        setTimeout(function(){alert("Player 1 Won")},500);
        } else if ((winPerm[i].every(element => playerTwo.includes(element)))=== true ) {
            setTimeout(function(){alert("Player 2 Won")},500);
        }
    }
}


var startButton = document.createElement("button")
startButton.innerText = "New Game";
document.body.appendChild(startButton);




document.addEventListener('DOMContentLoaded', function( event ){

    createBoard();

    startButton.addEventListener('click', createBoard);

    for (i=0;i<9;i++){
        var div = document.querySelectorAll(".game-square")[i];
        // console.log(div);
        div.addEventListener('click', clickBox);
    }

});