var boardSelect = document.querySelector("#board");
var array = [];
var clickcount = 0;
var xWin = "";
var oWin = "";
var str = "";
var winner;
var xrownumbers = [] ;
var xcolnumbers = [] ;
var xdiag = 0;
var xdiag2 = 0;
var orownumbers = [] ;
var ocolnumbers = [] ;
var odiag = 0;
var odiag2 = 0;
var diag =0;
var col;
var row;
var win;
var boardSize;

//append X and O for users
var clicked = function (event) {
    console.log("clicked");
    var idSelect = event.target.id;
    var boxSelect = document.querySelector(".box")
    var id = idSelect.replace(",","");
    console.log(idSelect);

    //Check if the box is taken
    if(event.target.textContent == "") {
        if (clickcount%2 == 0) {
            //input "X"
            event.target.textContent = "X";
            xWin = xWin+id;
            console.log(xWin);

            //record the rows
            xrownumbers.push(id[1]);
            //record the cols;
            xcolnumbers.push(id[0]);
            //count diagonal;
            if(id[0] ==  id[1]) {
                xdiag++;
                console.log("diagnoal count: "+xdiag)
                if(xdiag == boardSize){
                    console.log("win");
                    win=1;
                }
            }
            if(parseInt(id[0])+parseInt(id[1]) == (boardSize-1)) {
                xdiag2++;
                console.log("diangonal2 count: "+xdiag2)
                if(xdiag2 == boardSize){
                    console.log("win");
                    win=1;
                }
            }
            //sort the numbers in ascending
            xrownumbers.sort(function(a, b){return a-b});
            console.log(xrownumbers);
            xcolnumbers.sort(function(a, b){return a-b});
            console.log(xcolnumbers);
            //check diagonal

            row = xrownumbers;
            col = xcolnumbers;
            winner = "Player 1";

        }
        //Input "O"
        if (clickcount%2 == 1){
            event.target.textContent = "O";
            oWin = oWin+id;

              //record the rows
            orownumbers.push(id[1]);
            //record the cols;
            ocolnumbers.push(id[0]);
            //count diagonal;
            if(id[0] ==  id[1]) {
                odiag++;
                if(odiag == boardSize){
                    console.log("win");
                    win=1
                }
            }
            if(parseInt(id[0])+parseInt(id[1]) == (boardSize-1)) {
                odiag2++;
                if(odiag2 == boardSize){
                    console.log("win");
                    win=1;
                }
            }
            //sort the numbers in ascending
            orownumbers.sort(function(a, b){return a-b});
            console.log(orownumbers);
            ocolnumbers.sort(function(a, b){return a-b});
            console.log(ocolnumbers);
            //check diagonal

            row = orownumbers;
            col = ocolnumbers;
            winner = "Player 2";

        }
        clickcount ++;
    }
    winCheck ();

    winliao();

    drawliao();
}

//create the board and add click event
var createBoard = function () {
    //hide the button
    button.classList.add('hide');
    for(var i=0 ; i<boardSize ; i++) {
        for(var j=0 ; j<boardSize ; j++){
            console.log(i+"+"+j)

            var newDiv = document.createElement("div");
            if(boardSize == 5) {
            newDiv.className = "box3";
            }
            if(boardSize == 4) {
            newDiv.className = "box2";
            }
            if(boardSize == 3) {
            newDiv.className = "box";
            }
            newDiv.textContent = "";
            newDiv.id = i + "," + j;
            boardSelect.appendChild(newDiv);
            newDiv.addEventListener('click',clicked);
        }
    }
}

var button = document.querySelector("#start");
button.addEventListener('click',createBoard);

var input = document.querySelector('#boardsize').addEventListener('change', function(event){
    boardSize = event.target.value;
    console.log(boardSize);
});



var winCheck = function () {
    //Check rows !!!
    var matchCount = 0;
    for(var i=0 ; i<row.length-1; i++) {
        if (row[i] == row[i+1]) {
            matchCount += 1;
            console.log("row match"+matchCount)

        } else {
             matchCount = 0;
             console.log("reset liao")
        }
        if (matchCount == boardSize-1) {
                win = 1;
        }
    }
    //resetcount
    matchCount =0
    //Check Col
    for(var i=0 ; i<col.length-1; i++){
        if (col[i] == col[i+1]){
            console.log("win!");
            matchCount += 1;
            console.log("col match"+matchCount)
        } else {
             matchCount = 0;
             console.log("reset liao")
        }
        if (matchCount == boardSize-1) {
                win = 1;
            }
    }
    //resetcount
    matchCount =0;
}

var reloadPage = function () {
    window.location.reload();
}

var winliao = function () {
    if(win==1) {
        var button = document.querySelector("#start");
        button.classList.remove('hide');
        button.innerText = "Game Ended!";
        button.addEventListener('click',reloadPage);
        console.log(winner+" won!")
        document.querySelector("#msg").innerText = winner+" won!";

    }
}

var drawliao = function () {
    if (clickcount == (boardSize*boardSize)) {
        var button = document.querySelector("#start");
        button.classList.remove('hide');
        button.innerText = "Game Ended!";
        button.addEventListener('click',reloadPage);
        console.log("Draw!")
        document.querySelector("#msg").innerText = "Is a draw!";
    }
}