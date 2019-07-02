console.log("~Life is good~");

//global scenario
var boxClicked = null;
var turnNumber = 1;

var turn = function (){

//if turn number is even, it is player X
    if (turnNumber%2===0){
        console.log("player x");
        turnNumber++;
        event.target.innerHTML="X";

    } else if (turnNumber%2>0){
        console.log("player o");
        turnNumber--;
        event.target.innerHTML="O";;

    }

//if turn.number is odd, it is player o
}

//To start game and game mechanism
var startGame = function(event){

    console.log("create game board");

    //declare table variables
    var col, row, table;

    //create table frame
    table = document.createElement('table');

    //first row
    row = table.insertRow(0);
    col = row.insertCell(0);
    col = row.insertCell(1);
    col = row.insertCell(2);


    //second row
    row = table.insertRow(1);
    col = row.insertCell(0);
    col = row.insertCell(1);
    col = row.insertCell(2);


    //third row
    row = table.insertRow(2);
    col = row.insertCell(0);
    col = row.insertCell(1);
    col = row.insertCell(2);

//append table to body
    document.querySelector("body").appendChild(table);
//***Above completes: table appears


//to loop through all boxes
    for (var i=0; i<9; i++){

    // var boxClicked = function (event){
    //     event.target.innerHTML = option[0]};

    var totalBox = document.getElementsByTagName("td")

    totalBox[i].addEventListener("click", turn);

    }
}



//






//to make sure the dom is ready
document.addEventListener('DOMContentLoaded', function(event){

    //set click event to button
    var button = document.querySelector('#start');

  button.addEventListener('click', startGame);

});