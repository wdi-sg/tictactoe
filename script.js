// var player1Icon = prompt("what icon would you like to use?")
var player1Icon = "@";
var player2Icon = "%";

var turnCounter = 1;
var button = document.getElementsByTagName("button");

var clearBoard = function (){
    turnCounter = 1;
    for (var i = 0; i<9; i++){
        button[i].innerText= "";
    }
}

//win condition
var possibilities = ["A","B","C",1,2,3]

var checkWin = function (){
    for (var i = 0; i<possibilities.length; i++){
        var placeholder = document.getElementsByClassName(possibilities[i]);
        if((placeholder[0].innerText === player1Icon && placeholder[1].innerText === player1Icon && placeholder[2].innerText === player1Icon) || (document.getElementsByClassName("A")[0].innerText === player1Icon && document.getElementsByClassName("B")[1].innerText === player1Icon && document.getElementsByClassName("C")[2].innerText === player1Icon) || (document.getElementsByClassName("A")[2].innerText === player1Icon  && document.getElementsByClassName("B")[1].innerText === player1Icon && document.getElementsByClassName("C")[0].innerText === player1Icon)) {
            alert("Player 1 wins!!");
            clearBoard();
        } else if ((placeholder[0].innerText === player2Icon && placeholder[1].innerText === player2Icon && placeholder[2].innerText === player2Icon) || (document.getElementsByClassName("A")[0].innerText === player2Icon  && document.getElementsByClassName("B")[1].innerText === player2Icon && document.getElementsByClassName("C")[2].innerText === player2Icon)|| (document.getElementsByClassName("A")[2].innerText === player2Icon  && document.getElementsByClassName("B")[1].innerText === player2Icon && document.getElementsByClassName("C")[0].innerText === player2Icon)) {
            alert("Player 2 wins!!");
            clearBoard();
        }
    }
}

//game logic
for (var i=0 ; i<9 ; i++) {
    button[i].addEventListener("click",function(){
        var playerClick = this.innerText;
        if (playerClick == "" && turnCounter % 2 === 1) {
            this.innerText = player1Icon;
            turnCounter ++;
            checkWin();
        } else if (playerClick == "" && turnCounter % 2 === 0) {
            this.innerText = player2Icon ;
            turnCounter ++;
            checkWin();
        }
    })
}