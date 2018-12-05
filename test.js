var links = [];

for (var timmy=0; timmy<5; timmy++) {

  links.push( document.createElement("a") );

}

links.forEach(function(link, i){

  link.innerHTML = "Link " + i;

  console.log(i);
  link.addEventListener('click', function () {
    alert(i);
  });

  document.body.appendChild(link);
});

console.log(i);