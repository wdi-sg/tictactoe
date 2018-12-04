var entryItems = document.querySelectorAll(".entry");

var turn = 0;

var addX = function(event) {
    event.target.textContent="x";
}

var addO = function(event) {
    event.target.textContent="o";
}

var addEntry = function(event) {
    if (turn%2==0) {
        addX(event);
        turn++;
    }   else   {
        addO(event);
        turn++;
    }
}

for(var i = 0; i < entryItems.length; i++){
    entryItems[i].addEventListener("click", addEntry);
}