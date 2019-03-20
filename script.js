var buttons = document.querySelectorAll("td");

var currentPlayer = 1;


for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            if (currentPlayer % 2 == 1) {
                event.target.innerHTML = "X";
                currentPlayer++;
                checkWinner();
    } else if (currentPlayer % 2 == 0) {
        event.target.innerHTML = "O";
        currentPlayer++;
        checkWinner();
    }
    });

}

var grid0 = document.getElementsByClassName("0");
var grid1 = document.getElementsByClassName("1");
var grid2 = document.getElementsByClassName("2");
var grid3 = document.getElementsByClassName("3");
var grid4 = document.getElementsByClassName("4");
var grid5 = document.getElementsByClassName("5");
var grid6 = document.getElementsByClassName("6");
var grid7 = document.getElementsByClassName("7");
var grid8 = document.getElementsByClassName("8");


var checkWinner = function() {
    if ((grid0[0].innerHTML === "X" && grid1[0].innerHTML == "X" && grid2[0].innerHTML === "X") || (grid0[0].innerHTML === "O" && grid1[0].innerHTML == "O" && grid2[0].innerHTML === "O")) {
        setTimeout(function() {
            alert("You won!")}, 1000);
} else if ((grid3[0].innerHTML === "X" && grid4[0].innerHTML == "X" && grid5[0].innerHTML === "X") || (grid3[0].innerHTML === "O" && grid4[0].innerHTML == "O" && grid5[0].innerHTML === "O")) {
    setTimeout(function() {
            alert("You won!")}, 1000);
} else if ((grid6[0].innerHTML === "X" && grid7[0].innerHTML == "X" && grid8[0].innerHTML === "X") || (grid6[0].innerHTML === "O" && grid7[0].innerHTML == "O" && grid8[0].innerHTML === "O")) {
    setTimeout(function() {
            alert("You won!")}, 1000);
} else if ((grid0[0].innerHTML === "X" && grid3[0].innerHTML == "X" && grid6[0].innerHTML === "X") || (grid0[0].innerHTML === "O" && grid3[0].innerHTML == "O" && grid6[0].innerHTML === "O")) {
    setTimeout(function() {
            alert("You won!")}, 1000);
} else if ((grid1[0].innerHTML === "X" && grid4[0].innerHTML == "X" && grid7[0].innerHTML === "X") || (grid1[0].innerHTML === "O" && grid4[0].innerHTML == "O" && grid7[0].innerHTML === "O")) {
    setTimeout(function() {
            alert("You won!")}, 1000);
} else if ((grid2[0].innerHTML === "X" && grid5[0].innerHTML == "X" && grid8[0].innerHTML === "X") || (grid2[0].innerHTML === "O" && grid5[0].innerHTML == "O" && grid8[0].innerHTML === "O")) {
    setTimeout(function() {
            alert("You won!")}, 1000);
} else if ((grid0[0].innerHTML === "X" && grid4[0].innerHTML == "X" && grid8[0].innerHTML === "X") || (grid0[0].innerHTML === "O" && grid4[0].innerHTML == "O" && grid8[0].innerHTML === "O")) {
    setTimeout(function() {
            alert("You won!")}, 1000);
} else if ((grid2[0].innerHTML === "X" && grid4[0].innerHTML == "X" && grid6[0].innerHTML === "X") || (grid2[0].innerHTML === "O" && grid4[0].innerHTML == "O" && grid6[0].innerHTML === "O")) {
    setTimeout(function() {
            alert("You won!")}, 1000);
}
}