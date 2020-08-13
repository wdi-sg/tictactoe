console.log("hello world");

var cross = "X";
var circle = "O";
var currentClass = "";
var playerTurn = 0; // keep track of player turn
var turns = 0; // when turns >= 9, game over
var squareArray = document.querySelectorAll(".game-square")
console.log(squareArray)

var winningCombinations = [

    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ]

];

// for ( i = 0 ; i < squareArray.length ; i ++ )
//     squareArray[i].addEventListener('click', function(event){
//         squareSelected(event);
//     });

var reset = document.createElement("button");
reset.textContent = "Reset";
reset.classList.add("reset-btn");
document.body.appendChild(reset);

reset.addEventListener('click', function () {

    squareArray.forEach ( index => {
        clearBoard(index)
    })
})

squareArray.forEach ( square => {
    square.addEventListener('click', function () {
        totalPackage(event) }, { once: true })
});

var totalPackage = function ( event ) {

    squareSelected(event);
    if (checkWin(currentClass)) {
        setTimeout(function(){ alert("You won!"); }, 100);
    }

}


// assign cross or circle to square
var squareSelected = function (event) {

    if ( playerTurn == 0 ) {
        event.target.innerText = cross;
        event.target.classList.add(cross);
        currentClass = cross;
        console.log(currentClass);
        console.log(event.target.classList);
        playerTurn = 1;
        turns ++;
        console.log(playerTurn);
    }

    else if ( playerTurn == 1 ) {
        event.target.innerText = circle;
        event.target.classList.add(circle);
        currentClass = circle;
        console.log(currentClass);
        console.log(event.target.classList);
        playerTurn = 0;
        turns ++;
        console.log(playerTurn);
    }

}

console.log(squareArray[0].classList);

// to check for winning state
var checkWin = function (currentClass) {

    return winningCombinations.some( combination => {
        return combination.every( index => {
            return squareArray[index].classList.contains(currentClass)
        })
    })
}

var clearBoard = function (square) {
    square.innerText = "";
}











































// end