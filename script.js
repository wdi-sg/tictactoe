var body=document.querySelector("body");
var bigBox= document.createElement("div");
bigBox.setAttribute("id", "big");
body.appendChild(bigBox);
bigBox.style.width="500px";
bigBox.style.height="400px";
// bigBox.style.border="5px solid black";
// bigBox.style.display="none";
// bigBox.style.border="none";
bigBox.style.margin="0 auto";


// var smallBox1= document.createElement("div")
// smallBox1.setAttribute("class","small")
// smallBox1.style.height="100px";
// smallBox1.style.width="100px";
// smallBox1.style.borderRight="5px solid black";
// smallBox1.style.borderBottom="5px solid black";
// smallBox1.style.
// bigBox.appendChild(smallBox1);

// var smallBox2= document.createElement("div")
// smallBox2.setAttribute("class","small")
// smallBox2.style.height="100px";
// smallBox2.style.width="100px";
// smallBox2.style.borderRight="5px solid black";
// smallBox2.style.borderBottom="5px solid black";
// bigBox.appendChild(smallBox2);

// var smallBox3= document.createElement("div")
// smallBox3.setAttribute("class","small")
// smallBox3.style.height="90px";
// smallBox3.style.width="100px";
// smallBox3.style.borderRight="5px solid black";
// bigBox.appendChild(smallBox3);

// var smallBox4= document.createElement("div")
// smallBox4.setAttribute("class","small")
// smallBox4.style.height="100px";
// smallBox4.style.width="100px";
// smallBox4.style.borderRight="5px solid black";
// smallBox4.style.borderBottom="5px solid black";
// smallBox4.style.position="absolute";
// bigBox.appendChild(smallBox4);
// var body=document.querySelector("body");
// var bigBox= document.createElement('div');
// body.appendChild(bigBox);
// bigBox.style.width="330px";
// bigBox.style.height="300px";
// bigBox.style.border= "5px solid black";
// bigBox.style.margin="0 auto";


var createBox=function(id,className){
	var result =document.createElement('div');
	result.style.width='150px';
	result.style.height='140px';
	result.style.border= "5px solid black";
	result.style.display="inline-block";
	result.style.marginBottom="-4px";
	// result.style.backgroundImage="url(X.png)";
	result.id=id;
	result.className= className;
	bigBox.appendChild(result);
	return result;

}
var boxclassName='smallBoxes';
var allMyBoxes=[
createBox('a1',boxclassName),
createBox('a2',boxclassName),
createBox('a3',boxclassName),
createBox('b1',boxclassName),
createBox('b2',boxclassName),
createBox('b3',boxclassName),
createBox('c1',boxclassName),
createBox('c2',boxclassName),
createBox('c3',boxclassName)
]

//Change image of each box
var a1= document.querySelector("#a1");
a1.style.borderRight="none";
a1.style.borderLeft="none";
a1.style.borderTop="none";

var a2=document.querySelector("#a2")
a2.style.borderRight="none";
a2.style.borderTop="none";

var a3=document.querySelector("#a3")
a3.style.borderTop="none";
a3.style.borderRight="none";

var b1=document.querySelector("#b1")
b1.style.borderRight="none";
b1.style.borderLeft="none";


var b2=document.querySelector("#b2")
b2.style.borderRight="none";


var b3=document.querySelector("#b3")
b3.style.borderRight="none";


var c1=document.querySelector("#c1")
c1.style.borderRight="none";
c1.style.borderLeft="none";
c1.style.borderBottom="none";


var c2=document.querySelector("#c2")
c2.style.borderRight="none";
c2.style.borderBottom="none";


var c3=document.querySelector("#c3")
c3.style.borderRight="none";
c3.style.borderBottom="none";

var clickX =function(){
allMyBoxes.forEach(function(element){
	element.addEventListener("click",displayX)
})
}
var clickO=function(){
	allMyBoxes.forEach(function(element){
	element.addEventListener("click",displayO)
})
}
var displayX=function(){
	this.style.backgroundImage = "url('X.png')";
	clickO();

	// checkWin(this.id);
	// check();
	// displayO();//oppnents id 
	//remove current array
}

var displayO=function(){
	this.style.backgroundImage="url(O.png)";
	clickX();
	// checkWin(this.id);
}

var Xbutton= document.querySelector("#submitX")
var Obutton= document.querySelector("#submitO")
Xbutton.addEventListener("click", clickX);
Obutton.addEventListener("click", clickO);


var checkWin=function(id){
if(id == a1 && id == b1 && id== c1)
{
	alert("you won")
}
else if (id == b1 && id ==b2 && id==b3)
	{
		alert("You won!");	
	}
else if (id == c1 && id ==c2 && id==c3)
		{
			alert("You won!");
		}
else if (id == a1 && id ==b1 && id==c1)
			{
				alert("You won!");
			}
else if (id == a2 && id ==b2 && id==c2)
				{
					alert("You won!");
				}
else if (id == a3 && id ==b3 && id==c3)
					{
						alert("You won!");
					}
else if (id == a1 && id ==b2 && id==c3)
						{
							alert("You won!");
						}
else if (id == c1 && id ==b2 && id==a3)
							{
						
								alert("You won!");
							}
else
{
	alert("error");
}
}


//create another function to store id and then display

//how to return i;

// //answer in phone and also the setlink function;

// allMyBoxes[i].forEach(function(allMyBox,i){

// allMyBox.addEventListener("click",displayX);
// //how to return i;
// }

// oppponent=Math.floor(Math.random()*9-1)
// displayO[opponenet]
// 4 ways to checkWinStates
// var check=function(){
// if(id == a1 && id ==a2 && id==a3)
// {
// 	alert("You won!");
// }
//Hard-coded way
// var function= checkWin(){
// else if (id == b1 && id ==b2 && id==b3)
// 	{
// 		alert("You won!");	
// 	}
// else if (id == c1 && id ==c2 && id==c3)
// 		{
// 			alert("You won!");
// 		}
// else if (id == a1 && id ==b1 && id==c1)
// 			{
// 				alert("You won!");
// 			}
// else if (id == a2 && id ==b2 && id==c2)
// 				{
// 					alert("You won!");
// 				}
// else if (id == a3 && id ==b3 && id==c3)
// 					{
// 						alert("You won!");
// 					}
// else if (id == a1 && id ==b2 && id==c3)
// 						{
// 							alert("You won!");
// 						}
// else if (id == c1 && id ==b2 && id==a3)
// 							{
						
// 								alert("You won!");
// 							}
// else{

// 	checkEmpty();//check whether all spaces filled up and then return you lost;
// }
// }
// }

// window.onload=function(){

// 	// what to do when we recieve the request
// var responseHandler = function() {
//   console.log("response text", this.responseText);
//   console.log("status text", this.statusText);
//   console.log("status code", this.status);
// };

// var doSubmit = function(event)
// { 
// 	var input = document.querySelector('#url');
// 	 var url = input.value; };

// // make a new request
// var request = new XMLHttpRequest();

// // listen for the request response
// request.addEventListener("load", responseHandler);

// // ready the system by calling open, and specifying the url
// request.open("GET", "https://swapi.co/api/people/1");
// // send the request
// request.send();
// var responseHandler = function() {
//   console.log("response text", this.responseText);
//   var response = JSON.parse( this.responseText );
//   console.log( response );
// };

// var requestFailed = function(){
//   console.log("response text", this.responseText);
//   console.log("status text", this.statusText);
//   console.log("status code", this.status);
// }
// request.addEventListener("error", requestFailed);
// document.querySelector('#submit').addEventListener('click', doSubmit);
// }
// // request.addEventListener("error", requestFailed);
// // intit()

// // }
