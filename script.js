window.onload = function(){

	var body = document.querySelector('body');

	var a1Id = document.querySelector('#a1');
	var a2Id = document.querySelector('#a2');
	var a3Id = document.querySelector('#a3');
	var b1Id = document.querySelector('#b1');
	var b2Id = document.querySelector('#b2');
	var b3Id = document.querySelector('#b3');
	var c1Id = document.querySelector('#c1');
	var c2Id = document.querySelector('#c2');
	var c3Id = document.querySelector('#c3');
	// variables to access each square by its unique ID


	var all9 = document.querySelectorAll('.sq');
	// variable that returns an array containing all 9 squares 

	var counter = 0;
	//counter set as global variable
	
	var victory = function () {


		 	if (a1Id.innerText == 'x' && a2Id.innerText == 'x' && a3Id.innerText =='x') {
		 		alert('X has won');
		 	}

		 	if (a1Id.innerText == 'o' && a2Id.innerText == 'o' && a3Id.innerText =='0') {
		 		alert('O has won');
		 	}

		 	if (b1Id.innerText == 'x' && b2Id.innerText == 'x' && b3Id.innerText =='x') {
		 		alert('X has won');
		 	}

		 	if (b1Id.innerText == 'o' && b2Id.innerText == 'o' && b3Id.innerText =='o') {
		 		alert('O has won');
		 	}

		 	if (c1Id.innerText == 'x' && c2Id.innerText == 'x' && c3Id.innerText =='x') {
		 		alert('X has won');
		 	}

		 	if (c1Id.innerText == 'o' && c2Id.innerText == 'o' && c3Id.innerText =='o') {
		 		alert('O has won');
		 	}
		 	
		 	if (a1Id.innerText == 'x' && b1Id.innerText == 'x' && c1Id.innerText =='x') {
		 		alert('X has won');
		 	}

		 	if (a1Id.innerText == 'o' && b1Id.innerText == 'o' && c1Id.innerText =='o') {
		 		alert('O has won');
		 	}

		 	if (a2Id.innerText == 'x' && b2Id.innerText == 'x' && c2Id.innerText =='x') {
		 		alert('X has won');
		 	}

		 	if (a2Id.innerText == 'o' && b2Id.innerText == 'o' && c2Id.innerText =='o') {
		 		alert('O has won');
		 	}

		 	if (a3Id.innerText == 'x' && b3Id.innerText == 'x' && c3Id.innerText =='x') {
		 		alert('X has won');
		 	}

		 	if (a3Id.innerText == 'o' && b3Id.innerText == 'o' && c3Id.innerText =='o') {
		 		alert('O has won');
		 	}

		 	if (a1Id.innerText == 'x' && b2Id.innerText == 'x' && c3Id.innerText =='x') {
		 		alert('X has won');
		 	}

		 	if (a1Id.innerText == 'o' && b2Id.innerText == 'o' && c3Id.innerText =='o') {
		 		alert('O has won');
		 	}

		 	if (c1Id.innerText == 'x' && b2Id.innerText == 'x' && a3Id.innerText =='x') {
		 		alert('X has won');
		 	}

		 	if (c1Id.innerText == 'o' && b2Id.innerText == 'o' && a3Id.innerText =='o') {
		 		alert('O has won');
		 	}

		 	// else {
		 	// 	alert('why?')
		 	// }	 		 	

	 }

	 victory();


	 // clickChange = function () {

	 // 	for (var i = 0; i < all9.length; i++) {

	 // 		all9[i].addEventListener('click', function() {

		//  		counter += 1;
		//  		console.log(counter);

		//  		if (counter == 1) {
		//  			all9[i].innerHTML = 'x';
		//  			console.log('x')
						

		//  		}

		//  		else if (counter % 2 == 0) {
		//  			all9[i].innerHTML = '0'
		//  			console.log('o')
						victory()

		//  		}
		 		
		//  		else if (counter % 2 == 1) {
		//  			all9[i].innerHTML = 'x'
		//  			console.log('x')
						victory()

		//  		}
		//  	})	
	 // 	}
	 // }

	 // clickChange();

	var clickABC = function (id) {

	 	id.addEventListener('click', function() {
	 			counter += 1;
		 		console.log(counter);

		 		if (counter == 1) {
		 			id.innerText = 'x';
		 			console.log('x')
		 		}

		 		if (counter % 2 == 0) {
		 			id.innerText = 'o';
		 			console.log('o')
		 			victory()
		 		}
		 		
		 		if (counter % 2 == 1)  {
		 			id.innerText = 'x';
		 			console.log('x')
		 			victory();
		 		}

		 		if (id.innerText == true) {
		 			return;
		 		}
		 		
	 	})	
	 }
	 
	 clickABC(a1Id);
	 clickABC(a2Id);
	 clickABC(a3Id);
	 clickABC(b1Id);
	 clickABC(b2Id);
	 clickABC(b3Id);
	 clickABC(c1Id);
	 clickABC(c2Id);
	 clickABC(c3Id);


















}