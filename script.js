//all da variablessss
var counter = 1;
var gameSquares = [];

var C1Array = [];
var C2Array = [];
var C3Array = [];
var R1Array = [];
var R2Array = [];
var R3Array = [];

//p1 turn function
var playerOneTurn = function() {
    event.target.innerHTML = "X";
    counter += 1;
    if (counter >= 6) {
        checkForWin();
    }
};

//p2 turn function
var playerTwoTurn = function() {
    event.target.innerHTML = "O";
    counter += 1;
    if (counter >= 6) {
        checkForWin();
    }
};

//main game-playing function, conditional to check if P1 or P2 turn
var playGame = function() {
    var oddOrEven = counter % 2;
    if (oddOrEven > 0) {
        playerOneTurn();
    } else if (oddOrEven === 0) {
        playerTwoTurn();
    }
};

//add event listener for click to each game square, triggers playGame() function
var initialiseSquares = function() {
    gameSquares = document.querySelectorAll("section")
    for (var i = 0; i < gameSquares.length; i++) {
        gameSquares[i].addEventListener("click", playGame)
    };
}
initialiseSquares();

//function that clears the board and starts new game
var newGame = function() {
    counter = 1;
    gameSquares = document.querySelectorAll("section");
    for (var i = 0; i < gameSquares.length; i++) {
        while (gameSquares[i].firstChild) {
            gameSquares[i].removeChild(gameSquares[i].firstChild);
        }
    }
};

//when winner is found, creates overlay which you can click away to start new game
var winnerFound = function() {
  var overlay = document.getElementById("overlay")
  overlay.style.display = "block";
  overlay.addEventListener("click", function (event) {
    overlay.style.display = "none";
    newGame();
    });
};

//the mother lode of conditionals
var checkForWin = function() {
    //check rows and columns
    C1Array = document.querySelectorAll(".C1");
    if (C1Array[0].innerHTML === "X" || C1Array[0].innerHTML === "O") {
        if (C1Array[0].innerHTML === C1Array[1].innerHTML && C1Array[1].innerHTML === C1Array[2].innerHTML) {
            winnerFound();
        }
    }
    C2Array = document.querySelectorAll(".C2");
    if (C2Array[0].innerHTML === "X" || C2Array[0].innerHTML === "O") {
        if (C2Array[0].innerHTML === C2Array[1].innerHTML && C2Array[1].innerHTML === C2Array[2].innerHTML) {
            winnerFound();
        }
    }
    C3Array = document.querySelectorAll(".C3");
    if (C3Array[0].innerHTML === "X" || C3Array[0].innerHTML === "O") {
        if (C3Array[0].innerHTML === C3Array[1].innerHTML && C3Array[1].innerHTML === C3Array[2].innerHTML) {
            winnerFound();
        }
    }
    R1Array = document.querySelectorAll(".R1");
    if (R1Array[0].innerHTML === "X" || R1Array[0].innerHTML === "O"){
        if (R1Array[0].innerHTML === R1Array[1].innerHTML && R1Array[1].innerHTML === R1Array[2].innerHTML) {
            winnerFound();
        }
    }
    R2Array = document.querySelectorAll(".R2");
    if (R2Array[0].innerHTML === "X" || R2Array[0].innerHTML === "O") {
        if (R2Array[0].innerHTML === R2Array[1].innerHTML && R2Array[1].innerHTML === R2Array[2].innerHTML) {
            winnerFound();
        }
    }
    R3Array = document.querySelectorAll(".R3");
    if (R3Array[0].innerHTML === "X" || R3Array[0].innerHTML === "O") {
        if (R3Array[0].innerHTML === R3Array[1].innerHTML && R3Array[1].innerHTML === R3Array[2].innerHTML) {
            winnerFound();
        }
    }
    //Check diagonals using IDs
    var mid = document.getElementById("middle");
    var tl = document.getElementById("top-left");
    var tr = document.getElementById("top-right");
    var bl = document.getElementById("bottom-left");
    var br = document.getElementById("bottom-right");

    if (mid.innerHTML === "X" || mid.innerHTML === "O") {
        if (mid.innerHTML === tl.innerHTML && tl.innerHTML === br.innerHTML) {
            winnerFound();
        } else if (mid.innerHTML === tr.innerHTML && tr.innerHTML === bl.innerHTML) {
            winnerFound();
        }
    }
};

//unused but working for loop (just in case)
// var checkForWin = function (){
//     var matchCount = 0;
//     C1Array = document.querySelectorAll(".C1");
//     for (let i = 1; i < C1Array.length; i++) {
//     if (C1Array[0].innerHTML === C1Array[i].innerHTML) {
//         matchCount += 1;
//         }
//     }
//     if (matchCount === 2) {
//         console.log("Issa match!");
//     } else {
//         console.log("C1 does not match.")
//     }
// };