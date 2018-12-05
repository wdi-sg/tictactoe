//create Board
var tic = document.querySelectorAll(".tic");
var tac = document.querySelectorAll(".tac");
var tictac = document.querySelectorAll(".tictac");
var numberOfTurns = 0;
var array = [[0,0,0],[0,0,0],[0,0,0]];
var arrayCheck = [];
var startGame = 0;
var name1;
var name2;
var player1 = 0;
var player2 = 0;

var endGame = function(name, XO){
    if(XO === "X"){
        player1 += 1;
    }else{
        player2 += 1;
    }
    alert(name + " has won the game\n" + name1 + ": " + player1 + " wins.\n" + name2 + ": " + player2 + " wins." );
    array = [[0,0,0],[0,0,0],[0,0,0]];
    arrayCheck = [];
    startGame = 0;
    body.appendChild(button);
    tic.forEach(function(tic, num){
        tic.innerHTML = "&nbsp";
    });

};

var arrayPush = function(value, player){
    console.log(value + "AAA")
    if (value === 0 || value === 1 || value === 2){
        firstN = 0
        secondN = value;
    }else if (value === 3 || value === 4 || value === 5){
        firstN = 1
        secondN = value - 3;
    }else if(value === 6 || value === 7 || value === 8){
        firstN = 2
        secondN = value - 6;
    }
    array[firstN][secondN] = player;
};
var check = function(){
    arrayCheck.push(array[0].join(""));
    arrayCheck.push(array[1].join(""));
    arrayCheck.push(array[2].join(""));
    arrayCheck.push(array[0][0] + array[1][0] + array[2][0]);
    arrayCheck.push(array[0][1] + array[1][1] + array[2][1]);
    arrayCheck.push(array[0][2] + array[1][2] + array[2][2]);
    arrayCheck.push(array[1][1] + array[2][0] + array[0][2]);
    arrayCheck.push(array[1][1] + array[0][0] + array[2][2]);
    arrayCheck.forEach(function(i){
        if (arrayCheck.includes("XXX")){
            endGame(name1, "X");
        }
        if (arrayCheck.includes("OOO")){
            endGame(name2, "O");
        }
    });
};

tic.forEach(function(tic, num){

    tic.style.height = "50px";
    tic.style.width = "50px";
    tic.style.border = "2px solid black";
    tic.style.background = "grey";
    tic.style.display = "inline-block";
    tic.innerHTML = "&nbsp";
    tic.style.fontSize = "40px";
    tic.style.textAlign = "center";
    tic.addEventListener("click", function(){
        if(startGame === 1){
            if(numberOfTurns%2 === 0){
                console.log(num + "BBB")
                tic.textContent = "X";
                arrayPush(num, "X");
            }else{
                tic.textContent = "O";
                arrayPush(num, "O");
            }
            numberOfTurns += 1;
            check();
            console.log(array);
        }
        });
});
tac.forEach(function(tac){
    tac.style.width = "170px";
    tac.style.margin = "4px auto";
});
    tictac[0].style.width = "170px";
    tictac[0].style.margin = "4px auto";

//Logic
var body = document.querySelector("body")
var button = document.createElement("button");
button.textContent = "Start Game";
button.addEventListener("click", function(element, num){
    body.removeChild(button);
    startGame = 1;
});
body.appendChild(button);
document.addEventListener("DOMContentLoaded", function(){
    name1 = prompt("Player 1 (X): Enter Your Name");
    name2 = prompt("Player 2 (O): Enter Your Name");
});

