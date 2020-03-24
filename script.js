console.log('test')
var x = totalClick =i = j= 0;
var playerIcon = '';
var player1Icon = 'images/pikachu.png';
var player2Icon = 'images/psyduck.png';
player = true;
var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
var totalBoxes = document.querySelectorAll('.box');

var setClick = function () {
    for (x = 0; x < totalBoxes.length; x++) {
        totalBoxes[x].addEventListener('click', onClick);
    }
}

var onClick = function (event) {
    var userInput = event.target;
    checkPlayer();
    var img = document.createElement('img');
    img.src = playerIcon;
    img.innerHTML = '';
    userInput.appendChild(img);
};

var checkPlayer = function () {
    if (player) {
        player = false;
        playerIcon = player1Icon;
        addToBoardArray(this.innerHTML)
        checkWin(this.innerHTML)
    } else {
        player = true;
        playerIcon = player2Icon;
        addToBoardArray(this.innerHTML)
        checkWin(this.innerHTML)
    }
}


var addToBoardArray = function (input) {
    // var y = 0;
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board.length; j++) {
            console.log(j + ' j');
            if(totalBoxes[j].innerHTML){
                console.log('4');
                board[i][j] = input;
                console.log(board[i][j] + 'board');
            }
            // y++;
        } 
    }
}

checkWin = function () {
    if (board[0][0] && board[0][1] && board[0][2] === userInput) {
        alert("You won!");
    } else if (board[1][0] && board[1][1] && board[1][2] === userInput) {
        alert("You won!");
    } else if (board[2][0] && board[2][1] && board[2][2] === userInput) {
        alert("You won!");
    } else if (board[0][0] && board[1][0] && board[2][0] === userInput) {
        alert("You won!");
    } else if (board[0][1] && board[1][1] && board[2][1] === userInput) {
        alert("You won!");
    } else if (board[0][2] && board[1][2] && board[2][2] === userInput) {
        alert("You won!");
    } else if (board[0][2] && board[1][1] && board[2][0] === userInput) {
        alert("You won!");
    } else if (board[0][0] && board[1][1] && board[2][2] === userInput) {
        alert("You won!");
    } else {
        console.log("nothing")
    }

}




setClick();