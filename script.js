
console.log("hello");

var symbol;
var counter = 1;
var gameBoard = [];

//step 2/ create the event listener
var changeSymbol = function(event){
        console.log("Square" + gameBoard.indexOf(this));
   if(counter % 2 === 1){
    symbol = "X"

   }
   if (counter % 2 === 0){
    symbol = "O"
   }
    counter = counter + 1;
    event.target.innerHTML = symbol;
     win();
    console.log("clicked" + symbol)
   }


//link cell to element at html first by using querySelectorALL!!
var cell = document.querySelectorAll('.cell',)

//to loop thru all the array in cell and add event listener in each element/cell.
for (i = 0; i < cell.length; i++){
    var currentCell = cell[i];

    gameBoard.push(cell[i]);

    currentCell.addEventListener("click", changeSymbol,{once: true});
};

//set win state conditions
var win = function(){
 if (gameBoard[0].innerHTML === "X" &&
    gameBoard[1].innerHTML  === "X" &&
    gameBoard[2].innerHTML  === "X" ||

    gameBoard[3].innerHTML  === "X" &&
    gameBoard[4].innerHTML  === "X" &&
    gameBoard[5].innerHTML === "X" ||

    gameBoard[6].innerHTML  === "X" &&
    gameBoard[7].innerHTML  === "X" &&
    gameBoard[8].innerHTML  === "X"){
    alert("winner");
 };
  if (gameBoard[0].innerHTML === "X" &&
    gameBoard[3].innerHTML  === "X" &&
    gameBoard[6].innerHTML  === "X" ||

    gameBoard[1].innerHTML  === "X" &&
    gameBoard[4].innerHTML  === "X" &&
    gameBoard[7].innerHTML === "X" ||

    gameBoard[2].innerHTML  === "X" &&
    gameBoard[5].innerHTML  === "X" &&
    gameBoard[8].innerHTML  === "X"){
    alert("winner");
 };

  if (gameBoard[0].innerHTML === "O" &&
    gameBoard[1].innerHTML  === "O" &&
    gameBoard[2].innerHTML  === "O" ||

    gameBoard[3].innerHTML  === "O" &&
    gameBoard[4].innerHTML  === "O" &&
    gameBoard[5].innerHTML === "O" ||

    gameBoard[6].innerHTML  === "O" &&
    gameBoard[7].innerHTML  === "O" &&
    gameBoard[8].innerHTML  === "O"){
    alert("winner");
}
 if (gameBoard[0].innerHTML === "O" &&
    gameBoard[3].innerHTML  === "O" &&
    gameBoard[6].innerHTML  === "O" ||

    gameBoard[1].innerHTML  === "O" &&
    gameBoard[4].innerHTML  === "O" &&
    gameBoard[7].innerHTML === "O" ||

    gameBoard[2].innerHTML  === "O" &&
    gameBoard[5].innerHTML  === "O" &&
    gameBoard[8].innerHTML  === "O"){
    alert("winner");
};

};


// if (gameBoard[0].innerHTML === "X" &&
//     (gameBoard[4].innerHTML === "X" &&
//     (gameBoard[8].innerHTML === "X" ||

//     (gameBoard[2].innerHTML === "X" &&
//     (gameBoard[4].innerHTML === "X" &&
//     (gameBoard[6].innerHTML === "X" ){
//     alert("winner")
// }


     // if (gameBoard[0].innerHTML === "O" &&
//     (gameBoard[4].innerHTML === "O" &&
//     (gameBoard[8].innerHTML === "O" ||

//     (gameBoard[2].innerHTML === "O" &&
//     (gameBoard[4].innerHTML === "O" &&
//     (gameBoard[6].innerHTML === "O"){
//     alert("winner");
//