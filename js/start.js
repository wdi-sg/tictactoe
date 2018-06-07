function everything () {

    function setup () {
        bigBox = document.createElement('div');
        bigBox.classList.add('bigBox');

        for (var i = 1; i <= num*num; i++) {
            var smallBox = document.createElement('div');
            smallBox.classList.add('smallBox');
            smallBox.id = i;
            var boxSize = (600-6) / 3;

            smallBox.style.width = boxSize;
            smallBox.style.height = boxSize; 
            smallBox.style.display = "inline-block"; 

            smallBox.addEventListener('click', function () {
                console.log('click event listener');
                if(play%2 == 0) {
                    console.log('player1');
                    player1(event.target.id);
                    play++;
                } else if (play%2 != 0) {
                    console.log('player2');
                    player2(event.target.id);
                    play++;
                }
            })


            bigBox.appendChild(smallBox);
        }

        start[0].parentNode.removeChild(start[0]);
        container[0].appendChild(bigBox);
    }

    start[0].addEventListener('click', setup);
    console.log('start');
}

window.onload = everything;