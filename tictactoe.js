
console.log ("HELLO!");

// var button1= document.getElementById("button1");
// var insertX = function () {
//     button1.innerHTML="X";
// }
// button1.addEventListener("click", insertX);

//Create function to insert value "X"
var insertX = function (event) {
    event.target.innerHTML = "X"
}

//Create function to insert value "O"
var insertO = function (event) {
    event.target.innerHTML = "O"
}

//Insert function alternate
var allButtons = document.querySelectorAll("button")
for(var i = 0; i < allButtons.length; i++){
    console.log(allButtons[i].id)
    if (allButtons[i].id % 2 === 0) {
         allButtons[i].addEventListener("click", insertX);
    } else {
        allButtons[i].addEventListener("click", insertO);
    };

    // else (i === 2) {
    // allButtons[i].addEventListener("click", insertO);
    // }
};












// var insertX = function () {
//     allButtons.innerHTML="X";
// }

// allButtons.addEventListener("click", insertX);

// var listItems = document.querySelectorAll("li")
// for(var i = 0; i < listItems.length; i++){
//     listItems[i].addEventListener("click", function() {
//         console.log("Click worked");
//     });
// }