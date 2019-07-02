var noPerRowColumn = null;

var clearField = function(){
    document.getElementById('board-size').value = '';
}

var createBoard = function (){
    noPerRowColumn = document.getElementById('board-size').value;
    noPerRowColumn = parseInt(noPerRowColumn);
    var totalNoOfGrids = noPerRowColumn*noPerRowColumn;
    clearField();

    var gridCount=1;
    var currentRow=1;
    var displayBoard = document.getElementById('game-display');
    var widthPercent = 95/noPerRowColumn;

    while (gridCount <= totalNoOfGrids){
        var grid = document.createElement('p');
        grid.classList.add('grid');
        grid.setAttribute("id",`${gridCount}`);
        grid.style.width =`${widthPercent}%`;
        grid.innerHTML = '&nbsp;&nbsp;';

        if (gridCount%noPerRowColumn===0 && gridCount!==totalNoOfGrids){
            grid.style.borderBottom = '1px solid black';
        } else if (currentRow === noPerRowColumn && gridCount!==totalNoOfGrids) {
            grid.style.borderRight = '1px solid black';
        } else if (gridCount === totalNoOfGrids){
            //no style
        } else {
            grid.style.borderRight = '1px solid black';
            grid.style.borderBottom = '1px solid black';
        }

        displayBoard.appendChild(grid);
        if (gridCount%noPerRowColumn===0){
            currentRow++;
        }
        gridCount++;
    }
};