# tictactoe
![https://media.giphy.com/media/l1Et6k00qp9fMTP8s/giphy.gif](https://media.giphy.com/media/l1Et6k00qp9fMTP8s/giphy.gif)

#### Build a game of tic tac toe.

Unless you are very comfortable, build and test the game by running it in the smallest possible parts, step by step starting from the beginning.

Build the CSS for your game as you go along.

### Setup
- create an `index.html`.
- create a `script.js` file.

### Create a working game
- create a very simple version of the game that users can play. When a user clicks on the first the empty square it turns to an X. Then the turn after it turns to an O. Then switches back, etc. 

- The simplest implementation of this game is simply 9 buttons or divs with click events attached to each of them. Clicking on a square just changes the text of the element to X or O. After 9 moves are played the game doesn't do anything else. If the users want to continue playing they can refresh the page.

- The first version of the game can just be a grid - no need to create the tictactoe board faithfully.

- When the user clicks each button it sets a global variable that holds the current player. (starts as a null value when the game loads, is x after the first turn, then switches between players)


```
if player turn is null or player turn is o
  player turn is x
else
  player turn is o
```

- The first version of the game you can simply start with the elements already in the HTML file.

One version of the game board could be:

```html
<div id="board">
  <div class="game-row">
    <span class="game-square"></span><span class="game-square"></span><span class="game-square"></span>
  </div>
  <div class="game-row">
    <span class="game-square"></span><span class="game-square"></span><span class="game-square"></span>
  </div>
  <div class="game-row">
    <span class="game-square"></span><span class="game-square"></span><span class="game-square"></span>
  </div>
</div>
```

##### Second Version
Using DOM manipluation (`document.createElement`), create the game board using javascript. (i.e., the game starts with no elements in the body of the HTML file) 

### further

##### Detecting a win state
- modify your game so that the game knows when one player has won or lost

- notify the users when that happens
- Use either of the following techniques to detect the win state
  - the easiest win state is to simply check for every hard coded possibility
  - more difficult: counting if there are three of any player's moves in a row / column / diagonal

- you should keep track of the state of the game board in a javascript variable

One way to represent the state of the board as data in javascript could be:

```js
var board = [
  [ null, null, "O" ],
  [ null, null, "O" ],
  [ null, "O", null ]
];
```

Or:
```js
var board = {
  top: [null,"X",null],
  middle: [null,null,null],
  bottom: ["O","X","O"]

};
```

Use and modify this data structure as the users play.

Use this data structure to see if one player or the other has the correct values in the correct squares for a "win".


### Further
- have a start game button that disappears when the game is started
- have the button reappear when the game has ended

### Further
- ask for the names of players 1 and 2 and display that back to them as they play and win

### Further
- keep score of the players wins and losses

### Further
- let the player choose their symbol

### Further
- When one player wins, show them a congratulations screen / animation. Randomize this for every win.

### Further
- Set a time limit for each move. Player loses if they don't make a move.

### Further
- Set a time limit for each move. When the player goes above the time limit, make a random move for them.

### Further
- Use CSS animation to animate filling the board.

### Further - Dynamic Board
- Ask the user in the beginning on the game how large of a board they want.
- Ask them how many in a row they want to qualify as a win
- Detect the win state

### Further!!!11!! - Computer Player
This can be implemented in several steps of mounting difficulty:
1. make the computer play by randomly picking a spot on the board
1. modify the computer player to be defensive and block the human player from winning
1. modify the computer player to be offensive and try to win the game

### Further - A New Game
Refactor your code so that players can choose to play a second game- connect four.
Re-use the code that keeps track of players, lets them choose board size and keeps track of win state. 
Write new code that implements the connect four game.
