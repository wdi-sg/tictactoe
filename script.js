
var turnOrder = 1; //turnorder dictates whether a X or O is written ;

var body = document.body;

var gridLog =
[0,1,2,
 3,4,5,
 6,7,8];

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
        gridBox.style.backgroundColor = "blue";
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

// var gridEvent = document.getElementsByClassName('grid-event')[0];
// var gridBox = document.getElementsByClassName('hidden')[0];

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

console.log(hiddenText);

// hiddenText.forEach(function(text,i) {


//     text.style.visibility = "visible";
//     text.innerHTML = "O";
//     text.style.color = "white";
//     text.style.textAlign = "center";
//     turnOrder++;
//     gridLog[i] = 'o';
// });

console.log(gridLog);

// var gridEvent1 = document.getElementsByClassName('grid-event')[1];
// var gridBox1 = document.getElementsByClassName('hidden')[1];

gridLoop.forEach(function(gridBox,i) {

// gridBox.addEventListener("click", function() {
//         if (turnOrder % 2 === 0) {
//           gridBox.innerHTML = "O";
//           gridBox.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//           gridBox.style.color = "white";
//           gridBox.style.textAlign = "center";
//           turnOrder++;
//           gridLog[i] = 'o';
//           gameEnd();
//       } else {
//           gridBox.innerHTML = "X";
//           gridBox.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//           gridBox.style.color = "white";
//           gridBox.style.textAlign = "center"
//           turnOrder++;
//           gridLog[i] = 'x';
//           gameEnd();
//       }
//     }, {once : true});

    gridBox.addEventListener("mouseover", function() {
    gridBox.style.backgroundColor = "green";
});  //This part allows users to mouse over and change color

    gridBox.addEventListener("mouseleave", function() {
    gridBox.style.backgroundColor = "blue";
}); //this part changes the grid back to original color once user mouse has left the box

});


// // START OF GRID CHECK BOX

// gridEvent.addEventListener("click", function() {
//     if (turnOrder % 2 === 0) {
//       gridBox.innerHTML = "O";
//       gridBox.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox.style.color = "white";
//       gridBox.style.textAlign = "center"
//       turnOrder++;
//       gridLog[0] = 'o';
//       gameEnd();
//     } else {
//       gridBox.innerHTML = "X";
//       gridBox.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox.style.color = "white";
//       gridBox.style.textAlign = "center"
//       turnOrder++;
//       gridLog[0] = 'x';
//       gameEnd();

//     }
// }, {once : true});  //this only allows the thing to run once, so you cannot create multiple X.
// // for reference, https://stackoverflow.com/questions/28610365/how-can-i-add-an-event-for-a-one-time-click-to-a-function



// var gridEvent1 = document.getElementsByClassName('grid-event')[1];
// var gridBox1 = document.getElementsByClassName('hidden')[1];

// gridEvent1.addEventListener("click", function() {

//     if (turnOrder % 2 === 0) {
//       gridBox1.innerHTML = "O";
//       gridBox1.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox1.style.color = "white";
//       gridBox1.style.textAlign = "center";
//       gridLog[1] = 'o';
//       turnOrder++;
//       gameEnd();
//     } else {
//       gridBox1.innerHTML = "X";
//       gridBox1.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox1.style.color = "white";
//       gridBox1.style.textAlign = "center";
//       turnOrder++;
//       gridLog[1] = 'x'
//       gameEnd();
//     }

// }, {once : true});



// var gridEvent2 = document.getElementsByClassName('grid-event')[2];
// var gridBox2 = document.getElementsByClassName('hidden')[2];

// gridEvent2.addEventListener("click", function() {

//     if (turnOrder % 2 === 0) {
//       gridBox2.innerHTML = "O";
//       gridBox2.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox2.style.color = "white";
//       gridBox2.style.textAlign = "center";
//       turnOrder++;
//       gridLog[2] = 'o';
//       gameEnd();
//     } else {
//       gridBox2.innerHTML = "X";
//       gridBox2.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox2.style.color = "white";
//       gridBox2.style.textAlign = "center";
//       turnOrder++;
//       gridLog[2] = 'x';
//       gameEnd();
//     }

// }, {once : true});  //

// var gridEvent3 = document.getElementsByClassName('grid-event')[3];
// var gridBox3 = document.getElementsByClassName('hidden')[3];

// gridEvent3.addEventListener("click", function() {

//     if (turnOrder % 2 === 0) {
//       gridBox3.innerHTML = "O";
//       gridBox3.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox3.style.color = "white";
//       gridBox3.style.textAlign = "center"
//       turnOrder++;
//       gridLog[3] = 'o';
//       gameEnd();
//     } else {
//       gridBox3.innerHTML = "X";
//       gridBox3.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox3.style.color = "white";
//       gridBox3.style.textAlign = "center";
//       turnOrder++;
//       gridLog[3] = 'x';
//       gameEnd();
//     }

// }, {once : true});  //X


// var gridEvent4 = document.getElementsByClassName('grid-event')[4];
// var gridBox4 = document.getElementsByClassName('hidden')[4];

// gridEvent4.addEventListener("click", function() {

//     if (turnOrder % 2 === 0) {
//       gridBox4.innerHTML = "O";
//       gridBox4.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox4.style.color = "white";
//       gridBox4.style.textAlign = "center";
//       gridLog[4] = 'o';
//       turnOrder++;
//       gameEnd();
//     } else {
//       gridBox4.innerHTML = "X";
//       gridBox4.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox4.style.color = "white";
//       gridBox4.style.textAlign = "center";
//       gridLog[4] = 'x';
//       turnOrder++;
//       gameEnd();
//     }

// }, {once : true});


// var gridEvent5 = document.getElementsByClassName('grid-event')[5];
// var gridBox5 = document.getElementsByClassName('hidden')[5];

// gridEvent5.addEventListener("click", function() {

//     if (turnOrder % 2 === 0) {
//       gridBox5.innerHTML = "O";
//       gridBox5.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox5.style.color = "white";
//       gridBox5.style.textAlign = "center";
//       gridLog[5] = 'o';
//       turnOrder++;
//       gameEnd();
//     } else {
//       gridBox5.innerHTML = "X";
//       gridBox5.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox5.style.color = "white";
//       gridBox5.style.textAlign = "center";
//       gridLog[5] = 'x';
//       turnOrder++;
//       gameEnd();
//     }
// }, {once : true});

// var gridEvent6 = document.getElementsByClassName('grid-event')[6];
// var gridBox6 = document.getElementsByClassName('hidden')[6];

// gridEvent6.addEventListener("click", function() {

//     if (turnOrder % 2 === 0) {
//       gridBox6.innerHTML = "O";
//       gridBox6.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox6.style.color = "white";
//       gridBox6.style.textAlign = "center";
//       gridLog[6] = 'o';
//       turnOrder++;
//       gameEnd();
//     } else {
//       gridBox6.innerHTML = "X";
//       gridBox6.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox6.style.color = "white";
//       gridBox6.style.textAlign = "center";
//       gridLog[6] = 'x';
//       turnOrder++;
//       gameEnd();
//     }

// }, {once : true});

// var gridEvent7 = document.getElementsByClassName('grid-event')[7];
// var gridBox7 = document.getElementsByClassName('hidden')[7];

// gridEvent7.addEventListener("click", function() {

//     if (turnOrder % 2 === 0) {
//       gridBox7.innerHTML = "O";
//       gridBox7.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox7.style.color = "white";
//       gridBox7.style.textAlign = "center";
//       gridLog[7] = 'o';
//       turnOrder++;
//       gameEnd();
//     } else {
//       gridBox7.innerHTML = "X";
//       gridBox7.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox7.style.color = "white";
//       gridBox7.style.textAlign = "center";
//       gridLog[7] = 'x';
//       turnOrder++;
//       gameEnd();
//     }

// }, {once : true});

// var gridEvent8 = document.getElementsByClassName('grid-event')[8];
// var gridBox8 = document.getElementsByClassName('hidden')[8];

// gridEvent8.addEventListener("click", function() {

//     if (turnOrder % 2 === 0) {
//       gridBox8.innerHTML = "O";
//       gridBox8.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox8.style.color = "white";
//       gridBox8.style.textAlign = "center";
//       gridLog[8] = 'o';
//       turnOrder++;
//       gameEnd();

//     } else {
//       gridBox8.innerHTML = "X";
//       gridBox8.style.visibility = "visible"; //this replaces the hidden word and makes it visible.
//       gridBox8.style.color = "white";
//       gridBox8.style.textAlign = "center";
//       gridLog[8] = 'x';
//       turnOrder++;
//       gameEnd();
//     }

// }, {once : true});

// // END OF GRID CHECK BOX