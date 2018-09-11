var gridArray = document.getElementsByClassName("box");
var userChoice = [];
var computerChoice = [];

var game =function() {

    var id = this.getAttribute("data-id");

    if (userChoice.includes(id) === false) {

        this.textContent = "X";
        userChoice.push(id);

    }

    var totalBoxUsed = userChoice.length + computerChoice.length;

    if (totalBoxUsed < 8) {

        var random = Math.floor(Math.random() * 9) ;
        var compId = gridArray[random].getAttribute("data-id");
        var compIdNo = parseInt(compId);

        while (userChoice.includes(compId) || computerChoice.includes(compId)) {

            random = Math.floor(Math.random() * 9) ;
            var compId = gridArray[random].getAttribute("data-id");
        }

        if (computerChoice.includes(compId) === false) {

            setTimeout(function() {gridArray[random].textContent = "0"}, 500);
            computerChoice.push(compId);

        }

    }

    if (userChoice.length >= 3) {

        checkForWin();
    }

}

for (var i = 0; i < gridArray.length; i++) {

    gridArray[i].addEventListener("click", game);
}

////////////////////////////////////////// Win Condition////////////////////////////////////////////////////////////////////

var checkForWin = function() {

    if (gridArray[0].textContent === "X" && gridArray[1].textContent === "X" && gridArray[2].textContent === "X") {

        alert("win");
        location.reload();

    } else if (gridArray[3].textContent === "X" && gridArray[4].textContent === "X" && gridArray[5].textContent === "X") {

        alert("win");
        location.reload();

    } else if (gridArray[6].textContent === "X" && gridArray[7].textContent === "X" && gridArray[8].textContent === "X") {

        alert("win");
        location.reload();

    } else if (gridArray[0].textContent === "X" && gridArray[3].textContent === "X" && gridArray[6].textContent === "X") {

        alert("win");
        location.reload();

    } else if (gridArray[1].textContent === "X" && gridArray[4].textContent === "X" && gridArray[7].textContent === "X") {

        alert("win");
        location.reload();

    } else if (gridArray[2].textContent === "X" && gridArray[5].textContent === "X" && gridArray[8].textContent === "X") {

        alert("win");
        location.reload();

    } else if (gridArray[0].textContent === "X" && gridArray[4].textContent === "X" && gridArray[8].textContent === "X") {

        alert("win");
        location.reload();

    } else if (gridArray[2].textContent === "X" && gridArray[4].textContent === "X" && gridArray[6].textContent === "X") {

        alert("win");
        location.reload();

    } else    if (gridArray[0].textContent === "0" && gridArray[1].textContent === "0" && gridArray[2].textContent === "0") {

        alert("lose");
        location.reload();

    } else if (gridArray[3].textContent === "0" && gridArray[4].textContent === "0" && gridArray[5].textContent === "0") {

        alert("lose");
        location.reload();

    } else if (gridArray[6].textContent === "0" && gridArray[7].textContent === "0" && gridArray[8].textContent === "0") {

        alert("lose");
        location.reload();

    } else if (gridArray[0].textContent === "0" && gridArray[3].textContent === "0" && gridArray[6].textContent === "0") {

        alert("lose");
        location.reload();

    } else if (gridArray[1].textContent === "0" && gridArray[4].textContent === "0" && gridArray[7].textContent === "0") {

        alert("lose");
        location.reload();

    } else if (gridArray[2].textContent === "0" && gridArray[5].textContent === "0" && gridArray[8].textContent === "0") {

        alert("lose");
        location.reload();

    } else if (gridArray[0].textContent === "0" && gridArray[4].textContent === "0" && gridArray[8].textContent === "0") {

        alert("lose");
        location.reload();

    } else if (gridArray[2].textContent === "0" && gridArray[4].textContent === "0" && gridArray[6].textContent === "0") {

        alert("lose");
        location.reload();

    } else if (userChoice.length + computerChoice.length === 9) {

            draw();

    }

};


var draw = function() {

    alert("draw");
    location.reload();

};



















