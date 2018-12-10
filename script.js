var count = 1;

var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var button4 = document.querySelector('#button4');
var button5 = document.querySelector('#button5');
var button6 = document.querySelector('#button6');
var button7 = document.querySelector('#button7');
var button8 = document.querySelector('#button8');
var button9 = document.querySelector('#button9');

var changeImg = function()
{
  if(count%2 !== 0){
    this.innerHTML = 'X';
    count++;
    playerWinning();
  }else {
      this.innerHTML = 'O';
      count++;
    playerWinning();
  }
   
}


window.onload = function()
{
    for (i=0; i<9; i++)
    {    
    var button = document.querySelectorAll("button")[i];
    button.addEventListener('click', changeImg);
    }
}
var playerWinning = function()
{
    if ((button[0].innerHTML === button[1].innerHTML && button[1].innerHTML === button[2].innerHTML)||
    (button[0].innerHTML === button[1].innerHTML && button[1].innerHTML === button[2].innerHTML) ||
    (button[0].innerHTML === button[1].innerHTML && button[1].innerHTML === button[2].innerHTML) ||
    (button[0].innerHTML === button[1].innerHTML && button[1].innerHTML === button[2].innerHTML) ||
    (button[0].innerHTML === button[1].innerHTML && button[1].innerHTML === button[2].innerHTML) ||
    (button[0].innerHTML === button[1].innerHTML && button[1].innerHTML === button[2].innerHTML) ||
    (button[0].innerHTML === button[1].innerHTML && button[1].innerHTML === button[2].innerHTML) ||

    )
    {
       
        alert("Player has won the game"); 
    } else
    {
        alert("Player has lost the game"); 
    }   
    








