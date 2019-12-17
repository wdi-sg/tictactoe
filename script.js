// console.log("Tic Tac Toe assignment")

// var clickFunction = function(){
//     console.log("something happened");
// }

// var clicker = document.querySelectorAll(".game-square");

// clicker.addEventListener("click", clickFunction);

var button = document.querySelectorAll('.game-square');

var clickHandler = function(input){
  this.innerHTML = "x";
};

var game = function(){
    for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click', clickHandler);
    }
};

game();