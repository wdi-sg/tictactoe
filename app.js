// DOM elements 
var box = [ '.box1','.box2','.box3','.box4','.box5','.box6','.box7','.box8','.box9']


// Global variables
var playerTurn = 0;


// Every square has an event listener, when it is clicked, if playerTurn === 0, that particular square will append a paragraph with O inside it, then the player turn will increment by 1, else if playerTurn === 1, that particular square will append a paragrpah with D inside it, player turn will decrease by 1. 
var createPara = document.createElement('p');

var loopBox = function() {
    for(let i = 0; i<box.length; i++){
        var partBox = document.querySelector(box[i])
        console.log(box[i])
        partBox.addEventListener('click', function() {
            if(playerTurn === 0) {
                document.querySelector(box[i]).innerHTML = `<p>O</p>`
                playerTurn ++
              console.log(box[i])
            } else if(playerTurn === 1) {
                document.querySelector(box[i]).innerHTML = `<p>X</p>`
                playerTurn--
            }
        })
    }
}
loopBox()

var detectWin = function() {
    
}