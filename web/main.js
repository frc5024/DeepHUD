function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  
  // convert to 12h time
  if(h > 12){
  	h -= 12;
  }
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}

// show the motd
// change this to display a message or reminder for the drivers
document.getElementById('motd').innerHTML = "Beta 1";

// start the timer
startTime();