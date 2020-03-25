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
                if(xdiag == 3){
                    console.log("win");
                    win=1;
                }
            }
            if(parseInt(id[0])+parseInt(id[1]) == 2) {
                xdiag2++;
                console.log("diangonal2 count: "+xdiag2)
                if(xdiag2 == 3){
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
                if(odiag == 3){
                    console.log("win");
                    win=1
                }
            }
            if(parseInt(id[0])+parseInt(id[1]) == 2) {
                odiag2++;
                if(odiag2 == 3){
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
}

//create the board and add click event
var createBoard = function () {
    //hide the button
    button.classList.add('hide');
    for(var i=0 ; i<3 ; i++) {
        for(var j=0 ; j<3 ; j++){
            console.log(i+"+"+j)
            var newDiv = document.createElement("div");
            newDiv.className = "box";
            newDiv.textContent = "";
            newDiv.id = i + "," + j;
            boardSelect.appendChild(newDiv);
            newDiv.addEventListener('click',clicked);
        }
    }
}

var button = document.querySelector("#start");
button.addEventListener('click',createBoard);

var winCheck = function () {
    //sort rows

    //3 in a row !!!
    for(var i=0 ; i<row.length-2; i++) {
        if (row[i] == row[i+1] && row[i+1] == row[i+2]){
            console.log("win");
            win = 1;
        }
    }
    //3 in a col !!!
    for(var i=0 ; i<col.length-2; i++){
        if (col[i] == col[i+1] && col[i+1] == col[i+2]){
            console.log("win!");
            win = 1;
        }
    }
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