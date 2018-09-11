var gridArray = document.getElementsByClassName("box");
var addPlayer = document.getElementById("add");
var namesContainer = document.getElementsByClassName("name")[0];
var buttonContainer = document.getElementsByClassName("side")[0];
var playerTurn = document.getElementsByTagName("h2");
var playerArray = [];
var usedBoxes = [];
var player = null;

var newPlayer = function() {

    var playerName = prompt("Enter Player Name");
    playerArray.push(playerName);
    var createPlayer = document.createElement("h2");
    createPlayer.textContent = playerName;
    namesContainer.appendChild(createPlayer);
    if (playerArray.length === 2) {
        buttonContainer.parentNode.removeChild(buttonContainer);
        playerTurn[0].style="color: red;"
    }
};

addPlayer.addEventListener("click", newPlayer);

var game = function() {

    if (playerArray.length === 2) {

        if (player === playerArray[0]) {

            player = playerArray[1];
            playerTurn[1].style="color: black;"
            playerTurn[0].style="color: red;"

        } else {

            player = playerArray[0];
            playerTurn[1].style="color: red;"
            playerTurn[0].style="color: black;"
        }

        var id = this.getAttribute("data-id");


        if (usedBoxes.includes(id) === false) {

            if (player === playerArray[0]) {

                this.textContent = "X";

            } else if (player === playerArray[1]) {

                this.textContent = "0";

            }

            usedBoxes.push(id);

        }

        if (usedBoxes.length >= 3) {

            checkForWin();
        }

    }

};


for (var i = 0; i < gridArray.length; i++) {

    gridArray[i].addEventListener("click", game);

}


////////////////////////////////////////// Win Condition////////////////////////////////////////////////////////////////////

var checkForWin = function() {

    if (gridArray[0].textContent === "X" && gridArray[1].textContent === "X" && gridArray[2].textContent === "X") {

        alert(playerArray[0] + " win");
        location.reload();

    } else if (gridArray[3].textContent === "X" && gridArray[4].textContent === "X" && gridArray[5].textContent === "X") {

        alert(playerArray[0] + " win");
        location.reload();

    } else if (gridArray[6].textContent === "X" && gridArray[7].textContent === "X" && gridArray[8].textContent === "X") {

        alert(playerArray[0] + " win");
        location.reload();

    } else if (gridArray[0].textContent === "X" && gridArray[3].textContent === "X" && gridArray[6].textContent === "X") {

        alert(playerArray[0] + " win");
        location.reload();

    } else if (gridArray[1].textContent === "X" && gridArray[4].textContent === "X" && gridArray[7].textContent === "X") {

        alert(playerArray[0] + " win");
        location.reload();

    } else if (gridArray[2].textContent === "X" && gridArray[5].textContent === "X" && gridArray[8].textContent === "X") {

        alert(playerArray[0] + " win");
        location.reload();

    } else if (gridArray[0].textContent === "X" && gridArray[4].textContent === "X" && gridArray[8].textContent === "X") {

        alert(playerArray[0] + " win");
        location.reload();

    } else if (gridArray[2].textContent === "X" && gridArray[4].textContent === "X" && gridArray[6].textContent === "X") {

        alert(playerArray[0] + " win");
        location.reload();

    } else    if (gridArray[0].textContent === "0" && gridArray[1].textContent === "0" && gridArray[2].textContent === "0") {

        alert(playerArray[1] + " win");
        location.reload();

    } else if (gridArray[3].textContent === "0" && gridArray[4].textContent === "0" && gridArray[5].textContent === "0") {

        alert(playerArray[1] + " win");
        location.reload();

    } else if (gridArray[6].textContent === "0" && gridArray[7].textContent === "0" && gridArray[8].textContent === "0") {

        alert(playerArray[1] + " win");
        location.reload();

    } else if (gridArray[0].textContent === "0" && gridArray[3].textContent === "0" && gridArray[6].textContent === "0") {

        alert(playerArray[1] + " win");
        location.reload();

    } else if (gridArray[1].textContent === "0" && gridArray[4].textContent === "0" && gridArray[7].textContent === "0") {

        alert(playerArray[1] + " win");
        location.reload();

    } else if (gridArray[2].textContent === "0" && gridArray[5].textContent === "0" && gridArray[8].textContent === "0") {

        alert(playerArray[1] + " win");
        location.reload();

    } else if (gridArray[0].textContent === "0" && gridArray[4].textContent === "0" && gridArray[8].textContent === "0") {

        alert(playerArray[1] + " win");
        location.reload();

    } else if (gridArray[2].textContent === "0" && gridArray[4].textContent === "0" && gridArray[6].textContent === "0") {

        alert(playerArray[1] + " win");
        location.reload();

    } else if (usedBoxes.length === 9) {

            draw();

    }

};


var draw = function() {

    alert("draw");
    location.reload();

};





