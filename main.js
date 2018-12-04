var entryItems = document.querySelectorAll(".entry");

// declaring entries----------------------------------------------------------------------------

// 0|1|2
// -----
// 3|4|5
// -----
// 6|7|8

/*Basic Game-----------------------------------------------------------------------------------*/

var turn = 0;

var addX = function(event) {
    event.target.textContent="x";
    event.target.style.color="#003366";
}

var addO = function(event) {
    event.target.textContent="o";
    event.target.style.color="#8b0000";
}

var addEntry = function(event) {
    if ((document.querySelectorAll(".entry")[0].innerText == document.querySelectorAll(".entry")[1].innerText) && (document.querySelectorAll(".entry")[0].innerText== document.querySelectorAll(".entry")[2].innerText) && (document.querySelectorAll(".entry")[0].innerText == "x")) {
        updateResult("X");
    } else if ((document.querySelectorAll(".entry")[3].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[3].innerText== document.querySelectorAll(".entry")[5].innerText) && (document.querySelectorAll(".entry")[3].innerText == "x")){
        updateResult("X");
    } else if ((document.querySelectorAll(".entry")[6].innerText == document.querySelectorAll(".entry")[7].innerText) && (document.querySelectorAll(".entry")[6].innerText== document.querySelectorAll(".entry")[8].innerText) && (document.querySelectorAll(".entry")[6].innerText == "x")) {
        updateResult("X");
    } else if ((document.querySelectorAll(".entry")[0].innerText == document.querySelectorAll(".entry")[3].innerText) && (document.querySelectorAll(".entry")[0].innerText== document.querySelectorAll(".entry")[6].innerText) && (document.querySelectorAll(".entry")[0].innerText == "x")) {
        updateResult("X");
    } else if ((document.querySelectorAll(".entry")[1].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[1].innerText== document.querySelectorAll(".entry")[7].innerText) && (document.querySelectorAll(".entry")[1].innerText == "x")){
        updateResult("X");
    } else if ((document.querySelectorAll(".entry")[2].innerText == document.querySelectorAll(".entry")[5].innerText) && (document.querySelectorAll(".entry")[2].innerText== document.querySelectorAll(".entry")[8].innerText) && (document.querySelectorAll(".entry")[2].innerText == "x")){
        updateResult("X");
    } else if ((document.querySelectorAll(".entry")[0].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[0].innerText== document.querySelectorAll(".entry")[8].innerText) && (document.querySelectorAll(".entry")[0].innerText == "x")){
        updateResult("X");
    } else if ((document.querySelectorAll(".entry")[2].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[2].innerText== document.querySelectorAll(".entry")[6].innerText) && (document.querySelectorAll(".entry")[2].innerText == "x")){
        updateResult("X");
    } else if ((document.querySelectorAll(".entry")[0].innerText == document.querySelectorAll(".entry")[1].innerText) && (document.querySelectorAll(".entry")[0].innerText== document.querySelectorAll(".entry")[2].innerText) && (document.querySelectorAll(".entry")[0].innerText == "o")) {
        updateResult("O");
    } else if ((document.querySelectorAll(".entry")[3].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[3].innerText== document.querySelectorAll(".entry")[5].innerText) && (document.querySelectorAll(".entry")[3].innerText == "o")){
        updateResult("O");
    } else if ((document.querySelectorAll(".entry")[6].innerText == document.querySelectorAll(".entry")[7].innerText) && (document.querySelectorAll(".entry")[6].innerText== document.querySelectorAll(".entry")[8].innerText) && (document.querySelectorAll(".entry")[6].innerText == "o")) {
        updateResult("O");
    } else if ((document.querySelectorAll(".entry")[0].innerText == document.querySelectorAll(".entry")[3].innerText) && (document.querySelectorAll(".entry")[0].innerText== document.querySelectorAll(".entry")[6].innerText) && (document.querySelectorAll(".entry")[0].innerText == "o")) {
        updateResult("O");
    } else if ((document.querySelectorAll(".entry")[1].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[1].innerText== document.querySelectorAll(".entry")[7].innerText) && (document.querySelectorAll(".entry")[1].innerText == "o")){
        updateResult("O");
    } else if ((document.querySelectorAll(".entry")[2].innerText == document.querySelectorAll(".entry")[5].innerText) && (document.querySelectorAll(".entry")[2].innerText== document.querySelectorAll(".entry")[8].innerText) && (document.querySelectorAll(".entry")[2].innerText == "o")){
        updateResult("O");
    } else if ((document.querySelectorAll(".entry")[0].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[0].innerText== document.querySelectorAll(".entry")[8].innerText) && (document.querySelectorAll(".entry")[0].innerText == "o")){
        updateResult("O");
    } else if ((document.querySelectorAll(".entry")[2].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[2].innerText== document.querySelectorAll(".entry")[6].innerText) && (document.querySelectorAll(".entry")[2].innerText == "o")){
        updateResult("O");
    } else if (turn >= 9) {
        document.querySelector("#result").textContent = "It's a draw.";
    } else if (turn%2==0) {
        addX(event);
        turn++;
    } else   {
        addO(event);
        turn++;
    }
}

for(var i = 0; i < entryItems.length; i++){
    entryItems[i].addEventListener("click", addEntry);
}

var updateResult = function(result) {
    document.querySelector("#result").textContent = "The winner is '" + result +"' player";
}

/*Cosmetic Functions---------------------------------------------------------------------------*/

function hoverButton() {
    document.getElementById("restartButton").addEventListener("mouseover", function(){
    document.getElementById("restartButton").style.backgroundColor = "white";
    document.getElementById("restartButton").style.color = "black";
    })
    document.getElementById("restartButton").addEventListener("mouseout", function(){
    document.getElementById("restartButton").style.backgroundColor = "black";
      document.getElementById("restartButton").style.color = "white";
    })
}

hoverButton();

function restartButton() {
    document.getElementById("restartButton").addEventListener("click", function(){
        turns = 0;
        for(var i = 0; i < entryItems.length; i++){
        entryItems[i].textContent="?";
        entryItems[i].style.color="black";
        }
        document.querySelector("#result").textContent = "Game restarted.";
    })
};

restartButton();



