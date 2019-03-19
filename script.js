console.log('HERRROOOO')

var body = document.body;

function gameTitle() {
    var title = document.createElement('h1');
    title.innerHTML = "Play TicTacToe";
    title.style.textAlign = "center";
    body.appendChild(title);
} //this creates the TicTacToe title of the page.

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
        gridBox.classList.add("grid-event"); //this makes it easier to call event listeners.
        divGrid.appendChild(gridBox);
    } //this creates the boxes that we will use in the game.
};

gridBoxes();

var gridEvent = document.getElementsByClassName('grid-event')[0];

// This part allows users to mouse over and change color
gridEvent.addEventListener("mouseover", function() {
    gridEvent.style.backgroundColor = "green";
});

gridEvent.addEventListener("mouseleave", function() {
    gridEvent.style.backgroundColor = "blue";
});
// this part changes the grid back to original color once user mouse has left the box

gridEvent.addEventListener("click", function() {
    gridEvent.style.backgroundColor = "yellow";
    var cross = document.createElement('h2');
    cross.innerHTML = "X";
    gridEvent.appendChild(cross);
}, {once : true});  //this only allows the thing txo run once, so you cannot create multiple X.
// for reference, https://stackoverflow.com/questions/28610365/how-can-i-add-an-event-for-a-one-time-click-to-a-function