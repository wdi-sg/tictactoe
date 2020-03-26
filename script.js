//create Board and Grids
var createBoard = function(){
    //create main div for grids with board id
    var mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'board');
    document.body.appendChild(mainDiv);
    var board = document.querySelector('#board');

    //create row (currently only one row because subsequent one still go to this row.)
    var childDiv = document.createElement('div');
    childDiv.setAttribute('class','game-row');
    board.appendChild(childDiv);

    //create column (all goes to the same row with id game-row)
    //trying to get it to get to different row (maybe need to rename class)
    for(var colI = 0; colI < 9; colI++){
        var gameRow = document.querySelector('.game-row');
        var squareGrid = document.createElement('span');
        squareGrid.setAttribute('class', 'game-square');
        gameRow.appendChild(squareGrid);
    };
};
createBoard();


var userChoice = ["X", "O"];
var gameSquares = document.querySelectorAll('.game-square');
var gameProgress = 0;
var clickCount = 0;
var winningArray = [[0, 1 ,2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var playerOne = [];
var playerTwo = [];
var currentStatus = ["", "", "", "", "", "", "", "", ""];
var checkStatus;


var checkMatch = function(){
    for(var i = 0; i < gameSquares.length; i++) {
        if(gameSquares[i].innerText === userChoice[0]){
            playerOne.push(i);
            // return true;
        }else if(gameSquares[i].innerText === userChoice[1]){
            playerTwo.push(i);
            // return true;
        }
    };
    console.log("playerOne array: "+playerOne)
    console.log("playerOne array: "+playerTwo)

};

var win = false;
var verifyWinCheckArr = function(){
    if (winCheckArr === 3){
        win = true;

    } else if (winCheckArr < 3){
        winCheckArr = [];
        playerOne = [];
        playerTwo = [];
        win = false;
    };
};

//check function for playerOne and playerTwo, use i to try out code. will think of better index name when it works. (not working yet)
//playerOne = [0,3,6]
var winCheckArr = [];
var checkWinner = function(){
    for(var i = 0; i < winningArray.length; i++){
        if(win === false){
            playerOne.forEach((squareI) => winningArray[i].forEach((winI) => {
                if(squareI === winI){
                    winCheckArr.push(squareI);
                };
            }
            ));
        } else {
            return document.querySelector('p').innerText = "Winner!";
            winCheckArr = [];
            playerOne = [];
            playerTwo = [];
        };
        console.log(winCheckArr);
    };
    return winCheckArr;
};


var win = false;
//create event so when clicked, it will show which square.
//userChoice "X" will be player 1 and "O" will be player 2.
//there will be 9 clicks to end game so player 1 is even number and 2 odd.
var gameSquaresClick = function(event){
    console.log('clicked');
    if(gameProgress % 2 === 0){
        //player 1
        event.target.innerText = userChoice[0];
        gameProgress++;
        if(gameProgress >= 5){
            checkMatch();
            checkWinner();
            verifyWinCheckArr();
        }
    }else{
        //player 2
        event.target.innerText = userChoice[1];
        gameProgress++;
    };
};

//when click, gameSquaresClick run and the X or O will appear
for (var gameSquaresI = 0; gameSquaresI < gameSquares.length; gameSquaresI++){
    playerClick = gameSquares[gameSquaresI].addEventListener('click', gameSquaresClick);
};

//check match




//push the index clicked to an array of items for player 1 (X)

//push the index clicked to an array of items for player 2 (O)


//When the array is > 3, check the position clicked if it is === to one of the winning Array. if true, win. if false, lose, if both false, tie.



//horizontal and vertical - not complete and not using
// var gameSquareI = 0;
// var i = 0;
// var j = 0;
// var winningStrikeH = [];
// var winningStrikeV = [];

// while(i <= 2){
//     winningStrikeV.push(gameSquareI);
//     while(j <= 2){
//         winningStrikeH.push(gameSquareI);
//         gameSquareI += 1;
//         j += 1;
//     };
//     j = 0;
//     winningArray.push(winningStrikeH);
//     winningStrikeH = []
//     i += 1;
// };
// winningArray.push(winningStrikeV);

// i = 0;
// while(i < 2){
//     winningStrikeV = winningStrikeV.map(x => x + 1);
//     winningArray.push(winningStrikeV);
//     i++;
// };


// var checkWinner = function(playerArray){
//     var i = 0;
//     var j = 0;
//     while(j<winningArray.length){
//         while(i<playerOne.length){
//             if(playerArray[i] === winningArray[j][i]){
//                 checkStatus = playerArray[i] === playerArray[j];
//                 console.log(playerArray[i]);
//                 console.log(playerArray[j]);
//                 console.log(checkStatus);
//             }
//             i++;
//         };
//         j++;
//     };
// };