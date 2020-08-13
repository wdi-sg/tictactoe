/* Tic Tac Toe

you will need three functions handle three main things:
MAIN LOGIC:
checkWin: which checks if the player won the game;
handleTurn: which checks who's turn is it;
checkDraw: which checks at the end of the game if it is a draw.
SECONDARY LOGIC:
placeMark = change div into a square or circle
endGame = which checks if win OR if draw, and display the message to the user
changeTurn

*/

//Global variables
const crossClass = 'cross';
const circleClass = 'circle';
let crossTurn = true;
let crossArray = [];
let circleArray = [];
let crossWon;
let circleWon;
let win= 'false';
let winner;
let draw;
var endmessage = document.querySelector(".status");

// const winningMessage =`${currentPlayer} has won!`;
const drawMessage ='The game ended in a draw!';
//need to be zero-indexed bc its an array
const winningCombinations = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
];

const cellElements = document.getElementsByClassName("cell");

//helper functions section


//handle click will handle 4 operations: place mark, check for win, check draw, switch turns


let handleClick= function(e){
    console.log("click")
    const cell = e.target
    let currentClass = crossTurn ? crossClass : circleClass
    console.log(currentClass)
    markSpot(currentClass,cell)
    spotsTaken(currentClass,cell) 
    console.log(circleArray,crossArray)
    //check for win
    //check for draw
    //change turn
    // checkWin(currentClass);
    compareCross(crossArray)
    compareCircle(circleArray)
    winCheck(circleWon, crossWon)
    if(win === true){
        endGame();
    }

    checkDraw();
    if(draw===true){
        endGame();
    }

    changeTurns()

};
//helper function to keep track of both cross and circle positions
var spotsTaken = function(currentClass,cell){
    if(currentClass==='circle'){
        circleArray.push(cell.getAttribute("id"));
    } else if (currentClass ==='cross'){
        crossArray.push(cell.getAttribute("id"));
    }
}
//helper function to add class attribute to grid
var markSpot = function(currentclass, item){ 
    item.classList.add(currentclass)
};

//helper fucntion to change turns
 var changeTurns = function(){
     if(crossTurn === true){
         crossTurn = false;
     } else if (crossTurn === false){
         crossTurn = true;
     }
 }

//add event listener on each grid using for loop
for(var i =0; i< cellElements.length; i++){
    cellElements[i].addEventListener("click", handleClick,{once: true})
};




var compareCross = function(crossArray) {
    winningCombinations.forEach(element => {
        crossWon= element.filter(x => crossArray.includes(x))
        // console.log(element);
        // console.log(crossArray);
        console.log(crossWon);
    })
}

var compareCircle = function(circleArray) {
    winningCombinations.forEach(element => {
         circleWon = element.filter(x => circleArray.includes(x))
       
    })
}

var winCheck = function(circleWon, crossWon) {
    if(circleWon.length >2 ){
         win = true;
         winner = "circle"
    } else if( crossWon.length) {
        win = true;
         winner ="cross"
    } else{
         winner=false;
    }
}

// var checkDraw = function() {
//     if(cellElements.every(cell => {
//         return cell.classList.contains(crossClass) ||
//         cell.classList.contains(circleClass)
//     })){
//         return draw = true
//     }
// }

var endGame = function(draw){
    if(draw) {
        endmessage.innerText = "Draw!"
    } else {
        endmessage.innerText = `${winner} wins!`
    }
}