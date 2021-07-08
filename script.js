var players = [1,2];
var gameBoard = [];
var PlayerXTurn = true;

//Function to insert cross into box

//Create function to insert value "X"
var insertX = function (event) {
    event.target.innerHTML = "X"
}

//Create function to insert value "O"
var insertO = function (event) {
    event.target.innerHTML = "O"
}

var boxes = document.querySelectorAll('.box')

var gameStarts = function(event){
for(var i = 0; i < boxes.length; i++){
    console.log(boxes[i].id);

    if (boxes[i] % 2 === 0) {
         boxes[i].addEventListener("click", insertX);
    } else {
        boxes[i].addEventListener("click", insertO);
    }
}
};

// //If PlayTurn is null or player turn is o, current player is X.
// var putSomething = function(event) {
//     if (PlayerXTurn) {
//         this.style.backgroundImage = 'url("cross.png")';
//         PlayerXTurn = !PlayerXTurn;
//         console.log(PlayerXTurn);
//     }

//     else {
//         this.style.backgroundImage = 'url("circle.png")';
//         PlayerXTurn = !PlayerXTurn;
//     }
// };

// document.getElementById("box1").addEventListener("click",putSomething);
// document.getElementById("box2").addEventListener("click",putSomething);
// document.getElementById("box3").addEventListener("click",putSomething);
// document.getElementById("box4").addEventListener("click",putSomething);
// document.getElementById("box5").addEventListener("click",putSomething);
// document.getElementById("box6").addEventListener("click",putSomething);
// document.getElementById("box7").addEventListener("click",putSomething);
// document.getElementById("box8").addEventListener("click",putSomething);
// document.getElementById("box9").addEventListener("click",putSomething);

document.addEventListener('DOMContentLoaded', function( event ){
  // now that the dom is ready, set the button click
  var button = document.querySelector('#start');

  button.addEventListener('click', startGame);
});

var gameStarts = function(event) {
    element(appendChild())
}