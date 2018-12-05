
var turn="O";
var counter = 0;
var finish = 0;
var startButton = document.querySelector("div");



// function checkWin(input) {
//     var box = document.querySelectorAll("button");
//     console.log(box);
//     if (input == box[0].innerText && box[0].innerText == box[1].innerText && box [1].innerText == box[2].innerText){
//         alert("Game won by player " + input);
//         gameEnd();
//     }
//     else if (input == box[3].innerText && box[3].innerText == box[4].innerText && box [4].innerText == box [5].innerText){
//         alert("Game won by player " + input);
//         gameEnd();
//     }
//      else if (input == box[6].innerText && box[6].innerText == box[7].innerText && box [7].innerText == box [8].innerText){
//         alert("Game won by player " + input);
//         gameEnd();
//     }
//     else if (input == box[0].innerText && box[0].innerText == box[3].innerText && box [3].innerText == box [6].innerText){
//         alert("Game won by player " + input);
//         gameEnd();
//     }
//     else if (input == box[1].innerText && box[1].innerText == box[4].innerText && box [4].innerText == box [7].innerText){
//         alert("Game won by player " + input);
//         gameEnd();
//     }
//     else if (input == box[2].innerText && box[2].innerText == box[5].innerText && box [5].innerText == box [8].innerText){
//         alert("Game won by player " + input);
//         gameEnd();
//     }
//     else if (input == box[0].innerText && box[0].innerText == box[4].innerText && box [4].innerText == box [8].innerText){
//         alert("Game won by player " + input);
//         gameEnd();
//     }
//     else if (input == box[2].innerText && box[2].innerText == box[4].innerText && box [4].innerText == box [6].innerText){
//         alert("Game won by player " + input);
//         gameEnd();
//     }
// }

window.onload = function(){

function checkWin(input) {
    var box = document.querySelectorAll("button");
    if (input == box[0].innerText && box[0].innerText == box[1].innerText && box [1].innerText == box[2].innerText){
        alert("Game won by player " + input);
        gameEnd();
    }
    else if (input == box[3].innerText && box[3].innerText == box[4].innerText && box [4].innerText == box [5].innerText){
        alert("Game won by player " + input);
        gameEnd();
    }
     else if (input == box[6].innerText && box[6].innerText == box[7].innerText && box [7].innerText == box [8].innerText){
        alert("Game won by player " + input);
        gameEnd();
    }
    else if (input == box[0].innerText && box[0].innerText == box[3].innerText && box [3].innerText == box [6].innerText){
        alert("Game won by player " + input);
        gameEnd();
    }
    else if (input == box[1].innerText && box[1].innerText == box[4].innerText && box [4].innerText == box [7].innerText){
        alert("Game won by player " + input);
        gameEnd();
    }
    else if (input == box[2].innerText && box[2].innerText == box[5].innerText && box [5].innerText == box [8].innerText){
        alert("Game won by player " + input);
        gameEnd();
    }
    else if (input == box[0].innerText && box[0].innerText == box[4].innerText && box [4].innerText == box [8].innerText){
        alert("Game won by player " + input);
        gameEnd();
    }
    else if (input == box[2].innerText && box[2].innerText == box[4].innerText && box [4].innerText == box [6].innerText){
        alert("Game won by player " + input);
        gameEnd();
    }
}

function gameEnd(){
var buttons = document.querySelectorAll("button");
for(var i = 0; i<buttons.length; i++){
    buttons[i].removeEventListener("click", turnPrint);
}
var location = document.body;
var name = document.createElement('div');
name.innerText = "Start";
location.appendChild(name);
document.querySelector("div").addEventListener("click",startGame);
}

startButton.addEventListener("click",startGame);

function startGame(){
var startB = document.querySelector("div");
document.body.removeChild(startB);
var buttons  = document.querySelectorAll("button");
for(var i = 0 ; i < buttons.length; i++){
buttons[i].addEventListener("click", turnPrint);
buttons[i].innerText = "";
}
}


var turnPrint = function(){
if(this.innerText.length===0){
    this.innerText = turn;
    turnGenerate();
}
}


function turnGenerate(){
    if(turn === null|| turn=== 0||turn === "O"){
        checkWin("O");
        turn = "X"
    }else{
     checkWin("X");
        turn = "O";
    }
}

};
// function checkFinish(){
//     buttons = document.querySelectorAll("button");
// for(var i = 0 ; i<buttons.length;i++){
//     if (buttons[i].innerText!=="X"||buttons[i].innerText!=="O"){
//         finish = finish +1;
//     }
// }



// if (finish === 0){
//     alert("Game over(Draw)");
// }
// }