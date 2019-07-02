console.log("~Life is good~");

//global scenario
var boxClicked = null;

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
    col.innerHTML = 0;
    col = row.insertCell(1);
    col.innerHTML = 1;
    col = row.insertCell(2);
    col.innerHTML = 2;

    //second row
    row = table.insertRow(1);
    col = row.insertCell(0);
    col.innerHTML = 0;
    col = row.insertCell(1);
    col.innerHTML = 1;
    col = row.insertCell(2);
    col.innerHTML = 2;

    //third row
    row = table.insertRow(2);
    col = row.insertCell(0);
    col.innerHTML = 0;
    col = row.insertCell(1);
    col.innerHTML = 1;
    col = row.insertCell(2);
    col.innerHTML = 2;

//append table to body
    document.querySelector("body").appendChild(table);
//***Above completes: table appears


    for (var i=0; i<9; i++){

    var boxClicked = function (event){
        event.target.innerHTML = "X"};

    var totalBox = document.getElementsByTagName("td")

    totalBox[i].addEventListener("click", boxClicked);

    }
}



//






//to make sure the dom is ready
document.addEventListener('DOMContentLoaded', function(event){

    //set click event to button
    var button = document.querySelector('#start');

  button.addEventListener('click', startGame);

});