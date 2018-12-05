//Define global variables
//var allButtons = document.querySelectorAll(".grid-container");
var button = document.querySelectorAll("button");

var buttonCounter = 0;

//Define function - what happens when a button is clicked?
var clicked = function() {

    //console.log(buttonCounter);
    if (this.textContent === " ") {

            buttonCounter++; //buttonCounter to determine whether or not button text content shows X or O
            console.log("buttonCounter if the clicked button was previously blank: "+buttonCounter);


            //Lines 18 and 19 were put here in an earlier version of the code to ensure that once all buttons were filled with either X or O, the game could not continue. It is not necessary anymore and will therefore be commented out. (buttonCounter will now never >= 10 without either the DRAW message displaying or a player winning (& therefore the winMessage displaying).)
            // if (buttonCounter >= 10) {
            //     alert("Thanks for playing! Please click on the refresh button at the bottom of the page to play again.");}
            if (buttonCounter%2 !== 0) {
                this.textContent = "X";
            } else {
                this.textContent = "O";
            }
        checkForWin();
    }
}

//On 'click', perform function 'clicked'
//Set condition i<9 so as to (upon 'click') execute this function for all buttons EXCLUDING the refresh button (which has an index of [9])
for (var i = 0; i < 9; i++) {
    button[i].addEventListener("click", clicked)
}


//Detecting a win state

//define all global variables
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box6 = document.querySelector("#box6");
var box7 = document.querySelector("#box7");
var box8 = document.querySelector("#box8");
var box9 = document.querySelector("#box9");

//Define variables to store players' scores:
let playerXScore = 0;
let playerOScore = 0;

//define function to check for win state:
  //     |   |
  //   1 | 2 | 3
  // ----+---+----
  //   4 | 5 | 6
  // ----+---+----
  //   7 | 8 | 9
  //     |   |

var checkForWin = function() {

//Hard-code all possible win states
        if ( (box1.textContent !== " ") && (box1.textContent === box2.textContent) && (box2.textContent === box3.textContent) ) {
            if (box1.textContent === "X") {
                playerXScore++;
                winMessage("X");
            } else {
                playerOScore++;
                winMessage("O");
            }
        }
        else if ( (box4.textContent !== " ") && (box4.textContent === box5.textContent) && (box5.textContent=== box6.textContent) ) {
            if (box4.textContent === "X") {
                playerXScore++;
                winMessage("X");
            } else {
                playerOScore++;
                winMessage("O");
            }
        }
        else if ( (box7.textContent !== " ") && (box7.textContent === box8.textContent) && (box8.textContent === box9.textContent) ) {
            if (box7.textContent === "X") {
                playerXScore++;
                winMessage("X");
            } else {
                playerOScore++;
                winMessage("O");
            }
        }
        else if ( (box1.textContent !== " ") && (box1.textContent === box4.textContent) && (box4.textContent === box7.textContent) ) {
            if (box1.textContent === "X") {
                playerXScore++;
                winMessage("X");
            } else {
                playerOScore++;
                winMessage("O");
            }
        }
        else if ( (box2.textContent !== " ") && (box2.textContent === box8.textContent) && (box8.textContent === box5.textContent) ) {
            if (box2.textContent === "X") {
                playerXScore++;
                winMessage("X");
            } else {
                playerOScore++;
                winMessage("O");
            }
        }
        else if ( (box3.textContent !== " ") && (box3.textContent === box6.textContent) && (box6.textContent === box9.textContent) ) {
            if (box3.textContent === "X") {
                playerXScore++;
                winMessage("X");
            } else {
                playerOScore++;
                winMessage("O");
            }
        }
        else if ( (box7.textContent !== " ") && (box7.textContent === box3.textContent) && (box3.textContent === box5.textContent) ) {
            if (box7.textContent === "X") {
                playerXScore++;
                winMessage("X");
            } else {
                playerOScore++;
                winMessage("O");
            }
        }
        else if ( (box1.textContent !== " ") && (box1.textContent === box5.textContent) && (box5.textContent === box9.textContent) ) {
            if (box1.textContent === "X") {
                playerXScore++;
                winMessage("X");
            } else {
                playerOScore++;
                winMessage("O");
            }
        } //What happens if no winner
         else if (buttonCounter === 9) {
            alert("It's a draw!\n\nPlayer scores:\n\nPlayer X: "+playerXScore+"\nPlayer O: "+playerOScore+"\n\nThanks for playing. Please click on the refresh button at the bottom of the page to play again.");
            playerXScore = playerXScore;
            playerOScore = playerOScore;
        }
}

//What to do when win state is achieved:
var winMessage = function(name) {
    alert("Congratulations! Player "+name+" won!\n\nPlayer scores:\n\nPlayer X: "+playerXScore+"\nPlayer O: "+playerOScore+"\n\nThanks for playing. Please click on the refresh button at the bottom of the page to play again.");
}

//Setting up "refresh" of page

//assign var to refresh button
var refreshButton = document.querySelector("#refresh-button");

//Define reset function to set button text content to " " and reset buttonCounter to 0:
var reset = function() {

    //Similar to what was written in line 31, set condition to i < 9 so that button[i].textContent = " " is only done to buttons 1 to 9 (and NOT the refresh button) upon clicking.
    for (var i = 0; i < 9; i++) {
        button[i].textContent = " ";
    }

    buttonCounter = 0;

    return;
};

//On click (refreshButton), perform reset function
refreshButton.addEventListener("click", reset);




