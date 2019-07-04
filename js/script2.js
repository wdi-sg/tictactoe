
//////////                  VERSION 1                   /////////////

// //////////////////////////////////////////////////////////////
// let start = document.querySelector('#start');
// let currentMove = null;

// //////////////////////////////////////////////////////////////
// //                  Start & Refresh button                 //
// //////////////////////////////////////////////////////////////

// let startButton = () => {
//     start.style.display = 'none';
//     startGame();
// }
// let refreshButton = () => {
//     location.reload();
// }
// start.addEventListener('click', startButton);

// //////////////////////////////////////////////////////////////
// //                  Check Click & Toggle Move               //
// //////////////////////////////////////////////////////////////

// let checkClick = (event) => {
//     let spanGroup = document.getElementsByTagName('span');
//     for (let i=0; i<spanGroup.length; i++){
//         if (event.target === spanGroup[i] ) {
//             if (event.target.textContent) {
//                 // do nothing
//             } else {
//                 toggleMove();
//                 spanGroup[i].textContent = currentMove;
//             }
//         }
//     }
// }
// let toggleMove = () => {
//     if (currentMove === 'O') {
//         currentMove = 'X';
//     } else if (currentMove === 'X'){
//         currentMove = 'O';
//     } else if (currentMove === null){
//         currentMove = 'O';
//         event.target.textContent = 'O';
//     }
// }
// //////////////////////////////////////////////////////////////
// //                        Start Game.                       //
// //////////////////////////////////////////////////////////////

// let startGame = function () {
//     let divBoard = document.getElementById('board');
//     let divOne = document.createElement('div');
//     let divTwo = document.createElement('div');
//     let divThree = document.createElement('div');

//     let refresh = document.createElement('button');
//     refresh.addEventListener('click', refreshButton);
//     refresh.id = 'refresh'
//     refresh.textContent = 'Restart Game'

//     divOne.classList.add('game-row')
//     divTwo.classList.add('game-row')
//     divThree.classList.add('game-row')

//     for (let i=0; i<3; i++){
//         let spanOne = document.createElement('span');
//         let spanTwo = document.createElement('span');
//         let spanThree = document.createElement('span');

//         spanOne.addEventListener('click', checkClick)
//         spanOne.classList.add('game-square')
//         spanTwo.addEventListener('click', checkClick)
//         spanTwo.classList.add('game-square')
//         spanThree.addEventListener('click', checkClick)
//         spanThree.classList.add('game-square')

//         divOne.appendChild(spanOne);
//         divTwo.appendChild(spanTwo);
//         divThree.appendChild(spanThree);
//     }
//     divBoard.appendChild(divOne);
//     divBoard.appendChild(divTwo);
//     divBoard.appendChild(divThree);
//     divBoard.appendChild(refresh);
// }
// //////////////////////////////////////////////////////////////



//////////                  VERSION 2                   /////////////




// //////////////////////////////////////////////////////////////
// let start = document.querySelector('#start');
// let currentMove = null;

// //////////////////////////////////////////////////////////////
// //                  Start & Refresh button                 //
// //////////////////////////////////////////////////////////////
// let startButton = function () {
//     start.style.display = 'none';
//     startGame();
// }
// let refreshButton = function () {
//     location.reload();
// }
// start.addEventListener('click', startButton);
// //////////////////////////////////////////////////////////////
// //                  Check Click & Toggle Move               //
// //////////////////////////////////////////////////////////////

// let checkClick = function (event) {
//     let spanGroup = document.getElementsByTagName('span');
//     for (let i=0; i<spanGroup.length; i++){
//         if (event.target === spanGroup[i] ) {
//             if (event.target.textContent) {
//                 // do nothing
//             } else {
//                 toggleMove();
//                 spanGroup[i].textContent = currentMove;
//             }
//         }
//     }
// }
// let toggleMove = function () {
//     if (currentMove === 'O') {
//         currentMove = 'X';
//     } else if (currentMove === 'X'){
//         currentMove = 'O';
//     } else if (currentMove === null){
//         currentMove = 'O';
//     event.target.textContent = 'O';
//     }
// }
// //////////////////////////////////////////////////////////////
// //                        Start Game.                       //
// //////////////////////////////////////////////////////////////

// let startGame = function () {
//     let divBoard = document.getElementById('board');

//     let refresh = document.createElement('button');
//     refresh.addEventListener('click', refreshButton);
//     refresh.id = 'refresh'
//     refresh.textContent = 'Restart Game'

//     for (let i=0; i<3; i++){
//         let div = document.createElement('div');
//             div.classList.add('game-row')
//         for (let j=0; j<3; j++){
//             let span = document.createElement('span');
//             span.addEventListener('click', checkClick)
//             span.classList.add('game-square')
//             div.appendChild(span);
//         }
//         divBoard.appendChild(div);
//     }
//     divBoard.appendChild(refresh);
// }
// //////////////////////////////////////////////////////////////





//              LATEST VERSION                          //


//////////////////////////////////////////////////////////////
// let start = document.querySelector('#start');
// let grid = document.getElementById('input');
// let currentMove = null;
// let gridInput = 3;
// let board = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]
// let xScore = false;
// let oScore = false;

// let oScoreCounter = 0;
// let xScoreCounter = 0;

// //////////////////////////////////////////////////////////////
// //                  Start & Refresh button                 //
// //////////////////////////////////////////////////////////////
// let startButton = function () {
//     start.style.display = 'none';
//     grid.style.display = 'none';
//     startGame();
// }
// let setGrid = function (event) {
//     gridInput = event.target.value;
//     grid.value = '';
//     start.style.display = 'none';
//     grid.style.display = 'none';
//     startGame();
// }
// let refreshButton = function () {
//     location.reload();
// }
// let nextButton = function () {
//     board = [[null, null, null],
//     [null, null, null],
//     [null, null, null]];
//     currentMove = null;

//     let spanGroup = document.getElementsByTagName('span');
//     for(let i=0; i<spanGroup.length; i++) {
//         spanGroup[i].textContent = '';
//     }
// }
// start.addEventListener('click', startButton);
// grid.addEventListener('change', setGrid)
// //////////////////////////////////////////////////////////////
// //                  Check Click & Toggle Move               //
// //////////////////////////////////////////////////////////////

// let checkClick = function (event) {
//     //get Parent Element of event.target    in this case is Div
//     let selectedDiv = event.target.parentElement;
//     //get event.target    in this case is Span
//     let selectedSpan = event.target;
//     //get the index number of both the selected Div and Span
//     //this is useful to figure out if user clicks Div 2, Span 2 for eg..
//     let indexOfDiv = Array.from(selectedDiv.parentElement.children).indexOf(selectedDiv);
//     let indexOfSpan = Array.from(selectedSpan.parentElement.children).indexOf(selectedSpan);

//     console.log('indexOfSpan:'+indexOfSpan);
//     console.log('indexOfDiv:'+indexOfDiv);

//     let spanGroup = document.getElementsByTagName('span');
//     for (let i=0; i<spanGroup.length; i++){
//         if (event.target === spanGroup[i] ) {
//             if (event.target.textContent) {
//                 // do nothing
//             } else {
//                 toggleMove();
//                 spanGroup[i].textContent = currentMove;
//             }
//         }
//     }
//     //now that I have both the index of Div and Span, I can reassign the board to be equal to the latest currentMove
//     board[indexOfDiv-3][indexOfSpan] = currentMove;
//     console.log(board);
//     checkWin();
// }

// let toggleMove = function () {
//     if (currentMove === 'O') {
//         currentMove = 'X';
//     } else if (currentMove === 'X'){
//         currentMove = 'O';
//     } else if (currentMove === null){
//         currentMove = 'O';
//     event.target.textContent = 'O';
//     }
// }
// //////////////////////////////////////////////////////////////
// //                        Start Game.                       //
// //////////////////////////////////////////////////////////////
// let startGame = function () {
//     let divBoard = document.getElementById('board');

//     let refresh = document.createElement('button');
//     refresh.addEventListener('click', refreshButton);
//     refresh.id = 'refresh'
//     refresh.textContent = 'Restart Game'

//     let nextGame = document.createElement('button');
//     nextGame.addEventListener('click', nextButton);
//     nextGame.id = 'next'
//     nextGame.textContent = 'Continue Game'

//     let p1Score = document.createElement('h1');
//     p1Score.textContent = `'O' Score:`

//     let p2Score = document.createElement('h1');
//     p2Score.textContent = `'X' Score:`

//     for (let i=0; i<gridInput; i++){
//         let div = document.createElement('div');
//             div.classList.add('game-row')
//         for (let j=0; j<gridInput; j++){
//             let span = document.createElement('span');
//             span.addEventListener('click', checkClick)
//             span.classList.add('game-square')
//             div.appendChild(span);
//         }
//         divBoard.appendChild(div);
//     }
//     divBoard.appendChild(p1Score);
//     divBoard.appendChild(p2Score);
//     divBoard.appendChild(refresh);
//     divBoard.appendChild(nextGame);
// }

// //////////////////////////////////////////////////////////////
// //                        Start Game.                       //
// //////////////////////////////////////////////////////////////
// let checkWin = function () {
//     let message = '';
//     for (let i=0; i<board[0].length; i++){
//         if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] === 'O'){
//             message = 'Player O is the winner!';
//             oScore = true;
//         } else if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] === 'O'){
//             message = 'Player O is the winner!';
//             oScore = true;
//         } else if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === 'O'){
//             message = 'Player O is the winner!';
//             oScore = true;
//         } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]&& board[0][2] === 'O'){
//             message = 'Player O is the winner!';
//             oScore = true;
//         }
//     }
//     for (let i=0; i<board[0].length; i++){
//         if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] === 'X'){
//             message = 'Player X is the winner!';
//             xScore = true;
//         } else if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] === 'X'){
//             message = 'Player X is the winner!';
//             xScore = true;
//         } else if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === 'X'){
//             message = 'Player X is the winner!';
//             xScore = true;
//         } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]&& board[0][2] === 'X'){
//             message = 'Player X is the winner!';
//             xScore = true;
//         }
//     }
//     runCounter();
//     if (message != '') {
//         alert(`${message} Continue or restart the game!`);
//         let p1 = document.getElementsByTagName('h1')[1];
//         p1.textContent = `'O' Score: ${oScoreCounter}`
//         let p2 = document.getElementsByTagName('h1')[2];
//         p2.textContent = `'X' Score: ${xScoreCounter}`
//     }
//     console.log(`xScore: ${xScore}, xScoreCounter:${xScoreCounter}`)
//     console.log(`oScore: ${oScore}, oScoreCounter:${oScoreCounter}`)
// }

// let runCounter = function () {
//     if (oScore === true){
//         oScoreCounter ++;
//         oScore = false;
//     } else if (xScore === true) {
//         xScoreCounter ++;
//         xScore = false;
//     }
// }
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