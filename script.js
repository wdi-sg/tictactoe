
//Assigning event listener to boxes
// const boxes = document.querySelectorAll('.square');

// let i = 0;
// while(i<boxes.length){
//     boxes[i].addEventListener('click', clickHandler);
//     i++;
// }



//toggle true and false for player turn
let playerTurn = true;

//Array board for score count
let board = [
["", "", ""],
["", "", ""],
["", "", ""]
];

//function to assign score to board on click
const markBoard = (rowClass, boxClass) => {
    // find row number and box number
    let rowName = rowClass.className.split(" ");
    let rowNum = parseInt(rowName[1]);

    let boxName = boxClass.className.split(" ");
    let boxNum = parseInt(boxName[1]);

    //Add to board
    if(playerTurn === true){
        board[rowNum][boxNum] = "X"
    }
    else if(playerTurn ===false){
        board[rowNum][boxNum] = "O"
    }
}



//click Handle

const clickHandler = (event) => {
    if (playerTurn === true){
        // Add to Display
        const boxClass = event.path[0];
        boxClass.textContent = "X"

        const rowClass = event.path[1]

        //Add to board score
        markBoard(rowClass, boxClass);

        //Check Win
        checkWin(board, "X");

        playerTurn = !playerTurn;
    }
    else if(playerTurn === false){
        // Add to Display
        const boxClass = event.path[0];
        boxClass.textContent = "O"

        const rowClass = event.path[1]

        //Add to board score
        markBoard(rowClass, boxClass);

        //Check Win
        checkWin(board, "O");

        playerTurn = !playerTurn;
    }
};


// Creating board

let a = 0;
let i = 0;
while (i < 3) {
    const body = document.querySelector('body');

    //create row
    const row = document.createElement('div');
    row.className = "row " + i;
    body.appendChild(row);
    for (let e=0; e<3; e++){
        //create box
        const box = document.createElement('div');
        box.className = "box " + e;
        // box.id = a;
        // a++;

        //add event listener to box
        box.addEventListener('click', clickHandler);
        row.appendChild(box);
    }
    i++;
}


const checkWin = (board, input) => {
    let rowScore = []
    let columnScore = [];
    let diagonalScore = [];

    // Loop board and add 1 point respectively to row or column for each box marked
    for(let h=0; h<3; h++){
        for (let n=0; n<3; n++){
            if (board[h][n] === input){
                //Add score to row
                if (isNaN(rowScore[h])) {
                    rowScore[h] = 1
                }else if(rowScore[h]){
                    rowScore[h] = rowScore[h] + 1;
                }

                //Add score to column
                if (isNaN(columnScore[n])) {
                    columnScore[n] = 1
                }else if(columnScore[n]){
                    columnScore[n] = columnScore[n] + 1;
                }

                //Add score to diagonal
                if(h === 0){
                    diagonalScore[n] = 1;
                }
                else if(h > 0){
                    if ( board[h-1][n-1] === input || board[h-1][n+1] === input ){
                        if ( board[h-1][n-1] === input ) {
                            diagonalScore[0] = diagonalScore[0] + 1;
                        }
                        else if( board[h-1][n+1] === input ) {
                            diagonalScore[2] = diagonalScore[2] + 1;
                        }
                    }
                }
            }
        }
    }

    console.log(diagonalScore);
    // check win
    for (let f=0; f<rowScore.length; f++) {
        if (rowScore[f] === 3){
            console.log("win");
        }
    }

    for (let z=0; z<columnScore.length; z++) {
        if (columnScore[z] === 3){
            console.log("win");
        }
    }

    for (let r=0; r<diagonalScore.length; r++) {
        if (diagonalScore[r] === 3){
            console.log("win");
        }
    }

}