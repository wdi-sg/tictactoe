//createBoard
var boardDiv = [];
var tictac = document.createElement('div');
var button = document.createElement('button');
var header = document.createElement('header');
var footer = document.createElement('footer');
var body = document.querySelector("body");
var numberOfTurns = 0;
var startGame = "n";

while(boardGridNo < 3 || boardGridNo > 7){
     boardGridNo = prompt("How BIG of a board do you NNNNNNEEEED!");
}


for(var i = 0; i < Math.pow(boardGridNo, 2); i++){
    boardDiv.push(document.createElement('div'));
}

boardDiv.forEach(function(tic, num){
    tic.style.width = ((600/boardGridNo)-(2.5*boardGridNo+1)) + "px";
    tic.style.height = ((600/boardGridNo)-(2.5*boardGridNo+1)) + "px";
    tic.style.border = "2px solid black";
    tic.style.margin = "2px 2px";
    tic.style.display = "inline-block";
    tic.style.textAlign = "center";
    tic.style.background = "grey";
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
//extra CSS alterations
tictac.style.width = "600px";
tictac.style.margin = "0 auto";

header.style.height = "100px";
body.style.background = "rgb(192, 181, 229)";
footer.style.height = "300px";

button.style.width = "100px";
button.style.height = "50px";
button.style.borderRadius = "20px";
button.style.background = "rgb(178, 156, 252)";
button.fontSize = "80px";
button.textContent = "START GAME";
button.addEventListener("click", function(){
    startGame = "y"
    header.removeChild(button);
});

body.appendChild(tictac);
body.insertBefore(header, tictac);
body.appendChild(footer);
header.appendChild(button);
