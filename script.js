var startGame = function(event){
    console.log("Game Board created");
}
var k = 0;

var clickFunction = function(event){
    console.log("This function happened");
}

//create table
var tableCreate = function(){
    var table = document.createElement("table");
    for (let i = 0; i < 3; i++){
        var tr = table.insertRow();
        for (let j = 0; j < 3; j++){
            if(i === 2 && j === 3){
                break;
            }
            else{
                var td = tr.insertCell();
                td.classList.add("box");
                td.style.width = "200px";
                td.style.height= "200px";
                td.style.border = "1px solid black";
                k++;
                td.setAttribute("id", k);
                td.addEventListener("click", clickFunction);
                tr.appendChild(td);

            }
            table.appendChild(tr)
        }
    document.body.appendChild(table);
}
}
tableCreate();

//create the game