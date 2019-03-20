// make it work
// make it good
// make it fast

//declaring a variable for each box (can probably use a function)
var boxes = document.getElementsByClassName("box");
var box1 = document.getElementById("1");
var box2 = document.getElementById("2");
var box3 = document.getElementById("3");
var box4 = document.getElementById("4");
var box5 = document.getElementById("5");
var box6 = document.getElementById("6");
var box7 = document.getElementById("7");
var box8 = document.getElementById("8");
var box9 = document.getElementById("9");


//creating a count (if even number, player is O; if odd number, player is X)
var clickCount = 1;

var mark = function() {
    if (clickCount%2===0) {
      return "O";
    } else {
      return "X";
    }
}

//creating a function to check if there already is an input in the box
var isAllSame = function(array) {
    var prev = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i].textContent === prev.textContent) {
            prev = array[i];
        } else {
            return false
        }
    }
    return true;
};


//total of 8 winning combos (could be optimized)
var winningCombo = [
    [box1, box2, box3],
    [box4, box5, box6],
    [box7, box8, box9],
    [box1, box4, box7],
    [box2, box5, box8],
    [box3, box6, box9],
    [box1, box5, box9],
    [box3, box5, box7],
];

//check against winning combo to see if player won
var checkWin = function() {
    winningCombo.forEach(function (array) {
        if (isAllSame(array)) {
            setTimeout(function() {alert("You won!")}, 200);
        }
    });
}

//every box has an event listener and corresponding actions after being clicked (could use a function here instead of repeating)
box1.addEventListener("click", function() {
    if (box1.textContent !== "X" && box1.textContent !== "O") {
        box1.textContent = mark();
        box1.style.color = "black";
        clickCount++;
    }
    checkWin();
});
box2.addEventListener("click", function() {
    if (box2.textContent !== "X" && box2.textContent !== "O") {
        box2.textContent = mark();
        box2.style.color = "black";
        clickCount++;
    }
    checkWin();
});
box3.addEventListener("click", function() {
    if (box3.textContent !== "X" && box3.textContent !== "O") {
        box3.textContent = mark();
        box3.style.color = "black";
        clickCount++;
    }
    checkWin();
});
box4.addEventListener("click", function() {
    if (box4.textContent !== "X" && box4.textContent !== "O") {
        box4.textContent = mark();
        box4.style.color = "black";
        clickCount++;
    }
    checkWin();
});
box5.addEventListener("click", function() {
    if (box5.textContent !== "X" && box5.textContent !== "O") {
        box5.textContent = mark();
        box5.style.color = "black";
        clickCount++;
    }
    checkWin();
});
box6.addEventListener("click", function() {
    if (box6.textContent !== "X" && box6.textContent !== "O") {
        box6.textContent = mark();
        box6.style.color = "black";
        clickCount++;
    }
    checkWin();
});
box7.addEventListener("click", function() {
    if (box7.textContent !== "X" && box7.textContent !== "O") {
        box7.textContent = mark();
        box7.style.color = "black";
        clickCount++;
    }
    checkWin();
});
box8.addEventListener("click", function() {
    if (box8.textContent !== "X" && box8.textContent !== "O") {
        box8.textContent = mark();
        box8.style.color = "black";
        clickCount++;
    }
    checkWin();
});
box9.addEventListener("click", function() {
    if (box9.textContent !== "X" && box9.textContent !== "O") {
        box9.textContent = mark();
        box9.style.color = "black";
        clickCount++;
    }
    checkWin();
});

//add button replay event
var button = document.getElementsByClassName("button")[0];

button.addEventListener("click", function() {
    location.reload();
});






//for each index in the array,
//create an event listener which does the following function
//if the box's current content isn't  x or o
//mark it with x or o (depending on whose turn it is)
//make the color black
//add the click count by one
//check if user won