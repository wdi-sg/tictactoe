console.log("hello script js");

//Create var for game
var playerTurn = 0;

//Create DOM for 9 boxes
var boxOne = document.querySelector(".box1");
var boxTwo = document.querySelector(".box2");
var boxThree = document.querySelector(".box3");
var boxFour = document.querySelector(".box4");
var boxFive = document.querySelector(".box5");
var boxSix = document.querySelector(".box6");
var boxSeven = document.querySelector(".box7");
var boxEight = document.querySelector(".box8");
var boxNine = document.querySelector(".box9");

//Add DOM
boxOne.addEventListener("click", getClick);
boxTwo.addEventListener("click", getClick);
boxThree.addEventListener("click", getClick);
boxFour.addEventListener("click", getClick);
boxFive.addEventListener("click", getClick);
boxSix.addEventListener("click", getClick);
boxSeven.addEventListener("click", getClick);
boxEight.addEventListener("click", getClick);
boxNine.addEventListener("click", getClick);

//XO click function
function getClick (event) {
    var squareSelected = document.querySelector('.' + event.target.className);
   if (playerTurn == 0){
     // document.getElementById ("box9").innerHTML = "O"
     squareSelected.innerHTML = "O";
     playerTurn = 1;
   } else {
     //document.getElementById ("box9").innerHTML = "X"
     squareSelected.innerHTML = "X";
     playerTurn = 0;
   }
 }
