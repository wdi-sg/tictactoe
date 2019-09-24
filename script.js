console.log("MEOW!")


var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

var emptyBox = document.querySelectorAll(".box");
var counter = 0




function addItem(){

    counter = counter+1;
    console.log( counter );

    var clickedBox = event.target

    console.log("Click worked");

    if (counter === 0 || counter%2 === 0){
        clickedBox.innerText = "X"
    } else {
       clickedBox.innerText = "O"
    }
}


for(var i = 0; i < emptyBox.length; i++){
    emptyBox[i].addEventListener("click", addItem);
}