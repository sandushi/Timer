var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");
var msg = document.getElementById("msg");

//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    msg.value = "You can set a time"
    document.getElementById("msg").style. backgroundColor = '#88B169';
    //stop the timer after pressing "reset"
    stopInterval()
})

function timer(){
    msg.value = "You can continue";
    document.getElementById("msg").style.backgroundColor = 'green';

    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value--;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    else{

    }

    if(m.value==0 && s.value < 10 && s.value > 0){
        msg.value = "You have less than 10s";
        document.getElementById("msg").style.backgroundColor = 'orange';
    }
     if(m.value==0 && (s.value < 0|| s.value==0)){
        msg.value = "You exceed your time";
        document.getElementById("msg").style.backgroundColor = 'red';
    }
  
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}
