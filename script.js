console.log("loading script")

//find out which user is playing
const player1 = 'O';
const player2 = 'X';
var origBoard;
//winning combination
const winningCombo = [
["a1","a2","a3"],
["b1","b2","b3"],
["c1","c2","c3"],
["a1","b1","c1"],
["a2","b2","c2"],
["a3","b3","c3"],
["a1","b2","c3"],
["c1","b2","a3"]
]

const boxes = document.querySelectorAll('.box');
startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none"
    origBoard = Array.from(Array(9).keys());
       for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
        boxes[i].style.removeProperty('background-color');
        boxes[i].addEventListener('click', turnClick, false);
    }
}