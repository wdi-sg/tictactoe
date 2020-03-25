var winner = "";
var board = {
    top: ["1", "2", "3"],
    middle: ["4", "5", "6"],
    bottom: ["7", "8", "9"]
};
var turnCounter = 1;
var value = "";


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

function turnIndicator() {
    var XO = "";
    var turn = turnCounter % 2;
    if (turn == 1) {
        XO = "❌";
    } else if (turn == 0) {
        XO = "⭕";
    }
    return XO;
}
var gameOver = false;

function onClick(clickedId) {
    value = turnIndicator();
    //gameOver = winCondition();
    updateTile(clickedId);
    mapTileGrid(clickedId);
    updateTurn();
    console.log(value);

}

function updateTurn() {
    gameOver = winCondition();
    var turnText = document.getElementById("turn");
    if (!gameOver) {
        if (value === "❌") {
            turnText.innerText = "Player ⭕ Turn";
        } else if (value === "⭕") {
            turnText.innerText = "Player ❌ Turn"
        }
    } else if (gameOver) {
        disableAll();
        if (winner != "It's a draw!") {
            turnText.innerText = `Game Over! ${winner} wins!`;
        } else {
            turnText.innerText = `Game Over! ${winner}`;
        }
    }
    turnCounter++;
}

function disableAll() {
    var tiles = document.getElementsByClassName("tile")
    for (id in tiles) {
        tiles[id].disabled = "disabled";
    }
};

function updateTile(clickedId) {
    var tile = document.getElementById(clickedId);
    console.log(`${value}, Turn : ${turnCounter}, Tile ${clickedId} clicked`);
    tile.disabled = "disabled";
    value = turnIndicator();
    if (value === "⭕") {
        tile.innerText = "⭕";
        tile.style.backgroundColor = "magenta";
    } else if (value === "❌") {
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
    if (board.top[0] == board.top[1] && board.top[1] == board.top[2]) {
        win = true;
        winner = board.top[0];
        setWinnerColor(1,2,3);
    } else if (board.middle[0] == board.middle[1] && board.middle[1] == board.middle[2]) {
        win = true;
        winner = board.middle[0];
        setWinnerColor(4,5,6);
    } else if (board.bottom[0] == board.bottom[1] && board.bottom[1] == board.bottom[2]) {
        win = true;
        winner = board.bottom[0];
        setWinnerColor(7,8,9);
        // Vertical win
    } else if (board.top[0] == board.middle[0] && board.middle[0] == board.bottom[0]) {
        win = true;
        winner = board.top[0];
        setWinnerColor(1,4,7);
    } else if (board.top[1] == board.middle[1] && board.middle[1] == board.bottom[1]) {
        win = true;
        winner = board.top[1];
        setWinnerColor(2,5,8);
    } else if (board.top[2] == board.middle[2] && board.middle[2] == board.bottom[2]) {
        win = true;
        winner = board.top[2];
        setWinnerColor(3,6,9);
        //Diagonal win
    } else if (board.top[0] == board.middle[1] && board.middle[1] == board.bottom[2]) {
        win = true;
        winner = board.top[0];
        setWinnerColor(1,5,9);
    } else if (board.top[2] == board.middle[1] && board.middle[1] == board.bottom[0]) {
        win = true;
        winner = board.top[2];
        setWinnerColor(3,5,7);
    } else if (turnCounter == 9) {
        win = true;
        winner = "It's a draw!"
    }
    return win;
}

function setWinnerColor(int1, int2, int3) {
    var tileIds = [int1, int2, int3];
    var tile1 = document.getElementById(int1);
    tile1.style.backgroundColor = "yellow";
    var tile2 = document.getElementById(int2);
    tile2.style.backgroundColor = "yellow";
    var tile3 = document.getElementById(int3);
    tile3.style.backgroundColor = "yellow";
}