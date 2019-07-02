//all da variableessss
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
};

//p2 turn function
var playerTwoTurn = function() {
    event.target.innerHTML = "O";
    counter += 1;
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

//NOTE TO SELF - Create check for win function and insert into the above P1 and P2 functions to only run after counter >= 6
var checkForWin = function() {
    //check rows and columns
    C1Array = document.querySelectorAll(".C1");
        if (C1Array[0].innerHTML === C1Array[1].innerHTML && C1Array[1].innerHTML === C1Array[2].innerHTML) {
            console.log("C1 matches!")//change to something more obvs later.
        } else {
            console.log("C1 is not a win.")//i think this can just be empty, must test
        }
    C2Array = document.querySelectorAll(".C2");
        if (C2Array[0].innerHTML === C2Array[1].innerHTML && C2Array[1].innerHTML === C2Array[2].innerHTML) {
            console.log("C2 matches!")//change to something more obvs later.
        } else {
            console.log("C2 is not a win.")//i think this can just be empty, must test
        }
    C3Array = document.querySelectorAll(".C3");
        if (C3Array[0].innerHTML === C3Array[1].innerHTML && C3Array[1].innerHTML === C3Array[2].innerHTML) {
            console.log("C3 matches!")//change to something more obvs later.
        } else {
            console.log("C3 is not a win.")//i think this can just be empty, must test
        }
    R1Array = document.querySelectorAll(".R1");
        if (R1Array[0].innerHTML === R1Array[1].innerHTML && R1Array[1].innerHTML === R1Array[2].innerHTML) {
            console.log("R1 matches!")//change to something more obvs later.
        } else {
            console.log("R1 is not a win.")//i think this can just be empty, must test
        }
    R2Array = document.querySelectorAll(".R2");
        if (R2Array[0].innerHTML === R2Array[1].innerHTML && R2Array[1].innerHTML === R2Array[2].innerHTML) {
            console.log("R2 matches!")//change to something more obvs later.
        } else {
            console.log("R2 is not a win.")//i think this can just be empty, must test
        }
    R3Array = document.querySelectorAll(".R3");
        if (R3Array[0].innerHTML === R3Array[1].innerHTML && R3Array[1].innerHTML === R3Array[2].innerHTML) {
            console.log("R3 matches!")//change to something more obvs later.
        } else {
            console.log("R3 is not a win.")//i think this can just be empty, must test
        }
    //Check diagonals using IDs
        var mid = document.getElementById("middle");
        var tl = document.getElementById("top-left");
        var tr = document.getElementById("top-right");
        var bl = document.getElementById("bottom-left");
        var br = document.getElementById("bottom-right");

        if (mid.innerHTML === tl.innerHTML && tl.innerHTML === br.innerHTML) {
            console.log("match diagonal from top left!")
        }
        else if (mid.innerHTML === tr.innerHTML && tr.innerHTML === bl.innerHTML){
            console.log("match diagonal from top right!")
        }
};


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