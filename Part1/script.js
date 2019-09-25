console.log("Tic Toc");


var turnCounter = 0



var highLight = function(){
    event.target.style.background="LightGrey";
}

var noLight = function(){
    event.target.style.background="white";
}



var onClick = function(){
    if (turnCounter === 0 | turnCounter === 2 | turnCounter === 4 | turnCounter === 6 | turnCounter === 8){
        event.target.innerText="X" ;
        event.target.addEventListener("mouseout" , noLight);
        event.target.addEventListener("mouseover" , noLight);
    }
    else {
    event.target.innerText="O" ;
    event.target.addEventListener("mouseout" , noLight);
    event.target.addEventListener("mouseover" , noLight);
    }
    turnCounter = turnCounter + 1;
    console.log("Turn: " + turnCounter)
};

var allButtons = document.querySelectorAll("button");


for (var i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener("mouseover" , highLight);

    allButtons[i].addEventListener("mouseout" , noLight);

    allButtons[i].addEventListener("click" , onClick);


}