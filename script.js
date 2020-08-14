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
let noOfTurns = 0;


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
    noOfTurns ++;
    spotsTaken(currentClass,cell) 
    console.log(circleArray,crossArray)
    //check for win
    //check for draw
    //change turn
    // checkWin(currentClass);
    winCheck(crossArray, circleArray)
    console.log(win);
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






var winCheck = function(crossArray, circleArray) {
    winningCombinations.forEach(element => {
        crossWon= element.filter(x => crossArray.includes(x))
        if(crossWon.length === 3 ){
            win = true;
            return winner = "cross"    
        }
    })

    winningCombinations.forEach(element => {
        circleWon = element.filter(x => circleArray.includes(x))
        if ( circleWon.length === 3) {
            win = true;
             winner ="circle"
   }
})
}
 //disable game so that user cant press after one person wins
var disableGame = function() {
    for(var i =0; i< cellElements.length; i++){
        cellElements[i].removeEventListener("click", handleClick)
    };
}


var checkDraw = function(noOfTurns){
    if(noOfTurns===9 && winner === null) {
        draw = true;
    } 
};

var endGame = function(){
    disableGame();
    if(draw ===true){
        endmessage.innerText = "its a draw!"
    } else if (winner !== null){
        endmessage.innerText = `${winner} wins!`
    }
}