console.log('test')
var x = totalClick = i = j = 0;
var playerIcon = '';
var player1Icon = 'images/pikachu.png';
var player2Icon = 'images/psyduck.png';
player = true;
var currentPlayer = '';
var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
var totalBoxes = document.querySelectorAll('.box');

var setClick = function () {
    for (x = 0; x < totalBoxes.length; x++) {
        totalBoxes[x].addEventListener('click', onClick);
    }
}

var addToBoardArray = function (input) {
    // for (i = 0; i < board.length; i++) {
    //     for (j = 0; j < board.length; j++) {
    //         if (true) {
    //             console.log('4');
    //             board[i][j] = currentPlayer;
    //             console.log(currentPlayer + ' = currentPlayer')
    //             console.log(board[i][j] + 'board');

    //         }
    //     }
    // }
}

var checkWin = function () {
    if (board[0][0] === currentPlayer && board[0][1] === currentPlayer && board[0][2] === currentPlayer) {
        alert("You won!");
        return;
    } else if (board[1][0] === currentPlayer && board[1][1] === currentPlayer && board[1][2] === currentPlayer) {
        alert("You won!");
        return;
    } else if (board[2][0] === currentPlayer && board[2][1] === currentPlayer && board[2][2] === currentPlayer) {
        alert("You won!");
        return;
    } else if (board[0][0] === currentPlayer && board[1][0] === currentPlayer && board[2][0] === currentPlayer) {
        alert("You won!");
        return;
    } else if (board[0][1] === currentPlayer && board[1][1] === currentPlayer && board[2][1] === currentPlayer) {
        alert("You won!");
        return;
    } else if (board[0][2] === currentPlayer && board[1][2] === currentPlayer && board[2][2] === currentPlayer) {
        alert("You won!");
        return;
    } else if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        alert("You won!");
        return;
    } else if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        alert("You won!");
        return;
    } else {
        console.log("nothing")
        return;
    }

}

var checkPlayer = function (target) {
    var temp = target;
    var tempId = temp.id;
    var input = tempId.split('-');
    var input1 = parseInt(input[0])
    var input2 = parseInt(input[1])
    if (player) {
        player = false;
        playerIcon = player1Icon;
        currentPlayer = 'player1';
        board[input1][input2] = currentPlayer;
        checkWin(currentPlayer)
    } else {
        player = true;
        playerIcon = player2Icon;
        currentPlayer = 'player2';
        board[input1][input2] = currentPlayer;
        checkWin(currentPlayer)
    }
}

var onClick = function (event) {
    //console.log(event + ' = event');
    var userInput = event.target;
    //console.log(userInput + ' = userInput');
    //console.log(event.target + ' = event.target')
    checkPlayer(userInput);
    var img = document.createElement('img');
    img.src = playerIcon;
    img.innerHTML = '';
    userInput.appendChild(img);
};

var reset = document.createElement('button');
reset.innerText = 'Reset';
document.body.appendChild(reset)




setClick();