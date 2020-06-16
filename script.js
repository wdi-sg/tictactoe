//---------------------------------PART ONE-------------------------------------

var box1 = document.querySelector(".box1").addEventListener("click", clicked);
var box2 = document.querySelector(".box2").addEventListener("click", clicked);
var box3 = document.querySelector(".box3").addEventListener("click", clicked);
var box4 = document.querySelector(".box4").addEventListener("click", clicked);
var box5 = document.querySelector(".box5").addEventListener("click", clicked);
var box6 = document.querySelector(".box6").addEventListener("click", clicked);
var box7 = document.querySelector(".box7").addEventListener("click", clicked);
var box8 = document.querySelector(".box8").addEventListener("click", clicked);
var box9 = document.querySelector(".box9").addEventListener("click", clicked);

var player = "O"

function clicked(event) {
    var clickk = document.querySelector("." + event.target.className)
    if (player == "X") {
        player = "O"
        clickk.innerHTML = "X"
    } else{
        clickk.innerHTML = "O"
        player = "X"
    }
}

//---------------------------------PART TWO-------------------------------------

// let board = ["","","","","","","","","",];


// var win1 = $("box1, box2, box3").length === 3
// var win2 = $("box4, box5, box6").length === 3
// var win3 = $("box9, box8, box9").length === 3
// var win4 = $("box1, box4, box7").length === 3
// var win5 = $("box2, box5, box8").length === 3
// var win6 = $("box3, box6, box9").length === 3
// var win7 = $("box1, box5, box9").length === 3
// var win8 = $("box7, box5, box3").length === 3