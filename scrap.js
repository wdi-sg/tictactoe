// x1y1|x2y1|x3y1
// --------------
// x1y2|x2y2|x3y2
// --------------
// x1y3|x2y3|x3y3

    var x1y1;
    var x2y1;
    var x3y1;

    var x1y2;
    var x2y2;
    var x3y2;

    var x1y3;
    var x2y3;
    var x3y3;

var determineEntries = function() {
    console.log("recalc");
    var x1y1 = document.querySelectorAll(".entry")[0].innerText;
    var x2y1 = document.querySelectorAll(".entry")[1].innerText;
    var x3y1 = document.querySelectorAll(".entry")[2].innerText;

    var x1y2 = document.querySelectorAll(".entry")[3].innerText;
    var x2y2 = document.querySelectorAll(".entry")[4].innerText;
    var x3y2 = document.querySelectorAll(".entry")[5].innerText;

    var x1y3 = document.querySelectorAll(".entry")[6].innerText;
    var x2y3 = document.querySelectorAll(".entry")[7].innerText;
    var x3y3 = document.querySelectorAll(".entry")[8].innerText;
}

var firstRow = function() {
    if (((document.querySelectorAll(".entry")[0].innerText) == (document.querySelectorAll(".entry")[1].innerText)) && ((document.querySelectorAll(".entry")[0].innerText)== (document.querySelectorAll(".entry")[2].innerText)) && ((document.querySelectorAll(".entry")[0].innerText) == answer)) == true {
        console.log(answer + "player has won.")
    }
}

var secondRow = function(){
    (document.querySelectorAll(".entry")[3].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[3].innerText== document.querySelectorAll(".entry")[5].innerText);
}

var thirdRow = function() {
    (document.querySelectorAll(".entry")[6].innerText == document.querySelectorAll(".entry")[7].innerText) && (document.querySelectorAll(".entry")[6].innerText== document.querySelectorAll(".entry")[8].innerText) && (document.querySelectorAll(".entry")[6].innerText == "x");
}

var firstColumn = function() {
    (document.querySelectorAll(".entry")[0].innerText == document.querySelectorAll(".entry")[3].innerText) && (document.querySelectorAll(".entry")[0].innerText== document.querySelectorAll(".entry")[6].innerText) && (document.querySelectorAll(".entry")[0].innerText == "x")
}

var secondColumn = function() {
    (document.querySelectorAll(".entry")[1].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[1].innerText== document.querySelectorAll(".entry")[7].innerText) && (document.querySelectorAll(".entry")[1].innerText == "x")
}

var thirdColumn = function() {
    (document.querySelectorAll(".entry")[2].innerText == document.querySelectorAll(".entry")[5].innerText) && (document.querySelectorAll(".entry")[2].innerText== document.querySelectorAll(".entry")[8].innerText) && (document.querySelectorAll(".entry")[2].innerText == "x")
}

var diagonalFromLeft = function() {
    (document.querySelectorAll(".entry")[0].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[0].innerText== document.querySelectorAll(".entry")[8].innerText) && (document.querySelectorAll(".entry")[0].innerText == "x")
}

var diagonalFromRight = function() {
    (document.querySelectorAll(".entry")[2].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[2].innerText== document.querySelectorAll(".entry")[6].innerText) && (document.querySelectorAll(".entry")[2].innerText == "x")
}

// x1y1 becomes undefined and invalid for comparison. determineEntries function is unable to solve the issue
// var addEntry = function(event) {
//     if ((document.querySelectorAll(".entry")[0].innerText == document.querySelectorAll(".entry")[1].innerText) && (document.querySelectorAll(".entry")[0].innerText== document.querySelectorAll(".entry")[2].innerText) && (document.querySelectorAll(".entry")[0].innerText == "x")) {
//         console.log("win");
//     } else if (x1y2 == x2y2 == x3y2 == "x"){
//         console.log("win");
//     } else if (x1y3 == x2y3 == x3y3 == "x") {
//         console.log("win");
//     } else if (x1y1 == x1y2 == x1y3 == "x") {
//         console.log("win");
//     } else if (x2y1 == x2y2 == x2y3 == "x"){
//         console.log("win");
//     } else if ((x3y1 == x3y2) && (x3y2 == x3y3) && (x3y3 == "x")){
//         console.log("win");
//     } else if (x1y1 == x2y2 == x3y3 == "x"){
//         console.log("win");
//     } else if (x3y1 == x2y2 == x1y3 == "x"){
//         console.log("win")
//     } else if (turn >= 9) {
//         alert("The game has ended");
//     }   else if (turn%2==0) {
//         addX(event);
//         turn++;
//     }   else   {
//         addO(event);
//         turn++;
//     }
//     determineEntries();
// }


var addEntry = function(event) {
    if (firstRow(answer)) {
        console.log("win");
    } else if ((document.querySelectorAll(".entry")[3].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[3].innerText== document.querySelectorAll(".entry")[5].innerText) && (document.querySelectorAll(".entry")[3].innerText == "x")){
        console.log("win");
    } else if ((document.querySelectorAll(".entry")[6].innerText == document.querySelectorAll(".entry")[7].innerText) && (document.querySelectorAll(".entry")[6].innerText== document.querySelectorAll(".entry")[8].innerText) && (document.querySelectorAll(".entry")[6].innerText == "x")) {
        console.log("win");
    } else if ((document.querySelectorAll(".entry")[0].innerText == document.querySelectorAll(".entry")[3].innerText) && (document.querySelectorAll(".entry")[0].innerText== document.querySelectorAll(".entry")[6].innerText) && (document.querySelectorAll(".entry")[0].innerText == "x")) {
        console.log("win");
    } else if ((document.querySelectorAll(".entry")[1].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[1].innerText== document.querySelectorAll(".entry")[7].innerText) && (document.querySelectorAll(".entry")[1].innerText == "x")){
        console.log("win");
    } else if ((document.querySelectorAll(".entry")[2].innerText == document.querySelectorAll(".entry")[5].innerText) && (document.querySelectorAll(".entry")[2].innerText== document.querySelectorAll(".entry")[8].innerText) && (document.querySelectorAll(".entry")[2].innerText == "x")){
        console.log("win");
    } else if ((document.querySelectorAll(".entry")[0].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[0].innerText== document.querySelectorAll(".entry")[8].innerText) && (document.querySelectorAll(".entry")[0].innerText == "x")){
        console.log("win");
    } else if ((document.querySelectorAll(".entry")[2].innerText == document.querySelectorAll(".entry")[4].innerText) && (document.querySelectorAll(".entry")[2].innerText== document.querySelectorAll(".entry")[6].innerText) && (document.querySelectorAll(".entry")[2].innerText == "x")){
        console.log("win")
    } else if (turn >= 9) {
        alert("The game has ended");
    }   else if (turn%2==0) {
        addX(event);
        turn++;
    }   else   {
        addO(event);
        turn++;
    }
    determineEntries();
}