console.log("MEOW!")


var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

var boardSquares = 9;
var counter = 0;

function createBoard(){
    var body = document.querySelector("body");
    var divContainer = document.createElement("div");
    divContainer.setAttribute("id", "container");
    body.appendChild(divContainer);
    //add div class boxes
    for (let i =0; i<boardSquares; i++){
        var box = document.createElement("div");
        box.setAttribute("class", "box");
        box.setAttribute("id", `box${[i]}`);
        divContainer.appendChild(box);
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

    var firstBox= document.getElementById("box0")


    if (firstBox.innerText === "X"){
        board[0][0] = "X";
    } else if (firstBox.innerText === "O"){
        board[0][0] = "0"
console.log(board)
    }


//If you click on first box, board [0][0]=filled


}

// create event listener for each box
for(let i = 0; i < emptyBox.length; i++){
    emptyBox[i].addEventListener("click", addItem);
}