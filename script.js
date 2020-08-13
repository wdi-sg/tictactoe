//player win lose
var playerWinLose = function (result) {
    if (result > 0) {
        var output = "player A wins";
    } else { var output = "player B wins" }
}

var horizontalWin = function (board) {
    for (i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            var output = "win"
        }
     }
}
var display = document.createElement('div');
display.className = "board";
document.body.appendChild(display);

var currentPlayer = document.createElement('div');
currentPlayer.innerText = "Current Player:";

var playerOutput = document.createElement('output');
playerOutput.className = "nameOutput";

currentPlayer.appendChild(playerOutput);


display.appendChild(currentPlayer);

var button = document.createElement('button');
button.innerText = "Start";
display.appendChild(button);

var createTable = document.createElement('table');



var start = function (){
      
    var createTable = document.createElement('table');
    

    for (var r = 0; r < 3; r++) {
        var row = createTable.insertRow(-1);
        for (var c = 0; c < 3; c++) {
            var cell = row.insertCell(-1);

            display.appendChild(createTable);
            createTable.rows[r].cells[c].innerHTML = " "
            createTable.rows[r].cells[c].style.border = "1px solid black"
            createTable.rows[r].cells[c].style.height = "25px"
            createTable.rows[r].cells[c].style.width = "25px"

            eachCell = createTable.querySelectorAll('td');

            var handleCLick = function (e) {
                var axe = e.target
                if (currentPlayer === true)
                axe.innerHTML = "X"
            }

            

            eachCell.forEach(function (cell) {
                cell.addEventListener('click', handleCLick, { once: true })
                
            })

         
        }
    }
    
}

button.addEventListener('click', start(), { once: true })

