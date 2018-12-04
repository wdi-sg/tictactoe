var entryItems = document.querySelectorAll(".entry");

var turn = 0;

var addX = function(event) {
    event.target.textContent="x";
    event.target.style.color="#003366";
}

var addO = function(event) {
    event.target.textContent="o";
    event.target.style.color="#8b0000";
}

var addEntry = function(event) {
    if (turn >= 9) {
        alert("The game has ended");
    }   else if (turn%2==0) {
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