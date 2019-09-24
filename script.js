console.log("MEOW!")


var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

var boardSquares = 3; //consider whether to change on user input?
var counter = 0;

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

//check if items match in the grid
function checkWin() {
    console.log("check checkWin")
    for (let i=0; i<boardSquares; i++){
        for (let j=0; j<boardSquares; j++) {}
            if (JSON.stringify(board[i]) === JSON.stringify(["X", "X", "X"]) || JSON.stringify(board[i]) === JSON.stringify(["0", "0", "0"]))
            {
                alert ("OMG, you won through a cunning use of rows!")
                console.log("WOW")
            } else if (board[i][0] == board[i+1][0] && board[i][0] == board[i+][0])
            {


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

    counter = counter+1;
    console.log( counter );

    var clickedBox = event.target;
    console.log("Click worked");

    if (clickedBox.innerText !== "X" && clickedBox.innerText !== "O") {
        if (counter === 0 || counter%2 === 0){
            clickedBox.innerText = "X"
        } else {
           clickedBox.innerText = "O"
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

    checkWin()

}