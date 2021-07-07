//create array of 9 squares
var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];


// let row = 0;
// let col = 0;
// var stage = document.createElement("p");


//
// var click = function(){
//     // var target = event.target.tagName;
//     event.target.textContent = currentMove;
// }



//create rows and columns
function makeBlocks() {
        for (var i = 0; i < 3; i++) {
            var row = document.createElement('div');
            row.className = "game-row";

            for (var j = 0; j < 3; j++) {
                var box = document.createElement('span');
                box.className = "game-square";
                // box.id = "square"+(j+1);
                row.appendChild(box);
            }
            document.querySelector('#board').appendChild(row);
        }
    }

//check what's the current move
    var currentMove = "X";
    var playerTurn = function() {
        if (currentMove === "X"){
            event.target.textContent = "X"
            return currentMove = "O";
        } else {
            event.target.textContent = "O"
            return currentMove = "X";
        }
    }




//Game starts
makeBlocks();
//click and push to box
var box = document.querySelectorAll("span")


    for(var i = 0; i < box.length; i++){
    //not clickable when there's value in box
    if (box[i].innerText !== "X" || box[i].innerText !== "O" ){
        box[i].addEventListener("click", playerTurn);
        // board.push(box[i].innerText)
    } else {
        box[i].removeEventListener("click", function(){alert("Pls click on an empty box.")} )
    }
}








//conditions for blue win
//conditions for red win

// var player1Chance = 5;
// var player2Chance = 5;
// var totalGamePlay = 9;
//game start

//if gameplay not equal 9




//get player 1
//player1 chance used != 5, total gameplay != 9
//if (player1Chance
//player 1 click on a square, turn the square into a X

// var turnSquare = function(num){
//     for (var i=0, i<board.length; board++){
//         for (var j=0; j<board[i].length; j++){
//             if (board[j] = null){
//                 board[j].appendChild(num);
//                 board[j].push(num);
//             }
//         }



//     }

// }


// var box = document.querySelector(".box");
// box.addEventListener('click', turnSquare);

//gameplay --
//get player2


//get player 2
//player1 chance used != 5, total gameplay != 9
//player 2 turns. player 2 click on a square. turns into O.
//gameplay --
//get player1



//games end when all squares filled.


//check for winner
//if row"#""#" && row"#"[1] && row"#"[2] same
// var boxInnerText = document.getElementsByTagName("span");




  // var eightWinningCombos = [
  // "boxInnerText[1].boxInnerText,boxInnerText[2].boxInnerText,boxInnerText[3].boxInnerText",
  // "boxInnerText[4].boxInnerText,boxInnerText[5].boxInnerText,boxInnerText[6].boxInnerText",
  // "boxInnerText[7].boxInnerText,boxInnerText[8].boxInnerText,boxInnerText[9].boxInnerText",
  // "boxInnerText[1].boxInnerText,boxInnerText[4].boxInnerText,boxInnerText[7].boxInnerText",
  // "boxInnerText[2].boxInnerText,boxInnerText[5].boxInnerText,boxInnerText[8].boxInnerText",
  // "boxInnerText[3].boxInnerText,boxInnerText[6].boxInnerText,boxInnerText[9].boxInnerText",
  // "boxInnerText[1].boxInnerText,boxInnerText[5].boxInnerText,boxInnerText[9].boxInnerText",
  // "boxInnerText[7].boxInnerText,boxInnerText[5].boxInnerText,boxInnerText[3].boxInnerText"
  // ]




//if blue equals... blue wins
//if red equals... red wins

//else draw


//reset game
