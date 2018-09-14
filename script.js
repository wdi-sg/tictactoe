console.log("link");
var playerOneArray = [];
var playerTwoArray = [];
//declare no player
var player = null;
//set player choices
var countMove = 1;
var result = [
["0","1","2"],
["3","4","5"],
["6","7","8"],
["0","3","6"],
["1","4","7"],
["2","5","8"],
["0","4","8"],
["2","4","6"],
]


//create a function switch player;
var switchPlayer = function(){
    if(player === "1") {
        console.log("player 1 turns");
        player = "2";

        } else {
        player = "1";
        console.log("player 2 turns");
        };
    //player one red
    if(player === "1"){
        playerOneArray.push(this.id);
        console.log(this.id);
        this.style.backgroundColor = "red";
        countMove++;
        this.removeEventListener('click',switchPlayer);
        console.log(countMove+"move");
        console.log(playerOneArray);
        }//player two
        else if (player === "2"){
        playerTwoArray.push(this.id);
        console.log(this.id);
        this.style.backgroundColor = "blue";
        countMove++;

        console.log(countMove+"move");
        this.removeEventListener('click',switchPlayer);
        console.log(playerTwoArray);
    }
    //result check
    //draw
checkScore(playerOneArray);
checkScore(playerTwoArray);
    //draw
 if (countMove == 10){
    alert("It's a draw");
    countMove = 1;
    reload();

    };    //checkscore

}

function reload(){
    location.reload();
}
// player function
//for loop for the index of the sqaure

var getbox = document.querySelectorAll(".square");
   // console.log(getbox);
for(var i = 0; i<getbox.length; i++){
    console.log( "inside loop: " + i)
    //console.log(getbox[i]);
    getbox[i].addEventListener('click',switchPlayer);

};

console.log("after loop finishes: " + i);

//results d
function checkScore(playerWin){
    for (var j = 0; j<result.length; j++){
        var playerWon = [];
        //console.log("result j "+ result[j]);
        //second loop
        for(var k = 0; k<result[j].length; k++){

        //var haveOrNow = playerOne.indexOf(result[j][k]);
            //debugger;
        if (playerWin.indexOf(result[j][k]) !== -1 ){
            playerWon.push(result[j][k]);
            }
        // if (playerWin.indexOf(result[j][k]!== -1)){
        //     playerWon++;
        // }
        console.log("check if player has ",result[j][k]);
        if (playerWon.length === 3) {
        countMove = 1;
        console.log("count move",countMove);
        alert("YOU WIN!");
        console.log("playerWonArray");
        //reload
        reload();
        break;
  }

        }

    }
     //console.log("============");
}





//console.log("outside"+ playerOneArray);
// if (playerOneArray[i]){

// }

