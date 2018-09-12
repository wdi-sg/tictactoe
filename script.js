

console.log("working")

// Creating board array

var board = [   0, 0, 0,
                0, 0, 0,
                0, 0, 0];

/* For my reference on possible winning outcomes

var win = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

    ];
*/

player1Score = document.getElementById('player1-score');

player1Score1 = parseInt(player1Score.textContent);

player2Score = document.getElementById('player2-score');

player2Score1 = parseInt(player2Score.textContent);

currentGame = document.getElementsByTagName('a');

var restartGame = function() {

    for (var i = 0; i < 9; i++) {
        currentGame[i].textContent = "";
    }
    addListener();
}

var checkGame = function(game) {

    game = [];

    currentGame = document.getElementsByTagName('a');

    for (var i = 0; i < currentGame.length; i++) {
        game[i] = currentGame[i].textContent;
    }

    var checkResult = "";

    // Listing out the possible winning permutations
    var currentBoard = [

        game[0] + game[1] + game[2],
        game[3] + game[4] + game[5],
        game[6] + game[7] + game[8],
        game[0] + game[3] + game[6],
        game[1] + game[4] + game[7],
        game[2] + game[5] + game[8],
        game[0] + game[4] + game[8],
        game[2] + game[4] + game[6]

        ];

    for ( i = 0; i < currentBoard.length; i++) {
        if ( currentBoard[i] === "XXX" ) {
            alert("Player X wins!");
                player2Score1 = player2Score1 + 1;
                    player2Score.textContent = player2Score1;
                        removeAll();
            break;
        };

        if ( currentBoard[i] === "OOO" ) {
            alert("Player O wins!");
                player1Score1 = player1Score1 + 1;
                    player1Score.textContent = player1Score1;
                        removeAll();
            break;
        };

    };
    return checkResult;
};

// Getting all boxes to add event listener to
var boxes = document.getElementsByTagName('a');

// Creating turn variable so even is O and odd turns is X
var turn = 0;

var x = function(event){
    if ( turn % 2 != 0 ) {
        this.textContent = "X";
            this.removeEventListener('click', x);
                checkGame();
    }   else if ( turn % 2 == 0 ){
            this.textContent = "O";
                this.removeEventListener('click', x);
                    checkGame();
    }   turn++;
};

// Adding event listener to all boxes
var addListener = function() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', x);
    };
}

var removeAll = function() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener('click', x);
        boxes[i].style.cursor = "default";
    };
}

addListener();

restartButton = document.getElementsByTagName('h1');

restartButton[0].addEventListener('click', restartGame);



