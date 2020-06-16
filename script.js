document.querySelector("#input").addEventListener("change", function (event) {
	//from input box, listen for change
	var currentInput = event.target.value;
	inputHappened(currentInput); //run input function
});
//--------------------------------------------------------- input Function

function inputHappened(currentInput) {
	var xxx = currentInput.toLowerCase(); // change input to lowercase
	if (xxx == "remove") {
		return clear();
	} else {
		display(inputChecker(currentInput));
	}
}
//---------------------------------------------------------------clear Function
function clear() {
	document.querySelector("#output").innerHTML = "";
}
// ---------------------------------------------------------------// clear specific line - but not working
function clearspe(num) {
	var hihi = document.querySelectorAll("#output p");
	hihi[num - 1].remove();
}
//----------------------------------------------------------------------DDOM
function display(stuffToDisplay) {
	// your DOM manipulation code here
	//   for(var i=0 ; i<xx; i++ ){}
	var pee = document.createElement("p"); //create single row <p></p>
	pee.innerHTML = pineapplePen(stuffToDisplay); // show number of pineapples between <p></p>
	document.querySelector("#output").appendChild(pee);
}
//---------------------------------------------------------show input using display Function

function inputChecker(input) {
	if (isNaN(input)) {
		//show error if not a number.
		return "Please input a number";
	} else {
		var tempNumber = parseInt(input); //set error if not a number.
		return tempNumber;
	}
}
//------------------------------------------------------------show input using display Function
var pineapplePen = function (num) {
	var pineApples = "🍍";
	return pineApples.repeat(num); // continue/repeat printing
};