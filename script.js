var players=[];
var marking=["X","O"];
player[0] = "player 1";
player[1] = "player 2";
var takeTurn = 0;

function play(event){
    if (event.innerText !== "X" && event.innerText !== "O"){
    event.innerText = marking[takeTurn];
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