console.log("Tic Tac Toe assignment")

// global variables
var button = document.querySelectorAll('.game-square');
var player = false;
var board = [
    [1,2,3],
    [4,5,6],
    [7,8,9]];

var addToBoard = function(input){

}

//function to add x or o
var changeBoard = function(input){
    if (player === false){
        this.innerHTML = "X";

        player = true;
    } else {
        this.innerHTML = "O";
        player = false;
    }

};

var clicker = function(){
    for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click', changeBoard);
    }
};

var createBoard = function(){
    for(var j = 0; j < 3; j++){
        var createRows = document.createElement("div");
        createRows.classList = "game-row";
        document.querySelector("#board").appendChild(createRows);
            for(var i = 0; i < 3; i++){
                var createColumns = document.createElement("div");
                createColumns.classList = "game-square";
                var selectRows = document.querySelectorAll(".game-row");
                selectRows[j].appendChild(createColumns);
        }
    }
}
createBoard();
clicker();