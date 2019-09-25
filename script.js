console.log("hello");

//put array of squares into variable

var allSquares = document.querySelectorAll(".game-square");

//created for loop in order for event listener to work

var attachListenersToBoard = function () {
    console.log("looping through");
    for (i = 0; i < allSquares.length; i++) {
        var bigSquare = allSquares[i];
        bigSquare.addEventListener('click', doSomething);
    }
};

//create game counter global variable

var gameStage = 0;

//created what will happen after event listener is activated
//if you have two outcomes – here it's "x" and "o", you don't have to blindly code out everything, simply use the modulus to choose between odd and even.

var doSomething = function (event) {
    console.log(gameStage);
        if (gameStage%2 === 0 && gameStage < 9) {
            event.target.innerText = "X";
        } else if (gameStage%2 === 1 && gameStage < 9) {
            event.target.innerText = "O";
    }
    gameStage ++;
};

//ran attach listener function

attachListenersToBoard();