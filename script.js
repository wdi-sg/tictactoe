console.log("script is running")

// when the game starts, player is X
var currentPlayer = "X";

var noOfClicks = 0;

var clickHandler = function(event) {
    console.log("click happened");
    console.log("event: ", event);
    var clickBox = event.target;
    clickBox.innerText = currentPlayer;

    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else if (currentPlayer === "O") {
        currentPlayer = "X";
    }

    // whenever user clicks once, value will increase by 1
    // no of clicks increase by 1
    noOfClicks = noOfClicks + 1


    // what you want: alert to appear at click 3
    // when noOfClicks equals to 3, alert will appear
    // if noofclicks equals 3


    console.log("WOW");
    // noOfClicks === 3
    console.log(noOfClicks === 10);
    //if line 34 is true, sth will happen
    // check to see if value is equal to 3
    // if noOfClicks holds the value of 3, s
    if (noOfClicks === 10) {
        // sth will happen
        // for the alert to appear
        alert("Do you want to play again?");

    var board = document.querySelector('#TTTboard')
    board.innerHTML = "";
    }
};

var userClick = document.querySelectorAll(".game-square");

    for(var i = 0; i < userClick.length; i++){
        userClick[i].addEventListener('click', clickHandler);
    };


var createBoard = function(){
    console.log ("going to create a board")

    var board = document.createElement ("div");
    board.setAttribute("id", "TTTboard");

        var gameRow1 = document.createElement ("div");
        gameRow1.classList.add("game-row");

            var gameSquare1 = document.createElement ("span");
            gameSquare1.classList.add("game-square");
            gameSquare1.addEventListener('click', clickHandler);

             var gameSquare2 = document.createElement ("span");
            gameSquare2.classList.add("game-square");
            gameSquare2.addEventListener('click', clickHandler);

             var gameSquare3 = document.createElement ("span");
            gameSquare3.classList.add("game-square");
            gameSquare3.addEventListener('click', clickHandler);

        var gameRow2 = document.createElement ("div");
        gameRow1.classList.add("game-row");

            var gameSquare4 = document.createElement ("span");
            gameSquare4.classList.add("game-square");
            gameSquare4.addEventListener('click', clickHandler);

             var gameSquare5 = document.createElement ("span");
            gameSquare5.classList.add("game-square");
            gameSquare5.addEventListener('click', clickHandler);

             var gameSquare6 = document.createElement ("span");
            gameSquare6.classList.add("game-square");
            gameSquare6.addEventListener('click', clickHandler);

        var gameRow3 = document.createElement ("div");
        gameRow1.classList.add("game-row");

            var gameSquare7 = document.createElement ("span");
            gameSquare7.classList.add("game-square");
            gameSquare7.addEventListener('click', clickHandler);

             var gameSquare8 = document.createElement ("span");
            gameSquare8.classList.add("game-square");
            gameSquare8.addEventListener('click', clickHandler);

             var gameSquare9 = document.createElement ("span");
            gameSquare9.classList.add("game-square");
            gameSquare9.addEventListener('click', clickHandler);

    gameRow1.appendChild(gameSquare1);
    gameRow1.appendChild(gameSquare2);
    gameRow1.appendChild(gameSquare3);
    gameRow2.appendChild(gameSquare4);
    gameRow2.appendChild(gameSquare5);
    gameRow2.appendChild(gameSquare6);
    gameRow3.appendChild(gameSquare7);
    gameRow3.appendChild(gameSquare8);
    gameRow3.appendChild(gameSquare9);
    board.appendChild(gameRow1);
    board.appendChild(gameRow2);
    board.appendChild(gameRow3);
    document.body.appendChild(board);

}

//create javascript array to hold the data of current board situation

//


var startButton = document.querySelector('#startButton');
startButton.addEventListener ('click', createBoard);




































// var currentPlayer = "X";


// var clickHandler = function(event) {
//     console.log("click happened");
//     var el = event.target;
//         console.log( el );
//         el.innerText = currentPlayer;
//         console.log("CURENT: "+currentPlayer);


//         // changing player
//         if (currentPlayer === "O") {
//             currentPlayer = "X";
//         }else if(currentPlayer === "X"){
//             currentPlayer = "O";
//         }
//         console.log(" Next Player : "+currentPlayer);
//         //
// };

// var userClick = document.querySelectorAll(".game-square");

//     for(var i = 0; i < userClick.length; i++){
//         userClick[i].addEventListener('click', clickHandler);
//     };