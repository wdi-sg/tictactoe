console.log("Hello World");

var player = false
var emptyBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
var clickHandler = function(event){
    if(player === false) {
        this.innerHTML = 'X';
        player = true
} else {
    this.innerHTML = 'O';
    player = false;
}

};

// console.log("about to set event handler on element");

var button = document.querySelectorAll('.container-box')
for (var i=0; i<button.length; i++) {
    button[i].addEventListener('click', clickHandler);
}


// console.log("done setting handler");