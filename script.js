var playerTurn = "X";
var winMsg = document.querySelector('#win-message');

var board = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
];

var message = function(msg) {
    var displayTurn = document.getElementById("display-turn");
    displayTurn.textContent = msg;
}



var click = function(){
    this.textContent = playerTurn;
    switchTurn();
    console.log(this);
var sq = document.querySelectorAll('td');
        board[0][0] = sq[0].innerText;
        board[0][1] = sq[1].innerText;
        board[0][2] = sq[2].innerText;

        board[1][0] = sq[3].innerText;
        board[1][1] = sq[4].innerText;
        board[1][2] = sq[5].innerText;

        board[2][0] = sq[6].innerText;
        board[2][1] = sq[7].innerText;
        board[2][2] = sq[8].innerText;

    if (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O"){
    winMsg.innerText = "Player O Wins!";
} else if (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O") {
    winMsg.innerText = "Player O Wins!";
} else if (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O"){
    winMsg.innerText = "Player O Wins!";
} else if (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") {
    winMsg.innerText = "Player O Wins!";
} else if (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") {
    winMsg.innerText = "Player O Wins!";
} else if (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O") {
    winMsg.innerText = "Player O Wins!";
} else if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
    winMsg.innerText = "Player O Wins!";
} else if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") {
    winMsg.innerText = "Player O Wins!";
}
if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X"){
    winMsg.innerText = "Player X Wins!";
} else if (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") {
    winMsg.innerText = "Player X Wins!";
} else if (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X"){
    winMsg.innerText = "Player X Wins!";
} else if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") {
    winMsg.innerText = "Player X Wins!";
} else if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") {
    winMsg.innerText = "Player X Wins!";
} else if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") {
    winMsg.innerText = "Player X Wins!";
} else if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
    winMsg.innerText = "Player X Wins!";
} else if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
    winMsg.innerText = "Player X Wins!";
}
}

switchTurn = function() {
    if (playerTurn === "X") {
        playerTurn = "O";
    } else {
        playerTurn = "X"
    }
}

var table = document.querySelector('#table');

for (var r = 0; r < 3; r++){
  var row = document.createElement('tr');
  for (var s = 0; s < 3; s++){
    var square = document.createElement('td');
    square.classList.add('square');
    row.appendChild(square);
    square.addEventListener('click', click);
  }
  table.appendChild(row);
}

console.log(document.querySelector('tr'));
console.log(document.querySelectorAll('td'));



// gameStart();