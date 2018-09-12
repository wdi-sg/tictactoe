var gridArray = document.getElementsByClassName("box");
var userChoice = [];
var computerChoice = [];

var ticTacToe = [
    [],
    [],
    []
];


var game = function() {

    var id = this.id;

    if (userChoice.includes(id) === false && computerChoice.includes(id) === false) {

        userChoice.push(id);
        var coordinates = id.split("");
        var row = coordinates[0];
        var column = coordinates[1];
        ticTacToe[row][column] = "X";
        this.textContent = "X";



        if (userChoice.length + computerChoice.length < 8) {

            var random = Math.floor(Math.random() * 9);

            while (userChoice.includes(gridArray[random].id) || computerChoice.includes(gridArray[random].id)) {

                random = Math.floor(Math.random() * 9);

            }

            setTimeout(function() {

                var compId = gridArray[random].id;
                computerChoice.push(compId);
                var coordinates = compId.split("");
                var row = coordinates[0];
                var column = coordinates[1];
                ticTacToe[row][column] = "0";
                gridArray[random].textContent = "0";

            }, 200);

        }

    }

    check();

};


for(var i = 0; i < gridArray.length; i++) {

    gridArray[i].addEventListener("click", game);

};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var check = function() {

    for (var i = 0; i < ticTacToe.length; i++) {

        if (ticTacToe[i][0] == ticTacToe[i][1] && ticTacToe[i][1] == ticTacToe[i][2] && ticTacToe[i][2] == "X") {

            alert("win");
            stopGame();

        } else if (ticTacToe[i][0] == ticTacToe[i][1] && ticTacToe[i][1] == ticTacToe[i][2] && ticTacToe[i][2] == "0") {

            alert("lose");
            stopGame();

        } else if (ticTacToe[0][i] == ticTacToe[1][i] && ticTacToe[1][i] == ticTacToe[2][i] && ticTacToe[2][i] == "X") {

            alert("win");
            stopGame();

        } else if (ticTacToe[0][i] == ticTacToe[1][i] && ticTacToe[1][i] == ticTacToe[2][i] && ticTacToe[2][i] == "0") {

            alert("lose");
            stopGame();

        }
    }

    if (ticTacToe[0][0] == ticTacToe[1][1] && ticTacToe[2][2] == ticTacToe[1][1] && ticTacToe[2][2] == "0") {

        alert("lose");
        stopGame();

    } else if (ticTacToe[0][0] == ticTacToe[1][1] && ticTacToe[2][2] == ticTacToe[1][1] && ticTacToe[2][2] == "X") {

        alert("win");
        stopGame();

    } else if (ticTacToe[0][2] == ticTacToe[1][1] && ticTacToe[2][0] == ticTacToe[1][1] && ticTacToe[2][0] == "0") {

        alert("lose");
        stopGame();

    } else if (ticTacToe[0][2] == ticTacToe[1][1] && ticTacToe[2][0] == ticTacToe[1][1] && ticTacToe[2][0] == "X") {

        alert("win");
        stopGame();

    }

};


var stopGame = function() {

    for(var j = 0; j < gridArray.length; j++) {

        gridArray[j].removeEventListener("click", game);

    }

};











