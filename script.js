var ticboard = document.querySelector('div');

var p1board = [null, null, null, null, null, null, null, null, null];
var p2board = [null, null, null, null, null, null, null, null, null];

var a = document.querySelectorAll('span')[0];
var b = document.querySelectorAll('span')[1];
var c = document.querySelectorAll('span')[2];
var d = document.querySelectorAll('span')[3];
var e = document.querySelectorAll('span')[4];
var f = document.querySelectorAll('span')[5];
var g = document.querySelectorAll('span')[6];
var h = document.querySelectorAll('span')[7];
var i = document.querySelectorAll('span')[8];

tictactoe = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8
}

var startButton = document.querySelector('button');

function startGame() {
    startButton.classList.remove('show');
    startButton.classList.add('hide');
    ticboard.classList.remove('hide')
    ticboard.classList.add('show')
}

startButton.addEventListener('click', startGame)

var resetButton = document.getElementById('restart')

function reset() {
    location.reload();
}

resetButton.addEventListener('click', reset)

var playerTurn = 0;
i = 0;

var gameSquares = document.getElementsByClassName('game-square');
//changes colour for the square if clicked
for (i = 0; i < gameSquares.length; i++) {
    gameSquares[i].addEventListener('click', turnSquare)
}

function turnSquare() {
    var clicked = event.target;
    if (playerTurn % 2 === 0 && playerTurn < 9) {
        playerTurn++;
        console.log(`Player turn: ${playerTurn}`);
        clicked.style.backgroundColor = '#30c6d1';
            if (clicked === a) {
                p1board[tictactoe['a']] = 'x';
            } else if (clicked === b) {
                p1board[tictactoe['b']] = 'x';
            } else if (clicked === c) {
                p1board[tictactoe['c']] = 'x';
            }  else if (clicked === d) {
                p1board[tictactoe['d']] = 'x';
            } else if (clicked === e) {
                p1board[tictactoe['e']] = 'x';
            } else if (clicked === f) {
                p1board[tictactoe['f']] = 'x';
            } else if (clicked === g) {
                p1board[tictactoe['g']] = 'x';
            } else if (clicked === h) {
                p1board[tictactoe['h']] = 'x';
            } else {
                p1board[tictactoe['i']] = 'x';
            }
            checkForWin('Player 1');
    } else if (playerTurn % 2 === 1 && playerTurn < 9) {
        playerTurn++;
        console.log(playerTurn);
        clicked.style.backgroundColor = '#991d44';
            if (clicked === a) {
                p2board[tictactoe['a']] = 'x';
            } else if (clicked === b) {
                p2board[tictactoe['b']] = 'x';
            } else if (clicked === c) {
                p2board[tictactoe['c']] = 'x';
            }  else if (clicked === d) {
                p2board[tictactoe['d']] = 'x';
            } else if (clicked === e) {
                p2board[tictactoe['e']] = 'x';
            } else if (clicked === f) {
                p2board[tictactoe['f']] = 'x';
            } else if (clicked === g) {
                p2board[tictactoe['g']] = 'x';
            } else if (clicked === h) {
                p2board[tictactoe['h']] = 'x';
            } else {
                p2board[tictactoe['i']] = 'x';
            }
            checkForWin('Player 2')
    } else {
    alert("Out of moves!")
    }
}


var player;

//checkForWin argument is the player, and checks for the 8 possible combinations
function checkForWin(player) {
    if (player === 'Player 1') {
        var board = p1board;
             if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x') {
                alert(`${player} wins!`)
            } else if (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') {
                alert(`${player} wins!`)
            } else if (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
                alert(`${player} wins!`)
            } else if (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') {
                alert(`${player} wins!`)
            } else if (board[2] === 'x' && board[4] === 'x' && board[6] === 'x') {
                alert(`${player} wins!`)
            } else if (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') {
                alert(`${player} wins!`)
            } else if (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') {
                alert(`${player} wins!`)
            } else if (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') {
                alert(`${player} wins!`)
        }
        } else {
        var board = p2board;
             if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x') {
                alert(`${player} wins!`)
            } else if (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') {
                alert(`${player} wins!`)
            } else if (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
                alert(`${player} wins!`)
            } else if (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') {
                alert(`${player} wins!`)
            } else if (board[2] === 'x' && board[4] === 'x' && board[6] === 'x') {
                alert(`${player} wins!`)
            } else if (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') {
                alert(`${player} wins!`)
            } else if (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') {
                alert(`${player} wins!`)
            } else if (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') {
                alert(`${player} wins!`)
    }
}}