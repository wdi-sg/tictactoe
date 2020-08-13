var turnCounter = 0;



// function with If else condition to control if mark made is noughts or crosses
var makeSelection = function(){
    var mark = document.createElement("span");
     switch (turnCounter%2) {
        case 0:
            event.target.innerText = "X"
            break;
        case 1:
            mark.innerText = "O"
            event.target.innerText = "O"
            break;
    }
    turnCounter++;
}

document.querySelectorAll(".button").forEach(button => {
    button.addEventListener('click', makeSelection);
})