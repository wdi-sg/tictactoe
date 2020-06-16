var playerTurn = "X";

var squareSelected = document.querySelectorAll(".game-square");

for (i = 0; i < squareSelected.length; i++) {
    squareSelected[i].addEventListener("click", function(event){
      playerOneOrTwo(event);
    });
  }

var playerOneOrTwo = function(event) {
    if (playerTurn == "X") {
       event.target.innerHTML = "X";
       playerTurn = "O";
   } else {
    event.target.innerHTML = "O";
    playerTurn = "X";
   }
}

var toRefresh = function() {
  for (i=0; i< squareSelected.length; i++) {
    squareSelected[i].innerHTML = "";
  }
}

var myButton = document.createElement("button");
myButton.innerHTML = "Refresh!";
document.body.appendChild(myButton);
myButton.addEventListener("click", function(event){
  toRefresh();
})