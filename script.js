console.log("HELLO")

var squares = document.querySelectorAll(".gamesquare");
var counter= 1;
var symbol;
var player1 = document.querySelector("p1");
var player2 = document.querySelector("p2");

var ticked = function(event){
    if(counter % 2 === 1){
        symbol = "X";
    }
    if(counter % 2 === 0){
        symbol ="O";
    }
    counter ++;
    event.target.innerHTML = symbol;
    console.log(symbol)

        if( squares[0].innerHTML === "X" && squares[1].innerHTML === "X" && squares[2].innerHTML === "X" || squares[3].innerHTML === "X" && squares[4].innerHTML ==="X" && squares[5].innerHTML ==="X" || squares[6].innerHTML === "X" && squares[7].innerHTML === "X" && squares[8].innerHTML ==="X" || squares[0].innerHTML ==="X" && squares[3].innerHTML ==="X" && squares[6].innerHTML === "X" || squares[1].innerHTML === "X" && squares[4].innerHTML ==="X" && squares[7].innerHTML ==="X" || squares[2].innerHTML ==="X" && squares[5].innerHTML ==="X" && squares[8].innerHTML === "X" || squares[0].innerHTML ==="X" && squares[4].innerHTML ==="X" && squares[8].innerHTML === "X" || squares[2].innerHTML ==="X" && squares[4].innerHTML ==="X" && squares[6].innerHTML ==="X") {
            prompt("Congrats!! You won !!");
         }
         else if( squares[0].innerHTML === "O" && squares[1].innerHTML === "O" && squares[2].innerHTML === "O" || squares[3].innerHTML === "O" && squares[4].innerHTML ==="O" && squares[5].innerHTML ==="O" || squares[6].innerHTML === "O" && squares[7].innerHTML === "O" && squares[8].innerHTML ==="O" || squares[0].innerHTML ==="O" && squares[3].innerHTML ==="O" && squares[6].innerHTML === "O" || squares[1].innerHTML === "O" && squares[4].innerHTML ==="O" && squares[7].innerHTML ==="O" || squares[2].innerHTML ==="O" && squares[5].innerHTML ==="O" && squares[8].innerHTML === "O" || squares[0].innerHTML ==="O" && squares[4].innerHTML ==="O" && squares[8].innerHTML === "O" || squares[2].innerHTML ==="O" && squares[4].innerHTML ==="O" && squares[6].innerHTML ==="O") {
            prompt("Congrats!! You won !!");
        }
        if(player1 > 0){
            var p
        }
}
for(i = 0; i < squares.length; i ++){
        var currentGameSquare = squares[i];
        currentGameSquare.addEventListener("click", ticked, {once: true});
}