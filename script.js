console.log("hello script js");

//var ticTacToe = [...document.querySelectorAll(".game-square")];

//let button1 = ticTacToe[0];
//let button2 = ticTacToe[1];
//let button3 = ticTacToe[2];
//let button4 = ticTacToe[3];
//let button5 = ticTacToe[4];
//let button6 = ticTacToe[5];
//let button7 = ticTacToe[6];
//let button8 = ticTacToe[7];
//let button9 = ticTacToe[8];

//var board = [
//["", "", ""],
//["", "", ""],
//["", "", ""]
//];

//Constant variables
let player1 = "X";
let player2 = "O";
let countTurns = 0;

//All buttons inside one array
var buttons = ["button1", "button2", "button3", "button4", "button5", "button6", "button7", "button8", "button9"];

//All buttons turned to variables
let button1 = document.getElementsByClassName("button1");
console.log(button1);
let button2 = document.getElementsByClassName("button2");
console.log(button2);
let button3 = document.getElementsByClassName("button3");
console.log(button3);
let button4 = document.getElementsByClassName("button4");
console.log(button4);
let button5 = document.getElementsByClassName("button5");
console.log(button5);
let button6 = document.getElementsByClassName("button6");
console.log(button6);
let button7 = document.getElementsByClassName("button7");
console.log(button7);
let button8 = document.getElementsByClassName("button8");
console.log(button8);
let button9 = document.getElementsByClassName("button9");
console.log(button9);

buttons.addEventListener("click", runGame);

var runGame = function (){
    countTurns += 1;
        if(countTurns % 2 !== 0 && countTurns < 10){
            for(var i = 0; i < ticTacToe.length; i++){
                var res = board[i].value.push("X");
                var result = res;
                }
            }
        else if (countTurns % 2 == 0 && countTurns < 10){
            for(var i = 0; i < ticTacToe.length; i++){
                var res = board[i].value.push("O");
                var result = res;
                }
            }
        else if(countTurns == 10){
            var result = window.alert("Please refresh your page to start a new game.");
            //console.log(refresh);
            //console.log(countTurns);
        }
    return result;
    console.log(result)
}