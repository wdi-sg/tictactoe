//////////////////////////////////////////////////////////////
let start = document.querySelector('#start');
let grid = document.getElementById('input');

let pOneInput = document.getElementsByTagName('input')[1]
let pTwoInput = document.getElementsByTagName('input')[2]
let pOneName = '';
let pTwoName = '';

let currentMove = null;
let moveHappened = false;
let gridInput = 3;
let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]];

let xScore = false;
let oScore = false;
let oScoreCounter = 0;
let xScoreCounter = 0;

//////////////////////////////////////////////////////////////
//                  Start & Refresh button                 //
//////////////////////////////////////////////////////////////
let startButton = function () {
    start.style.display = 'none';
    let inputsClass = document.getElementsByClassName('inputs');
    for (let i=0; i<inputsClass.length; i++){
        inputsClass[i].style.display = 'none';
    }
    startGame();
}
let setGrid = function (event) {
    gridInput = event.target.value;
    document.getElementsByClassName('inputs')[0].style.display = 'none';
}
let refreshButton = function () {
    location.reload();
}
let nextButton = function () {
    board = [[null, null, null],
    [null, null, null],
    [null, null, null]];
    currentMove = null;

    let spanGroup = document.getElementsByTagName('span');
    for(let i=0; i<spanGroup.length; i++) {
        spanGroup[i].textContent = '';
    }
}

let getPlayerOneName = function (event) {
    pOneName = event.target.value;
    document.getElementsByClassName('inputs')[1].style.display = 'none';
}
let getPlayerTwoName = function (event) {
    pTwoName = event.target.value;
    document.getElementsByClassName('inputs')[2].style.display = 'none';
}
start.addEventListener('click', startButton);
grid.addEventListener('change', setGrid)
pOneInput.addEventListener('change',getPlayerOneName)
pTwoInput.addEventListener('change',getPlayerTwoName)
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
    // let selectedDivArray = selectedDiv.parentElement.children;
    let selectedDivArray = Array.from(selectedDiv.parentElement.children);
    // console.log(selectedDivArray);
    console.log(selectedDivArray);
    let indexOfDiv = selectedDivArray.indexOf(selectedDiv);
    let indexOfSpan = Array.from(selectedSpan.parentElement.children).indexOf(selectedSpan);

    console.log('indexOfSpan:'+ indexOfSpan);
    console.log('indexOfDiv:'+ indexOfDiv);

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
    board[indexOfDiv-6][indexOfSpan] = currentMove;
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
    moveHappened = true;
    runCountdown();
}
//////////////////////////////////////////////////////////////
//                      Countdown Timer                      //
//////////////////////////////////////////////////////////////
 //assigned first so that can be accessed globally

// let runCountdown = function () {
//     let timer = 5;
//     let runInterval = null;
//     let startTimer = function () {              //runs 3rd
//         if (timer > 0) {
//             timer -= 1;
//         } else if (timer === 0) {
//             stopTimer();
//         } else if (timer < 0) {
//             console.log('This timer func should not run');
//         }
//         console.log(timer);
//     }
//     let stopTimer = function (){                //runs 4th
//         clearInterval(runInterval);
//     }
//     let startInterval = function (){
//         runInterval = setInterval(startTimer, 1000); //runs 2nd
//     }
// }
// start.addEventListener('click', runCountdown); //runs 1st

///// REFACTOR
let displayTimer = document.createElement('p');
let timer = 5;

let startTimer = function () {
    if (timer === 0) {
        alert('You lose!')
    } else if (timer > 0) {
        timer -= 1;
        displayTimer.textContent = timer;
    }
    console.log(timer);
}
let runCountdown = function () {
    let board = document.getElementById('board');
    let h1 = document.getElementsByTagName('h1')[0];
    displayTimer.textContent = timer;
    board.insertBefore(displayTimer, h1);

    if (moveHappened === true){
        stopTimer();
        timer = 5;
        moveHappened = false;
    }

    let runInterval;
    runInterval = setInterval(startTimer, 1000)
    let stopTimer = function (){
        clearInterval(runInterval);
    }
    setTimeout(stopTimer, 6000);

}
start.addEventListener('click', runCountdown); //runs 1st;
//////////////////////////////////////////////////////////////
//                        Start Game.                       //
//////////////////////////////////////////////////////////////
let startGame = function () {
    let divBoard = document.getElementById('board');

    let refresh = document.createElement('button');
    refresh.addEventListener('click', refreshButton);
    refresh.id = 'refresh'
    refresh.textContent = 'Restart Game'

    let nextGame = document.createElement('button');
    nextGame.addEventListener('click', nextButton);
    nextGame.id = 'next'
    nextGame.textContent = 'New Game'

    let p1Score = document.createElement('h1');
    p1Score.textContent = `${pOneName} score:`

    let p2Score = document.createElement('h1');
    p2Score.textContent = `${pTwoName} score:`

    for (let i=0; i<gridInput; i++){
        let div = document.createElement('div');
            div.classList.add('game-row')
        for (let j=0; j<gridInput; j++){
            let span = document.createElement('span');
            span.addEventListener('click', checkClick)
            span.classList.add('game-square')
            div.appendChild(span);
        }
        divBoard.appendChild(div);
    }
    divBoard.appendChild(p1Score);
    divBoard.appendChild(p2Score);
    divBoard.appendChild(refresh);
    divBoard.appendChild(nextGame);
}

//////////////////////////////////////////////////////////////
//                        Check  Win.                       //
//////////////////////////////////////////////////////////////
let checkWin = function () {
    let message = '';
    for (let i=0; i<board[0].length; i++){
        if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] === 'O'){
            message = `${pOneName} is the winner!`;
            oScore = true;
        } else if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] === 'O'){
            message = `${pOneName} is the winner!`;
            oScore = true;
        } else if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === 'O'){
            message = `${pOneName} is the winner!`;
            oScore = true;
        } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]&& board[0][2] === 'O'){
            message = `${pOneName} is the winner!`;
            oScore = true;
        }
    }
    for (let i=0; i<board[0].length; i++){
        if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] === 'X'){
            message = `${pTwoName} is the winner!`;
            xScore = true;
        } else if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] === 'X'){
            message = `${pTwoName} is the winner!`;
            xScore = true;
        } else if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === 'X'){
            message = `${pTwoName} is the winner!`;
            xScore = true;
        } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]&& board[0][2] === 'X'){
            message = `${pTwoName} is the winner!`;
            xScore = true;
        }
    }
    runCounter();
    if (message != '') {
        alert(`${message} Continue or restart the game!`);
        let p1 = document.getElementsByTagName('h1')[1];
        p1.textContent = `${pOneName} score: ${oScoreCounter}`
        let p2 = document.getElementsByTagName('h1')[2];
        p2.textContent = `${pTwoName} score: ${xScoreCounter}`
    }
    console.log(`xScore: ${xScore}, xScoreCounter:${xScoreCounter}`)
    console.log(`oScore: ${oScore}, oScoreCounter:${oScoreCounter}`)
}

let runCounter = function () {
    if (oScore === true){
        oScoreCounter ++;
        oScore = false;
    } else if (xScore === true) {
        xScoreCounter ++;
        xScore = false;
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