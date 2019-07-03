var saySomething = function(){
  console.log("YES!");
};

var element = document.getElementById("helloWord");

element.addEventListener("click", function(){
document.getElementById("search").value = "Hello World";
});

var bb1=0;
var bb2=0;
var bb3=0;
var bb4=0;
var bb5=0;
var bb6=0;
var bb7=0;
var bb8=0;
var bb9=0;

var superTest = function(){

var down1 = bb1+bb2+bb3;
// console.log("down 1: ", down1)
var down2 = bb4+bb5+bb6;
var down3 = bb7+bb8+bb9;
var across1 = bb1+bb4+bb7;
var across2 = bb2+bb5+bb8;
var across3 = bb3+bb6+bb9;
var diagonal1 = bb1+bb5+bb9;
var diagonal2 = bb7+bb5+bb3;

if (down1===3 ||
    down2===3 ||
    down3===3 ||
    across1===3 ||
    across2===3 ||
    across3===3 ||
    diagonal1===3 ||
    diagonal2===3
    ){
    document.getElementById("winnerP").innerHTML = "🍍 is the winner!";
}
else if (down1===-3 ||
    down2===-3 ||
    down3===-3 ||
    across1===-3 ||
    across2===-3 ||
    across3===-3 ||
    diagonal1===-3 ||
    diagonal2===-3
    ){
    document.getElementById("winnerP").innerHTML = "👽 is the winner!";
}
else {
    document.getElementById("winnerP").innerHTML = "Game in progress..";
};  // end of if statement
}; // end of supertest


// element.addEventListener("mouseover",saySomething);

// var other = document.getElementById("search");
// other.addEventListener("keypress", saySomething);
// other.addEventListener("click", function(){
// document.getElementById("search").value = "Hello World"});

var vegetable1 = document.getElementById("one");
vegetable1.addEventListener("click", function(){
    document.getElementById("search").value =
    vegetable1.innerText;
});

var boxclick1 = document.getElementById("box1");
    boxclick1.addEventListener("click", function(){
    document.getElementById("box1").innerText =
    "👽";
    bb1=-1;
    // console.log("supertest() ", superTest());
    // console.log("supertest ", superTest);
    superTest();
});
    boxclick1.addEventListener("dblclick", function(){
    document.getElementById("box1").innerText =
    "🍍";
    bb1=1;
    superTest();
});

var boxclick2 = document.getElementById("box2");
    boxclick2.addEventListener("click", function(){
    document.getElementById("box2").innerText =
    "👽";
    bb2=-1;
    superTest();
});
    boxclick2.addEventListener("dblclick", function(){
    document.getElementById("box2").innerText =
    "🍍";
    bb2=1;
    superTest();
});

var boxclick3 = document.getElementById("box3");
    boxclick3.addEventListener("click", function(){
    document.getElementById("box3").innerText =
    "👽";
    bb3=-1;
    superTest();
});
    boxclick3.addEventListener("dblclick", function(){
    document.getElementById("box3").innerText =
    "🍍";
    bb3=1;
    superTest();
});

var boxclick4 = document.getElementById("box4");
    boxclick4.addEventListener("click", function(){
    document.getElementById("box4").innerText =
    "👽";
    bb4=-1;
    superTest();
});
    boxclick4.addEventListener("dblclick", function(){
    document.getElementById("box4").innerText =
    "🍍";
    bb4=1;
    superTest();
});

var boxclick5 = document.getElementById("box5");
    boxclick5.addEventListener("click", function(){
    document.getElementById("box5").innerText =
    "👽";
    bb5=-1;
    superTest();
});
    boxclick5.addEventListener("dblclick", function(){
    document.getElementById("box5").innerText =
    "🍍";
    bb5=1;
    superTest();
});

var boxclick6 = document.getElementById("box6");
    boxclick6.addEventListener("click", function(){
    document.getElementById("box6").innerText =
    "👽";
    bb6=-1;
    superTest();
});
    boxclick6.addEventListener("dblclick", function(){
    document.getElementById("box6").innerText =
    "🍍";
    bb6=1;
    superTest();
});

var boxclick7 = document.getElementById("box7");
    boxclick7.addEventListener("click", function(){
    document.getElementById("box7").innerText =
    "👽";
    bb7=-1;
    superTest();
});
    boxclick7.addEventListener("dblclick", function(){
    document.getElementById("box7").innerText =
    "🍍";
    bb7=1;
    superTest();
});

var boxclick8 = document.getElementById("box8");
    boxclick8.addEventListener("click", function(){
    document.getElementById("box8").innerText =
    "👽";
    bb8=-1;
    superTest();
});
    boxclick8.addEventListener("dblclick", function(){
    document.getElementById("box8").innerText =
    "🍍";
    bb8=1;
    superTest();
});

var boxclick9 = document.getElementById("box9");
    boxclick9.addEventListener("click", function(){
    document.getElementById("box9").innerText =
    "👽";
    bb9=-1;
    superTest();
});
    boxclick9.addEventListener("dblclick", function(){
    document.getElementById("box9").innerText =
    "🍍";
    bb9=1;
    superTest();
});