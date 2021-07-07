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
var p1ans = [];
var p2ans = [];
var winningArrays = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

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
                p1ans.push(index);
                console.log("p1ans: " + p1ans);
                winCheck();
                playerTurnCount++;
            } else {
                console.log("inputArray: " + index);
                inputArray[index].innerHTML = "X";
                p2ans.push(index);
                console.log("p2ans: " + p2ans);
                winCheck();
                playerTurnCount++;
            }
        }
        console.log("outside p1ans: " + p1ans);
        console.log("outside p2ans: " + p2ans);
    });
};

//create game board
var startGame = function(event){
    console.log( "create board");
    var maindiv = document.createElement("div");
    maindiv.setAttribute("id", "main-container");

    for (var i = 0; i < 3; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "rowdiv");
        row.setAttribute("id", `rowdiv${i}`);
        console.log(`created a row ${row.class} and ${row.id}`);
        for (var j = 0; j < 3; j++) {
            var ansbox = document.createElement("span");
            ansbox.setAttribute("class", "ansdiv");
            ansbox.setAttribute("id", `ansdiv${j}`);
            console.log(`created a box ${ansbox.class} and ${ansbox.id}`);
            row.appendChild(ansbox);
            console.log("Append ansbox to row");
        }
        maindiv.appendChild(row);
        document.body.appendChild(maindiv);
    }
    document.querySelector('#start').style.display = "none";
    divClick();
};

//Check for winner
var winCheck = function() {
    if (playerTurnCount % 2 === 0 && playerTurnCount >= 4) {
        var sortp1 = p1ans.sort();
        console.log(sortp1);
        //var rowArray = document.getElementsByClassName("rowdiv");
        for (var i = 0; i < winningArrays.length; i++){
            console.log("value of i in 1st for loop, win check: " + i);
            var winCount = 0;
            console.log("winCount val" + winCount)
            for (var j=0; j < sortp1.length; j++) {
                console.log("value of i in 2nd for loop, win check: " + i);
                console.log("value of j in 2nd for loop, win check: " + j);
                if (sortp1[j] === winningArrays[i][j]){
                    console.log("there is a match at" + sortp1[j] + " and " + winningArrays[i][j]);
                    winCount++;
                    console.log("winCount: " + winCount);
                    if (winCount === 3){
                    console.log('Player 1 wins!');
                    return;
                    }
                }
            }
        }
    } else if (playerTurnCount % 2 != 0 && playerTurnCount >= 4) {
        var sortp2 = p2ans.sort();
        for (var i = 0; i < winningArrays.length; i++){
            console.log("value of i in 1st for loop, win check: " + i);
            var winCount = 0;
            console.log("winCount val" + winCount)
            for (var j=0; j < sortp2.length; j++) {
                console.log("value of i in 2nd for loop, win check: " + i);
                console.log("value of j in 2nd for loop, win check: " + j);
                if (sortp2[j] === winningArrays[i][j]){
                    console.log("there is a match at" + sortp2[j] + " and " + winningArrays[i][j]);
                    winCount++;
                    console.log("winCount: " + winCount);
                    if (winCount === 3){
                    console.log('Player 2 wins!');
                    return;
                    }
                }
            }
        }
    }
};

/*var winCheck = function() {
    if (playerTurnCount >= 6) {
        var rowNum = document.getElementsByClassName("rowdiv");
        for (let i = 0; i < rowNum.length; i++){
            for(let j = 0; j < inputArray.length; j++) {
                if ( inputArray[0].innerText === "O" && (inputArray[1].innerText && inputArray[2].innerText === "O")) {
                    console.log("Winner found!");
                    break;
                }
            }
        }
    }
};*/


document.addEventListener('DOMContentLoaded', function( event ){
// now that the dom is ready, set the button click
    var button = document.querySelector('#start');
    button.addEventListener('click', startGame);
    return;
});