console.log("hello script js");

var board = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
var playerXMoves = [null]
var playerOMoves = [null]
var winningChances = {
    game: "tictactoe",
    first: [[1,2,3],[1,4,7],[1,5,9]],
    second: [[1,2,3],[2,5,6]],
    third: [[1,2,3],[3,5,7],[3,6,9]],

    fourth: [[1,4,7],[4,5,6]],
    fifth: [[1,5,9],[3,5,7],[2,5,8],[4,5,6]],
    sixth: [[4,5,6],[3,6,9]],
    seventh: [[1,4,7],[3,5,7],[7,8,9]],
    eighth: [[2,5,6],[7,8,9]],
    ninth: [[1,5,9],[3,6,9],[7,8,9]]

}


var isGameRunning = false;
var isBoxChecked = null;
var playerX = true;

function buttonAddEvent() {
  var x = document.querySelectorAll("button");
  var i;
  for (i = 0; i < x.length; i++) {
    console.log("add")
    x[i].addEventListener('click', check)
  }
}

var saySomething = function(event){
    console.log("sleep")
    alert("YES!");
}


var check = function(event){
    if(playerX){
        drawEx();
    } else{
        drawOh();
    }
}

var drawEx = function(){

    var b = event.target;
    b.innerHTML = "X";
    playerXMoves.push(b.value);
    console.log(playerXMoves);

    b.disabled = true;
    playerX =false;
}
var drawOh = function(){

    var b = event.target;
    b.innerHTML = "O";
    playerOMoves.push(b.value);
    console.log(playerOMoves);

    b.disabled = true;
    playerX = true;
}