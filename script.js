//CREATE BOARD
let body = document.querySelector("body");
body.style.margin = "0px";
body.style.padding = "0px";

//CREATED DIV AND SPANS FOR GAMEBOARD 
const gameboard =  document.createElement("div")
gameboard.setAttribute("id", "gameboard")
gameboard.style.border = "2px solid red"
gameboard.style.width = "600px"
gameboard.style.height = "470px"
gameboard.style.textAlign = "center"
gameboard.style.backgroundColor = "rgba(64,224,208,0.5)"

document.body.appendChild(gameboard);

for (let i = 1; i < 4; i++){
    let createDiv = document.createElement("div")
    createDiv.setAttribute("id", "row"+i);
    createDiv.style.marginTop= "100px";
    // createDiv.style.backgroundColor= "blue";
    // createDiv.style.padding= "5px";
    // gameboard.appendChild(createDiv)

    for (let j = 1; j < 4; j++){
        let createBox = document.createElement("span")
        createBox.setAttribute("id","r" + i + "span" + j);
        //createBox.innerHTML = "<span id = r" + i + "span" + j + " style = 'width:100px; height: 100px; background-color: grey; border: 2px solid black;'></span>"
        // createBox.style.width = "50px"; //doesnt work its not a box
        // createBox.style.height = "50px"; //ditto
        createBox.style.backgroundColor = "lightgray";
        createBox.style.border = "2px solid black";
        createBox.style.padding = "50px 70px";
        createBox.style.margin = "10px -1px";

        createDiv.appendChild(createBox)
    }

    gameboard.appendChild(createDiv)

}



//-----GLOBAL VAR -----
let state = 0; 

const X = "X";
const O = "O";


//----DOM SELECT-----
const gameboardSel = document.querySelector("#gameboard")
const item = document.querySelector("span")



//-----FUNCTIONS-------

function xTurn(itemTarget) {
    itemTarget.innerText = X;
    itemTarget.style.fontSize = "20px";
    state = 1;
}

function oTurn(itemTarget) {
    itemTarget.innerText = O;
    itemTarget.style.fontSize = "20px";
    state = 0;
}


// --------EVENT LISTENER-----------

gameboardSel.addEventListener('click', function(e){
    let itemTarget = e.target;
    // itemTarget.innerText = "x";
    switch(state){
        case 0:
            xTurn(itemTarget);
            break;
        case 1: 
            oTurn(itemTarget);
            break;
        default:
            console.log("default")
    }
    
    console.log(itemTarget.innerText);
})



