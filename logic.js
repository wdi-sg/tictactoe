// var grid = [
//     [0,0,0],
//     [0,0,0],
//     [0,0,0]
// ]

// function attachEventListeners(){
//     var cells = document.body.querySelectorAll(".cell")
//     for (var i = 0; i < cells.length; i++){
//         cells[i].addEventListener("click", clickCell)
//     }
// }

// function clickCell(){
//     if (!cellIsFilled(this.id)){
//         if (turn % 2 === 1){
//             var pepe = document.createElement("img")
//             pepe.src = "pepe.png"
//             document.body.querySelector("#" + this.id).style.backgroundImage = "url('pepe.png')"
//             updateGrid(this.id, 1)
//         } else {
//             var trollface = document.createElement("img")
//             trollface.src = "trollface.png"
//             document.body.querySelector("#" + this.id).style.backgroundImage = "url('trollface.png')"
//             updateGrid(this.id, 2)
//         }
//         turn++
//         checkForVictory()
//     } else {
//         alert("Cell is already filled!")
//     }
// }

// function checkForVictory(){
//     // if (turn >= 5){
//     //     for (var i = 0; i < grid.length){
//     //         for (var j = 0; j < grid[i].length; j++){

//     //         }
//     //     }
//     // }
// }

// function cellIsFilled(id){
//     switch(id){
//         case "zero":
//             return grid[0][0];
//         case "one":
//             return grid[0][1];
//         case "two":
//             return grid[0][2];
//         case "three":
//             return grid[1][0];
//         case "four":
//             return grid[1][1];
//         case "five":
//             return grid[1][2];
//         case "six":
//             return grid[2][0];
//         case "seven":
//             return grid[2][1];
//         case "eight":
//             return grid[2][2];
//         default:
//             return null;
//     }
// }

// function updateGrid(id, playerNumber){
//     switch(id){
//         case "zero":
//             grid[0][0] = playerNumber;
//             break;
//         case "one":
//             grid[0][1] = playerNumber;
//             break;
//         case "two":
//             grid[0][2] = playerNumber;
//             break;
//         case "three":
//             grid[1][0] = playerNumber;
//             break;
//         case "four":
//             grid[1][1] = playerNumber;
//             break;
//         case "five":
//             grid[1][2] = playerNumber;
//             break;
//         case "six":
//             grid[2][0] = playerNumber;
//             break;
//         case "seven":
//             grid[2][1] = playerNumber;
//             break;
//         case "eight":
//             grid[2][2] = playerNumber;
//             break;
//         default:
//             break;
//     }
// }
