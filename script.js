
var gameBoard = document.querySelector('.gameBoard');

var turnNumber = -1;
//if turnNumber is odd, X
//if turnNumber is even, O
//at least 5 turns is needed for first player to win game

var currentPlayer = null;

var tileInPlay = 0;

var player1Tiles = [];
var player2Tiles = [];

//n = number of tile per side
//when n=3:
var winningArrays = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

//check whose turn it is
function checkPlayer(player1,player2){
    if (turnNumber%2 === 1) {
            currentPlayer = player1;
            playerMove = player1Tiles;
        } else {
            currentPlayer = player2;
            playerMove = player2Tiles;
        };
};

//When game ends nine rounds with a draw
function maxRounds(){
        setTimeout(function(){ alert("No more moves possible.\nGame ends in a draw."); }, 100);
};

//to start game
function gameRun(){
    button1.style.visibility = "hidden";
    turnNumber++;
    console.log("Game starts");
    // console.log("Round 1. Current Player: " + currentPlayer);
    gameBoard.addEventListener('click', newTurn)
};

//to reset game
function resetGame(){
    var clearTile = document.getElementsByClassName("column");
    for (var i = clearTile.length - 1; i >= 0; i--) {
        clearTile[i].innerHTML = "";
    };
    turnNumber = -1;
    currentPlayer = null;
    tileInPlay = 0;
    player1Tiles = [];
    player2Tiles = [];
    button1.style.visibility = "visible";
    gameBoard.removeEventListener('click', newTurn);
};

//check if player has made any winning combos
function playerWon(){
        console.log("starting check");
    for (let set of winningArrays) {
        let setWon = [];
        // console.log(set);
        for (var i = 0; i < set.length; i++) {
            if (playerMove.includes(set[i])){
                // console.log("Tile found: " + set[i]);
                setWon.push(set[i]);
                // console.log(setWon);
                if (setWon.length === 3) {
                    console.log("this is the winning set");
                    return true;
                }
            }
        }
    };
    console.log("winning conditions not met yet.")
};

//if player won, alert player won, maybe highlight winning set?
function playerWin(){
    if (playerWon()) {
        setTimeout(function(){ alert(currentPlayer.toUpperCase() + ", YOU ARE WINNER"); }, 100);
    }
}

//set symbol on tile based on player


//click event starts new turn
function newTurn(){
    //check if click is within tile column
    if (event.target.className === 'column' && event.target.innerText === "") {
        // bumps turnNumber at start of turn
        turnNumber++;
        //check whose turn
        checkPlayer("Player 1", "Player 2");
        tileInPlay = document.getElementById(event.target.id);
        console.log("Round " + turnNumber + " " + currentPlayer + " plays " +event.target.id + ".");
        //if player1, set X. if player2, set O.
        if (turnNumber%2 === 1) {
            tileInPlay.innerHTML = "<p>X</p>";
        } else {
            tileInPlay.innerHTML = "<p>O</p>";
        };
        playerMove.push(parseInt(tileInPlay.id))
    };
    console.log(currentPlayer + ". Moves played: " + playerMove);
        //check if player has won. will return true if true
    if (turnNumber>=5){
        playerWin();
        return;
    };
    // if max number of rounds without win, end game
    if (turnNumber === 9) {
        maxRounds();
    };

};

//run game button
var button1 = document.getElementById("runGame");
button1.addEventListener('click', function(){gameRun()});

//reset game button
var button2 = document.getElementById("reset");
button2.addEventListener('click', function(){resetGame()});


/*
Further: Dynamic Board
When generating a board, let  = number of tiles per side.
Prompt players for n.
within a square gameBoard (which should not have a fixed max-width), generate tiles numbering from 1 to n(squared).
Most likely would have to use some form of flexbox to fit all the tiles into the square gameBoard.
If n=4,
gameBoardPlays = [
[01,02,03,04],
[05,06,07,08],
[09,10,11,12],
[13,14,15,16]
]
where each array has n items.
winning condition would be if either one array has n items of the same value,
OR [01,06,11,16] OR [04,07,10,13] has n items of the same value. Not sure how to even code the diagonal arrays though.
gameBoardPlays[i][j] to gameBoardPlays[i][j], win.
Oh but you also have to create 4 more arrays for columns.
But if players get to decide how many in a row they want to qualify as a win, winning conditions would change.



Winning arrays when n=3:
number
[1,2,3][4,5,6][7,8,9][1,4,7][2,5,8][3,6,9][1,5,9][3,5,7]
winningArrays[i].indexOf(1) returns the position of 1 if found. If 1 is not found, .indexOf would return -1.
tileInPlay.id would return the column id.
push tileInPlay.id into

array.every(function(currentValue, index, arr), thisValue)
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;

function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAdult);
}
}
*/