console.log("MEOW!")


var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

var boardSquares = 3;
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


var emptyBox = document.querySelectorAll(".box");

// add X or O to board on click
function addItem(){

    counter = counter+1;
    console.log( counter );

    var clickedBox = event.target;
    console.log("Click worked");

    if (counter === 0 || counter%2 === 0){
        clickedBox.innerText = "X"
    } else {
       clickedBox.innerText = "O"
    };


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
}








// create event listener for each box
for(let i = 0; i < emptyBox.length; i++){
    emptyBox[i].addEventListener("click", addItem);
}