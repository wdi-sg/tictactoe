console.log("Life is good");




var startGame = function(event){

    console.log("create game board");

    //declare table variables
    var col, row, table;
    table = document.createElement('table');

    row = table.insertRow(0);
    col = row.insertCell(0);
    col.innerHTML = 0;
    col = row.insertCell(1);
    col.innerHTML = 1;
    col = row.insertCell(2);
    col.innerHTML = 2;

    row = table.insertRow(1);
    col = row.insertCell(0);
    col.innerHTML = 0;
    col = row.insertCell(1);
    col.innerHTML = 1;
    col = row.insertCell(2);
    col.innerHTML = 2;

    row = table.insertRow(2);
    col = row.insertCell(0);
    col.innerHTML = 0;
    col = row.insertCell(1);
    col.innerHTML = 1;
    col = row.insertCell(2);
    col.innerHTML = 2;

    document.querySelector("body").appendChild(table);
}







//to make sure the dom is ready
document.addEventListener('DOMContentLoaded', function(event){

    //set click event to button
    var button = document.querySelector('#start');

  button.addEventListener('click', startGame);

});