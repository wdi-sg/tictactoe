
///////////////////////////////////Player 1 and 2 input names
var name1;
var name2;
var currentInput;

var removeInput = function(){
    var removing = document.querySelector(".playInput1");
    document.querySelector(".cover").removeChild(removing);
}

document.querySelector(".playInput1").addEventListener("change", function(event){
    name1 = event.target.value
    removeInput();
    document.querySelector(".playInput2").classList.remove("appear");
})

var removeInput2 = function(){
    var removing = document.querySelector(".playInput2");
    document.querySelector(".cover").removeChild(removing);
}

document.querySelector(".playInput2").addEventListener("change", function(event){
    name2 = event.target.value
    removeInput2();
})
////////////////////
var boxes = document.querySelectorAll(".boxes");

var tic;

var counter = 1;

var boxCount = boxes.innerHTML;
////////////////////////
var changeTic = function(event){
        if (counter % 2 === 1){
               tic = "X"
               changeHead2();
        }
        if(counter % 2 === 0){
               tic = "O"
               changeHead1();
        }
        counter = counter + 1
    event.target.innerHTML = tic;
    console.log("clicked " + tic)
////////////Checking for "X"s
    if(((boxes[0].innerHTML === "X" && boxes[1].innerHTML === "X" && boxes[2].innerHTML === "X") || (boxes[3].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[5].innerHTML === "X") || (boxes[6].innerHTML === "X" && boxes[7].innerHTML === "X" && boxes[8].innerHTML === "X")) || ((boxes[0].innerHTML === "X" && boxes[3].innerHTML === "X" && boxes[6].innerHTML === "X") || (boxes[0].innerHTML === "X" && boxes[3].innerHTML === "X" && boxes[6].innerHTML === "X") || (boxes[1].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[7].innerHTML === "X") || (boxes[2].innerHTML === "X" && boxes[5].innerHTML === "X" && boxes[8].innerHTML === "X")) || ((boxes[0].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[8].innerHTML === "X") || (boxes[2].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[6].innerHTML === "X")) ){
        winMessage1();
        takeAwayBoard();
    } else if(((boxes[0].innerHTML === "O" && boxes[1].innerHTML === "O" && boxes[2].innerHTML === "O") || (boxes[3].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[5].innerHTML === "O") || (boxes[6].innerHTML === "O" && boxes[7].innerHTML === "O" && boxes[8].innerHTML === "O")) || ((boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" && boxes[6].innerHTML === "O") || (boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" && boxes[6].innerHTML === "O") || (boxes[1].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[7].innerHTML === "O") || (boxes[2].innerHTML === "O" && boxes[5].innerHTML === "O" && boxes[8].innerHTML === "O")) || ((boxes[0].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[8].innerHTML === "O") || (boxes[2].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[6].innerHTML === "O")) ){
    winMessage2();
    takeAwayBoard();
    } else if (counter === 10){
        drawMessage();
        takeAwayBoard();
    }
}
//////////////////////
for(i = 0; i < boxes.length; i++){
    var currentBox = boxes[i];
    currentBox.addEventListener("click", changeTic, {once: true});
    }



/* Trying out algorithm
[0, 1, 2],
[3, 4, 5],
[6, 7, 8]


[0 0,0 1,0 2],
[1 0,1 1,1 2],
[2 0,2 1,2 2]

var row = [];
var colum = [];
var diagonal = [];
*/

//////////////////////////Changing Words of Header
var head = document.querySelector("h1");
var changeHead1 = function(){
    if(name1 !== undefined){
        head.innerHTML = name1 + " Moves";
    } else {
            head.innerHTML = "Player 1 Moves"
        }
}

changeHead1();

var changeHead2 = function(){
    if(name2 !== undefined){
        head.innerHTML = name2 + " Moves"
    } else {
            head.innerHTML = "Player 2 Moves"
        }
}
var winMessage1 = function(){
    if(name1 !== undefined){
        head.innerHTML = name1 + " Wins!!"
    } else {
            head.innerHTML = "Player 1 Wins!!"
        }
}
var winMessage2 = function(){
    if(name2 !== undefined){
        head.innerHTML = name2 + " Wins!!"
    } else {
            head.innerHTML = "Player 2 Wins!!"
        }
}
var drawMessage = function(){
    if(name2 !== undefined && name1 !== undefined){
        head.innerHTML = name1 + " and " + name2 + " Draws"
    } else {
            head.innerHTML = "Player 1 and Player 2 Draws"
        }
}
////////////////////////Remove play area if win and show a button to allow game to reload
var playBoard = document.querySelector(".playArea")
var takeAwayBoard = function(){
    playBoard.style.opacity = '0';
    setTimeout(function(){document.querySelector("main").removeChild(playBoard)}, 800);

    button.style.opacity = '1';
    button.innerHTML = "Play Again"
    button.classList.add("replay-button");
    button.setAttribute("onClick", "window.location.reload()")
    setTimeout(function(){document.querySelector("main").appendChild(button)}, 800);
}
////////////////////////Removed the main div first, then if button is clicked, remove the cover and put back the main div
var butt = document.querySelector(".cover");
var button = document.querySelector("button");
var board = document.querySelector("main");

var removeButt = function(){
    butt.style.opacity = '0';
    setTimeout(function(){document.querySelector("body").removeChild(butt)}, 800);
}

var appendBoard = function(){
    document.querySelector("body").appendChild(board);
}

var removeBoard = function(){
    document.querySelector("body").removeChild(board);
}

removeBoard();
button.addEventListener("click", removeButt);
button.addEventListener("click", appendBoard);