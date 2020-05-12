const grid = Array.from(document.getElementsByClassName("box"));
console.log(grid);


const clickFn = function () {

}

const enableEventListener = function () {
   for (i=0; i<grid.length; i++) {
       grid[i].addEventListener("click", clickFn)
            }
    }

enableEventListener();


/*var display = function(event){
    console.log("success");
    let buttons = document.getElementsByClassName("box");
buttons.innerText = "OOOO";
};

var enableEvent = function(){document.getElementById("#box1").addEventListener("click", display);}
enableEvent();
/*var display = function(){
    console.log("success");
    let buttons = document.querySelector("#box2");
buttons.innerText = "XXXX";
};*/






/*document.querySelector("#box2").addEventListener("click", display);
document.querySelector("#box3").addEventListener("click", display);
document.querySelector("#box4").addEventListener("click", display);
document.querySelector("#box5").addEventListener("click", display);
document.querySelector("#box6").addEventListener("click", display);
document.querySelector("#box7").addEventListener("click", display);
document.querySelector("#box8").addEventListener("click", display);
document.querySelector("#box9").addEventListener("click", display);*/