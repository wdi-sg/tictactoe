console.log("hello script js");

var currentBoard = []
var playerXMoves = []
var pWin;
var winCombo = {
    0: [[0,1,2],[0,3,6],[0,4,8]],
    1: [[0,1,2],[1,4,7]],
    2: [[0,1,2],[2,4,6],[2,5,8]],
    3: [[0,3,6],[3,4,5]],
    4: [[0,4,8],[1,4,7],[2,4,6],[3,4,5]],
    5: [[3,4,5],[2,5,8]],
    6: [[0,3,6],[2,4,6],[6,7,8]],
    7: [[1,4,7],[6,7,8]],
    8: [[0,4,8],[2,5,8],[6,7,8]]
}

var isGameRunning = false;
var isGameWon = false;

var btnAddEventList = function() {
    btnArray().forEach(function(item) {
        item.addEventListener('click', check)
    })
};
var btnRemoveEventList = function() {
    btnArray().forEach(function(item) {
        item.removeEventListener('click', check)
    })
};
var startGame = function(){
    if(!isGameRunning){
        btnAddEventList();
        console.log("Start the Game.")
        alert("game start")
        isGameRunning = true;
    }

}
var resetGame = function(){
    if(!isGameRunning){
        btnRemoveEventList();
        item.innerHTML = "";
        currentBoard = [];
        playerXMoves = [];
        btnRemoveEventList
    }
}
var getBtnId = function(buttonId){
    return Number.parseInt(buttonId.replace('btn', ''));
}
var randomChoice = function(array) {
    return Math.floor(Math.random() * array.length);
};
var btnArray = function() {
    return Array.from(document.querySelectorAll("button"))
};

var loadBoard = function(){
    return currentBoard = btnArray();
}
var check = function(event){
    if(currentBoard.length === 0){
        loadBoard();
        console.log(currentBoard);
    }
    if(currentBoard.length === 2){
        console.log("ITS A DRAW!")
    }
    drawEx();
    if(!isGameWon){
        drawOh();
    }
}
var setWinCombo = function(id){
    if(playerXMoves.length === 1){
        pWin = winCombo[id];
        console.log(pWin);

    }
}

var checkMatch = function(){
    var pm = playerXMoves.length;
    console.log(pWin);

    if(pm >= 3){
        console.log("checking");
        for (var i = 0; i < pWin.length; i++) {
            console.log(i);
            var a = pWin[i].includes(playerXMoves[0] &&
            playerXMoves[1] && playerXMoves[2])
            if(a){
                console.log("YOU WON")
                alert('you won the game')
                isGameWon = true
                btnRemoveEventList;
                return isGameWon
            }
        }
    }
}


var drawEx = function(){

    var b = event.target;
    b.innerHTML = "X";

    var id = getBtnId(b.id)
    playerXMoves.push(id);
    setWinCombo(id)

    checkMatch();
    console.log("player X checked " + id);

    currentBoard.splice(id, 1);
    console.log(currentBoard)
    console.log("current boards left " + currentBoard.length)

    console.log("player X made a turn");

    btnRemoveEventList();
    playerX =false;
}
var drawOh = function(){
    setTimeout(function(){


        var r = randomChoice(currentBoard);
        var id = getBtnId(currentBoard[r].id);


        currentBoard[r].innerHTML = "O";

        console.log("player O checked " + id);

        currentBoard.splice(r, 1);
        console.log(currentBoard)
        console.log("current boards left " + currentBoard.length)

        console.log("player O made a turn");

        btnAddEventList();
    }, 3000);
}