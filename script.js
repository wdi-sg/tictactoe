console.log('Hello ticTacToe');

//initialize prior state, and game-board start state
var previousItemValue = "";
var arr_game =  [
  [ "Z", "Z", "Z" ],
  [ "Z", "Z", "Z" ],
  [ "Z", "Z", "Z" ]
];


 for (var i=0; i<3; i++)
 {
    var div_row = document.createElement('div')
    var item_label= "";
    for(var j=0; j<3; j++)
    {
        item_label  += '<input type="label" class="row-item" id="'+ i +''+ j +'" onClick="bindData(event.target)" value="" class="item" />';
    }
    div_row.innerHTML = item_label;
    document.getElementById('board').appendChild(div_row);
 }


 function bindData(item) {

    if(item.value == "")
    {
    item.value = getXOrO();
    var row_index = item.id.split("");
    arr_game[row_index[0]][row_index[1]] = item.value;
    finalResult();
    }
 }


function finalResult()
{
     var gameresult = 0;
     //check row
    gameresult = calculateResult(arr_game);
    if (gameresult == 0)
    {
        //check column
        gameresult = calculateResult(transpose(arr_game));
    }
    if (gameresult == 0)
    {
        // check diagonal
        gameresult = calculateDiagionalResult(arr_game);

    }
    if (gameresult == 1)
    {
        setTimeout(clearBoard(),10000)
        showButton();
        alert("Win Game");
    }

}
function clearBoard()
{
    arr_game = [
  [ "Z", "Z", "Z" ],
  [ "Z", "Z", "Z" ],
  [ "Z", "Z", "Z" ]
];
previousItemValue = "";
   var all_label = document.getElementById("board").querySelectorAll(".row-item");
   for (var i=0; i<all_label.length; i++)
   {
        all_label[i].value ="";
   }
}

function calculateDiagionalResult(items_arr)
{
    var temp_set_lr = new Set([items_arr[0][0], items_arr[1][1], items_arr[2][2]]);
    var temp_set_rl = new Set([items_arr[0][2], items_arr[1][1], items_arr[2][0]]);
    if ((temp_set_rl.size == 1 && Array.from(temp_set_rl)[0] !="Z")
        || (temp_set_lr.size == 1 && Array.from(temp_set_lr)[0] !="Z"))
        return 1;
    else
        return 0;

}
function calculateResult(items_arr)
{
    var gameresult = 0;
    for(var i=0; i<3; i++)
    {
        var row = new Set(items_arr[i]);
        if (row.size == 1 && Array.from(row)[0] !="Z")
        {
            gameresult = 1;
        }
    }
   return gameresult;
}

function getXOrO()
{
    if (previousItemValue == "")
    {
        previousItemValue = "X";
    }
    else
    {
        previousItemValue = previousItemValue === "X" ? "O" : "X";
    }
    return previousItemValue;
}

function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

function hideButton()
{
    var element_button = document.getElementById('btnstart').style.visibility='hidden';
}
function showButton()
{
    var element_button = document.getElementById('btnstart').style.visibility='visible';
}