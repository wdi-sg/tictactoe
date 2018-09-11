# tictactoe
![https://media.giphy.com/media/l1Et6k00qp9fMTP8s/giphy.gif](https://media.giphy.com/media/l1Et6k00qp9fMTP8s/giphy.gif)
Build a game of tic tac toe.

Unless you are very comfortable, build and test the game by running it in small parts, step by step starting from the beginning.

### Setup
- create an `index.html`.
- create a `script.js` file.

### Create a working game
- create a very simple version of the game that users can play. When a user clicks on the first the empty square it turns to an X. Then the turn after it turns to an O. Then switches back, etc. 
- The simplest implementation of this game is simply 9 buttons or divs with click events attached to each of them. Clicking on a square just changes the text of the element to X or O. After 9 moves are played the game doesn't do anything else. If the users want to continue playing they can refresh the page.
- The first version of the game can just be a grid - no need to create the tictactoe board faithfully.
- When the user clicks each button it sets a global variable that holds the current player. (starts as nothing, is x after the first turn, then switches between players)

### Detecting a win state
- modify your game so that the game knows when one player has won or lost
- Use either of the following techniques to detect the win state
  - the easiest win state is to simply check for every hard coded possibility
  - more difficult: counting if there are three of any player's moves in a row / column / diagonal

### Further
- have a start game button that disappears when the game is started
- have the button reappear when the game has ended

### Further
- ask for the names of players 1 and 2 and display that back to them as they play and win

### Further
- let the player choose their symbol

### Even Further - Dynamic Board
- Ask the user in the beginning on the game how large of a board they want.
- Ask them how many in a row they want to qualify as a win
- Detect the win state

### Even Further!!!11!! - Computer Player
- ask the player if they want to play against the computer
- make the computer play by randomly picking a spot on the board
- modify the computer player to be defensive and block the human player from winning
- modify the computer player to be offensive and try to win the game
