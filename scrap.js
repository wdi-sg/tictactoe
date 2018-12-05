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

var comparison = function (startPoint,width, pattern){
    var comparisonTest = [];

    for (var i=startPoint; i<(width*width); i+=pattern) {

        var value = document.querySelectorAll(".entry")[i].innerText;
 comparisonTest.push(value);
    }

    alert(comparisonTest);
}

var comparisonTest = [];

for (var i=0; i<9; i+2) {
    comparisonTest.push(document.querySelectorAll(".entry")[i].innerText);
}

var outcome =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

var addEntry = function(event) {
    outcome[0][0] = document.querySelectorAll(".entry")[0].innerText;
    outcome[0][1] = document.querySelectorAll(".entry")[1].innerText;
    outcome[0][2] = document.querySelectorAll(".entry")[2].innerText;

    outcome[1][0] = document.querySelectorAll(".entry")[3].innerText;
    outcome[1][1] = document.querySelectorAll(".entry")[4].innerText;
    outcome[1][2] = document.querySelectorAll(".entry")[5].innerText;

    outcome[2][0] = document.querySelectorAll(".entry")[6].innerText;
    outcome[2][1]  = document.querySelectorAll(".entry")[7].innerText;
    outcome[2][2]  = document.querySelectorAll(".entry")[8].innerText;
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


((outcome[0][0] == outcome[0][1]) && (outcome[0][0]== outcome[0][2]) && (outcome[0][0] == "x")) {
        updateResult("X");
    } else if ((outcome[1][0] == outcome[1][1]) && (outcome[1][0]== outcome[1][2]) && (outcome[1][0] == "x")){
        updateResult("X");
    } else if ((outcome[2][0] == outcome[2][1]) && (outcome[2][0]== outcome[2][2]) && (outcome[2][0] == "x")) {
        updateResult("X");
    } else if ((outcome[0][0] == outcome[1][0]) && (outcome[0][0]== outcome[2][0]) && (outcome[0][0] == "x")) {
        updateResult("X");
    } else if ((outcome[0][1] == outcome[1][1]) && (outcome[0][1]== outcome[2][1]) && (outcome[0][1] == "x")){
        updateResult("X");
    } else if ((outcome[0][2] == outcome[1][2]) && (outcome[0][2]== outcome[2][2]) && (outcome[0][2] == "x")){
        updateResult("X");
    } else if ((outcome[0][0] == outcome[1][1]) && (outcome[0][0]== outcome[2][2]) && (outcome[0][0] == "x")){
        updateResult("X");
    } else if ((outcome[0][2] == outcome[1][1]) && (outcome[0][2]== outcome[2][0]) && (outcome[0][2] == "x")){
        updateResult("X");
        //end of x results
    } else if ((outcome[0][0] == outcome[0][1]) && (outcome[0][0]== outcome[0][2]) && (outcome[0][0] == "o")) {
        updateResult("O");
    } else if ((outcome[1][0] == outcome[1][1]) && (outcome[1][0]== outcome[1][2]) && (outcome[1][0] == "o")){
        updateResult("O");
    } else if ((outcome[2][0] == outcome[2][1]) && (outcome[2][0]== outcome[2][2]) && (outcome[2][0] == "o")) {
        updateResult("O");
    } else if ((outcome[0][0] == outcome[1][0]) && (outcome[0][0]== outcome[2][0]) && (outcome[0][0] == "o")) {
        updateResult("O");
    } else if ((outcome[0][1] == outcome[1][1]) && (outcome[0][1]== outcome[2][1]) && (outcome[0][1] == "o")){
        updateResult("O");
    } else if ((outcome[0][2] == outcome[1][2]) && (outcome[0][2]== outcome[2][2]) && (outcome[0][2] == "o")){
        updateResult("O");
    } else if ((outcome[0][0] == outcome[1][1]) && (outcome[0][0]== outcome[2][2]) && (outcome[0][0] == "o")){
        updateResult("O");
    } else if ((outcome[0][2] == outcome[1][1]) && (outcome[0][2]== outcome[2][0]) && (outcome[0][2] == "o")){
        updateResult("O");

var row1Update = function(i){
  for(var i=0; i<3; i++){
    outcome[1][i]=document.querySelectorAll(".entry")[i].innerText;
  }
}

var row1Update = function(i){
  for(var i=0; i<3; i++){
    outcome[0][i]=document.querySelectorAll(".entry")[i].innerText;
  }
}