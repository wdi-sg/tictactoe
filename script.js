var turn = 1;

var flipSymbol = function(event){
  if(turn === 1){
    event.target.innerHTML= "X ";
    turn++;
  }else if(turn === 2){
    event.target.innerHTML = "O ";
    turn--;
  }
}

var allSquares = document.getElementsByClassName("game-square");
for(var i = 0; i < allSquares.length; i++){
  allSquares[i].addEventListener("click", flipSymbol);
}