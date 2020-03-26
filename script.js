console.log('test')
var x = totalClick = i = j = 0;
var playerIcon = '';
var player1Icon = 'images/pikachu.png';
var player2Icon = 'images/psyduck.png';
var player = true;
var begin = true;
var end = false;
var turnCount = 0;
var currentPlayer = '';
var board = [
    ['n', 'n', 'n'],
    ['n', 'n', 'n'],
    ['n', 'n', 'n']
];

var createBoard = function () {
    if (begin) {
        for (var j = 0; j < 3; j++) {
            var createRows = document.createElement("div");
            createRows.classList = "boardrow";
            document.querySelector("#board").appendChild(createRows);
            for (var i = 0; i < 3; i++) {
                var createColumns = document.createElement("div");
                createColumns.classList = "box";
                createColumns.id = j + '-' + i;
                var selectRows = document.querySelectorAll(".boardrow");
                selectRows[j].appendChild(createColumns);
            }
        }
        var totalBoxes = document.querySelectorAll('.box');
        for (x = 0; x < totalBoxes.length; x++) {
            totalBoxes[x].addEventListener('click', onClick);
        }
    }
    title.removeChild(start)
    begin = false;
}

var clearGame = function () {
    if (!begin) {
        // for (i = 0; i < 3; i++) {
        //     for (j = 0; j < 3; j++) {
        //         board[i][j] = '';
        //     }
        // }
        // var images = document.querySelectorAll('.img')
        // var allBoxes = document.querySelectorAll('.box')
        // allBoxes.removeChild(images);
        // var title = document.querySelector('.h1')
        // var reset = document.querySelector(reset)
        // title.removeChild(reset)
        //end = false;
        begin = true;
    }
}

var checkWin = function () {
    if (board[0][0] === currentPlayer && board[0][1] === currentPlayer && board[0][2] === currentPlayer) {
        alert(currentPlayer + " has won!");
        end = true;
        return;
    } else if (board[1][0] === currentPlayer && board[1][1] === currentPlayer && board[1][2] === currentPlayer) {
        alert(currentPlayer + " has won!");
        end = true;
        return;
    } else if (board[2][0] === currentPlayer && board[2][1] === currentPlayer && board[2][2] === currentPlayer) {
        alert(currentPlayer + " has won!");
        end = true;
        return;
    } else if (board[0][0] === currentPlayer && board[1][0] === currentPlayer && board[2][0] === currentPlayer) {
        alert(currentPlayer + " has won!");
        end = true;
        return;
    } else if (board[0][1] === currentPlayer && board[1][1] === currentPlayer && board[2][1] === currentPlayer) {
        alert(currentPlayer + " has won!");
        end = true;
        return;
    } else if (board[0][2] === currentPlayer && board[1][2] === currentPlayer && board[2][2] === currentPlayer) {
        alert(currentPlayer + " has won!");
        end = true;
        return;
    } else if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        alert(currentPlayer + " has won!");
        end = true;
        return;
    } else if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        alert(currentPlayer + " has won!");
        end = true;
        return;
    } else if (turnCount === 9) {
        alert("It is a draw!");
        end = true;
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
        if(board[input1][input2] === 'n')
        player = false;
        playerIcon = player1Icon;
        currentPlayer = 'Player 1';
        board[input1][input2] = currentPlayer;
        turnCount++;
        checkWin(currentPlayer)
    } else {
        if(board[input1][input2] === 'n')
        player = true;
        playerIcon = player2Icon;
        currentPlayer = 'Player 2';
        board[input1][input2] = currentPlayer;
        turnCount++;
        checkWin(currentPlayer)
    }
}

var onClick = function (event) {
    if (!end) {
        var userInput = event.target;
        checkPlayer(userInput);
        var img = document.createElement('img');
        img.src = playerIcon;
        img.innerHTML = '';
        userInput.appendChild(img);
    }
};

if (begin) {
    var start = document.createElement('button');
    start.innerText = 'Start Game';
    var title = document.querySelector('.h1')
    start.style = 'background-color: #00ff2ba6; display:block; text-align:center; align-items:center; position:relative; margin-left:auto; margin-right:auto;'
    start.addEventListener('click', createBoard)
    title.appendChild(start)
}

// var checkEnd = function () {
//     if (end) {
// var reset = document.createElement('button');
// reset.innerText = 'Reset';
// var title = document.querySelector('.h1')
// reset.style = 'background-color: yellow; display:block; text-align:center; align-items:center; position:relative; margin-left:auto; margin-right:auto;'
// reset.addEventListener('click', clearGame)
// title.appendChild(reset)
//         return begin = true;
//     }
// }