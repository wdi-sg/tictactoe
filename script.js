
//Declare global variables
var gameboard = [ 0, 0, 0,
                  0, 0, 0,
                  0, 0, 0]
var game = document.getElementsByClassName('box');

var playerOScore = document.getElementById('Oscore');
var playerXScore = document.getElementById('Xscore');
//var scoreO = playerOScore.textContent;
//var scoreX = playerXScore.textContent;


//var result = "";

function score(result){

    if(result === "player X wins"){
        playerXScore.textContent =+ 1;
    }else if (result === "player O wins"){
        playerOScore.textContent =+ 1
    }
}

function replay () {
     for (var i = 0; i < game.length; i++) {
        game[i].textContent = [];
    }
}

    for (var i= 0; i < game.length; i++){
        var turn = 0;

        game[i].onclick = function(){
            if (turn%2 ===0){
                console.log(turn);
                this.textContent = "X";
                this.backgroundColor = "red";
                    winResult();
                    turn++;
            } else {this.textContent = "O";
                    this.backgroundColor = "blue";
                    winResult();
                    turn++;
            }
        }
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
            //playerOScore.textContent =+ 1
            //return score
            return replay();

        }else if(board[i]==="XXX"){
            alert("Player X wins!");
            result = "player X wins";

            return replay();
            //return playerXScore.textContent =+ 1
        }
    }
}
