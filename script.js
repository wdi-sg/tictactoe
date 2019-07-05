console.log("loading script")

//find out which user is playing
const player1 = 'O';
const player2 = 'X';
var turns = 0;
var board = [
    [0 , 0 , 0],
    [0 , 0 , 0],
    [0 , 0 , 0]
];
//winning combination

const boxes = document.querySelectorAll('.box');
startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none"
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
        boxes[i].style.removeProperty('background-color');
        boxes[i].addEventListener('click', fillClick); //click function
    }
}

function fillClick (event){
    if (event.target.innerText === ""){ //only allow function to work on empty spaces
        if (turns%2 === 0) { //if turn is even = input player 1 symbol
            event.target.innerText = player1;
            updateArr(event.target.parentNode,event.target,1)
        } else { //if turn if odd = input player 2 symbol
            event.target.innerText = player2;
            updateArr(event.target.parentNode,event.target,-1)
        }
        turns++; //adds a turn every round

        checkGame();
    }
}

function updateArr (rowEl,colEl,value){
    let row = rowEl.dataset.row;
    let col = colEl.dataset.col;
    board[row][col] = value;
    console.log(row,col);
    console.log(board);
}

function checkGame (){
    let totalValue = 0;
    //check horizontally
    //loop through rows
    console.log("test");
    for (var i =0 ;i < 3; i++) {
        //loop through squares
        for (var j=0 ;j<3;j++){
            totalValue = totalValue + board [i][j];
            if (totalValue === 3) { console.log("player 1 wins")
                //player 1=win
                //player 2= lose
                //return true
            } else if (totalValue === -3) { console.log("player 2 wins")
                //player 1=lose
                //player 2 = win
                //return true
            }
        }
        totalValue = 0; //reset totalValue
    }
}