console.log("Hey man! Let's freaking do this");

var turns = 0;
var inputArray = ["x","0","x","0","x","0","x","0","x"];

//p tag of row 1 column 1
let pr1c1 = document.getElementById("pr1c1");
pr1c1.addEventListener("click", function() {
    document.getElementById("pr1c1").innerHTML = inputArray[turns];
    turns ++;
});

//p tag of row 1 column 2
let pr1c2 = document.getElementById("pr1c2");
    pr1c2.addEventListener("click", function() {
    document.getElementById("pr1c2").innerHTML = inputArray[turns];
    turns ++;
});

//p tag of row 1 column 3
let pr1c3 = document.getElementById("pr1c3");
    pr1c3.addEventListener("click", function() {
    document.getElementById("pr1c3").innerHTML = inputArray[turns];
    turns ++;
});

//p tag of row 2 column 1
let pr2c1 = document.getElementById("pr2c1");
pr2c1.addEventListener("click", function() {
    document.getElementById("pr2c1").innerHTML = inputArray[turns];
    turns ++;
});

//p tag of row 2 column 2
let pr2c2 = document.getElementById("pr2c2");
    pr2c2.addEventListener("click", function() {
    document.getElementById("pr2c2").innerHTML = inputArray[turns];
    turns ++;
});

//p tag of row 2 column 3
let pr2c3 = document.getElementById("pr2c3");
    pr2c3.addEventListener("click", function() {
    document.getElementById("pr2c3").innerHTML = inputArray[turns];
    turns ++;
});

//p tag of row 3 column 1
let pr3c1 = document.getElementById("pr3c1");
pr3c1.addEventListener("click", function() {
    document.getElementById("pr3c1").innerHTML = inputArray[turns];
    turns ++;
});

//p tag of row 3 column 2
let pr3c2 = document.getElementById("pr3c2");
    pr3c2.addEventListener("click", function() {
    document.getElementById("pr3c2").innerHTML = inputArray[turns];
    turns ++;
});

//p tag of row 3 column 3
let pr3c3 = document.getElementById("pr3c3");
    pr3c3.addEventListener("click", function() {
    document.getElementById("pr3c3").innerHTML = inputArray[turns];
    turns ++;
});

// Change on click method 1
// document.getElementById("pr1c1").onclick = function(){myFunction()};

// function myFunction(){
//     document.getElementById("pr1c1").innerHTML = "woo";
// };