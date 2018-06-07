var rowsNcols = document.getElementsByClassName('rowsNcols');
var spanXnO = document.getElementsByTagName('span');
var rowOne = document.getElementsByClassName('row1');
var rowTwo = document.getElementsByClassName('row2');
var rowThree = document.getElementsByClassName('row3');

var turnToX0 = function(){
	spanXnO[0].style.display = "inline-block";
}
var turnToO0 = function(){
	spanXnO[0].style.display = "inline-block";
}
rowsNcols[0].addEventListener('click', turnToX0);
rowsNcols[0].addEventListener('dblclick', turnToO0);
	

var turnToX1 = function(){
	spanXnO[1].style.display = "inline-block";
}
var turnToO1 = function(){
	spanXnO[1].style.display = "inline-block";
}
rowsNcols[1].addEventListener('click', turnToX1);
rowsNcols[1].addEventListener('dblclick', turnToO1);


var turnToX = function(){
	spanXnO[2].style.display = "inline-block";
}
var turnToO = function(){
	spanXnO[2].style.display = "inline-block";
}
rowsNcols[2].addEventListener('click', turnToX);
rowsNcols[2].addEventListener('dblclick', turnToO);


var turnToX = function(){
	spanXnO[3].style.display = "inline-block";
}
var turnToO = function(){
	spanXnO[3].style.display = "inline-block";
}
rowsNcols[3].addEventListener('click', turnToX);
rowsNcols[3].addEventListener('dblclick', turnToO);


var turnToX = function(){
	spanXnO[4].style.display = "inline-block";
}
var turnToO = function(){
	spanXnO[4].style.display = "inline-block";
}
rowsNcols[4].addEventListener('click', turnToX);
rowsNcols[4].addEventListener('dblclick', turnToO);


var turnToX = function(){
	spanXnO[5].style.display = "inline-block";
}
var turnToO = function(){
	spanXnO[5].style.display = "inline-block";
}
rowsNcols[5].addEventListener('click', turnToX);
rowsNcols[5].addEventListener('dblclick', turnToO);


var turnToX = function(){
	spanXnO[6].style.display = "inline-block";
}
var turnToO = function(){
	spanXnO[6].style.display = "inline-block";
}
rowsNcols[6].addEventListener('click', turnToX);
rowsNcols[6].addEventListener('dblclick', turnToO);


var turnToX = function(){
	spanXnO[7].style.display = "inline-block";
}
var turnToO = function(){
	spanXnO[7].style.display = "inline-block";
}
rowsNcols[7].addEventListener('click', turnToX);
rowsNcols[7].addEventListener('dblclick', turnToO);


var turnToX = function(){
	spanXnO[8].style.display = "inline-block";
}
var turnToO = function(){
	spanXnO[8].style.display = "inline-block";
}
rowsNcols[8].addEventListener('click', turnToX);
rowsNcols[8].addEventListener('dblclick', turnToO);
// for(var i = 0; i < rowOne.length; i++ ){
// 	var x = document.createElement('button');
// 	x.textContent = "X";
// 	var o = document.createElement('button');
// 	o.textContent = "O";
// 	rowOne[i].appendChild(x);
// 	rowOne[i].appendChild(o);
// 	}

// for(var i = 0; i <rowTwo.length; i++){
// 	var x = document.createElement('button');
// 	x.textContent = "X";
// 	var o = document.createElement('button');
// 	o.textContent = "O";
// 	rowTwo[i].appendChild(x);
// 	rowTwo[i].appendChild(o);
// }

// for(var i = 0; i <rowTwo.length; i++){
// 	var x = document.createElement('button');
// 	x.textContent = "X";
// 	var o = document.createElement('button');
// 	o.textContent = "O";
// 	rowThree[i].appendChild(x);
// 	rowThree[i].appendChild(o);
// }