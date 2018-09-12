console.log("link");
var playerOneArray = [];
var playerTwoArray = [];
//declare no player
var player = null;
//set player choices
var countMove = 0;
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
    if (countMove >= 9){
    alert("It's a draw");
    location.reload();

    };

}

// currentplay();
// function redcolor(){
//     //console.log("inside callback: "+  i )
//     console.log(this.id);
//     //this.id
//     playeronearray.push(this.id);
//     this.style.backgroundColor = "red";
//     console.log(playeronearray);
// }

// function bluecolor(){
//     console.log("blue!");
//     playertwoarray.push(this.id);
//     this.style.backgroundColor = "blue";
// //console.log(playertwoarray.length);
// }
// player function

//var getbox = document.getElementsByClassName('square')[0];
var getbox = document.querySelectorAll(".square");
   // console.log(getbox);
for(var i = 0; i<getbox.length; i++){
    console.log( "inside loop: " + i)
    //console.log(getbox[i]);
    getbox[i].addEventListener('click',switchPlayer);

};

console.log("after loop finishes: " + i);

//results d
// function youWin(){
//     for (var j = 0; j<result.length; j++){
//         console.log("result "+ result[i]);
//     }
// }
// youWin();
