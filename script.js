
//Declare global variables
var gameboard = [ 0, 0, 0,
                  0, 0, 0,
                  0, 0, 0]
var turn = 0;
var game = document.getElementsByClassName('box');
var boxes = document.getElementsByClassName('box');

//var playerOScore = document.getElementById('playerO');
//var playerXScore = document.getElementById('playerX');

function restartGame() {
     for (var i = 0; i < 9; i++) {
        game[i].textContent = [];
    }
    addBoxClick();
}

function addBoxClick(){
    for(var i = 0; i < boxes.length; i++){
        game[i].addEventListener('click', clickEvent)
    }
}

addBoxClick();

function clickEvent(event){

    if (turn%2 != 0){
        this.textContent = "O";
            this.removeEventListener('click', clickEvent);
                winResult();
    }else if(turn%2 == 0){
        this.textContent = "X";
            this.removeEventListener('click', clickEvent);
                winResult();
    }
turn++;
}

function winResult (pos){
    var pos = [];

    for (var i = 0; i < game.length; i++){
        pos[i] = game[i].textContent;
    }
//winning conditions
    var board = [
                  pos[0]+pos[1]+pos[2],
                  pos[3]+pos[4]+pos[5],
                  pos[6]+pos[7]+pos[8],
                  pos[0]+pos[3]+pos[6],
                  pos[1]+pos[4]+pos[7],
                  pos[2]+pos[5]+pos[8],
                  pos[0]+pos[4]+pos[8],
                  pos[2]+pos[4]+pos[6],
                ]

    for (var i = 0; i < board.length; i++){
        if(board[i]==="OOO"){
            alert("Player O wins!");
            result = "player O wins";
            restartGame();
            break;
        }else if(board[i]==="XXX"){
            alert("Player X wins!");
            result = "player X wins";
            restartGame();
            break;
        }
    }
    return restartGame;
}

var restart = document.getElementsByTagName('button');
restart[0].addEventListener('click',restartGame);