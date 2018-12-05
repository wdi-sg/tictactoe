var entryItems = document.querySelectorAll(".entry");

var turn = 0;

var outcome =[
    ["?","?","?"],
    ["?","?","?"],
    ["?","?","?"]
];

var a, b, c;

var rowCheck;
var colCheck;

var player1Score = 0;
var player2Score = 0;

// 0,0|0,1|0,2
// ------------
// 1,0|1,1|1,2
// ------------
// 2,0|2,1|2,2

var addX = function(event) {
    if (event.target.textContent=="?") {
        event.target.textContent="x";
        event.target.style.color="#003366";
    } else {
        turn -= 1;
    }
}

var addO = function(event) {
    if (event.target.textContent=="?") {
    event.target.textContent="o";
    event.target.style.color="#8b0000";
    } else {
        turn -= 1;
    }
}

// var rowsUpdate = function(){
//   for(var i=0; i<3; i++){
//     console.log(outcome[i])
//         for(var j=0; j<3; j++){
//             console.log(outcome[i][j])
//         }
//     }
// }
//not sure how to apply this to update all array fields in the above function

// var rowsUpdate = function(i){
//   for(var i=0; i<3; i++){
//     outcome[0][i]=document.querySelectorAll(".entry")[i].innerText;
//   }
// }

var rowsUpdate = function(){
    outcome[0][0] = document.querySelectorAll(".entry")[0].innerText;
    outcome[0][1] = document.querySelectorAll(".entry")[1].innerText;
    outcome[0][2] = document.querySelectorAll(".entry")[2].innerText;

    outcome[1][0] = document.querySelectorAll(".entry")[3].innerText;
    outcome[1][1] = document.querySelectorAll(".entry")[4].innerText;
    outcome[1][2] = document.querySelectorAll(".entry")[5].innerText;

    outcome[2][0] = document.querySelectorAll(".entry")[6].innerText;
    outcome[2][1]  = document.querySelectorAll(".entry")[7].innerText;
    outcome[2][2]  = document.querySelectorAll(".entry")[8].innerText;
}

var rowsComp = function(i){
  for(var i=0; i<3; i++){
    a = outcome[i][0];
    b = outcome[i][1];
    c = outcome[i][2];
    if(a == b && a == c && a != "?"){
      return a;
    }
  }
}

var colComp = function(i){
  for(var i=0; i<3; i++){
    a = outcome[0][i];
    b = outcome[1][i];
    c = outcome[2][i];
    if(a == b && a == c && a != "?"){
      return a;
    }
  }
}

// var updateScore = function() {
//     if
// }

var addEntry = function(event) {

    rowsUpdate();

    rowCheck = rowsComp();
    colCheck = colComp();

    if (rowCheck =="x" || rowCheck =="o"){
        updateResult(rowCheck);
    }   else if (colCheck=="x" || colCheck=="o"){
        updateResult(colCheck);
    } else if ((outcome[0][0] == outcome[1][1]) && (outcome[0][0]== outcome[2][2]) && (outcome[0][0] != "?")){
        updateResult(outcome[0][0]);
    } else if ((outcome[0][2] == outcome[1][1]) && (outcome[0][2]== outcome[2][0]) && (outcome[0][2] != "?")){
        updateResult(outcome[0][2]);
     } else if (turn >= 9) {
        document.querySelector("#result").textContent = "It's a draw.";
        appearButton();
        hoverButton();
        restartButton();
    } else if (turn%2==0) {
        addX(event);
        turn++;
    } else   {
        addO(event);
        turn++;
    }
}

for(var i = 0; i < entryItems.length; i++){
    entryItems[i].addEventListener("click", addEntry);
}

var updateResult = function(result) {
    document.querySelector("#result").textContent = "The winner is '" + result +"' player";
    appearButton();
    hoverButton();
    restartButton();
}

/*CButton Functions-----------------------------------------------------------------------*/

var appearButton = function() {
    document.getElementById("restartButton").style.backgroundColor = "black";
}

var disappearButton = function() {
     document.getElementById("restartButton").style.backgroundColor = "white";
}


 var hoverButton =  function() {
    document.getElementById("restartButton").addEventListener("mouseover", function(){
    document.getElementById("restartButton").style.backgroundColor = "white";
    document.getElementById("restartButton").style.color = "black";
    })
    document.getElementById("restartButton").addEventListener("mouseout", function(){
    document.getElementById("restartButton").style.backgroundColor = "black";
      document.getElementById("restartButton").style.color = "white";
    })
}

// hoverButton();

 var restartButton = function() {
    document.getElementById("restartButton").addEventListener("click", function(){
        turn = 0;
        for(var i = 0; i < entryItems.length; i++){
        entryItems[i].textContent="?";
        entryItems[i].style.color="black";
        }
        // disappearButton();
        document.getElementById("restartButton").style.backgroundColor = "white";
        document.querySelector("#result").textContent = "Game restarted.";
    })
};

// restartButton();



