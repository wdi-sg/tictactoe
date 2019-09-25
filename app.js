// DOM elements 
var box = [ ['.box1','.box2','.box3'],
            ['.box4','.box5','.box6'] ,
            ['.box7','.box8','.box9']]


// Global variables
var playerTurn = 0;
var oMoves =[];
var xMoves = [];


// Every square has an event listener, when it is clicked, if playerTurn === 0, that particular square will append a paragraph with O inside it, then the player turn will increment by 1, else if playerTurn === 1, that particular square will append a paragrpah with D inside it, player turn will decrease by 1. 


var loopBox = function() {
    for(let i = 0; i<box.length; i++){
        for(let j = 0; j < box[i].length; j ++) {
            var partBox = document.querySelector(box[i][j])
            partBox.addEventListener('click', function() {
                if(playerTurn === 0 || playerTurn % 2 === 0) {
                    document.querySelector(box[i][j]).innerHTML = `<p>O</p>`
                    
                    playerTurn ++
                    oMoves.push(box[i])
                    box[i][j] = "O"
                    checkWin()
                    console.log(playerTurn)
                } else if(playerTurn % 2 === 1) {
                    document.querySelector(box[i][j]).innerHTML = `<p>X</p>`
                    
                    playerTurn++
                    xMoves.push(box[i])
                    box[i][j] = "X"
                    checkWin()
                    console.log(playerTurn)
                }
            })
        }
      
    }
}

var checkWin = function() {
   for(i = 0; i<box.length; i++) {
    //    Check the rows for a win
    if(box[i][0] === box[i][1] && box[i][0]=== box[i][2]){
        alert('WIN')

    } 
    console.log("THIS IS BOX[I]:   " + box[i])
    for(let j = 0; j<box[i].length; j++) {
        if(box[j][0] === box[j][1] && box[j][0]=== box[j][2]){
            alert('WINNNN')
        }

    }
   }
    
}
loopBox()




  console.log(box)
  