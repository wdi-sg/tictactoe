// - create a very simple version of the game that users can play. When a user clicks on the first the empty square it turns to an X. Then the turn after it turns to an O. Then switches back, etc.
// - The simplest implementation of this game is simply 9 buttons or divs with click events attached to each of them. Clicking on a square just changes the text of the element to X or O. After 9 moves are played the game doesn't do anything else. If the users want to continue playing they can refresh the page.
// - The first version of the game can just be a grid - no need to create the tictactoe board faithfully.
// - When the user clicks each button it sets a global variable that holds the current player. (starts as a null value when the game loads, is x after the first turn, then switches between players)
// ```
// if player turn is null or player turn is o
//   player turn is x
// else
//   player turn is o

// var box1 = document.querySelector('#box1');
// var box2 = document.querySelector('#box2');
// var box3 = document.querySelector('#box3');
// var box4 = document.querySelector('#box4');
// var box5 = document.querySelector('#box5');
// var box6 = document.querySelector('#box6');
// var box7 = document.querySelector('#box7');
// var box8 = document.querySelector('#box8');
// var box9 = document.querySelector('#box9');

// var x1Img = document.querySelector(".x1");
// var o1Img = document.querySelector(".o1");

var player1 = prompt("Player 1 please enter your name.");
var player2 = prompt("Player 2 please enter your name.");

var point1 = 0;
var point2 = 0;

window.onload = function(){
var turn = 0; // For player turn. Player 1 is X, Player 2 is O
var start = false; // Become true in order to activate to start game

var activate = function(){
    var startBtnRm = document.querySelector("button");
    document.body.removeChild(startBtnRm);
    return start = true;
}

var resetBtnRe = function(){
    location.reload();
}

var startBtnFunc = function(){
    var startBtn = document.createElement("button");
    startBtn.setAttribute("class", "startBtn")
    startBtn.innerHTML = "Start";
    document.body.appendChild(startBtn);
    startBtn.addEventListener('click', activate);
}

var resetBtn = function(){
    var resetBtn = document.createElement("button");
    resetBtn.setAttribute("class", "startBtn")
    resetBtn.innerHTML = "Reset";
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener('click', resetBtnRe);
}

var player1Score = function(){
    var player1Sc = document.createElement("p");
    player1Sc.setAttribute("class", "player1")
    player1Sc.innerHTML = player1 + ": " + point1;
    document.body.appendChild(player1Sc);
}

var player2Score = function(){
    var player2Sc = document.createElement("p");
    player2Sc.setAttribute("class", "player2")
    player2Sc.innerHTML = player2 + ": " + point2;
    document.body.appendChild(player2Sc);
}

startBtnFunc();
resetBtn();
player1Score();
player2Score();

    var playerTurn = function(){
    if(start === true && turn % 2 === 0 && !(this.innerHTML === "X" || this.innerHTML === "O")){
        this.addEventListener('click', turnX);
    }
    else if(start === true && turn % 2 === 1 && !(this.innerHTML === "X" || this.innerHTML === "O")){
        this.addEventListener('click', turnO);
    }
    }

    for(var i = 0; i < 9; i++){
    var box = document.createElement("div");
    box.setAttribute("class", "box");
    var emptyBox = document.body.appendChild(box);
    emptyBox.addEventListener('click', playerTurn);
    emptyBox.addEventListener('click', checkWin);
    // var divBoxArr = document.querySelectorAll("div");
    // for(var a in divBoxArr){
    //     var boxArr = divBoxArr[a];
    // }
    var turnX = function(){
        this.innerHTML = "X";
        turn++;
        }
    var turnO = function(){
        this.innerHTML = "O";
        turn++;
        }

    var checkWin = function(){
        var allBox = document.querySelectorAll('.box');

        if((allBox[0].innerHTML === "X" && allBox[1].innerHTML === "X" && allBox[2].innerHTML === "X") || (allBox[0].innerHTML === "X" && allBox[3].innerHTML === "X" && allBox[6].innerHTML === "X") || (allBox[0].innerHTML === "X" && allBox[4].innerHTML === "X" && allBox[8].innerHTML === "X") || (allBox[1].innerHTML === "X" && allBox[4].innerHTML === "X" && allBox[7].innerHTML === "X") || (allBox[2].innerHTML === "X" && allBox[5].innerHTML === "X" && allBox[8].innerHTML === "X") || (allBox[2].innerHTML === "X" && allBox[4].innerHTML === "X" && allBox[6].innerHTML === "X")){
            xWin(this);
        }
        else if((allBox[0].innerHTML === "O" && allBox[1].innerHTML === "O" && allBox[2].innerHTML === "O") || (allBox[0].innerHTML === "O" && allBox[3].innerHTML === "O" && allBox[6].innerHTML === "O") || (allBox[0].innerHTML === "O" && allBox[4].innerHTML === "O" && allBox[8].innerHTML === "O") || (allBox[1].innerHTML === "O" && allBox[4].innerHTML === "O" && allBox[7].innerHTML === "O") || (allBox[2].innerHTML === "O" && allBox[5].innerHTML === "O" && allBox[8].innerHTML === "O") || (allBox[2].innerHTML === "O" && allBox[4].innerHTML === "O" && allBox[6].innerHTML === "O")){
            oWin(this);
        }
        // else{
        //     alert("Draw");
        //     draw();
        // }
    }
}

    var xWin = function(end){
        alert("Congratulation X won");
        end.removeEventListener('click', playerTurn);
        end.removeEventListener('click', turnX);
        end.removeEventListener('click', turnO);
        startBtnFunc();
    }
    var oWin = function(end){
        alert("Congratulation O won");
        end.removeEventListener('click', playerTurn);
        end.removeEventListener('click', turnO);
        end.removeEventListener('click', turnX);
        startBtnFunc();
    }

}
    // var draw = function(){
    //     var drawBtn = document.createElement("button");
    //     drawBtn.setAttribute("class", "drawbtn");
    //     var drawBtnBox = document.body.appendChild(drawBtn);
    // }


// var turnX = function(){
//     var x1Img = document.createElement("img");
//     x1Img.src = "images/x.png";
//     box.appendChild(x1Img);
//     box.removeEventListener('click', turnX);
// }

// var turn2X = function(){
//     var x2Img = document.createElement("img");
//     x2Img.src = "images/x.png";
//     box2.appendChild(x2Img);
//     box2.removeEventListener('click', turn2X);
// }

// var turnO = function(){
//     var o1Img = document.createElement("img");
//     o1Img.src = "images/o.png";
//     box1.appendChild(o1Img);
//     box1.removeEventListener('click', turnO);
// }

// var turn2O = function(){
//     var o2Img = document.createElement("img");
//     o2Img.src = "images/o.png";
//     box2.appendChild(o2Img);
//     box2.removeEventListener('click', turn2O);
// }

// var turnX = function(){
//     if(x1Img.style.visibility === "hidden"){
//         x1Img.style.visibility = "visible";
//     }
//     else{
//         x1Img.style.visibility = "hidden";
//     }
//     // document.querySelector(".x1").style.visibility = "visible";
// }

// var turnO = function(){
//     if(o1Img.style.visibility === "hidden"){
//         o1Img.style.visibility = "visible";
//     }
//     else{
//         o1Img.style.visibility = "hidden";
//     }
// }