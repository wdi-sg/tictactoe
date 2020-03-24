var oddEven = "odd"; // odd is cross and even is circle
var boxOneGetter = document.getElementById('a-one');
var boxTwoGetter = document.getElementById('a-two');
var boxThreeGetter = document.getElementById('a-three');
var boxFourGetter = document.getElementById('b-one');
var boxFiveGetter = document.getElementById('b-two');
var boxSixGetter = document.getElementById('b-three');
var boxSevGetter = document.getElementById('c-one');
var boxEightGetter = document.getElementById('c-two');
var boxNineGetter = document.getElementById('c-three');
var allGetter = document.querySelectorAll('img');
var i = 0;


var clickBoxOne = function(){
    if(oddEven === "odd"){
        boxOneGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even")
        boxOneGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
}
var clickBoxTwo = function(){
    if(oddEven === "odd"){
        boxTwoGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even")
        boxTwoGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
}
var clickBoxThree = function(){
    if(oddEven === "odd"){
        boxThreeGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even")
        boxThreeGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
}
var clickBoxFour = function(){
    if(oddEven === "odd"){
        boxFourGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even")
        boxFourGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
}
var clickBoxFive = function(){
    if(oddEven === "odd"){
        boxFiveGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even")
        boxFiveGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
}
var clickBoxSix = function(){
    if(oddEven === "odd"){
        boxSixGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even")
        boxSixGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
}
//xx
var clickBoxSev = function(){
    if(oddEven === "odd"){
        boxSevGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even")
        boxSevGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
}
var clickBoxEight = function(){
    if(oddEven === "odd"){
        boxEightGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even")
        boxEightGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
}
var clickBoxNine = function(){
    if(oddEven === "odd"){
        boxNineGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even")
        boxNineGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
}
boxOneGetter.addEventListener('click', clickBoxOne);
boxTwoGetter.addEventListener('click', clickBoxTwo);
boxThreeGetter.addEventListener('click', clickBoxThree);
boxFourGetter.addEventListener('click', clickBoxFour);
boxFiveGetter.addEventListener('click', clickBoxFive);
boxSixGetter.addEventListener('click', clickBoxSix);
boxSevGetter.addEventListener('click', clickBoxSev);
boxEightGetter.addEventListener('click', clickBoxEight);
boxNineGetter.addEventListener('click', clickBoxNine);