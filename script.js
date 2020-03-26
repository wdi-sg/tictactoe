console.log("Hello js!");

// if player turn is null or player turn is o
// player turn is x
//   else
//   player turn is o

var playerTurn = "X";

var clickSomething = function(event) {
console.log("Square " + gameSquareLocation.indexOf(this));


if (playerTurn === "X") {
    playerTurn = "O";

} else if (playerTurn === "O" ) {
        playerTurn = "X";
}

var boxClicked = event.target;
    boxClicked.innerText = playerTurn;

    winningConditions();

};

var gameSquareLocation = [];

var eachBox = document.querySelectorAll('.game-square')
    for (var i = 0; i < eachBox.length; i++){
        gameSquareLocation.push(eachBox[i]);
        eachBox[i].addEventListener('click', clickSomething, { once: true });
}
;

// var board = 0;

// let winningParameter = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

var winningConditions = function() {

if (gameSquareLocation[0].innerHTML === "X" &&
    gameSquareLocation[1].innerHTML === "X" &&
    gameSquareLocation[2].innerHTML === "X" ||

    gameSquareLocation[3].innerHTML === "X" &&
    gameSquareLocation[4].innerHTML === "X" &&
    gameSquareLocation[5].innerHTML === "X" ||

    gameSquareLocation[6].innerHTML === "X" &&
    gameSquareLocation[7].innerHTML === "X" &&
    gameSquareLocation[8].innerHTML === "X" ||

    gameSquareLocation[0].innerHTML === "X" &&
    gameSquareLocation[3].innerHTML === "X" &&
    gameSquareLocation[6].innerHTML === "X" ||

    gameSquareLocation[1].innerHTML === "X" &&
    gameSquareLocation[4].innerHTML === "X" &&
    gameSquareLocation[7].innerHTML === "X" ||

    gameSquareLocation[2].innerHTML === "X" &&
    gameSquareLocation[5].innerHTML === "X" &&
    gameSquareLocation[8].innerHTML === "X" ||

    gameSquareLocation[0].innerHTML === "X" &&
    gameSquareLocation[4].innerHTML === "X" &&
    gameSquareLocation[8].innerHTML === "X" ||

    gameSquareLocation[2].innerHTML === "X" &&
    gameSquareLocation[4].innerHTML === "X" &&
    gameSquareLocation[6].innerHTML === "X" )
{

    console.log("You win X!")
    alert("Player 2 Won!")

}

if (gameSquareLocation[0].innerHTML === "O" &&
    gameSquareLocation[1].innerHTML === "O" &&
    gameSquareLocation[2].innerHTML === "O" ||

    gameSquareLocation[3].innerHTML === "O" &&
    gameSquareLocation[4].innerHTML === "O" &&
    gameSquareLocation[5].innerHTML === "O" ||

    gameSquareLocation[6].innerHTML === "O" &&
    gameSquareLocation[7].innerHTML === "O" &&
    gameSquareLocation[8].innerHTML === "O" ||

    gameSquareLocation[0].innerHTML === "O" &&
    gameSquareLocation[3].innerHTML === "O" &&
    gameSquareLocation[6].innerHTML === "O" ||

    gameSquareLocation[1].innerHTML === "O" &&
    gameSquareLocation[4].innerHTML === "O" &&
    gameSquareLocation[7].innerHTML === "O" ||

    gameSquareLocation[2].innerHTML === "O" &&
    gameSquareLocation[5].innerHTML === "O" &&
    gameSquareLocation[8].innerHTML === "O" ||

    gameSquareLocation[0].innerHTML === "O" &&
    gameSquareLocation[4].innerHTML === "O" &&
    gameSquareLocation[8].innerHTML === "O" ||

    gameSquareLocation[2].innerHTML === "O" &&
    gameSquareLocation[4].innerHTML === "O" &&
    gameSquareLocation[6].innerHTML === "O" )

{ console.log("You won O!")
alert("Player 1 Won!");

}

// else {
// console.log("Lost")

// }
}

//     gameSquareLocation[3].innerHTML === "X" &&
//     gameSquareLocation[4].innerHTML === "X" &&
//     gameSquareLocation[5].innerHTML === "X" ||

//     gameSquareLocation[6].innerHTML === "X" &&
//     gameSquareLocation[7].innerHTML === "X" &&
//     gameSquareLocation[8].innerHTML === "X" ||;




// {



// }


// else if
//     (gameSquareLocation[3].innerHTML === gameSquareLocation[4].innerHTML &&
//      gameSquareLocation[4].innerHTML === gameSquareLocation[5].innerHTML) {

//         console.log("You win second row!");
// }

// else if
//     (gameSquareLocation[6].innerHTML === gameSquareLocation[7].innerHTML &&
//      gameSquareLocation[7].innerHTML === gameSquareLocation[8].innerHTML) {

//         console.log("You win third row!");
// }







// }



//Start a counter tracker
// total_moves = 0;
// X_moves = 0;
// O_moves = 0;

// if playerTurn = X,
// total_moves++ && x_moves++
// else total_moves++ && o_moves++
// Game ends at total_moves = 9;


// Another odd and even method.
// if (playerTurn % 2 === 0 ){
// eachBox[i].innerHTML = "X";
// playerTurn = playerTurn + 1;
// } else {
//     eachBox[i].innerHTML = "O";
//     playerTurn = playerTurn + 1;
// }