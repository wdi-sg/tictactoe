//initialise initial body elements.

var mainDiv = document.createElement("div");
mainDiv.setAttribute("class","board");
mainDiv.setAttribute("id","board");
for(let i=0;i<9;i++){

    var cell = document.createElement("div");
    cell.setAttribute("class","cell");
    cell.setAttribute("data-cell","");
    mainDiv.appendChild(cell);
}

document.body.appendChild(mainDiv);

var winningMessage = document.createElement("div");
winningMessage.setAttribute("class","winning-message");
winningMessage.setAttribute("id","winningMessage");
var winningMessageText = document.createElement("div");
winningMessageText.setAttribute("data-winning-message-text","")
winningMessageText.innerText = "X wins!"
var button = document.createElement("button");
button.setAttribute("id","restartButton");
button.innerText = "Restart";

winningMessage.appendChild(winningMessageText);
winningMessage.appendChild(button);
document.body.appendChild(winningMessage);


//player objects

const p1 ={
    name: "",
    score:0,
    choice:"",
    option:""
}, p2 = {
    name: "",
    score:0,
    choice:"",
    option:""
}
var playerDiv = document.createElement("div");
playerDiv.setAttribute("id","playerDiv");

var player1Div = document.createElement("div");
player1Div.setAttribute("id","player1Div");
player1Div.innerText = "player 1 ";

var player2Div = document.createElement("div");
player2Div.setAttribute("id","player2Div");
player2Div.innerText = "player 2 ";

var p1name = document.createElement("input");
p1name.setAttribute("id","p1name");

var p2name = document.createElement("input");
p2name.setAttribute("id","p2name");

var radioCircle = document.createElement("input");
var labelCircle = document.createElement("label");
labelCircle.setAttribute("for","radioCircle");
labelCircle.innerText = "Circle";
radioCircle.setAttribute("type","radio");
radioCircle.setAttribute("id","radioCircle");
radioCircle.setAttribute("name","choice");
var radioX = document.createElement("input");
radioX.setAttribute("type","radio");
radioX.setAttribute("id","radioX");
radioX.setAttribute("name","choice")
var labelX = document.createElement("label");
labelX.setAttribute("for","radioX");
labelX.innerText = "X";
var startButton = document.createElement("button");
    startButton.setAttribute("id","start");
    startButton.innerText = "Start Game";


player1Div.appendChild(p1name);
player2Div.appendChild(p2name);
playerDiv.appendChild(player1Div);
playerDiv.appendChild(player2Div);
playerDiv.appendChild(radioCircle);
playerDiv.appendChild(labelCircle);
playerDiv.appendChild(radioX);
playerDiv.appendChild(labelX);

playerDiv.appendChild(startButton);
document.body.appendChild(playerDiv);

//scoreDiv

var scoreDiv = document.createElement("div");
scoreDiv.setAttribute("id","scoreDiv");
var p1label = document.createElement("div");
p1label.setAttribute("id","p1label");
var p2label = document.createElement("div");
p2label.setAttribute("id","p2label");
var p1score = document.createElement("div");
p1score.setAttribute("id","p1score");
var p2score = document.createElement("div");
p2score.setAttribute("id","p2score");
var p1choice = document.createElement("div");
p1choice.setAttribute("id","p1choice");
var p2choice = document.createElement("div");
p2choice.setAttribute("id","p2choice");

scoreDiv.appendChild(p1label);
scoreDiv.appendChild(p1score);
scoreDiv.appendChild(p1choice);
scoreDiv.appendChild(p2label);
scoreDiv.appendChild(p2score);
scoreDiv.appendChild(p2choice);
document.body.appendChild(scoreDiv);


document.querySelector("#radioCircle").addEventListener("click",function(){
    p1.choice = !circleTurn;
    p1.option = "O";
    p2.choice = circleTurn;
    p2.option = "X";
});
document.querySelector("#radioX").addEventListener("click",function(){
    p1.choice = circleTurn;
    p1.option = "X";
    p2.choice = !circleTurn;
    p2.option = "O";
});


document.querySelector("#start").addEventListener("click",function(){
    var p1namee = document.querySelector("#p1name").value;
    p1.name = p1namee;
    document.querySelector("#p1label").innerText = `${p1.name}`;
    var p2namee = document.querySelector("#p2name").value;
    p2.name = p2namee;
    document.querySelector("#p2label").innerText = `${p2.name}`;

    document.querySelector("#p1score").innerText = `${p1.score}`;
    document.querySelector("#p2score").innerText = `${p2.score}`;

    document.querySelector("#p1choice").innerText = `${p1.option}`;
     document.querySelector("#p2choice").innerText = `${p2.option}`;
     timeleft=10;
     startTimer();
})

// timer:

var timer = document.createElement("div");
timer.setAttribute("id","countdown");
document.body.appendChild(timer);

var timeleft = 999;
function startTimer(){
    var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
    circleTurn ? p1.choice ? winningMessageTextElement.innerText =`${p1.name} time out!` : winningMessageTextElement.innerText =`${p2.name} time out! ` : p1.choice ? winningMessageTextElement.innerText =`${p2.name} time out!` : winningMessageTextElement.innerText =`${p1.name} time out!`;
    winningMessageElement.classList.add("show");
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
};





//how to switch turns? we use class to define/switch
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
let circleTurn; //lets use this to let user select x or o.
const board = document.getElementById("board"); //our board / maindiv selector.

const restartButton = document.getElementById("restartButton");

const winningMessageTextElement = document.querySelector("[data-winning-message-text]");

const winningMessageElement = document.getElementById("winningMessage");

// select all cells using attribute selector.
const cellElements = document.querySelectorAll("[data-cell");

const WINNING_COMBINATIONS = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

startGame(); //to initialize everything remember to invoke the function!!!


restartButton.addEventListener("click",startGame);

function startGame(){
circleTurn = false; //we can use a function to define later.
cellElements.forEach(cell=>{
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS); //remove both x and o class to empty the cell.
    cell.removeEventListener("click",handleClick);
    //important to remove the event listener cause remember we only allow it to fire the event listener once. so if its not removed, you wont be able to mark the cell even if it contains neither x or o class.
    cell.addEventListener("click", handleClick,{once:true}) //once:true ensures that it will only call the function on the first click. further clicks will not do anything.
});
setBoardHoverClass();
//remove the winning message
winningMessageElement.classList.remove("show");

} // to initialize starting state of game.


function handleClick(event){
    // 4 objectives:
        // 1.place o or x mark.
        // 2.check if there is a winner
        // 3.check if its a draw
        // 4.switch turns
const cell = event.target;
const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
placeMark(cell,currentClass);
if(checkWin(currentClass)){
    endGame(false);}
 else if(isDraw()){
    endGame(true);
} else{
swapTurns();
setBoardHoverClass();
timeleft=10;
}
}

function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText = "Draw!"
    } else {
if(circleTurn){
if(p1.choice) {winningMessageTextElement.innerText =`${p1.name} wins!`
    document.querySelector("#p1score").innerText = `${p1.score+=1}`;
}
else { winningMessageTextElement.innerText =`${p2.name} wins!`
document.querySelector("#p2score").innerText = `${p2.score+=1}`;
}
} else{
if(!p1.choice) {winningMessageTextElement.innerText =`${p1.name} wins!`
document.querySelector("#p1score").innerText = `${p1.score+=1}`}
else{ winningMessageTextElement.innerText =`${p2.name} wins!`
document.querySelector("#p2score").innerText = `${p2.score+=1}`;}
}
}
    winningMessageElement.classList.add("show");
}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
                cell.classList.contains(CIRCLE_CLASS)
    })
} //check if all cells are already marked but if no winners. since cellElements is technically not an array, we cannot access the .every function. Hence we have to use a spread operator to destructure it into an array.


// rmb to mark either x or c. we can just add the class as defined above.
function placeMark(cell,currentClass){
    cell.classList.add(currentClass);
}
// to swap turns just switch the state of circleTurn
function swapTurns(){
    circleTurn = !circleTurn;
}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn){
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
} //initialize the hover effect whenever a cell is marked.

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combi=>{
        return combi.every(element=>{
            return cellElements[element].classList.contains(currentClass);
        })
    })
}//function to check for win condition. How it works is, we scan the current class be it x or o in every single cell via array indexing for their location in the cellElements nodelist. then if there exist a combination which all contains either class x or class o, means there is one winning combination. this is what .every does. Next, .some ensures that if at least one combination in the winning combination array contains all class x or o, there is a winner.