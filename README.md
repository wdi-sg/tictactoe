# tictactoe
![https://media.giphy.com/media/l1Et6k00qp9fMTP8s/giphy.gif](https://media.giphy.com/media/l1Et6k00qp9fMTP8s/giphy.gif)

## My Strategy
* Use html:5 to draw tic tac toe lines, circles, and crosses.
* Use x, y coordinates within canvas to set game board in constant time and for scalability.
  * Game board can be virtually set via using only 2 functions (getCoords, getKey)
    * Steps taken to do this
      1. Get or set max width and height of drawing board
          * In this case, use the window.innerWidth and window.innerHeight, and then minus off the desire paddings.
      2. Get desired tile size
          * Since 1 game board has 3 tiles, each tile size can be derived by taking the board width or height and dividing it by the number of tiles.
          * This will give me a properly proportioned tile shape.
      3. Set the actual game board by using the derived tile size and multiplying it by the number of desired tiles.
          * Default is 3, but can be more by keying the number of times to expand in the input tag.
      4. Once the actual game board for row (total number of tiles horizontally) and height (total number of tiles vertically) have been derived
          * The x1, y1 (0, 0) and x2, y2 (game board width, game board height) coordinates will be avaliable.
          * By referencing to the number of tiles (default 3) for each row, the first tile can be recognized as key 0, and the next as key 1, and so on ...
            * This behavior is similar to the indexes of an array.
          * Upon reaching to the end of the row, the next tile will be the first tile in the next row.
            * This means that the direction starts from the top left position and then move towards the right.
            * Once having reached the last tile for that row, reset the position to the left and move down by 1 tile.
            * Then move right again.
          * This will give you a virtual grid without having to write any lines of code.
            ```
            | 0 | 1 | 2 |
            | 3 | 4 | 5 |
            | 6 | 7 | 8 |
            ```
          * The value of 0 to 8 will be your keys or id for identifying that tile.
      5. With these set of information available, by using the getCoords or getKey function, it will be possible to find the position of each tile.
        * getCoords will use the key to find the top left x, y coordinates of the tile
          * Once you know the top left coordinates, by adding the tilesize to the coordinates, you will know the bottown right coordinates, which gives you the area of that tile.
          * This will then allow the manipulation of the tile.
            * Such as drawing images (circle, cross, etc), adding  event listeners,  etc.
          * To make this more dynamic, a separate array can be declared to save or reference any data by making use of the array index in accordance with the virtual grid.
        * Similarly to the getCoords, the key of the tile can be identified with either the top left coordinates or the bottom right coordinates of the tile by using the getKey function.
          * By default the getKey function will use the top left coordinates to calculate the key.
            * Therefore, if only the bottom right coordinates are available, simply take the value of the each coordinate and have it minus the tile size to get the top left coordinates value.
* Use regex to set and check winning condiitons.
  * Since this concept is completely virtual, a separate array or object will be required to be declared if some sort of logic is to be applied.
    * Such as assigning a "X" string to the index of an array with the tile key as the index.
      * In order to achieve such dynamic reassignment of values to the desired index, an empty dynamic array has to be created.
        * This is done via the following.
          > const myArray = new Array(lastKey).fill("-");
        * The lastKey is a variable to allow scalability.
          * This value can be easily retrieved by using the getKey method as explained in the above.
        * The .fill method, although not neccessary, will be required if regex is to be applied later.
  * In this particular case, to determine the winner between players or with the computer, a comparison logic have to be derived.
  * With the brute force method, this can be done via the if else statement, however, this will not be scalable and is impractical, due to to sheer amount of code to be written, let alone if this is scaled.
  * Therefore to solve this problem, regex can be used to search for the desired winning patterns from the list of played moves.
    * Since an array has been declared as explained in the above, this can then be joined to a single string via the following.
      > const myString = myArray.join("");
    * This goes back to the part where .fill("-") was used to fill each element of the array with a "-".
      * The reason for doing this as opposed to an empty element is to allow the string to accurately display the full array value.
        * If an empty element is used, this will not be reflected in the string after joining the elements together.
          * This may cause problems and accuracy issues when determining the winner.

## Things to improve on
* Update regex to enable checking of winning conditions for any situation and board size (currently hard coded).
* Implement AI with minimax algorithm



## Instructions provided to me
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
