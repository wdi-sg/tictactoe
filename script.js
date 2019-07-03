console.log("JS script is running!");

//part 1 - base code

/*var playerTurnCount = 0;

var inputArray = document.getElementsByTagName("button"); //gets all buttons
console.log(inputArray);

for (let i = 0; i < inputArray.length; i++) {
    console.log("Inside for loop to append click function");
    inputArray[i].onclick = function() { //appends click function to each button
        if(playerTurnCount % 2 === 0) {
            inputArray[i].innerHTML = "O";
            playerTurnCount++;
        } else {
            inputArray[i].innerHTML = "X";
            playerTurnCount++;
        }
    }
    idGet = inputArray[i].id;
    console.log(inputArray[i].id);
}*/


//part 2

var playerTurnCount = 0;

var inputArray = document.getElementsByClassName("ansdiv"); //gets all ansdivs
console.log(inputArray);


var divClick = function(event) {
    for (let i = 0; i < inputArray.length; i++) {
        console.log("Inside for loop to append click function");
        setListener(inputArray, i);
        /*inputArray[i].onclick = function() { //appends click function to each button using onclick
            if (inputArray[i].innerHTML){ //check if there is content in the div
                console.log(`inputArray ${i} has content`);
            } else { //find out player turn and place X or O
                if(playerTurnCount % 2 === 0) {
                    console.log("inputArray: "+ i);
                    inputArray[i].innerHTML = "O";
                    playerTurnCount++;
                } else {
                    console.log("inputArray: " + i);
                    inputArray[i].innerHTML = "X";
                    playerTurnCount++;
                }
            }
        }*/
    }
};

var setListener = function(inputArray, index){
    console.log("setting event inside function, index param is: "+ index);
    inputArray[index].addEventListener('click', function(click){
        if (inputArray[index].innerHTML){ //check if there is content in the div
            console.log(`inputArray ${index} has content`);
        } else { //find out player turn and place X or O
            if(playerTurnCount % 2 === 0) {
                console.log("inputArray: "+ index);
                inputArray[index].innerHTML = "O";
                playerTurnCount++;
            } else {
                console.log("inputArray: " + index);
                inputArray[index].innerHTML = "X";
                playerTurnCount++;
            }
        }
    });
};

//create game board
var startGame = function(event){
    console.log( "create board");
    var maindiv = document.createElement("div");
    maindiv.setAttribute("id", "main-container");

    for (var i = 0; i < 3; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "rowdiv")
        console.log('created a row' + row);
        for (var j = 0; j < 3; j++) {
            var ansbox = document.createElement("span");
            ansbox.setAttribute("class", "ansdiv");
            console.log('created a box' + ansbox);
            row.appendChild(ansbox);
            console.log("Append ansbox to row");
        }
        maindiv.appendChild(row);
        document.body.appendChild(maindiv);
    }
    document.querySelector('#start').style.display = "none";
    divClick();
};




document.addEventListener('DOMContentLoaded', function( event ){
// now that the dom is ready, set the button click
    var button = document.querySelector('#start');
    button.addEventListener('click', startGame);
    return;
});