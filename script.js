console.log("hello world");

// var clearInput = function() {

// }

var player1 = "X";
var player2 = "O";
var playerTurn = 0;
var squareArray = document.querySelectorAll(".game-square")
console.log(squareArray)

for ( i = 0 ; i < squareArray.length ; i ++ )
    squareArray[i].addEventListener('click', function(event){
        squareSelected(event);
    });

var squareSelected = function (event) {
        if ( playerTurn == 0 ) {
            event.target.innerText = player1;
            playerTurn = 1;
            console.log(playerTurn);
        }

        else {
            event.target.innerText = player2;
            playerTurn = 0;
            console.log(playerTurn);
        }
    }

console.log(playerTurn);