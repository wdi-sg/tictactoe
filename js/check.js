var start = document.getElementsByClassName('start');
var container = document.getElementsByClassName('container');
var smallBox = document.getElementsByClassName('smallBox');
var num = 3;
var bigBox;
var play = 0;
var play1 = [];
var play2 = [];



//check for the diagonal left 
var checkDiaL = function (play, i) {
    var count = 0;

    for(var a=0; a<play.length; a++) {
        console.log('checkDiaL');
        if(((play[a]-1)%(num+1))==0) {
            count++;
            console.log(a);
        }
    }

    if(count == num) {
        return true;
    }
}

//check for the diagonal left 
var checkDiaR = function (play, i) {
    var count = 0;

    for(var a=0; a<play.length; a++){
        if(((play[a]-num)%(num-1))==0){
            count ++;
        }
    }

    if(count==num){
        return true;
    }
}

//check for Horizontal Wins!
var checkHori = function (play, i) {
    var count = 0;

    for(var a=0; a<num-1; a++) {
        count += (play[i+a+1] - play[i]);
    }

    if(count = num-1) {
        return true;
    } else {
        return false;
    }
}

//check for Vertical Wins!  
var checkVerti = function (play, i) {
    var count = 0;

    for(var a=0; a<play.length; a++) {
        if((play[a]-play[i])%num == 0) {
            count++;
        }
    }

    if(count == num) {
        return true;
    } else {
        return false;
    }
}


var checkIfWin = function (play) {
    play.sort(function(a, b){return a-b});

    for(var i=0; i<play.length; i++) {
        //check for diagonal starting from left
        if (play[i] == 1) {
            if(checkDiaL(play, i)) {
                return true;
            } else {
                return false;
            }
            console.log('hey');
        }

        //check for diagonal starting from right
        if (play[i] == num) {
            checkDiaR(play, i);
        }
        
        //check for horizontal win
        if ((play[i]-1)%num ==0) {
           checkHori(play, i);
        }
        
        //check for vertical win
        if (play[i] <= num) {
            checkVerti(play, i);
        }
    }
}