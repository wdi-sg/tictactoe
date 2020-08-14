const player1 = 1;
const player2 = -1;
var state = "";
var playerTurn = 0;

var boxElements = Array.from(document.querySelectorAll(".game-row"));
console.log(boxElements)

// create rows and store them in a nested array

var createBoard = function(array, rows) {
    var tempArray = [];

    for(var i = 0; i < array.length; i += rows) {
        var myRow = array.slice(i, i + rows);
        tempArray.push(myRow);
    }
    return tempArray;   
}

var board = createBoard(boxElements, 3);
console.log(board)

boxElements.forEach(box => {
    box.addEventListener("click", function() {
        start(event)}, {once: true})
});

var start = function(event) {
    checked(event);
    //check win condition
}

var checked = function(event) {
    if (playerTurn === 0) {
        event.target.innerText = "X";
        playerTurn = 1
    } else if(playerTurn === 1) {
        event.target.innerText = "O";
        playerTurn = 0
    }
}

console.log(playerTurn)

// win conditions

// var realBoard = [[1, 1, 1], [0, 1, 0], [1, 0, 0]]
// var state = "";

// // Check Row Win
// var checkRowWin = function(board) {
//     var sum = 0;
//     for (var i = 0; i < board[i].length; i++) {
//         sum = board[i].reduce((a, b) => a + b)
//         console.log(sum); 
//         if (sum === 3) {
//             state = "player1 win";
//             break;
//         } else if (sum === -3) {
//             state = "player2 win";
//             break;
//         }
//     }     
// }
// checkRowWin(realBoard);
// console.log(checkRowWin)

// //Check Column Win
// var checkColumnWin = function(board) {
//     var sum1 = 0;
//     var sum2 = 0;
//     var sum3 = 0;
//     for (var i = 0; i < board.length; i++) {
//         sum1 += board[i][0]
//         sum2 += board[i][1]
//         sum3 += board[i][2]
//         if (sum1 === 3 || sum2 === 3 || sum3 ===3 ||) {
//             state = "player1 win";
//             break;
//         } else if (sum1 === -3 || sum2 === -3 || sum3 === -3) {
//             state = "player2 win";
//             break;
//         }
//     }
// }
// checkColumnWin(realBoard);
// console.log(state)

// //Check Diagonal Win
// var checkDiagonalWin = function(board) {
//     var sum1 = 0;
//     var sum2 = board[0][2] + board[1][1] + board[2][0];
//     for (var i = 0; i < board.length; i++) {
//         sum1 += board[i][i]
//         if (sum1 === 3 || sum2 === 3) {
//             state = "player1 win";
//             break;
//         } else if (sum1 === -3 || sum2 === -3) {
//             state = "player2 win";
//             break;
//         }
//     }
// }
// checkDiagonalWin(realBoard);
// console.log(state)
