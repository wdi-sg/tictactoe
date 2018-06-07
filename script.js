document.addEventListener('DOMContentLoaded',function(){

    //Set up game grid as array
    //[0][1][2]             [1][2][3]
    //[3][4][5] = SquareNo. [4][5][6]
    //[6][7][8]             [7][8][9]
    var gameGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0,];

    //Define values of X and O
    var X = 1;
    var O = -1;

   //Gameplay logic. Change in Square contents changes value in gameGrid Array.
    var gamePlay = function {
        var square1 = document.getElementById("#box1");
            if (square1.innerHTML = "X") {
                gameGrid[0] = 1;
            } else if (square1.innerHTML = "O") {
                gameGrid[0] = -1;
        var square2 = document.getElementById("#box2");
            if (square2.innerHTML = "X") {
                gameGrid[1] = 1;
            } else if (square2.innerHTML = "O") {
                gameGrid[1] = -1;        
        var square3 = document.getElementById("#box3");
            if (square1.innerHTML = "X") {
                gameGrid[2] = 1;
            } else if (square1.innerHTML = "O") {
                gameGrid[2] = -1;
        var square4 = document.getElementById("#box4");
            if (square1.innerHTML = "X") {
                gameGrid[3] = 1;
            } else if (square1.innerHTML = "O") {
                gameGrid[3] = -1;
        var square5 = document.getElementById("#box5");
            if (square1.innerHTML = "X") {
                gameGrid[4] = 1;
            } else if (square1.innerHTML = "O") {
                gameGrid[4] = -1;
        var square6 = document.getElementById("#box6");
            if (square1.innerHTML = "X") {
                gameGrid[5] = 1;
            } else if (square1.innerHTML = "O") {
                gameGrid[5] = -1;
        var square7 = document.getElementById("#box7");
            if (square1.innerHTML = "X") {
                gameGrid[6] = 1;
            } else if (square1.innerHTML = "O") {
                gameGrid[6] = -1;
        var square8 = document.getElementById("#box8");
            if (square1.innerHTML = "X") {
                gameGrid[7] = 1;
            } else if (square1.innerHTML = "O") {
                gameGrid[7] = -1;
        var square9 = document.getElementById("#box9");
            if (square1.innerHTML = "X") {
                gameGrid[8] = 1;
            } else if (square1.innerHTML = "O") {
                gameGrid[8] = -1;


    //Define winning combinations
    //Rows ([0]=[1]=[2]) || ([3]=[4]=[5]) || ([6]=[7]=[8])
    //Columns ([0]=[3]=[6]) || ([1]=[4]=[7]) || ([2]=[5]=[8])
    //Diagonals ([0]=[4]=[8]) || ([6]=[4]=[2])
    var winningCombos = function() {
        for (var i=0; i<gameGrid.length; i++);
        if (([i] != 0) && ([0] == [1] == [2]) || ([3] == [4] == [5]) || ([6] == [7] == [8]) || ([0] == [3] == [6]) || ([1] == [4] == [7]) || ([3] == [5] == [8]) || ([0] == [4] == [8]) || ([6] == [4] == [2])
        alert("We have a Winner!");
    }

        }
    }

});