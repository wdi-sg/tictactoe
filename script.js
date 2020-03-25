var players=[];
player[0] = "player 1";
player[1] = "player 2";
var signs=["X","O"];
var takeTurn = 0;
var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];


function play(event){
    if (event.innerText !== "X" && event.innerText !== "O"){
    event.innerText = signs[takeTurn];
    togglePlayer();
};
};

function togglePlayer(){
    if(takeTurn === 0) {
    takeTurn = 1;
} else {
    takeTurn = 0
};
};

var gameStatus = []
function gameStatus(){
    if()}