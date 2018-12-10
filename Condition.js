var playerWinning = function()
{
    if ((button[0].innerHTML === button[1].innerHTML) && (button[0].innerHTML === button[2].innerHTML))
    {
        alert("Player has won the game"); 
    }
    else {
        alert("Player has lost the game");
    }
    
    // if (button[0].innerHTML === 'O' && button[1].innerHTML === 'O' && button[2].innerHTML === 'O')
    // {
    //     alert("Player has won the game");
    // }
    // else if (button[4].innerHTML === 'X' && button[5].innerHTML === 'X' && button[6].innerHTML === 'X')
    // {
    //     alert("Player has won the game");
    // }
    // else if (button[4].innerHTML === 'O' && button[5].innerHTML === 'O' && button[6].innerHTML === 'O')
    // {
    //     alert("Player has won the game");
    // }
    // else if (button[4].innerHTML === 'O' && button[5].innerHTML === 'O' && button[6].innerHTML === 'O')
    // {
    //     alert("Player has won the game");
    // }
    
}