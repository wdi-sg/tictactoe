
//Attach click event to game square


var square = document.querySelectorAll('.game-square');
console.log(square);

//function checked(){
    var i = 0;
    while (i < square.length) {
    //if (i / 2 === 0) {
    //create h1 as X
    square.textContent = "X";
//}   else if (i / 2 !== 0) {
  //create h1 as O
    //square.textContent = "O";
    i++;
console.log(square[i])
//Triggers click event
//}
};

//square.addEventListener('click', checked);

//Attach click event to game square
//When game square is clicked, create a h1 that is either X or O.
//When player turn is odd(eg. 1, 3, 5, 7, 9) player is X
//When player turn is even(eg. 2, 4, 6, 8) player is O.

//i is player turn. Eg if i = 1, player turn is odd. So square when clicked should print X.



/*var playerInput = document.createElement('h1');
    playerInput.innerText = "X";*/
    //square.appendChild(playerInput);
    //document.body.appendChild(playerInput);