//create restart button
var restart = document.querySelector("button");

//grab all the boxes
var box = document.querySelectorAll("td");

//clear all the boxes. Create a function using For loop
function clearBoard(){
   for (var i = 0; i < box.length; i++){
        console.log(box[i]);
    box[i].innerHTML = "";
   }
}

restart.addEventListener('Click', clearBoard);

//check box marker
function changeMarker(){
    if(this.textContent = ''){
        this.innerHTML === 'X';
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else {
        this.textContent = '';
    }
}

for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', changeMarker)
}