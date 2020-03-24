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
var oddPlayerHand = [null, null, null, null, null];
var evenPlayHand = [null, null, null, null];
var i = 0;


var clickBoxOne = function(){
    if(oddEven === "odd" && boxOneGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxOneGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even" && boxOneGetter.getAttribute("src") === "img/white-box.jpeg"){
        boxOneGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        console.log (oddEven)
        return
    }
}
var clickBoxTwo = function(){
    if(oddEven === "odd" && boxTwoGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxTwoGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even" && boxTwoGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxTwoGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
    }
    }
var clickBoxThree = function(){
    if(oddEven === "odd" && boxThreeGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxThreeGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even" && boxThreeGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxThreeGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
    }
}
var clickBoxFour = function(){
    if(oddEven === "odd" && boxFourGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxFourGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even" && boxFourGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxFourGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
    }
}
var clickBoxFive = function(){
    if(oddEven === "odd" && boxFiveGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxFiveGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even" && boxFiveGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxFiveGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
    }
}
var clickBoxSix = function(){
    if(oddEven === "odd" && boxSixGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxSixGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even" && boxSixGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxSixGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
    }
}
//xx
var clickBoxSev = function(){
    if(oddEven === "odd" && boxSevGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxSevGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even" && boxSevGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxSevGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
    }
}
var clickBoxEight = function(){
    if(oddEven === "odd" && boxEightGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxEightGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even" && boxEightGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxEightGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
    }
}
var clickBoxNine = function(){
    if(oddEven === "odd" && boxNineGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxNineGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        console.log (oddEven)
        return
    } else if (oddEven === "even" && boxNineGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxNineGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        return
    }
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