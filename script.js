
var turnOrder = 1; //turnorder dictates whether a X or O is written ;

var body = document.body;

var gridLog =
[0,1,2,
 3,4,5,
 6,7,8];

 function backgroundColor() {
    body.style.backgroundColor = "#465775";
 }

 backgroundColor();

function gameTitle() {
    var title = document.createElement('h1');
    title.innerHTML = "Play TicTacToe";
    title.style.textAlign = "center";
    title.style.color = "white";
    body.appendChild(title);
} //this creates the TicTacToe title of the page.

gameTitle();

function gridContainer() {
  var divGrid = document.createElement('div');
  divGrid.style.backgroundColor = "#EF6F6C";
  divGrid.style.height = "650px";
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
        gridBox.style.backgroundColor = "#56E39F";
        gridBox.style.height = "30%";
        gridBox.style.width = "31%";
        gridBox.style.margin = "10px"; //margin 10px to leave gaps between boxes and create the grid.
        gridBox.style.display = "inline-block";
        gridBox.classList.add("grid-box-" + i);
        gridBox.classList.add("grid-event"); //this makes it easier to call event listeners.

        var gridBoxText = document.createElement('h2');
        gridBoxText.style.fontSize = "72px";
        gridBoxText.innerHTML = "HIDDEN";
        gridBoxText.style.visibility = "hidden";
        gridBoxText.classList.add("hidden"); //this prevents the grid from warping when clicked

        divGrid.appendChild(gridBox);
        gridBox.appendChild(gridBoxText);
    } //this creates the boxes that we will use in the game.
};

gridBoxes();

function reloadPage() {
        alert("You win!\nTry another round!\nThis page will auto refresh after 3 seconds!");
        setTimeout(function() {location.reload()}, 3000);
}

function gameEnd() {
    if (turnOrder === 10) {
        alert("Game ended!\nTry another round!\nThis page will auto refresh after 3 seconds!");
        setTimeout(function() {location.reload()}, 3000);
    };

    // [0,1,2
    //  3,4,5
    //  6,7,8]

    if (gridLog[0] === 'x' && gridLog[1] === 'x' && gridLog[2] === 'x') {
        reloadPage();
    } else if (gridLog[0] === 'o' && gridLog[1] === 'o' && gridLog[2] === 'o') {
        reloadPage();
    }; // win condition row 1

    if (gridLog[3] === 'x' && gridLog[4] === 'x' && gridLog[5] === 'x') {
        reloadPage();
    } else if (gridLog[3] === 'o' && gridLog[4] === 'o' && gridLog[5] === 'o') {
        reloadPage();
    } //win condition row 2

    if (gridLog[6] === 'x' && gridLog[7] === 'x' && gridLog[8] === 'x') {
        reloadPage();
    } else if (gridLog[6] === 'o' && gridLog[7] === 'o' && gridLog[8] === 'o') {
        reloadPage();
    } //win condition row 3

    if (gridLog[0] === 'x' && gridLog[3] === 'x' && gridLog[6] === 'x') {
        areloadPage();
    } else if (gridLog[0] === 'o' && gridLog[3] === 'o' && gridLog[6] === 'o') {
        reloadPage();
    } //win condition col 1

    if (gridLog[1] === 'x' && gridLog[4] === 'x' && gridLog[7] === 'x') {
        reloadPage();
    } else if (gridLog[1] === 'o' && gridLog[4] === 'o' && gridLog[7] === 'o') {
        reloadPage();
    } //win condition col 2

    if (gridLog[2] === 'x' && gridLog[5] === 'x' && gridLog[8] === 'x') {
        reloadPage();
    } else if (gridLog[2] === 'o' && gridLog[5] === 'o' && gridLog[8] === 'o') {
        reloadPage();
    } //win condition col 3

    if (gridLog[0] === 'x' && gridLog[4] === 'x' && gridLog[8] === 'x') {
        reloadPage();
    } else if (gridLog[0] === 'o' && gridLog[4] === 'o' && gridLog[8] === 'o') {
        reloadPage();
    } //win condition diagonal 1

    if (gridLog[2] === 'x' && gridLog[4] === 'x' && gridLog[6] === 'x') {
        reloadPage();
    } else if (gridLog[2] === 'o' && gridLog[4] === 'o' && gridLog[6] === 'o') {
        reloadPage();
    } //win condition diagonal 2


}

var gridLoop = document.querySelectorAll('.grid-event'); //returns an array of all 9 boxes.
var hiddenText = document.querySelectorAll('.hidden'); // returns an array of H2 hidden texts

gridLoop.forEach(function(gridBox,i) {

    gridBox.addEventListener("mouseover", function() {
    gridBox.style.backgroundColor = "#59C9A5";
});  //This part allows users to mouse over and change color

    gridBox.addEventListener("mouseleave", function() {
    gridBox.style.backgroundColor = "#56E39F";
}); //this part changes the grid back to original color once user mouse has left the box

//when each box is clicked, it will show a X or O depending on turn order.
    gridBox.addEventListener("click", function() {
    if (turnOrder % 2 === 0) {
      hiddenText[i].innerHTML = "O";
      hiddenText[i].style.visibility = "visible"; //this replaces the hidden word and makes it visible.
      hiddenText[i].style.color = "white";
      hiddenText[i].style.textAlign = "center"
      turnOrder++;
      gridLog[i] = 'o';
      gameEnd();
    } else {
      hiddenText[i].innerHTML = "X";
      hiddenText[i].style.visibility = "visible"; //this replaces the hidden word and makes it visible.
      hiddenText[i].style.color = "white";
      hiddenText[i].style.textAlign = "center"
      turnOrder++;
      gridLog[i] = 'x';
      gameEnd();
    };

    },  {once : true});

});
 //this only allows the thing to run once, so you cannot create multiple X.
// for reference, https://stackoverflow.com/questions/28610365/how-can-i-add-an-event-for-a-one-time-click-to-a-function