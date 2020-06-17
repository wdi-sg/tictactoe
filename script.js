 let turn = "X";
 if(Math.ceil(Math.random()*2)>1){
     turn = "O";
 }
 let winner = null;
  document.querySelector("table").style.visibility = "hidden";
  document.querySelector("#message").innerText = turn + " gets to start.";


let squares = document.querySelectorAll(".game-square");

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if(winner !== null){
        document.querySelector("#message").innerText = winner + " won the game."
    }  else if (squares[i].innerHTML === "") {
      squares[i].innerHTML = turn;
      switchTurn();
    } else {
      alert("The square was already being occupied");
    }
  });
}

function switchTurn() {
    if(checkWinner(turn)){
        document.querySelector("#message").innerText = turn + " won!!";
        winner = turn;
    } else if (turn === "X") {
        turn = "O";
    document.querySelector("#message").innerText = turn+ " gets to move.";
  } else {
    turn = "X";
    document.querySelector("#message").innerText = turn + " gets to move.";
  }
}
 //check all the win posibilities
 //0 1 2
 //3 4 5
 //6 7 8
 //3 row,3 column,2 diagonal

 //target the square num
function getSquareXO(num){
    return document.querySelector("#square"+num).innerText;
}

 //check if the 3 are all X/O
function checkLine(a,b,c,XO) {
    let result = false;
    if(getSquareXO(a)===XO && getSquareXO(b)===XO && getSquareXO(c)===XO){
        result=true;
    }
    return result;
}

function checkWinner(XO){
    let result = false;
    if(checkLine(0,1,2,XO)||checkLine(3,4,5,XO)||checkLine(6,7,8,XO)||
        checkLine(0,3,6,XO)||checkLine(1,4,7,XO)||checkLine(2,5,8,XO)||
            checkLine(0,4,8,XO)||checkLine(2,4,6,XO)){
                result = true;
            }
            return result;
}