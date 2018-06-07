var boxArray = ['box1','box2','box3','box4','box5','box6','box7','box8','box9']

function box1(){
  if (document.getElementById('box1').innerHTML == "X") {
    document.getElementById('box1').innerHTML = "O"
  }else {
    document.getElementById('box1').innerHTML = "X"
  }
  checkWinX()
  checkWinO()
}

function box2(){
  if (document.getElementById('box2').innerHTML == "X") {
    document.getElementById('box2').innerHTML = "O"
  }else {
    document.getElementById('box2').innerHTML = "X"
  }
  checkWinX()
  checkWinO()
}

function box3(){
  if (document.getElementById('box3').innerHTML == "X") {
    document.getElementById('box3').innerHTML = "O"
  }else {
    document.getElementById('box3').innerHTML = "X"
  }
  checkWinX()
  checkWinO()
}
function box4(){
  if (document.getElementById('box4').innerHTML == "X") {
    document.getElementById('box4').innerHTML = "O"
  }else {
    document.getElementById('box4').innerHTML = "X"
  }
  checkWinX()
  checkWinO()
}
function box5(){
  if (document.getElementById('box5').innerHTML == "X") {
    document.getElementById('box5').innerHTML = "O"
  }else {
    document.getElementById('box5').innerHTML = "X"
  }
  checkWinX()
  checkWinO()
}
function box6(){
  if (document.getElementById('box6').innerHTML == "X") {
    document.getElementById('box6').innerHTML = "O"
  }else {
    document.getElementById('box6').innerHTML = "X"
  }
  checkWinX()
  checkWinO()
}
function box7(){
  if (document.getElementById('box7').innerHTML == "X") {
    document.getElementById('box7').innerHTML = "O"
  }else {
    document.getElementById('box7').innerHTML = "X"
  }
  checkWinX()
  checkWinO()
}
function box8(){
  if (document.getElementById('box8').innerHTML == "X") {
    document.getElementById('box8').innerHTML = "O"
  }else {
    document.getElementById('box8').innerHTML = "X"
  }
  checkWinX()
  checkWinO()
}
function box9(){
  if (document.getElementById('box9').innerHTML == "X") {
    document.getElementById('box9').innerHTML = "O"
  }else {
    document.getElementById('box9').innerHTML = "X"
  }
  checkWinX()
  checkWinO()
}

// this.innerHTML doens't work
// total of 8 wins conditions for each letter, total of 16

function checkWinO(){
  if(document.getElementById(boxArray[0]).innerHTML == "O" && document.getElementById(boxArray[1]).innerHTML == "O" && document.getElementById(boxArray[2]).innerHTML == "O"){
    alert('Win')
  }else if (document.getElementById(boxArray[3]).innerHTML == "O" && document.getElementById(boxArray[4]).innerHTML == "O" && document.getElementById(boxArray[5]).innerHTML == "O") {
    alert('Win')
  }else if (document.getElementById(boxArray[6]).innerHTML == "O" && document.getElementById(boxArray[7]).innerHTML == "O" && document.getElementById(boxArray[8]).innerHTML == "O") {
    alert('Win')
  }else if (document.getElementById(boxArray[0]).innerHTML == "O" && document.getElementById(boxArray[4]).innerHTML == "O" && document.getElementById(boxArray[8]).innerHTML == "O") {
    alert('Win')
  }else if (document.getElementById(boxArray[2]).innerHTML == "O" && document.getElementById(boxArray[4]).innerHTML == "O" && document.getElementById(boxArray[6]).innerHTML == "O") {
    alert('Win')
  }else if (document.getElementById(boxArray[0]).innerHTML == "O" && document.getElementById(boxArray[3]).innerHTML == "O" && document.getElementById(boxArray[6]).innerHTML == "O") {
    alert('Win')
  }else if (document.getElementById(boxArray[1]).innerHTML == "O" && document.getElementById(boxArray[4]).innerHTML == "O" && document.getElementById(boxArray[7]).innerHTML == "O") {
    alert('Win')
  }else if (document.getElementById(boxArray[2]).innerHTML == "O" && document.getElementById(boxArray[5]).innerHTML == "O" && document.getElementById(boxArray[8]).innerHTML == "O") {
    alert('Win')
  }
}

function checkWinX(){
  if(document.getElementById(boxArray[0]).innerHTML == "X" && document.getElementById(boxArray[1]).innerHTML == "X" && document.getElementById(boxArray[2]).innerHTML == "X"){
    alert('Win')
  }else if (document.getElementById(boxArray[3]).innerHTML == "X" && document.getElementById(boxArray[4]).innerHTML == "X" && document.getElementById(boxArray[5]).innerHTML == "X") {
    alert('Win')
  }else if (document.getElementById(boxArray[6]).innerHTML == "X" && document.getElementById(boxArray[7]).innerHTML == "X" && document.getElementById(boxArray[8]).innerHTML == "X") {
    alert('Win')
  }else if (document.getElementById(boxArray[0]).innerHTML == "X" && document.getElementById(boxArray[4]).innerHTML == "X" && document.getElementById(boxArray[8]).innerHTML == "X") {
    alert('Win')
  }else if (document.getElementById(boxArray[2]).innerHTML == "X" && document.getElementById(boxArray[4]).innerHTML == "X" && document.getElementById(boxArray[6]).innerHTML == "X") {
    alert('Win')
  }else if (document.getElementById(boxArray[0]).innerHTML == "X" && document.getElementById(boxArray[3]).innerHTML == "X" && document.getElementById(boxArray[6]).innerHTML == "X") {
    alert('Win')
  }else if (document.getElementById(boxArray[1]).innerHTML == "X" && document.getElementById(boxArray[4]).innerHTML == "X" && document.getElementById(boxArray[7]).innerHTML == "X") {
    alert('Win')
  }else if (document.getElementById(boxArray[2]).innerHTML == "X" && document.getElementById(boxArray[5]).innerHTML == "X" && document.getElementById(boxArray[8]).innerHTML == "X") {
    alert('Win')
  }
}

// #notlikethis #sendhelp
