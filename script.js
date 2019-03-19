// make it work
// make it good
// make it fast

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

var clickCount = 1;

var mark = function() {
    if (clickCount%2===0) {
      return "O";
    } else {
      return "X";
    }
}


var isAllSame = function(arr) {
    var prev = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].textContent === prev.textContent) {
            prev = arr[i];
        } else {
            return false
        }
    }
    return true;
};



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

var checkWin = function() {
    winningCombo.forEach(function (arr) {
        if (isAllSame(arr)) {
            setTimeout(function() {alert("You win!")}, 200);
        }
    });
}

box1.addEventListener("click", function() {
    if (box1.textContent !== "X" && box1.textContent !== "O") {
        box1.textContent = mark();
        clickCount++;
    }
    checkWin();
});
box2.addEventListener("click", function() {
    if (box2.textContent !== "X" && box2.textContent !== "O") {
        box2.textContent = mark();
        clickCount++;
    }
    checkWin();
});
box3.addEventListener("click", function() {
    if (box3.textContent !== "X" && box3.textContent !== "O") {
        box3.textContent = mark();
        clickCount++;
    }
    checkWin();
});
box4.addEventListener("click", function() {
    if (box4.textContent !== "X" && box4.textContent !== "O") {
        box4.textContent = mark();
        clickCount++;
    }
    checkWin();
});
box5.addEventListener("click", function() {
    if (box5.textContent !== "X" && box5.textContent !== "O") {
        box5.textContent = mark();
        clickCount++;
    }
    checkWin();
});
box6.addEventListener("click", function() {
    if (box6.textContent !== "X" && box6.textContent !== "O") {
        box6.textContent = mark();
        clickCount++;
    }
    checkWin();
});
box7.addEventListener("click", function() {
    if (box7.textContent !== "X" && box7.textContent !== "O") {
        box7.textContent = mark();
        clickCount++;
    }
    checkWin();
});
box8.addEventListener("click", function() {
    if (box8.textContent !== "X" && box8.textContent !== "O") {
        box8.textContent = mark();
        clickCount++;
    }
    checkWin();
});
box9.addEventListener("click", function() {
    if (box9.textContent !== "X" && box9.textContent !== "O") {
        box9.textContent = mark();
        clickCount++;
    }
    checkWin();
});