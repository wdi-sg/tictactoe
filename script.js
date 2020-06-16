// row 1
var sq1 = document.querySelector('sq1');
var sq2 = document.querySelector('sq2');
var sq3 = document.querySelector('sq3');
// row 2
var sq4 = document.querySelector('sq4');
var sq5 = document.querySelector('sq5');
var sq6 = document.querySelector('sq6');
// row 3
var sq7 = document.querySelector('sq7');
var sq8 = document.querySelector('sq8');
var sq9 = document.querySelector('sq9');

var currentShape;
var clickCycle = 0;


var clickSquare1 = document.getElementById('sq1');
clickSquare1.addEventListener('click',function(event){
    console.log('Click 2 worked');
    switch(clickCycle) {
        case 0 :
            clickCycle = 1;
            currentShape = "X";
        break;
        case 1 :
            clickCycle = 0;
            currentShape = "O";
        break;
    }
    clickSquare1.innerText = currentShape;
})

var clickSquare2 = document.getElementById('sq2');
clickSquare2.addEventListener('click',function(event){
    console.log('Click 2 worked');
    switch(clickCycle) {
        case 0 :
            clickCycle = 1;
            currentShape = "X";
        break;
        case 1 :
            clickCycle = 0;
            currentShape = "O";
        break;
    }
    clickSquare2.innerText = currentShape;
})
var clickSquare3 = document.getElementById('sq3');
clickSquare3.addEventListener('click',function(event){
    console.log('Click 3 worked');
    switch(clickCycle) {
        case 0 :
            clickCycle = 1;
            currentShape = "X";
        break;
        case 1 :
            clickCycle = 0;
            currentShape = "O";
        break;
    }
    clickSquare3.innerText = currentShape;
})
var clickSquare4 = document.getElementById('sq4');
clickSquare4.addEventListener('click',function(event){
    console.log('Click 4 worked');
    switch(clickCycle) {
        case 0 :
            clickCycle = 1;
            currentShape = "X";
        break;
        case 1 :
            clickCycle = 0;
            currentShape = "O";
        break;
    }
    clickSquare4.innerText = currentShape;
})
var clickSquare5 = document.getElementById('sq5');
clickSquare5.addEventListener('click',function(event){
    console.log('Click 5 worked');
    switch(clickCycle) {
        case 0 :
            clickCycle = 1;
            currentShape = "X";
        break;
        case 1 :
            clickCycle = 0;
            currentShape = "O";
        break;
    }
    clickSquare5.innerText = currentShape;
})
var clickSquare6 = document.getElementById('sq6');
clickSquare6.addEventListener('click',function(event){
    console.log('Click 6 worked');
    switch(clickCycle) {
        case 0 :
            clickCycle = 1;
            currentShape = "X";
        break;
        case 1 :
            clickCycle = 0;
            currentShape = "O";
        break;
    }
    clickSquare6.innerText = currentShape;
})
var clickSquare7 = document.getElementById('sq7');
clickSquare7.addEventListener('click',function(event){
    console.log('Click 7 worked');
    switch(clickCycle) {
        case 0 :
            clickCycle = 1;
            currentShape = "X";
        break;
        case 1 :
            clickCycle = 0;
            currentShape = "O";
        break;
    }
    clickSquare7.innerText = currentShape;
})
var clickSquare8 = document.getElementById('sq8');
clickSquare8.addEventListener('click',function(event){
    console.log('Click 8 worked');
    switch(clickCycle) {
        case 0 :
            clickCycle = 1;
            currentShape = "X";
        break;
        case 1 :
            clickCycle = 0;
            currentShape = "O";
        break;
    }
    clickSquare8.innerText = currentShape;
})
var clickSquare9 = document.getElementById('sq9');
clickSquare9.addEventListener('click',function(event){
    console.log('Click 9 worked');
    switch(clickCycle) {
        case 0 :
            clickCycle = 1;
            currentShape = "X";
        break;
        case 1 :
            clickCycle = 0;
            currentShape = "O";
        break;
    }
    clickSquare9.innerText = currentShape;
})

var restart = function(){
    clickSquare1.innerText = "";
    clickSquare2.innerText = "";
    clickSquare3.innerText = "";
    clickSquare4.innerText = "";
    clickSquare5.innerText = "";
    clickSquare6.innerText = "";
    clickSquare7.innerText = "";
    clickSquare8.innerText = "";
    clickSquare9.innerText = "";
    clickCycle = 0;
}

var restartButton = document.querySelector('#button');
restartButton.addEventListener('click', restart);