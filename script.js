console.log('linked');

var userATurn = true;
var displayTurn = document.getElementById('display-turn');

var indicatePlayerTurn = function(){
  if (userATurn === true){
    displayTurn.innerText = "Player A's Turn";
  } else {
    displayTurn.innerText = "Player B's Turn";
  }
}

indicatePlayerTurn();

var drawSymbol = function(data){
  if(userATurn === true){
    console.log("x  " + data.innerText);
    data.innerText = "x";
    userATurn = false;
    indicatePlayerTurn();
  } else {
    console.log("o  " + data.innerText);
    data.innerText = "o";
    userATurn = true;
    indicatePlayerTurn();
  }
}
