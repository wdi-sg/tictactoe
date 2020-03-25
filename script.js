var winner = "";
var board = {
    top: ["", "", ""],
    middle: ["", "", ""],
    bottom: ["", "", ""]
};
var turnCounter = 1;
var value = "X";


// function initialize() {
//     winner = "";
//     board = {
//         top: ["", "", ""],
//         middle: ["", "", ""],
//         bottom: ["", "", ""]
//     };
//     playerTurn = true;
//     //value = turnIndicator();
// }
console.log("Tic Tac Toe");
console.log(value)

function turnIndicator() {
    var XO = "";
    var turn = turnCounter%2;
    if ( turn == 1) {
        XO = "X";
    } else if (turn == 0) {
        XO = "O";
    }
    return XO;
}
var gameOver = false;

function onClick(clickedId) {
    gameOver = winCondition();
    mapTileGrid(clickedId);
    updateTurn();
    updateTile(clickedId);
    console.log(value);

}
function updateTurn(){
    var turnText = document.getElementById("turn");
    if (turnCounter <=9 || gameOver == false){
        if (value === "X") {
        turnText.innerText = "Player ⭕ Turn";
    } else if (value === "O") {
        turnText.innerText = "Player ❌ Turn"
    }
    } else if (gameOver == true){
        alert (`Game Over!`)
    }
    turnCounter ++;
}
function updateTile(clickedId) {
    var tile = document.getElementById(clickedId);
    console.log(`Turn : ${turnCounter}, Tile ${clickedId} clicked`);
    tile.disabled = "disabled";
    value = turnIndicator();
    if (value === "X") {
        tile.innerText = "⭕";
         tile.style.backgroundColor = "magenta";
    } else if (value === "O") {
        tile.innerText = "❌"
        tile.style.backgroundColor = "cyan";

    }
    console.log(board);
}

function mapTileGrid(clickedId) {
    var id = clickedId;
    switch (id) {
        case "1":
            board.top[0] = value;

            break;
        case "2":
            board.top[1] = value;
            break;
        case "3":
            board.top[2] = value;
            break;
        case "4":
            board.middle[0] = value;;
            break;
        case "5":
            board.middle[1] = value;
            break;
        case "6":
            board.middle[2] = value;
            break;
        case "7":
            board.bottom[0] = value;
            break;
        case "8":
            board.bottom[1] = value;
            break;
        case "9":
            board.bottom[2] = value;
            break;

        default:
            // statements_def
            break;
    }
}

function winCondition() {
    var win = false;
    // Horizontal win
    if (board.top[0] == board.top[1] == board.top[2]) {
        win = true;
        winner = board.top[0];
    } else if (board.middle[0] == board.middle[1] == board.middle[2]) {
        win = true;
        winner = board.middle[0];
    } else if (board.bottom[0] == board.bottom[1] == board.bottom[2]) {
        win = true;
        winner = board.bottom[0];
        // Vertical win
    } else if (board.top[0] == board.middle[0] == board.bottom[0]) {
        win = true;
        winner = board.top[0];
    } else if (board.top[1] == board.middle[1] == board.bottom[1]) {
        win = true;
        winner = board.top[1];
    } else if (board.top[2] == board.middle[2] == board.bottom[2]) {
        win = true;
        winner = board.top[2];
        //Diagonal win
    } else if (board.top[0] == board.middle[1] == board.bottom[2]) {
        win = true;
        winner = board.top[0];
    } else if (board.top[2] == board.middle[1] == board.bottom[0]) {
        win = true;
        winner = board.top[2];
    } else {
        win = true;
        winner = "Draw"
    }
    return win;
}