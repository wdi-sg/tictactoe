var toggleBoxes = document.getElementsByClassName("toggleBox")

var player = 0
var board = []
var moves = 0
var over = 0

//init board 2d array
for (var i = 0; i < 3; i++) {
        board.push([-1])
        for (var j = 0; j < 3; j++) {
            board[i][j] = -1;
        }
    }

document.getElementById("output").innerText = "Player " + (player == 0 ? "O" : "X") + " turn."

for(var i = 0; i<toggleBoxes.length; i++){
    toggleBoxes[i].addEventListener('click',function(event){
        var toggleBox = event.srcElement
        var toggleBoxId = parseInt(toggleBox.id)

        //union to round down decimal
        var row = toggleBoxId / 3 | 0
        //modulus to get remainder
        var col = toggleBoxId % 3

        //check end game
        if (moves == 9 || over == 1){
            return
        }

        //prevent invalid repeated clicks
        if (board[row][col] != -1){
            console.log("Invalid click")
            return
        }

        moves++

        //set input
        board[row][col] = player
        //set visual output
        toggleBox.value = player == 0 ? "O" : "X"

        //check win conditions
        //horizontal
        for(var x = 0; x<3; x++){
            if (board[row][x] != player){
                break
            }

            if (x == 2){
                document.getElementById("output").innerText = "Player " + (player == 0 ? "O" : "X") + " wins."
                over = 1
                return
            }
        }

        //check vertical
        for(var x = 0; x<3; x++){
            if (board[x][col] != player){
                break
            }

            if (x == 2){
                document.getElementById("output").innerText = "Player " + (player == 0 ? "O" : "X") + " wins."
                over = 1
                return
            }
        }

        //check diagonal
        if (row == col){
            for(var x = 0; x < 3; x++){
                if(board[x][x] != player) {
                    break;
                }

                if(x == 2){
                    document.getElementById("output").innerText = "Player " + (player == 0 ? "O" : "X") + " wins."
                    over = 1
                    return
                }
            }
        }

        //check anti diagonal
        if (row + col == 2){
            for(var x = 0; x < 3; x++){
                if(board[x][(2)-x] != player) {
                    break;
                }
                if(x == 2){
                    document.getElementById("output").innerText = "Player " + (player == 0 ? "O" : "X") + " wins."
                    over = 1
                    return
                }
            }
        }

        //check draw
        if (moves == 9){
            console.log("draw")
            document.getElementById("output").innerText = "No moves left - Draw."
            return
        }

        //switch player
        player = 1 - player
        document.getElementById("output").innerText = "Player " + (player == 0 ? "O" : "X") + " turn."
    })
}
