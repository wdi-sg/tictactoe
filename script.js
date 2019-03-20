console.log("Assignment TicTacToe")

//initial prompt to get user input for their names
var playerNameOne = prompt("Hi there player 1, what is your name?");
var playerNameTwo = prompt("Hi there player 2, what is your name?");

//retrieve element via their id and assign that element to a variable for use
var one = document.querySelector("#zero-zero");
var two = document.querySelector("#zero-one");
var three = document.querySelector("#zero-two");
var four = document.querySelector("#one-zero");
var five = document.querySelector("#one-one");
var six = document.querySelector("#one-two");
var seven = document.querySelector("#two-zero");
var eight = document.querySelector("#two-one");
var nine = document.querySelector("#two-two");


// var gameDimensions = function(gameType) {

//     var rowArray = [];

//     if(gameType.toLowerCase() === "tictactoe") {
//         for(var i=0; i<3; i++) {
//             rowArray.push("");
//             for(var j=0; j<3; j++) {

//             }
//         }
//     }

//     return gameDimensions;
// }

// var gameUIBuilder = function(gameDimensions) {
//     for(var i=0; i<gameDimensions.length; j++) {

//     }
// }


//initialize the xFlag
var xFlag = false;

//function to hide the button once the game has started, i.e player clicks on a cell
var hideButton = function() {
    var startButton = document.getElementById("start-game-btn");
    startButton.style.display = "none";
}

//function to show the button again once the game has ended, i.e a player has won
var showButton = function() {
    var startButton = document.getElementById("start-game-btn");
    startButton.style.display = "inline";
}

var enterXorO = function(event) {
    //once game has started, i.e player has clicked on a cell, call the hideButton function to hide the start button
    hideButton();

    //toggle the xFlag to force it to be true so that X always starts first;
    xFlag = !xFlag;
    if(xFlag) {
        //capture the id of the box that was clicked on
        var selectedTargetId = event.target.id;

        //retrieve the box that was clicked on using the id captured above
        var selectedTarget = document.querySelector("#" + selectedTargetId);
        //if the box is blank, fill it with a X
        if (selectedTarget.textContent === "") {
            selectedTarget.textContent = "X";
            //calls the function winGame to determine if game is won
            determineWinState(event);
        }
        // disable the box after the box is filled
        event.target.removeEventListener("click", enterXorO);

    } else {
        //capture the id of the box that was clicked on
        var selectedTargetId = event.target.id;

        //retrieve the box that was clicked on using the id captured above
        var selectedTarget = document.querySelector("#" + selectedTargetId);
        //if the box is blank, fill it with a X
        if (selectedTarget.textContent === "") {
         selectedTarget.textContent = "O";
             //calls the function winGame to determine if game is won
             determineWinState(event);
         }

        // disable the box after the box is filled
        event.target.removeEventListener("click", enterXorO);

    }


};


var determineWinState = function(event) {

    //initialize the winning array with all possible combinations of winning cells
    var winningArray = [];
    winningArray.push(["zero-zero", "zero-one", "zero-two"]);
    winningArray.push(["one-zero", "one-one", "one-two"]);
    winningArray.push(["two-zero", "two-one", "two-two"]);
    winningArray.push(["zero-zero", "one-zero", "two-zero"]);
    winningArray.push(["zero-one", "one-one", "two-one"]);
    winningArray.push(["zero-two", "one-two", "two-two"]);
    winningArray.push(["zero-zero", "one-one", "two-two"]);
    winningArray.push(["zero-two", "one-one", "two-zero"]);

    var coordinates = event.target.id;

    var userInput = event.target.textContent;

    if(userInput.toLowerCase() === "x") {

        var winningPossibilitiesArray = [];

//loop through the 2D array to see if the "clicked" cell coordinate matches any cell within the 2D winning array
        for(var i=0; i<winningArray.length; i++) {
            for(var j=0; j<winningArray[i].length; j++) {
                if(coordinates === winningArray[i][j]) {
                //if there is a match, the possible winning array is loaded with the tuple winning sets which contains the "clicked" cell coordinate
                    winningPossibilitiesArray.push(winningArray[i]);
                }
            }
        }

//loop through the possible winning array, increase count each time an X was found on a particular cell coordinate of the possible tuple winning set
        for(var a=0; a<winningPossibilitiesArray.length; a++) {
            var count = 0;
            for(var b=0; b<winningPossibilitiesArray[a].length; b++) {

            //assign each of the possible winning cell coordinate (id of each tag) to a variable for use
                var datapoint = winningPossibilitiesArray[a][b];

            //fetch each tag associated with the possible winning cell coordinate (id of each tag)
                var winningCell = document.querySelector("#" + datapoint);

                //check to see if each tag's text content contains an X, increase count if it does
                if(winningCell.textContent.toLowerCase() === "x") {
                    count = count + 1;
                }
            }

            //count < 3 implies that we do not have a 3 in a row for each possible tuple winning set, reset counter when starting on a new possible tuple winning set -> next [a]
            if(count < 3) {
                count = 0;
                //count = 3 means that we have 3 X's in a row of the winning set -> game won. Display the button afterwards
            } else if (count == 3) {
                alert("Congrats! " + playerNameOne + ", you have won!");
                showButton();

            //remove event listener for all cells to prevent player from clicking on other cells and continue playing.
                var cellTag = document.querySelectorAll("td");
                for(var i=0; i<cellTag.length; i++) {
                    document.getElementById(cellTag[i].id).removeEventListener("click", enterXorO);
                }

            }
        }

//same logic applied to case where user input is O, refer to comments above for case where user input is X
    } else if(userInput.toLowerCase() === "o") {

        var winningPossibilitiesArray = [];

        for(var i=0; i<winningArray.length; i++) {
            for(var j=0; j<winningArray[i].length; j++) {
                if(coordinates === winningArray[i][j]) {

                    winningPossibilitiesArray.push(winningArray[i]);
                }
            }
        }

        // console.log(winningPossibilitiesArray);


        for(var a=0; a<winningPossibilitiesArray.length; a++) {
            var count = 0;
            for(var b=0; b<winningPossibilitiesArray[a].length; b++) {

                var datapoint = winningPossibilitiesArray[a][b];
                var winningCell = document.querySelector("#" + datapoint);
                // console.log(winningCell);
                // console.log(winningCell.textContent);

                if(winningCell.textContent.toLowerCase() === "o") {
                    count = count + 1;
                }
            }

            if(count < 3) {
                count = 0;
            } else if (count == 3) {
                alert("Congrats! " + playerNameTwo + ", you have won!");
                showButton();

                var cellTag = document.querySelectorAll("td");
                for(var i=0; i<cellTag.length; i++) {
                    document.getElementById(cellTag[i].id).removeEventListener("click", enterXorO);
                }
            }
        }

    }

    //force run the loop 9 times once
    var cellTag = document.querySelectorAll("td");
    for(var j=0; j<1; j++) {
        var count = 0;
        for(var i=0; i<cellTag.length; i++) {
            //increase the count if the cell is not empty
            if(cellTag[i].textContent !== "") {
                count++
            }
        }
        //when count reach 9, means all cells are filled
        if(count == 9) {
            //this is only possible if there is no winner hence draw result, if there was a winner, the count would never hit 9
            alert("Draw Game!");
            //display the hidden button once the game has ended
            showButton();
        }
    }

}

//add click event listerner for each of the cell element
one.addEventListener("click", enterXorO);
two.addEventListener("click", enterXorO);
three.addEventListener("click", enterXorO);
four.addEventListener("click", enterXorO);
five.addEventListener("click", enterXorO);
six.addEventListener("click", enterXorO);
seven.addEventListener("click", enterXorO);
eight.addEventListener("click", enterXorO);
nine.addEventListener("click", enterXorO);