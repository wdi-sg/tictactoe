console.log("MEOW!")


var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]//consider creating board array with nested forloop?


var youWon = false //tests if player has won
var jsonStringX = JSON.stringify(["X", "X", "X"])
var jsonStringO = JSON.stringify(["O", "O", "O"])
var boardSquares = 3; //consider whether to change on user input
var counter = 0;
var playerOne;
var playerTwo;

function firstName(){
      document.querySelector("#pOne").addEventListener
      ('keypress', function(event) {if (event.key === "Enter"){
        var playerName = document.createElement("h3");
        var inputName = event.target.value;
        playerName.innerText = inputName;
        var nameDiv = document.querySelector("#firstName");
        var inputBox = document.querySelector("#pOne");
        nameDiv.removeChild(inputBox);
        nameDiv.appendChild(playerName);
      }
    })
}

function secondName(){
      document.querySelector("#pTwo").addEventListener
      ('keypress', function(event) {if (event.key === "Enter"){
        var playerName = document.createElement("h3");
        var inputName = event.target.value;
        playerName.innerText = inputName;
        var nameDiv = document.querySelector("#secondName");
        var inputBox = document.querySelector("#pTwo");
        nameDiv.removeChild(inputBox);
        nameDiv.appendChild(playerName);
      }
    })

}

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

    firstName();
    secondName()
};
// setTimeout(createBoard, 500);
createBoard();

function alertDraw(){
    alert ("It's a DRAW!");
}
//reset button to appear at end of game
function createReset(){
    console.log("YAY BUTTON")

    var button = document.createElement("button");
    button.innerText = "RESET";
    var body = document.querySelector("body");
    body.appendChild(button);

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

      if (JSON.stringify(board[i]) === jsonStringX || JSON.stringify(board[i]) === jsonStringO)
      {
            function alertRow(){
                alert ("OMG, you won through the cunning use of ROWS!")
            }

            setTimeout(alertRow,150)
            console.log("WOW ROW")
            youWon = true;
            createReset();
        }
    }//end outer loop
    //check column matches
    checkColumn();

    if (counter === 9 && youWon === false) {

        function alertDraw(){
            alert ("It's a DRAW!");
        }
        setTimeout(alertDraw, 150);
        console.log("WOW DRAW")
        createReset();

    }


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
function addItem(event){
    console.log( event, counter );

    var clickedBox = event.target;
    console.log("Click worked");

    var boxID = clickedBox.getAttribute("id");
    var idArray = boxID.split("");
    var firstCoord = idArray[0];
    var secondCoord = idArray[1];

    //Adds X or O to the screen board
     //puts  X or O into the board array at location which corresponds to clicked box ID numbers
    if (clickedBox.innerText !== "X" && clickedBox.innerText !== "O") {
        if (counter === 0 || counter%2 === 0){
            clickedBox.innerText = "X"
            board[idArray[0]][idArray[1]] = "X"
            counter = counter+1;
        } else {
           clickedBox.innerText = "O"
            board[idArray[0]][idArray[1]] = "O"
           counter = counter+1;
        }
    } else {
        alert ("That spot is taken!")
    };
    console.log(board)
    console.log("checking win")
    checkWin();
}

function checkColumn(){

 //check if columns match
    var singleArray = board[0].concat(board[1], board[2]);
    var columnOne = [];
    var columnTwo = [];
    var columnThree = [];

    for (let k=0; k<singleArray.length; k++){
        if (k%3 === 0){
            columnOne.push(singleArray[k]);
        }
        else if (k%3 === 1){
            columnTwo.push(singleArray[k]);
        }
        else if (k%3 === 2){
            columnThree.push(singleArray[k]);
        }
    }

    if (JSON.stringify(columnOne) === jsonStringX || JSON.stringify(columnOne) === jsonStringO
        ||JSON.stringify(columnTwo) === jsonStringX || JSON.stringify(columnTwo) === jsonStringO
        || JSON.stringify(columnThree) === jsonStringX || JSON.stringify(columnThree) === jsonStringO)
    {
        function alertColumn(){
            alert ("OMG, you won through the cunning use of COLUMNS!")
        }
            setTimeout(alertColumn,150)
            console.log("WOW COLUMN")
            youWon = true;
            createReset();
    }
}