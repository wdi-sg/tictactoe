//////////////////////////////////////////////////////////////
let start = document.querySelector('#start');
let currentMove = null;
let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

//////////////////////////////////////////////////////////////
//                  Start & Refresh button                 //
//////////////////////////////////////////////////////////////
let startButton = function () {
    start.style.display = 'none';
    startGame();
}
let refreshButton = function () {
    location.reload();
}
start.addEventListener('click', startButton);
//////////////////////////////////////////////////////////////
//                  Check Click & Toggle Move               //
//////////////////////////////////////////////////////////////

let checkClick = function (event) {
    //get Parent Element of event.target    in this case is Div
    let selectedDiv = event.target.parentElement;
    //get event.target    in this case is Span
    let selectedSpan = event.target;
    //get the index number of both the selected Div and Span
    //this is useful to figure out if user clicks Div 2, Span 2 for eg..
    let indexOfDiv = Array.from(selectedDiv.parentElement.children).indexOf(selectedDiv);
    let indexOfSpan = Array.from(selectedSpan.parentElement.children).indexOf(selectedSpan);

    console.log(indexOfSpan);
    console.log(indexOfDiv);

    let spanGroup = document.getElementsByTagName('span');
    for (let i=0; i<spanGroup.length; i++){
        if (event.target === spanGroup[i] ) {
            if (event.target.textContent) {
                // do nothing
            } else {
                toggleMove();
                spanGroup[i].textContent = currentMove;
            }
        }
    }
    //now that I have both the index of Div and Span, I can reassign the board to be equal to the latest currentMove
    board[indexOfDiv-2][indexOfSpan] = currentMove;
    console.log(board);
    checkWin();
}

let toggleMove = function () {
    if (currentMove === 'O') {
        currentMove = 'X';
    } else if (currentMove === 'X'){
        currentMove = 'O';
    } else if (currentMove === null){
        currentMove = 'O';
    event.target.textContent = 'O';
    }
}
//////////////////////////////////////////////////////////////
//                        Start Game.                       //
//////////////////////////////////////////////////////////////
let startGame = function () {
    let divBoard = document.getElementById('board');

    let refresh = document.createElement('button');
    refresh.addEventListener('click', refreshButton);
    refresh.id = 'refresh'
    refresh.textContent = 'Restart Game'

    for (let i=0; i<5; i++){
        let div = document.createElement('div');
            div.classList.add('game-row')
        for (let j=0; j<5; j++){
            let span = document.createElement('span');
            span.addEventListener('click', checkClick)
            span.classList.add('game-square')
            div.appendChild(span);
        }
        divBoard.appendChild(div);
    }
    divBoard.appendChild(refresh);
}
//////////////////////////////////////////////////////////////
//                        Start Game.                       //
//////////////////////////////////////////////////////////////
let checkWin = function () {
    let message = '';
    for (let i=0; i<board[0].length; i++){
        if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] === 'O'){
            message = 'Player O is the winner!';
        } else if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] === 'O'){
            message = 'Player O is the winner!';
        } else if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === 'O'){
            message = 'Player O is the winner!';
        } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]&& board[0][2] === 'O'){
            message = 'Player O is the winner!';
        }
    }
    for (let i=0; i<board[0].length; i++){
        if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] === 'X'){
            message = 'Player X is the winner!';
        } else if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] === 'X'){
            message = 'Player X is the winner!';
        } else if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === 'X'){
            message = 'Player X is the winner!';
        } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]&& board[0][2] === 'X'){
            message = 'Player X is the winner!';
        }
    }
    if (message != '') {
        alert(message);
        alert('Please restart the game!');
    }
}

//////////////////////////////////////////////////////////////

// let checkWin = function () {
//     for (let i=0; i<board.length; i++){
//         for (let j=0; j<board.length; j++){
//             if(board[i][j] === board[i][j+1] && board[i][j+1] === board[i][j+2] && board[i][j] != null){
//                 console.log('win');
//             } else if (board[i][j] === board[i+1][j] && board[i+1][j] === board[i+2][j]){
//                 console.log('win');
//             } else if (board[i][j] === board[i+1][j+1] && board[i+1][j+1] === board[i+2][j+2]){
//                 console.log('win');
//             }
//         }
//     }
// }