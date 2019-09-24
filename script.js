console.log("hello");

var allSquares = document.querySelectorAll(".game-square");


var doSomething = function (event) {
    console.log("something is going on");
    event.target.innerText = "X";
}


var attachListenersToBoard = function () {
    console.log("looping through");
    for (i = 0; i < allSquares.length; i++) {
        var bigSquare = allSquares[i];
        bigSquare.addEventListener('click', doSomething);
    }
};

inputGameTurn();