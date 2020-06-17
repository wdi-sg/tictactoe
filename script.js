//-----GLOBAL VAR -----
let clickCycle = 0; 
let evenOrOdd;

const X = "X";
const O = "O";


//----DOM SELECT-----
const mainGrid = document.querySelector("#mainGrid")
const item = document.querySelector("#item")



//-----FUNCTIONS-------
function checkEven(){
    if (clickCycle%2 === 0){
        evenOrOdd = "true"
    } else {
        evenOrOdd = "false"
    }
    return evenOrOdd;
}


function xTurn(itemTarget) {
    itemTarget.innerText = X;
    clickCycle++;
}

function oTurn(itemTarget) {
    itemTarget.innerText = O;
    clickCycle++;
}


// --------EVENT LISTENER-----------

mainGrid.addEventListener('click', function(e){
    let itemTarget = e.target;
    // itemTarget.innerText = "x";
    checkEven();
    switch(evenOrOdd){
        case "true":
            xTurn(itemTarget);
            break;
        case "false": 
            oTurn(itemTarget);
            break;
        default:
            console.log("default")
    }
    
    console.log(itemTarget.innerText);
})



