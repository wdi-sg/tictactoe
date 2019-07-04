console.log("~Life is good~");

//global variables
var turnNumber = null;
var turnArray=[];
var playerX=[];
var playerO=[];


var gameLogic = function (){

//To alternate turns
//if turn number is even, it is player X
    if (turnNumber%2===0){
        turnNumber++;
        var input = document.getElementById(event.target.id);
        input.textContent="X";
        //console.log('id is: ',input.id);
        playerX.push(input.id);
        turnArray.push(input.id);
        //console.log(`Player X array is: `+playerX);
        input.removeEventListener("click",gameLogic)


//if turn number is odd, it is player O
    } else if (turnNumber%2>0){
        turnNumber--;
        var input = document.getElementById(event.target.id);
        input.textContent="O";
        //console.log('id is: ',input.id);
        playerO.push(input.id);
        turnArray.push(input.id);
        //console.log(`Player O array is: `+playerO)
        input.removeEventListener("click",gameLogic)
    }
    console.log(`The sequence is :`,turnArray);
    toWin();
//***Above completes: X and O appear alternately, and players have their position array stored separately

};

var toWin = function (){

    var x = document.getElementsByTagName("td");

    var hori1 = (x[0].textContent==x[1].textContent)&&(x[0].textContent===x[2].textContent)&&(x[0].textContent!=="");
    //console.log("hori1:"+hori1);

    var hori2 = (x[3].textContent==x[4].textContent)&&(x[3].textContent===x[5].textContent)&&(x[3].textContent!=="");
    //console.log("hori2:"+hori2);

    var hori3 = (x[6].textContent==x[7].textContent)&&(x[6].textContent===x[8].textContent)&&(x[6].textContent!=="");
    //console.log("hori3:"+hori3);

    var verti1 = (x[0].textContent==x[3].textContent)&&(x[0].textContent===x[6].textContent)&&(x[0].textContent!=="");
    //console.log("verti1:"+verti1);

    var verti2 = (x[1].textContent==x[4].textContent)&&(x[1].textContent===x[7].textContent)&&(x[1].textContent!=="");
    //console.log("verti2:"+verti2);

    var verti3 = (x[2].textContent==x[5].textContent)&&(x[2].textContent===x[8].textContent)&&(x[2].textContent!=="");
    //console.log("verti3:"+verti3);

    var diago1=(x[0].textContent==x[4].textContent)&&(x[0].textContent===x[8].textContent)&&(x[0].textContent!=="");
    //console.log("diago1:"+diago1);

    var diago2=(x[2].textContent==x[4].textContent)&&(x[2].textContent===x[6].textContent)&&(x[2].textContent!=="");
    //console.log("diago2:"+diago2);


    if ( hori1 || hori2 || hori3 || verti1 || verti2 || verti3 || diago1 || diago2){

        setTimeout(function(){

            var lastBox=parseInt(turnArray[turnArray.length-1]);
            var x = document.getElementsByTagName("td");

            if (x[lastBox].textContent==="X"){
            alert(`Player X has won!`)

        } else if (x[lastBox].textContent==="O"){
            alert(`Player O has won!`)
    }
        },300);

        for (var i=0; i<9; i++){

        var stopClick = document.getElementsByTagName("td")

        stopClick[i].removeEventListener("click", gameLogic);
    }


    } else if ((playerX.length)+(playerO.length)===9) {

        setTimeout(function(){
        //console.log(`board is filled`);
            alert(`Sorry try again!`);
        },300);

        }
};





//To start game and game mechanism
var startGame = function(event){

    console.log("create game board");

    //declare table variables
    var col, row, table;

    //create table frame
    table = document.createElement('table');

    //first row
    row = table.insertRow(0);
    col1 = row.insertCell(0).setAttribute("id", "0");
    col = row.insertCell(1).setAttribute("id", "1");
    col = row.insertCell(2).setAttribute("id", "2");


    //second row
    row = table.insertRow(1);
    col = row.insertCell(0).setAttribute("id", "3");
    col = row.insertCell(1).setAttribute("id", "4");
    col = row.insertCell(2).setAttribute("id", "5");


    //third row
    row = table.insertRow(2);
    col = row.insertCell(0).setAttribute("id", "6");
    col = row.insertCell(1).setAttribute("id", "7");
    col = row.insertCell(2).setAttribute("id", "8");

//append table to body
    document.querySelector("body").appendChild(table);
//***Above completes: table appears


//to loop through all boxes
    for (var i=0; i<9; i++){

//td cell location
    var totalBox = document.getElementsByTagName("td")

//td cell to show content upon clicked
    totalBox[i].addEventListener("click", gameLogic);
    }
}


//to make sure the dom is ready
document.addEventListener('DOMContentLoaded', function(event){

    //set click event to button
    var button = document.querySelector('#start');

  button.addEventListener('click', startGame);

});