
//Assigning event listener to boxes
// const boxes = document.querySelectorAll('.square');

// let i = 0;
// while(i<boxes.length){
//     boxes[i].addEventListener('click', clickHandler);
//     i++;
// }


//Game initialize
let gameStart = false;

let playerTurn = true;

let gameCount = 0;

let playerOneScore = 0;
let playerTwoScore = 0;

const playerOne = {
    score: 0,
    name: "",
    character: ""
}

const playerTwo = {
    score: 0,
    name: "",
    character: ""
}

const initGame = () =>{
    gameStart = false;
    playerTurn = true;

    button.classList.remove('hide');

    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const box = document.getElementsByClassName('box');
    for (let r=0; r<box.length; r++){
        box[r].textContent = "";
    }

    win = false;

    gameCount++;

}



// Create H2 element for where player name will be
const body = document.querySelector('body');

playerOneTurn = document.createElement('h2');
playerOneTurn.className = "player"
body.appendChild(playerOneTurn);

const playerName = document.getElementsByClassName('name');

const characterInput = document.getElementsByClassName('character');

const button = document.getElementsByClassName('button')[0];

const startGame = (event) =>{
    // enable game start
    gameStart = true;
    button.classList.add('hide');
    playerName[0].classList.add('hide');
    playerName[1].classList.add('hide');
    characterInput[0].classList.add('hide');
    characterInput[1].classList.add('hide');

    // retrieve player name
    playerOne.name = playerName[0].value;
    playerTwo.name = playerName[1].value;

    // Show first player name
    playerOneTurn.textContent = playerOne.name + " turn" ;

    //retrieve player character
    playerOne.character = characterInput[0].value;
    playerTwo.character = characterInput[1].value;

    if(gameCount === 0){
        // Show score count
        // Player One Score
        const scoreOne = document.createElement('div');
        scoreOne.className = "score " + playerOne.name;
        scoreOne.textContent = playerOne.name + " score: " + playerOne.score;

        // Player Two Score
        const scoreTwo = document.createElement('div');
        scoreTwo.className = "score " + playerTwo.name;
        scoreTwo.textContent = playerTwo.name + " score: " + playerTwo.score;

        body.appendChild(scoreOne);
        body.appendChild(scoreTwo);
    }

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
        changePlayerOne.textContent = playerTwo.name + " turn";
    }
    else if(playerTurn === false){
        const changePlayerTwo = document.getElementsByClassName('player')[0];
        changePlayerTwo.textContent = playerOne.name + " turn" ;
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
        board[rowNum][boxNum] = playerOne.character;
    }
    else if(playerTurn ===false){
        board[rowNum][boxNum] = playerTwo.character;
    }
}



//click Handle
let win;

const clickHandler = (event) => {
    if (gameStart) {
        if (playerTurn === true){
            // Add to Display
            const boxClass = event.path[0];
            boxClass.textContent = playerOne.character;

            const rowClass = event.path[1]

            //Add to board score
            markBoard(rowClass, boxClass);

            //Check Win
            checkWin(board, playerOne.character);
            if (win) {
                addScore(playerOne.name);
                initGame();
                return;
            }

            showPlayerTurn();
            playerTurn = !playerTurn;
        }
        else if(playerTurn === false){
            // Add to Display
            const boxClass = event.path[0];
            boxClass.textContent = playerTwo.character;

            const rowClass = event.path[1]

            //Add to board score
            markBoard(rowClass, boxClass);

            //Check Win
            checkWin(board, playerTwo.character);
            if(win){
                addScore(playerTwo.name);
                initGame();
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
                winPlayerOne.textContent = playerOne.name + " WINS";
                win = true;

            }
            else if(!playerTurn){
                const winPlayerTwo = document.getElementsByClassName('player')[0];
                winPlayerTwo.textContent = playerTwo.name + " WINS";

                win = true;
            }

        }
    }

    for (let z=0; z<columnScore.length; z++) {
        if (columnScore[z] === 3){
            if(playerTurn){
                const winPlayerOne = document.getElementsByClassName('player')[0];
                winPlayerOne.textContent = playerOne.name + " WINS";
                win = true;
            }
            else if(!playerTurn){
                const winPlayerTwo = document.getElementsByClassName('player')[0];
                winPlayerTwo.textContent = playerTwo.name + " WINS";
                win = true;
            }
        }
    }

    for (let r=0; r<diagonalScore.length; r++) {
        if (diagonalScore[r] === 3){
            if(playerTurn){
                const winPlayerOne = document.getElementsByClassName('player')[0];
                winPlayerOne.textContent = playerOne.name + " WINS";
                win = true;
            }
            else if(!playerTurn){
                const winPlayerTwo = document.getElementsByClassName('player')[0];
                winPlayerTwo.textContent = playerTwo.name + " WINS";
                win = true;
            }
        }
    }

}


const addScore = (player) => {
    if(player === playerOne.name){
        playerOne.score++;
        const playerAddScore = document.getElementsByClassName(playerOne.name)[0];
        playerAddScore.textContent = playerOne.name + " score: " + playerOne.score;
    }
    else if(player === playerTwo.name){
        playerTwo.score++;
        const playerAddScore = document.getElementsByClassName(playerTwo.name)[0];
        playerAddScore.textContent = playerTwo.name + " score: " + playerTwo.score;
    }
}