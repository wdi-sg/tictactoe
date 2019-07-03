
// var player1 = "x";
// var player2 = "o";
// var choice = [];

var box1 = document.getElementById('boxa1');
var box2 = document.getElementById('boxa2');
var box3 = document.getElementById('boxa3');
var box4 = document.getElementById('boxb1');
var box5 = document.getElementById('boxb2');
var box6 = document.getElementById('boxb3');
var box7 = document.getElementById('boxc1');
var box8 = document.getElementById('boxc2');
var box9 = document.getElementById('boxc3');

var choose = function (event){
    console.log('X');
    console.log(event.target.innerText)
    event.target.innerText = 'x'
}

box1.addEventListener('click', choose);
box2.addEventListener('click', choose);
box3.addEventListener('click', choose);
box4.addEventListener('click', choose);
box5.addEventListener('click', choose);
box6.addEventListener('click', choose);
box7.addEventListener('click', choose);
box8.addEventListener('click', choose);
box9.addEventListener('click', choose);