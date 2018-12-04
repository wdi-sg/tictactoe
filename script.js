//Define global variables
//var allButtons = document.querySelectorAll(".grid-container");
var button = document.querySelectorAll(".grid-item");

var buttonCounter = 0;


//Define function - what happens when a button is clicked?
var clicked = function() {
    buttonCounter++; //buttonCounter to determine whether or not button text content shows X or O
    console.log(buttonCounter);

    if (buttonCounter >= 10) {
        alert("Thanks for playing! Please refresh the page to play again.");
    } else if (buttonCounter === 0 || buttonCounter%2 !== 0) {
        this.textContent = "X";
    } else {
        this.textContent = "O";
    }

};

//On 'click', perform function 'clicked'
for (var i = 0; i < button.length; i++) {
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


//What to do when win state is achieved:
var winMessage = function () {
    alert("Congratulations! Player ?? has won.");
}


//Hard-coding for win states:

//Same text content in boxes 1, 2, 3
if (box1.textContent === box2.textContent === box3.textContent) {
    winMessage();
}
//Same text content in boxes 4, 5, 6
if (box4.textContent === box5.textContent === box6.textContent) {
    winMessage();
}


// //Initial loading condition - when page is loaded, set value of 'button' to null
// var setToNull = function() {
//     buttonCounter = 0;
// }

// window.onload = function () {
//     setToNull();
// }