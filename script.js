console.log("hello")

// var xo = document.getElementById("1");
// xo.addEventListener("click", clickHappened);

function clickHappened(event){
    event.target.innerText="X";
}

for( var i = 1; i < 10; i++ ){
    console.log( i + " times" );
    var box = document.getElementById(i);
    box.addEventListener("click", clickHappened)
}