console.log("hello script js");

let ticTacToe = [];
console.log(ticTacToe);

ticTacToe = document.querySelectorAll(".game-square");

//Constant variables

var board = [
["", "", ""],
["", "", ""],
["", "", ""]
];

const player1 = "X";
const player2 = "O";
let countTurns = 0;
console.log(ticTacToe);


var runGame = function (){
    //Each time function runs, increase countTurns
    countTurns += 1;
    console.log(countTurns);
    var target = event.target;
    console.log(target);
        if(countTurns % 2 !==0 && countTurns < 10){
            var result = player1;
            target.innerHTML = result;
            console.log(player1);
        }
        else if (countTurns % 2 ==0 && countTurns < 10){
            var result = player2;
            target.innerHTML = result;
            console.log(player2);
        }
        else {
            alert("Please refresh your page to start a new game.");
            }
    return result;
    console.log(result)
}

for(var i = 0; i < ticTacToe.length; i++){
ticTacToe[i].addEventListener("click", runGame);
}