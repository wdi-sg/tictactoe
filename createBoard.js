var dynamicBoard
var numRows = parseInt(prompt("how many number of rows would you like on the board?"));
var numColumns = parseInt(prompt("how many number of columns would you like on the board?"));
var numWins = parseInt(prompt("how many in a row to qualify a win?"));
var gameboard = document.querySelector(".gameboard");
var columns
var playCount = 0;

var buildBoard = function() {

    //set the gameboard width and height
    var width = 100 * numColumns + 2 * numColumns + "px";
    var height = 100 * numRows + 2 * numRows + "px";
    gameboard.style.width = width.toString();
    gameboard.style.height = height.toString();

    //create rows and columns
    for (var i = 0; i < numRows; i++) {
        var divRow = document.createElement("div")
        divRow.classList.add("row");
        gameboard.appendChild(divRow);
        for (var j = 0; j < numColumns; j++) {
            var divColumns = document.createElement("span");
            divColumns.classList.add("columns");
            divColumns.textContent= " ";
            divColumns.setAttribute('id', i.toString() + j.toString());
            divRow.appendChild(divColumns);

        }
    }
    columns = document.querySelectorAll(".columns");
    console.log(columns);
    fillBox();
}


var fillBox = function() {
    for (var i = 0; i < columns.length; i++) {
        columns[i].addEventListener("click", function() {
            if ((event.target.textContent !== 'o') && (event.target.textContent !== 'x')) {
                draw();
            }
            if (playCount === numColumns * numRows) {
                endGame();
            }
        });
    }
}


var draw = function() {
    event.target.textContent = Math.floor(Math.random()*2);
    playCount++;
    toWin();
}


var endGame = function() {
    console.log("end");
}

    newArr =[];


var toWin = function() {
    var indContent = "";
    var indArr =[]
    for(var i = 0; i<columns.length;i++){
        indContent=columns[i].textContent;
        if (indContent===" "){

        }
        else{
        indArr.push(indContent);}
    }


    console.log(check(indArr, numWins));
}

//     for (var i = 0; i < columns.length; i++) {
//         var arr = columns[i].textContent;
//         newArr.push(arr);}

//         for (var i = 0; i < columns.length; i++) {

// columns[i].addEventListener("click", function() {

//                 console.log(check(newArr, 3));})}

//     //ignore empty space
//  console.log(newArr);



function check(array,length){
var count = 0,
        value = array[0];

    return array.some(function (a) {
        if (value !== a) {
            count = 0;
            value = a;
        }
        return ++count === length;
    });
}


buildBoard();
//toWin();


