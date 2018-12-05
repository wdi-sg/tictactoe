//create Board
//create Board VAR
var boardDiv = [];
var tictac = document.createElement('div');
var button = document.createElement('button');
var header = document.createElement('header');
var footer = document.createElement('footer');
var body = document.querySelector("body");
var numberOfTurns = 0;
var startGame = "n";

//Logic VAR
var boardGridNo = 0;
var userActionsX = [];
var userActionsO = [];
var acrossBase = [];
var downBase = [];
var diagonalLeft = [];
var diagonalRight = [];
var counter = 0;


while(boardGridNo < 3 || boardGridNo > 7){
    boardGridNo = prompt("How BIG of a board do you NNNNNNEEEED!");
}
for(var i = 0; i < Math.pow(boardGridNo, 2); i++){
    boardDiv.push(document.createElement('div'));
}

//winCondition
//make arrays of numbers to start iterating on
var makeBases = function(){
    for (var i = 0; i < boardGridNo; i++){
        acrossBase.push(0 + (boardGridNo * (i)));
        downBase.push(0 + i);
    }
    diagonalRight.push(boardGridNo - 1);
    diagonalLeft.push(0);
    console.log("acrossBase " + acrossBase);
    console.log("downBase " + downBase);
    console.log("diagonalRight " + diagonalRight);
};
//win reset
// var reset = function(){
//     boardGridNo = 0;
//     userActionsX = [];
//     userActionsO = [];
//     counter = 0;
//     numberOfTurns = 0;
//     boardDiv = [];
//     footer.appendChild(button);
//     while(boardGridNo < 3 || boardGridNo > 7){
//     boardGridNo = prompt("How BIG of a board do you NNNNNNEEEED!");
//     tic();
// }
// };
var win = function(){
    startGame = "n";
    boardDiv.forEach(function(tic, num){
        tic.innerText = "RESTART";
        tic.style.fontSize = "30px";
        tic.style.background = "rgb(214, 72, 124)";
        // setTimeout(function(){
        //     addEventListener("click", reset);
        // }, 100);
    });
};

///check all numbers that might be in a row with said base
var baseIteration = function(baseType, ifCondition, user){
    console.log("BASE TYPE: " + baseType + " and ifCondition: " + ifCondition + " user: " + userActionsX);
    baseType.forEach(function(base, num){               //1st level for each base
        counter = 0;
        console.log("BASE: " + base);
        for(var i = 0; i < boardGridNo; i++) {       //2nd level +1+1
            console.log("i: " + i + " base: " + base + " num: " + num + " Counter: "+counter)
            console.log((base + (parseInt(ifCondition) * i )));
            if(user.includes(base + (parseInt(ifCondition) * i ))) {
                counter += 1;
                console.log("CONDITION FULFULLIED Counter +1: " + counter);
            }
        }
        if(counter === parseInt(boardGridNo)){
            win()
        }
    });
};

var callIteration = function(user) {
    var ifCondition = [1, parseInt(boardGridNo), parseInt(boardGridNo) - 1, parseInt(boardGridNo) + 1]
    console.log(ifCondition)
    baseIteration(acrossBase, ifCondition[0], user);
    baseIteration(downBase, ifCondition[1], user);
    baseIteration(diagonalRight, ifCondition[2], user);
    baseIteration(diagonalLeft, ifCondition[3], user);
}



//CSS EDITS
var tic = function(){
boardDiv.forEach(function(tic, num){
    tic.style.width = ((600/boardGridNo)-(2.5*boardGridNo+1)) + "px";
    tic.style.height = ((600/boardGridNo)-(2.5*boardGridNo+1)) + "px";
    tic.style.border = "2px solid black";
    tic.style.margin = "2px 2px";
    tic.style.display = "inline-block";
    tic.style.textAlign = "center";
    tic.style.background = "grey";
    tic.style.borderRadius = "20px";
    tic.style.fontSize = ((500/boardGridNo)-(2.5*boardGridNo+1)) + "px"
    tic.innerHTML = "&nbsp";
    tictac.appendChild(tic);
    tic.addEventListener("click", function(){
        if(startGame === "y"){
            if(numberOfTurns%2 === 0){
                tic.textContent = "X";
                userActionsX.push(num);
                callIteration(userActionsX);
            }else{
                tic.textContent = "O";
                userActionsO.push(num);
                callIteration(userActionsO);
            }
            numberOfTurns += 1;
        }
    });
});
};
//extra CSS alterations
tictac.style.width = "600px";
tictac.style.margin = "0 auto";

header.style.height = "100px";
header.style.background = "rgb(140, 97, 226)"
header.textContent = "TIC TAC TOE";
header.style.textAlign = "center";
header.style.fontSize = "80px";
header.style.color = "rgb(210, 196, 239)";
body.style.background = "rgb(192, 181, 229)";
body.style.margin = "0";
footer.style.height = "300px";

button.style.display = "inline-block";
button.style.position = "relative";
button.style.width = "100px";
button.style.height = "50px";
button.style.border = "2px solid black";
button.style.margin = "20px 0 0 100px";
button.style.borderRadius = "20px";
button.style.background = "rgb(178, 156, 252)";
button.fontSize = "80px";
button.textContent = "START GAME";
button.addEventListener("click", function(){
    startGame = "y"
    footer.removeChild(button);
});

body.appendChild(tictac);
body.insertBefore(header, tictac);
body.appendChild(footer);
footer.appendChild(button);

//Calls
makeBases();
tic();