var playerTurn = "X";

//the function statement will not trigger unless addEventListener is activated.
var symbolChange = function(event) {
    //Assign event target to clickElement
    var clickElement = event.target;
    //console.log to check if its running till this stage
    // console.log('player turn before: ', playerTurn)
    //conditional statement for the game play
    if (playerTurn === "X") {
        //if playerTurn is "x", the box will reflect "X"
        clickElement.innerHTML = "X";
        playerTurn = "O";
    } else {
        clickElement.innerHTML = "O";
        //return to another playerTurn 
        playerTurn = "X";
    }
    //console.log to check if its running till this stage
    // console.log('player turn after: ', playerTurn)

}

//Assign all of "td" to boxArray
var boxArray = document.querySelectorAll("td");
//create a statement to check all the boxes in the table
for (var i = 0; i < boxArray.length; i++) {
    // console.log(boxArray[i]); =>to check if its running
    //Assign any value in boxArray to currentBox
    var currentBox = boxArray[i];
    //addEventListener to currentBox to "listen" to "click" and trigger symbolChange
    currentBox.addEventListener("click", symbolChange);
}
//adding an array for all the "td"
var winningCombi = [
  [ ".one", ".two", ".three" ],
  [ ".four", ".five", ".six" ],
  [ ".seven", ".eight", ".nine" ],
  [ ".one", ".four", ".seven" ],
  [ ".two", ".five", ".eight" ],
  [ ".three", ".six", ".nine" ],
  [ ".one", ".five", ".nine" ],
  [ ".three", ".five", ".seven" ]
];

var winResult = function() {
console.log("testtest");	
	// if(winningCombi[0][0] === "X" && winningCombi[0][1] === "X" && winningCombi[0][2] === "X" ||
	//    winningCombi[1][0] === "X" && winningCombi[1][1] === "X" && winningCombi[1][2] === "X" ||
 //       winningCombi[2][0] === "X" && winningCombi[2][1] === "X" && winningCombi[2][2] === "X" ||
 //       winningCombi[3][0] === "X" && winningCombi[3][1] === "X" && winningCombi[3][2] === "X" ||
 //       winningCombi[4][0] === "X" && winningCombi[4][1] === "X" && winningCombi[4][2] === "X" ||
 //       winningCombi[5][0] === "X" && winningCombi[5][1] === "X" && winningCombi[5][2] === "X" ||
 //       winningCombi[6][0] === "X" && winningCombi[6][1] === "X" && winningCombi[6][2] === "X" ||
 //       winningCombi[7][0] === "X" && winningCombi[7][1] === "X" && winningCombi[7][2] === "X"
	//    ) {
	// 	console.log("Win liao!")
	// }
}

// var restartGame = function() {
// 	for(i = 0; i < boxArray.length; i++) {
// 		var fullBox = boxArray[i];
// 		fullBox.innerHTML = "0";
// 		fullBox.classList.add("empty")
// 	}
// } 


