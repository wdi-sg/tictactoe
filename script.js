console.log("MEOW!")


var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]//consider creating board array with nested forloop?


var youWon = false //tests if player has won

var boardSquares = 3; //consider whether to change on user input
var counter = 0;

//creates initial grid for board
function createBoard(){
    var body = document.querySelector("body");
    var divContainer = document.createElement("div");
    divContainer.setAttribute("id", "container");
    body.appendChild(divContainer);
    //add div class boxes
    for (let i =0; i<boardSquares; i++){

        for (let j=0; j<boardSquares; j++){
        var box = document.createElement("div");
        box.setAttribute("class", "box");
        box.setAttribute("id", `${[i]}${j}`);
        divContainer.appendChild(box);
        }
    }
}
createBoard();

//reset button to appear at end of game
function createReset(){
    console.log("YAY BUTTON")
    if (counter === 9 || youWon === true){
        var button = document.createElement("button");
        button.innerText = "RESET";
        var body = document.querySelector("body");
        body.appendChild(button);
        }
    button.addEventListener("click", function(){document.location.reload()})
}


//check if items match in the grid
function checkWin() {
    console.log("call checkWin")

     //check if diagonals match
      if (board[0][0] === board[1][1] && board [0][0] === board [2][2] && board[1][1] !== null
            || board[0][2] === board[1][1] && board [0][2] === board [2][0] && board[1][1] !== null)
      {
            function alertDiagonal(){
                alert ("OMG, you won through the cunning use of DIAGONALS!")
            }

            setTimeout(alertDiagonal,150)
            console.log("WOW DIAGONAL")
            youWon = true;
            createReset();
      }

    // check if rows match
    for (let i=0; i<boardSquares; i++){

      if (JSON.stringify(board[i]) === JSON.stringify(["X", "X", "X"]) || JSON.stringify(board[i]) === JSON.stringify(["0", "0", "0"]))
      {
            function alertRow(){
                alert ("OMG, you won through the cunning use of ROWS!")
            }

            setTimeout(alertRow,150)
            console.log("WOW ROW")
            youWon = true;
            createReset();
      }

        //check if columns match
        for (let j=0; j<boardSquares; j++){
            if (board[i][j] === board[i+1][j] && board[0][j] === board[i+2][j] && board[i+1][j]!==null) //WHY IS THERE AN ERROR ON THIS LINE(but everything still works)
            {
                function alertColumn(){
                    alert ("OMG, you won through the cunning use of COLUMNS!")
                }

                setTimeout(alertColumn,150)
                console.log("WOW COLUMN")
                youWon = true;
                createReset();

             }
        }//end inner loop
  }//end outer loop
}//end of checkWin()

function boxListen(){
// create event listener for each box
    var emptyBox = document.querySelectorAll(".box");
    for(let i = 0; i < emptyBox.length; i++){
        emptyBox[i].addEventListener("click", addItem);
    }
};
boxListen();

// add X or O to board on click
function addItem(){
    console.log( counter );

    var clickedBox = event.target;
    console.log("Click worked");

    if (clickedBox.innerText !== "X" && clickedBox.innerText !== "O") {
        if (counter === 0 || counter%2 === 0){
            clickedBox.innerText = "X"
            counter = counter+1;
        } else {
           clickedBox.innerText = "O"
           counter = counter+1;
        }
    } else {
        alert ("That spot is taken!")
    }

// box that is clicked has corresponding location filled in board
    for (let i =0; i<boardSquares; i++){
        for (let j=0; j<boardSquares; j++){
            let box = document.getElementById(`${i}${j}`);

            if (box.innerText === "X"){
                board[i][j] = "X";
            } else if (box.innerText === "O"){
                board[i][j] = "0"
            console.log(board)
            }
        }
    }
    console.log("checking win")
    checkWin();

}