console.log('HERRROOOO')

var body = document.body;

function gameTitle() {
    var title = document.createElement('h1');
    title.innerHTML = "Play TicTacToe";
    title.style.textAlign = "center";
    body.appendChild(title);
}

gameTitle();

function gridContainer() {
  var divGrid = document.createElement('div');
  divGrid.style.backgroundColor = "pink";
  divGrid.style.height = "1000px";
  divGrid.style.width = "960px";
  divGrid.style.margin = "0 auto";
  divGrid.classList.add("grid-container");
  body.appendChild(divGrid);
} //this function creates the container where you will hold the tictactoe grids.

gridContainer();
var divGrid = document.getElementsByClassName('grid-container')[0];


function gridBoxes() {
    for (i = 1; i < 10; i++) { //i start from 1 so that when adding class name it starts from grid-box-1
        var gridBox = document.createElement('div');
        gridBox.style.backgroundColor = "blue";
        gridBox.style.height = "31%";
        gridBox.style.width = "31%";
        gridBox.style.margin = "10px"; //margin 10px to leave gaps between boxes and create the grid.
        gridBox.style.display = "inline-block";
        gridBox.classList.add("grid-box-" + i);
        divGrid.appendChild(gridBox);
    }
};

gridBoxes();