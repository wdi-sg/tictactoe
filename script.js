
///////////////////////////////////
var boxes = document.querySelectorAll(".boxes");

var tic;

var counter = 1;

var currentBox;

var boxCount = boxes.innerHTML;
////////////////////////
var changeTic = function(event){
        if (counter % 2 === 1){
               tic = "X"
        }
        if(counter % 2 === 0){
               tic = "O"
        }
        counter = counter + 1
    event.target.innerHTML = tic;
    console.log("clicked " + tic)
////////////Checking for "X"s
    if(((boxes[0].innerHTML === "X" && boxes[1].innerHTML === "X" && boxes[2].innerHTML === "X") || (boxes[3].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[5].innerHTML === "X") || (boxes[6].innerHTML === "X" && boxes[7].innerHTML === "X" && boxes[8].innerHTML === "X")) || ((boxes[0].innerHTML === "X" && boxes[3].innerHTML === "X" && boxes[6].innerHTML === "X") || (boxes[0].innerHTML === "X" && boxes[3].innerHTML === "X" && boxes[6].innerHTML === "X") || (boxes[1].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[7].innerHTML === "X") || (boxes[2].innerHTML === "X" && boxes[5].innerHTML === "X" && boxes[8].innerHTML === "X")) || ((boxes[0].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[8].innerHTML === "X") || (boxes[2].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[6].innerHTML === "X")) ){
        alert("Player 1 Wins!")
    }
////////////Checking for "O"s
    if(((boxes[0].innerHTML === "O" && boxes[1].innerHTML === "O" && boxes[2].innerHTML === "O") || (boxes[3].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[5].innerHTML === "O") || (boxes[6].innerHTML === "O" && boxes[7].innerHTML === "O" && boxes[8].innerHTML === "O")) || ((boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" && boxes[6].innerHTML === "O") || (boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" && boxes[6].innerHTML === "O") || (boxes[1].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[7].innerHTML === "O") || (boxes[2].innerHTML === "O" && boxes[5].innerHTML === "O" && boxes[8].innerHTML === "O")) || ((boxes[0].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[8].innerHTML === "O") || (boxes[2].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[6].innerHTML === "O")) ){
    alert("Player 2 Wins!")
    }
}
//////////////////////
for(i = 0; i < boxes.length; i++){
    currentBox = boxes[i];
    currentBox.addEventListener("click", changeTic, {once: true});
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