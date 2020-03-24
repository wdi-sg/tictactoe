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
var oddPlayerHand = [];
var evenPlayHand = [];
// ways to win:
//a1,a2,a3
//b1,b2,b3
//c1,c2,c3
//a1,b1,c1
//a2,b2,c2
//a3,b3,c3
//a1,b2,c3
//a3,b2,c1

var checkForWinWay1 = function (){
    if (oddPlayerHand.includes("a1") && oddPlayerHand.includes("a2") && oddPlayerHand.includes("a3")){
        alert("Yay! Odd Player Wins!");
    }
    if (evenPlayHand.includes("a1") && evenPlayHand.includes("a2") && evenPlayHand.includes("a3")){
        alert("Yay! Even Player Wins!");
    }
};

var checkForWinWay2 = function(){
    if (oddPlayerHand.includes("b1") && oddPlayerHand.includes("b2") && oddPlayerHand.includes("b3")){
        alert("Yay! Odd Player Wins!");
    }
    if (evenPlayHand.includes("b1") && evenPlayHand.includes("b2") && evenPlayHand.includes("b3")){
        alert("Yay! Even Player Wins!");
    }
}

var checkForWinWay3 = function(){
    if (oddPlayerHand.includes("c1") && oddPlayerHand.includes("c2") && oddPlayerHand.includes("c3")){
        alert("Yay! Odd Player Wins!");
    }
    if (evenPlayHand.includes("c1") && evenPlayHand.includes("c2") && evenPlayHand.includes("c3")){
        alert("Yay! Even Player Wins!");
    }
}

var checkForWinWay4 = function(){
    if (oddPlayerHand.includes("a1") && oddPlayerHand.includes("b1") && oddPlayerHand.includes("c1")){
        alert("Yay! Odd Player Wins!");
    }
    if (evenPlayHand.includes("a1") && evenPlayHand.includes("b1") && evenPlayHand.includes("c1")){
        alert("Yay! Even Player Wins!");
    }
}

var checkForWinWay5 = function(){
    if (oddPlayerHand.includes("a2") && oddPlayerHand.includes("b2") && oddPlayerHand.includes("c2")){
        alert("Yay! Odd Player Wins!");
    }
    if (evenPlayHand.includes("a2") && evenPlayHand.includes("b2") && evenPlayHand.includes("c2")){
        alert("Yay! Even Player Wins!");
    }
}

var checkForWinWay6 = function(){
    if (oddPlayerHand.includes("a3") && oddPlayerHand.includes("b3") && oddPlayerHand.includes("c3")){
        alert("Yay! Odd Player Wins!");
    }
    if (evenPlayHand.includes("a3") && evenPlayHand.includes("b3") && evenPlayHand.includes("c3")){
        alert("Yay! Even Player Wins!");
    }
}

var checkForWinWay7 = function(){
    if (oddPlayerHand.includes("a1") && oddPlayerHand.includes("b2") && oddPlayerHand.includes("c3")){
        alert("Yay! Odd Player Wins!");
    }
    if (evenPlayHand.includes("a1") && evenPlayHand.includes("b2") && evenPlayHand.includes("c3")){
        alert("Yay! Even Player Wins!");
    }
}

var checkForWinWay8 = function(){
    if (oddPlayerHand.includes("a3") && oddPlayerHand.includes("b2") && oddPlayerHand.includes("c1")){
        alert("Yay! Odd Player Wins!");
    }
    if (evenPlayHand.includes("a3") && evenPlayHand.includes("b2") && evenPlayHand.includes("c1")){
        alert("Yay! Even Player Wins!");
    }
}

var checkWin = function(){
    checkForWinWay1();
    checkForWinWay2();
    checkForWinWay3();
    checkForWinWay4();
    checkForWinWay5();
    checkForWinWay6();
    checkForWinWay7();
    checkForWinWay8();
}

var clickBoxOne = function(){
    if(oddEven === "odd" && boxOneGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxOneGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        oddPlayerHand.push("a1");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    } else if (oddEven === "even" && boxOneGetter.getAttribute("src") === "img/white-box.jpeg"){
        boxOneGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        evenPlayHand.push("a1");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    }
}
var clickBoxTwo = function(){
    if(oddEven === "odd" && boxTwoGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxTwoGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        oddPlayerHand.push("a2");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    } else if (oddEven === "even" && boxTwoGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxTwoGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        evenPlayHand.push("a2");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    }
    }
var clickBoxThree = function(){
    if(oddEven === "odd" && boxThreeGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxThreeGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        oddPlayerHand.push("a3");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    } else if (oddEven === "even" && boxThreeGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxThreeGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        evenPlayHand.push("a3");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    }
}
var clickBoxFour = function(){
    if(oddEven === "odd" && boxFourGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxFourGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        oddPlayerHand.push("b1");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    } else if (oddEven === "even" && boxFourGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxFourGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        evenPlayHand.push("b1");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    }
}
var clickBoxFive = function(){
    if(oddEven === "odd" && boxFiveGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxFiveGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        oddPlayerHand.push("b2");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    } else if (oddEven === "even" && boxFiveGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxFiveGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        evenPlayHand.push("b2");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    }
}
var clickBoxSix = function(){
    if(oddEven === "odd" && boxSixGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxSixGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        oddPlayerHand.push("b3");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    } else if (oddEven === "even" && boxSixGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxSixGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        evenPlayHand.push("b3");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    }
}
//xx
var clickBoxSev = function(){
    if(oddEven === "odd" && boxSevGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxSevGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        oddPlayerHand.push("c1");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    } else if (oddEven === "even" && boxSevGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxSevGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        evenPlayHand.push("c1");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    }
}
var clickBoxEight = function(){
    if(oddEven === "odd" && boxEightGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxEightGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        oddPlayerHand.push("c2");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    } else if (oddEven === "even" && boxEightGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxEightGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        evenPlayHand.push("c2");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    }
}
var clickBoxNine = function(){
    if(oddEven === "odd" && boxNineGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxNineGetter.setAttribute("src", "img/white-box-cross.jpeg");
        oddEven = "even";
        oddPlayerHand.push("c3");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
        return
    } else if (oddEven === "even" && boxNineGetter.getAttribute("src") ==="img/white-box.jpeg"){
        boxNineGetter.setAttribute("src", "img/white-box-circle.jpeg");
        oddEven = "odd";
        evenPlayHand.push("c3");
        console.log ("Odd Player now has: " + oddPlayerHand);
        console.log ("Even Player now has: " + evenPlayHand);
        checkWin();
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