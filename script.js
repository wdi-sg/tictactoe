
//Assigning event listener to boxes
// const boxes = document.querySelectorAll('.square');

// let i = 0;
// while(i<boxes.length){
//     boxes[i].addEventListener('click', clickHandler);
//     i++;
// }


//Start Game
let gameStart = false;

let playerTurn = true;

const body = document.querySelector('body');

// Create H2 element for where player name will be
playerOneTurn = document.createElement('h2');
playerOneTurn.className = "player"
body.appendChild(playerOneTurn);

const playerName = document.getElementsByClassName('name');

let playerOneName = "";
let playerTwoName = "";

const button = document.getElementsByClassName('button')[0];

const startGame = (event) =>{
    // enable game start
    gameStart = true;
    button.classList.add('hide');
    playerName[0].classList.add('hide');
    playerName[1].classList.add('hide');

    // retrieve player name
    playerOneName = playerName[0].value;
    playerTwoName = playerName[1].value;

    // Show first player name
    playerOneTurn.textContent = playerOneName + " turn" ;
}

button.addEventListener('click', startGame);


//toggle player turn
// let playerTurn = true;

// const body = document.querySelector('body');
// playerOneTurn = document.createElement('h2');
// playerOneTurn.className = "player"
// playerOneTurn.textContent = playerOneName;
// body.appendChild(playerOneTurn);

const showPlayerTurn = () => {
    if (playerTurn === true) {
        const changePlayerOne = document.getElementsByClassName('player')[0];
        changePlayerOne.textContent = playerTwoName + " turn";
    }
    else if(playerTurn === false){
        const changePlayerTwo = document.getElementsByClassName('player')[0];
        changePlayerTwo.textContent = playerOneName + " turn" ;
    }
}
// body.insertAdjacentHTML('afterbegin', playerOneTurn);



// playerTwoTurn =

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
let win;

const clickHandler = (event) => {
    if (gameStart) {
        if (playerTurn === true){
            // Add to Display
            const boxClass = event.path[0];
            boxClass.textContent = "X"

            const rowClass = event.path[1]

            //Add to board score
            markBoard(rowClass, boxClass);

            //Check Win
            checkWin(board, "X");
            if (win) {
                return;
            }

            showPlayerTurn();
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
            if(win){
                return;
            }

            showPlayerTurn();
            playerTurn = !playerTurn;
        }
    }

};


// Creating board

let a = 0;
let i = 0;
while (i < 3) {

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

    // check win
    for (let f=0; f<rowScore.length; f++) {
        if (rowScore[f] === 3){
            console.log(playerTurn);
            if(playerTurn){
                const winPlayerOne = document.getElementsByClassName('player')[0];
                winPlayerOne.textContent = playerOneName + " WINS";
                win = true;

            }
            else if(!playerTurn){
                const winPlayerTwo = document.getElementsByClassName('player')[0];
                winPlayerTwo.textContent = playerTwoName + " WINS";

                win = true;
            }

        }
    }

    for (let z=0; z<columnScore.length; z++) {
        if (columnScore[z] === 3){
            if(playerTurn){
                const winPlayerOne = document.getElementsByClassName('player')[0];
                winPlayerOne.textContent = playerOneName + " WINS";
                win = true;
            }
            else if(!playerTurn){
                const winPlayerTwo = document.getElementsByClassName('player')[0];
                winPlayerTwo.textContent = playerTwoName + " WINS";
                win = true;
            }
        }
    }

    for (let r=0; r<diagonalScore.length; r++) {
        if (diagonalScore[r] === 3){
            if(playerTurn){
                const winPlayerOne = document.getElementsByClassName('player')[0];
                winPlayerOne.textContent = playerOneName + " WINS";
                win = true;
            }
            else if(!playerTurn){
                const winPlayerTwo = document.getElementsByClassName('player')[0];
                winPlayerTwo.textContent = playerTwoName + " WINS";
                win = true;
            }
        }
    }

}