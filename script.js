//----GAME FUNCTIONS

//default board values
const ch = null;
let size = 3;
let board = [[]];

//create backend board
//createBoard(sjze); - return array representing board
let createBoard = function(size){
    let b = [[]];
    for(let i = 0; i < size; i++){
        let jArr = []
        for(let j = 0; j < size; j++){
            jArr.push(ch);
        }
        b[i]=jArr;
    }
    return b;
};

//create front end board
//given board, build div structure
let loadBoard = function(){
    let boardDiv = document.getElementById("board");
    //for each size, create a div with class game-row
    for(let i = 0; i < size; i++){
        let gameRow = document.createElement("div");
        gameRow.classList.add("game-row");
        //for each game-row create a div with class game-square
        for(let j = 0; j < size; j++){
            let gameSquare = document.createElement("div");
            gameSquare.classList.add("game-square");
            // gameSquare.innerHTML = board[i][j];
            gameSquare.innerHTML = "&nbsp;";
            gameRow.appendChild(gameSquare);
        }
        boardDiv.appendChild(gameRow);
    }
}


//Updates the backend game board
let updateBoard = function(i,j,m){
    board[i][j] = m;
}

//getWinner(); - return wjnner
let getWinner = function(){
    let winner = null;
    //check if there is three in a row given current board
    //row - check each row if is either fully X or O
    board.forEach(row => {
        if(row.every(v => v === row[0] && row[0] != null)===true){
            winner = row[0];
        }
    });
    if(winner!==null){
        return winner;
    }

    //column
    //iterate board column wise
    for(let j = 0; j < size; j++){
        let colGotDiff = false;
        for(let i = 1; i < size; i++){
            if(board[i-1][j]===null){ //if first value null
                colGotDiff = true;
                break; //skip searching entire column
            } else if(board[i][j]!==board[i-1][j]){
                colGotDiff = true;  //true if there are diffs in the column
            }
        }
        if(colGotDiff===false){
            winner = board[0][j]; //winner is assigned if whole col no diffs
            break;
        }
    }
    //diagonal
    winner = checkArrayEqual(getDiagonal("l"))
    if(winner!==null){
        return winner;
    }
    winner = checkArrayEqual(getDiagonal("r"))
    if(winner!==null){
        return winner;
    }

    return winner;
};

//checks if the values of the array are equal and not null
let checkArrayEqual = function(arr){
    let winner = null;
    if(arr.every(v => v === arr[0] && arr[0] != null)===true){
            winner = arr[0];
        }
    return winner;
}

//return diagonal as an array dir can be  "l" or "r"
let getDiagonal = function(dir){
    let resArr = [];
    switch(dir){
        case "l": //from top left to bottom right
            for(let i = 0; i < size; i++){
                resArr.push(board[i][i]);
            }
        break;
        case "r": //from top right to bottom left
            let i = 0;
            for(let j = size-1; j >= 0 ; j--){
                resArr.push(board[i][j]);
                i++;
            }
        break;
    }
    return resArr
}


//----DOM MANIPULATION FUNCTIONS




//set player markers
let p1 = {
    name: "Player 1",
    marker:"X",
    wins:0
}
let p2 = {
    name: "Player 2",
    marker:"O",
    wins:0
}

let currPlayer = p1;

//Click Handler
let clickHandler = function(event){

    //Get coordinates of square clicked
    let i = Array.from(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement);
    let j = Array.from(event.target.parentElement.children).indexOf(event.target);
    console.log("clicked: " + i +" "+ j)

    //Get current player marker
    let m = currPlayer.marker

    //Update the board with the square clicked
    updateBoard(i,j,m);
    updateBoardDisplay(i,j,m);

    //Remove Event listener after has been clicked
    event.target.removeEventListener('click', clickHandler)

    //Check if winner - execute game over function
    let winner = getWinner();
    if(winner!=null){
        console.log("winner is "+winner)
        gameWon(winner);
    }

    //set next player
    if(currPlayer.name == p1.name){
        currPlayer = p2;
    } else {
        currPlayer = p1;
    }
}

//Given coordinates, return square node
let getSquareNode = function(i,j){
    return document.getElementById("board").children[i].children[j]
}

//Add event handlers
let addClickListener = function(){
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let n = getSquareNode(i,j)
            n.addEventListener('click',clickHandler);
        }
    }
}


//clears all click listeners
let clearClickListener = function(){
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let n = getSquareNode(i,j)
            n.removeEventListener('click', clickHandler)
        }
    }
}

//Sets the innerHTML after clicked
let updateBoardDisplay = function(i,j,m){
    let sq = getSquareNode(i,j);
    sq.innerHTML=m;
}

//Removes the board
let clearBoardDisplay = function(){
    document.getElementById("board").innerHTML=""
    document.getElementById("output").innerHTML=""
}

//execute list of commands upon game over
let gameWon = function(winner){
    let winningPlayer;
    if(winner === p1.marker){
        winningPlayer=p1;
    } else {
        winningPlayer=p2;
    }
    document.getElementById("output").innerHTML = "Winner is " + winningPlayer.name;
    clearClickListener();
    toggleInputDisplay();
}

// for(let i = 0; i < size; i++){
//     for(let j = 0; j < size; j++){
//     }
// }


let toggleInputDisplay = function(){
    let inputBox = document.getElementById("input1");
    let startButton = document.getElementById("start-button");

    if(inputBox.style.display == "none"){
        inputBox.style.display = "block";
        startButton.style.display = "block";
    } else {
        inputBox.style.display = "none";
        startButton.style.display = "none";
    }

}

document.getElementById("start-button").addEventListener('click', function(event){
    console.log("start button clicked")
    //check input and return if not integer
    let input = document.getElementById("input1");
    console.log("inputvalue"+input.value*1);
    if(isNaN(input.value*1) || input.value===""){
        alert("Input needs to be numeric and an integer");
        return;
    } else {
        clearBoardDisplay();
        size = input.value;
        board = createBoard(size);
        loadBoard();
        addClickListener();
        console.log("Game Started")
        toggleInputDisplay();
    }
});




//Create initial board