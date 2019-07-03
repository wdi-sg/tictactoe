var boxOne = function(){};
var boxTwo = function(){};
var boxThree = function(){};
var boxFour = function(){};
var boxFive = function(){};
var boxSix = function(){};
var boxSeven = function(){};
var boxEight = function(){};
var boxNine = function(){};


// Reference to h1 id in the html
 document.getElementById('box-1')
// This is the "clicking" event by the user.
// It will call the respective function(name) as declared earlier
.addEventListener("click", function(boxOne){
document.getElementById("box-1").textContent = "X";
     // alert("YES!");
})


document.getElementById('box-2').addEventListener("click", function(boxTwo){
    //alert("YES!");
})

document.getElementById('box-3').addEventListener("click", function(boxThree){
    alert("YES!");
})

document.getElementById('box-4').addEventListener("click", function(boxFour){
    alert("YES!");
})

document.getElementById('box-5').addEventListener("click", function(boxFive){
    alert("YES!");
})

document.getElementById('box-6').addEventListener("click", function(boxSix){
    alert("YES!");
})

document.getElementById('box-7').addEventListener("click", function(boxSeven){
    alert("YES!");
})

document.getElementById('box-8').addEventListener("click", function(boxEight){
    alert("YES!");
})

document.getElementById('box-9').addEventListener("click", function(boxNine){
    alert("YES!");
})

// // ADD FUNCTION CLICKER
// document.querySelector("h1").addEventListener("click",function(saySomething){
//      alert("YES!");
// })

// var saySomething = [];

// for (var i = 0; i < 9; i++) {
//     saySomething.push (document.querySelector("h1"));
//     // console.log(saySomething);
// }

// saySomething.forEach(function(saySomething, i){
//     // saySomething.innerHTML = "saySomething " + i;
//     saySomething.addEventListener ('click', function(saySomething){
//         alert (i);
//     })
// });